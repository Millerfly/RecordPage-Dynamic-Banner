/**
 * @description       : 
 * @author            : miller_james@bah.com
 * @group             : 
 * @last modified on  : 07-18-2023
 * @last modified by  : miller_james@bah.com
**/
import { LightningElement, track, api } from 'lwc';

export default class RecordPage_Dynamic_Banner extends LightningElement {
    @api bannerType;
    @api assistiveText;
    @api message;
    @api icon;
    @api iconDescription;

    @track success = false;
    @track info = false;
    @track warning = false;
    @track error = false;

    renderedCallback() {
        let type = this.bannerType;

        if ( type != null ) {
            if ( type.toLowerCase() == 'success' ) {
                this.success = true;
                return this.success;
            } else if ( type.toLowerCase() == 'warning' ) {
                this.warning = true;
                return this.warning;
            } else if ( type.toLowerCase() == 'error' ) {
                this.error = true;
                return this.error;
            } else {
                this.info = true;
            } 
        } else {
            this.info = true;
        } 
        
    }
}