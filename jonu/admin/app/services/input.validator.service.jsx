import React from 'react';
import axios from 'axios';

class InputValidatorService {
    constructor() {
    }

    validateEmail(text) {

        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!re.test(text) || text.length > 100) {
            return false;
        }

        return true;
    }

    validateOnlyText(text, minLength, maxLength) {
        text = text.trim();
        if (text == "") {
            return false;
        }

        if (text.length > maxLength || text.length < minLength) {
            return false;
        }

        text = text.toLowerCase();

        if (!/^[a-z A-Z]*$/g.test(text)) {
            return false;
        }
        return true;
    }

    validateVarChar(text) {
        return true;
    }

    validatePassword(text) {
        if (text.length < 6) {
            return false;
        }
        return true;
    }
}

export default (new InputValidatorService());