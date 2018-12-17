/**
 * Created by Amanda on 8/17/2015.
 */

(function() {

    var FormValidation = {
        init: function() {
            this.settings();
            this.bindEvents();
        },
        settings: function() {
            this.$form = $('#survey-form');
            this.$name = $('#name');
            this.$email = $('#email');
            this.$feedback = $('#feedback');
            this.$visited = $('#q-visited').find('.checkbox-group');
            this.$submit = $('#submit');
            this.$submittedFormData = $('#submittedFormData');
        },
        bindEvents: function() {
            this.$name.on('input', this.validateName.bind(this));
            this.$email.on('input', this.validateEmail.bind(this));
            this.$feedback.on('input', this.validateFeedback.bind(this));
            this.$visited.click(this.showHiddenQuestions.bind(this));
            this.$submit.click(this.checkErrorsOnSubmit.bind(this));
        },
        validateName: function() {
            if (this.$name.val()) {
                this.$name.removeClass('invalid').addClass('valid');
                this.$name.parent().find('.error').addClass('hide-error');
            } else {
                this.$name.removeClass('valid').addClass('invalid');
            }
        },
        validateEmail: function() {
            var regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
            if (regexp.test(this.$email.val())) {
                this.$email.removeClass('invalid').addClass('valid');
                this.$email.parent().find('.error').addClass('hide-error');
            } else {
                this.$email.removeClass('valid').addClass('invalid');
            }
        },
        validateFeedback: function() {
            if (this.$feedback.val()) {
                this.$feedback.removeClass('invalid').addClass('valid');
                this.$feedback.parent().find('.error').addClass('hide-error');
            } else {
                this.$feedback.removeClass('valid').addClass('invalid');
            }
        },
        showHiddenQuestions: function(e) {
            var $target = $(e.target);
            if ($target[0].id === 'checkbox-home') {
                $('#q-home').fadeToggle();
            } else if ($target[0].id === 'checkbox-about') {
                $('#q-about').fadeToggle();
            } else if ($target[0].id === 'checkbox-gallery') {
                $('#q-gallery').fadeToggle();
            } else if ($target[0].id === 'checkbox-contact') {
                $('#q-contact').fadeToggle();
            }
        },
        checkErrorsOnSubmit: function(e) {
            var formData = this.$form.serializeArray();
            var errorFree = true;

            for (var i = 0; i < formData.length; i++) {
                var $element = $('#'+formData[i]['name']);
                var $error = $($element.parent().find('.error'));
                if (!$element.hasClass('valid')) {
                    $error.removeClass('hide-error');
                    $element.addClass('invalid');
                    errorFree = false;
                } else {
                    $error.addClass('hide-error');
                }
            }
            if (errorFree == true) {

                this.$submittedFormData.append(
                    "<h4>Sänd data</h4><br />" +
                    "Namn: " + this.$name.val() + "<br />" +
                    "E-mail: " + this.$email.val() + "<br />" +
                    "Feedback: " + this.$feedback.val()
                );
            }
        }
    };

    FormValidation.init();

})();
