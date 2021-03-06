import fetch from './fetch';

export default class Recording {
  constructor(data, token) {
    this.data = data;
    this.id = data.id;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.start_date = data.starts_at.substring(0,data.starts_at.indexOf('T'));
    this.token = token;
  }

  isRecorded() {
    return this.data.recorded;
  }

  async download() {
    let quality = 'hd';
    let match = this.data.files.filter(i => i.quality === quality);
    if (! match.length) {
      quality = 'hq';
      match = this.data.files.filter(i => i.quality === quality);
    }
    const { file } = match[0];
    return fetch(file, { token: this.token }).then(res => res.body);
  }
}
