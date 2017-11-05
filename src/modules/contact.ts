import {Config, ConfigFactory} from '../singletons/config'
export class Contact {
    public text : string;
    public config: Config;
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.text = config.contactText;
        });
    }
}