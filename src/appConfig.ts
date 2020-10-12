export class AppConfig {
  static env: 'local' | 'prod' = process.env.REACT_APP_ENV as 'local' | 'prod';
  static get host() {
    switch (this.env) {
      case 'local':
        return 'http://localhost:3803';
      case 'prod':
        return 'https://api.dested.com';
    }
  }
}
