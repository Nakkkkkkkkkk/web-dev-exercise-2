document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("animeForm");
    const titleInput = document.getElementById("title");
    const titleError = document.getElementById("titleError");
    const typeButtons = document.getElementsByName("type");
    const typeError = document.getElementById("typeError");
    const startDateInput = document.getElementById("date");
    const dateError = document.getElementById("dateError");
    const summaryInput = document.getElementById("summary");
    const summaryError = document.getElementById("summaryError");
    const genreSelect = document.getElementById("genre");
    const genreError = document.getElementById("genreError");

    function validateTitle() {
        const value = titleInput.value.trim();
        if (value.length > 50) {
            titleError.textContent = "No more than 50 characters allowed.";
            return false;
        }
        if (titleInput.value.trim() === "") { // trim use to delete space, when the input only fill with space (no character) 
            titleError.textContent = "Title is required.";
            return false;
        }
        else {
            titleError.textContent = "";
            return true;
        }
    }

    function validateDate() {
        if (!startDateInput.validity.valid) {
            dateError.textContent = "invalid date.";
            return false;
        }
        const value = startDateInput.value.trim();
        if (value === "") {
            dateError.textContent = "Start Date is required.";
        }
    }

    function validateGenre() {
        if (genreSelect.value === "" || genreSelect.value === null) {
            genreError.textContent = "Genre is required.";
            return false;
        } else {
            genreError.textContent = "";
            return true;
        }
    }

    function validateType() {
        let checkedType = document.querySelector("input[name='type']:checked");
        if (checkedType === null) {
            typeError.textContent = "Type is required.";
            return false;
        }
        else {
            typeError.textContent = "";
            true;
        }
    }

    function validateSummary() {
        const value = summaryInput.value.trim();
        if (value === "") {
            summaryError.textContent = "Summary is required.";
        }
    }
    startDateInput.addEventListener("blur", validateDate);
    genreSelect.addEventListener("blur", validateGenre);
    summaryInput.addEventListener("blur", validateSummary);
    titleInput.addEventListener("blur", validateTitle)
    typeButtons.forEach(radioButton => {
        radioButton.addEventListener('blur', validateType);
    });



    form.addEventListener("submit", function (event) {
        const isTitleValid = validateTitle();
        const isTypeValid = validateType();
        const isDateValid = validateDate();
        const isGenreValid = validateGenre();

        if (!isTitleValid || !isTypeValid || !isDateValid || !isGenreValid) {
            event.preventDefault();
        }
    });

}); 