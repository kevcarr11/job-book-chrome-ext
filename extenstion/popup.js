const shadow = document.createElement('div')
const popup = document.createElement('div')
const container = document.createElement('div')
const form = document.createElement('form')
const formTitle = document.createElement('div')
const formLogo = document.createElement('img')
const companyLabel = document.createElement('label')
const companyInput = document.createElement('input')
const jobTitleLabel = document.createElement('label')
const jobTitleInput = document.createElement('input')
const locationLabel = document.createElement('label')
const locationInput = document.createElement('input')
const jobPostUrlLabel = document.createElement('label')
const jobPostUrlInput = document.createElement('input')
const jobDescription = document.createElement('label')
const jobDescriptionInput = document.createElement('textarea')
const openButton = document.createElement('img')
const submitButton = document.createElement('button')
const companyTooltip = document.createElement('div')
const titleTooltip = document.createElement('div')
const locationTooltip = document.createElement('div')
const descriptionTooltip = document.createElement('div')


shadow.setAttribute('id', 'shadowBox')
popup.setAttribute('id', 'popup')
popup.classList.add('formSuccess')
popup.setAttribute('style', 'display: none !important')
container.classList.add('form-popup')
container.setAttribute('id', 'myForm')
form.classList.add('form-container')
openButton.classList.add('open-button')
submitButton.classList.add('btn')
submitButton.setAttribute('id', 'saveJob')
formTitle.setAttribute('id', 'formLogo')
formLogo.src = chrome.runtime.getURL('./images/logo.png')
companyTooltip.src = chrome.runtime.getURL('./images/info-15.png')
titleTooltip.src = chrome.runtime.getURL('./images/info-15.png')
locationTooltip.src = chrome.runtime.getURL('./images/info-15.png')
descriptionTooltip.src = chrome.runtime.getURL('./images/info-15.png')
companyInput.classList.add('input')
jobTitleInput.classList.add('input')
locationInput.classList.add('input')
jobDescriptionInput.classList.add('input')
companyTooltip.classList.add('tooltip')
titleTooltip.classList.add('tooltip')
locationTooltip.classList.add('tooltip')
descriptionTooltip.classList.add('tooltip')

companyLabel.setAttribute('for', 'company')
companyInput.setAttribute('type', 'text')
companyInput.setAttribute('placeholder', 'Highlight or type Company Name')
companyInput.setAttribute('name', 'company')
jobTitleLabel.setAttribute('for', 'jobTitle')
jobTitleInput.setAttribute('type', 'text')
jobTitleInput.setAttribute('placeholder', 'Highlight or type Job Title')
jobTitleInput.setAttribute('name', 'jobTitle')
locationLabel.setAttribute('for', 'location')
locationInput.setAttribute('type', 'text')
locationInput.setAttribute('placeholder', 'Highlight or type Location')
locationInput.setAttribute('name', 'location')
jobPostUrlLabel.setAttribute('for', 'postUrl')
jobPostUrlInput.setAttribute('type', 'text')
jobPostUrlInput.setAttribute('placeholder', 'Job Post Url')
jobPostUrlInput.setAttribute('name', 'postUrl')
jobDescription.setAttribute('for', 'description')
jobDescriptionInput.setAttribute('type', 'textarea')
jobDescriptionInput.setAttribute('placeholder', 'Highlight or type Description')
jobDescriptionInput.setAttribute('name', 'description')
submitButton.textContent = 'Add'
openButton.src = chrome.extension.getURL("./images/icon48.png")
companyLabel.textContent = 'Company'
jobTitleLabel.textContent = 'Job Title'
jobPostUrlLabel.textContent = 'Job Post Url'
locationLabel.textContent = 'Location'
jobDescription.textContent = 'Description'
popup.innerHTML = `
      <p style="color: #08A6C9; margin: 0px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; line-height: 23px;">Your job was saved to<p>
      <p style="color: #08A6C9; margin: 10px 0px 30px; font-size: 35px; font-family: lato; font-weight: 600; letter-spacing: 0px; line-height: 42px; text-transform: capitalize;">SaveThisJob</p>
      <a href="https://www.savethisjob.com/dashboard" target="_blank" style="box-sizing: border-box; line-height: 15px; text-decoration: none; display: inline-block; padding: 10px 20px; color: white; font-weight: 600; border-radius: 4px; transition: all 0.4s ease-out 0s; background-color: #08A6C9; text-align: center; font-size: 14px; border: 1px solid rgba(0, 0, 0, 0); position: relative; box-shadow: rgba(25, 4, 69, 0.05) 0px 4px 10px;">View Dashboard</a>
      `
companyTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill company name</span>
</div>
`
titleTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill job title</span>
</div>
`
locationTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill location</span>
</div>
`
descriptionTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill job description</span>
</div>
`
form.appendChild(formTitle)
formTitle.appendChild(formLogo)
form.appendChild(companyLabel)
companyLabel.appendChild(companyTooltip)
form.appendChild(companyInput)
form.appendChild(jobTitleLabel)
jobTitleLabel.appendChild(titleTooltip)
form.appendChild(jobTitleInput)
form.appendChild(locationLabel)
locationLabel.appendChild(locationTooltip)
form.appendChild(locationInput)
form.appendChild(jobPostUrlLabel)
form.appendChild(jobPostUrlInput)
form.appendChild(jobDescription)
jobDescription.appendChild(descriptionTooltip)
form.appendChild(jobDescriptionInput)
form.appendChild(submitButton)
container.appendChild(form)
shadow.appendChild(container)
shadow.appendChild(openButton)
container.appendChild(popup)

const formStyle = document.createElement('style')
formStyle.textContent = `
    body {font-family: Arial, Helvetica, sans-serif;}
    * {box-sizing: border-box;}
    
    #formLogo {
      display: flex;
      justify-content: center;
    }
    
    /* Button used to open the contact form - fixed at the bottom of the page */
    .open-button {
      padding: 16px 20px;
      border: none;
      cursor: pointer;
      opacity: 0.8;
      position: fixed;
      bottom: 23px;
      right: 28px;
      display: none !important;
      z-index: 9856965874512325479999999999999999;
      /* width: 280px; */
    }
    
    /* The popup form - hidden by default */
    .form-popup {
      display: none;
      position: fixed;
      bottom: 95px;
      right: 15px;
      border: 3px solid #f1f1f1;
      z-index: 999999999999;
    }
    
    /* Add styles to the form container */
    .form-container {
      max-width: 300px;
      padding: 10px;
      background-color: white;
      z-index: 999999999999999;
    }
    
    /* Full-width input fields */
    .form-container input[type=text], .form-container input[type=text] {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0 !important;
      border: none;
      background: #f1f1f1;
    }
    
    .form-container textarea {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0 !important;
      border: none;
      background: #f1f1f1;
      height: 100px;
      overflow-y: auto
    }
    
    /* When the inputs get focus, do something */
    .form-container input[type=text]:focus, .form-container textarea:focus {
      background-color: #ddd;
      outline: none;
    }
    
    /* Set a style for the submit/login button */
    .form-container .btn {
      background-color: #08A6C9;
      color: white;
      padding: 16px 20px;
      border: none;
      cursor: pointer;
      width: 100%;
      margin-bottom:10px;
      opacity: 0.8;
    }
    
    /* Add a background color to the cancel button */
    .form-container .cancel {
      background-color: #ddd;
      color: white;
    }
    
    /* Add some hover effects to buttons */
    .form-container .btn:hover, .open-button:hover {
      opacity: 1;
    }
    
    .form-container label {
      font-size: 12px !important;
      font-weight: bold;
    }

    .formSuccess {
      display: flex;
      flex-direction: column;
      height: 250px;
      align-items: center;
      justify-content: center;
      padding: 5px;
      background-color: #f1f1f1;
      z-index: 9999999999999999
      content: 'Success'
    }

    .tooltip {
      position: relative;
      display: inline-block;
      padding-left: 4px;
    }
    
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: #f1f1f1;
      color: #08A6C9;
      text-align: center;
      border-radius: 6px;
      padding-left: 7px;
      padding-right: 7px;
      padding-top: 1px;
      
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: -5px;
      left: 105%;
    }
    
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
`

const shadowRoot = shadow.attachShadow({ mode: 'open' });

window.addEventListener("load", () => {

  window.document.body.appendChild(shadow)


  const autoFills = ['https://www.monster.com', 'https://www.indeed.com', 'https://gigs.indeed.com', 'https://staging.d3d1q8nq7a3fmz.amplifyapp.com', 'https://www.savethisjob.com']

  for (let i = 0; i < autoFills.length; i++) {
    if (window.location.origin === autoFills[i]) {
      return window.document.body.removeChild(shadow)
    }
  }

  chrome.storage.local.get('token', (storage) => {
    if (!storage.token) {
      console.log('no token', storage.token)
      const openPopup = shadowRoot.querySelector('.open-button')
      openPopup.setAttribute('style', 'display: none !important')
      return openPopup
    } else {
      console.log(storage.token)
      const openPopup = shadowRoot.querySelector('.open-button')
      openPopup.setAttribute('style', 'display: block !important')
      return openPopup
    }
  })

  shadowRoot.appendChild(formStyle)
  shadowRoot.appendChild(openButton)
  shadowRoot.appendChild(container)


  function togglePopup() {
    const element = shadowRoot.querySelector("#myForm");
    const success = shadowRoot.querySelector('#popup')
    if (element.style.display !== "block") {
      openButton.src = chrome.extension.getURL("./images/close-window-50.png")
      if (success.style.display === "flex") {
        success.setAttribute('style', 'display: none !important')
        form.style.display = "block";
        openButton.src = chrome.extension.getURL("./images/close-window-50.png")
      } else {
        null
      }
      const inputs = shadowRoot.querySelectorAll('.input')

      function onCompanyInputMouseUp() {
        const selection = window.getSelection().toString()
        companyInput.value = companyInput.value ? companyInput.value : selection
      }

      function onJobTitleInputMouseUp() {
        const selection = window.getSelection().toString()
        jobTitleInput.value = jobTitleInput.value ? jobTitleInput.value : selection
      }

      function onLocationInputMouseUp() {
        const selection = window.getSelection().toString()
        locationInput.value = locationInput.value ? locationInput.value : selection
      }

      function onDescriptionInputMouseUp() {
        const selection = window.getSelection().toString()
        jobDescriptionInput.value = jobDescriptionInput.value ? jobDescriptionInput.value : selection
      }

      inputs[0].addEventListener('focus', onCompanyInputMouseUp, false);
      inputs[1].addEventListener('focus', onJobTitleInputMouseUp, false);
      inputs[2].addEventListener('focus', onLocationInputMouseUp, false);
      inputs[3].addEventListener('focus', onDescriptionInputMouseUp, false);

      jobPostUrlInput.value = window.location.href
      container.style.display = "block";
      form.style.display = "block";
      element.style.display = "block";
    } else {
      element.style.display = "none";
      openButton.src = chrome.extension.getURL("./images/icon48.png")
    }
  }

  const addJob = shadowRoot.querySelector('#saveJob')
  const thumbtack = shadowRoot.querySelector('.open-button');

  thumbtack.addEventListener("click", () => {
    togglePopup()
  })

  addJob.addEventListener("click", (event) => {
    event.preventDefault()
    addJob.innerHTML = 'Loading...'

    chrome.storage.local.get('token', function (result) {
      if (!result.token) {
        return chrome.runtime.sendMessage({ type: 'getToken' });
      }

      const accessToken = result.token;

      const data = {
        jobTitle: jobTitleInput.value,
        urlText: jobPostUrlInput.value,
        logo: null,
        companyTitle: companyInput.value,
        companyUrl: null,
        description: jobDescriptionInput.value,
        location: locationInput.value
      };

      fetch('https://save-this-job.herokuapp.com/users/addJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data === 'Jwt is expired') {
            addJob.innerHTML = 'Add'
            return chrome.runtime.sendMessage({ type: 'getToken' });
          }
          if (data.message === 'Job Post Created') {
            form.style.display = 'none'
            popup.style.display = 'flex'
            jobPostUrlInput.value = ""
            jobTitleInput.value = ""
            companyInput.value = ""
            locationInput.value = ""
            jobDescriptionInput.value = ""
            addJob.innerHTML = 'Add'
            return chrome.runtime.sendMessage({ type: 'jobSaveSuccess' });
          } else {
            return addJob.innerHTML = 'Add'
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          addJob.innerHTML = 'Add'
          chrome.runtime.sendMessage({ type: 'Error' });
        });
    });
  })

})

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'contextShow') {
    const tack =
      shadowRoot.querySelector('.open-button')
    tack.setAttribute('style', 'display: block !important')
    return tack
  }

  if (request.type === 'contextHide') {
    const tack =
      shadowRoot.querySelector('.open-button')
    tack.setAttribute('style', 'display: none !important')
    return tack
  }
  if (request.type === 'hide') {
    chrome.storage.local.get('token', (storage) => {
      if (storage.token) {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        chrome.storage.local.get('token', () => {
          const tack =
            shadowRoot.querySelector('.open-button')
          tack.setAttribute('style', 'display: none !important')
          return tack
        })
      }
    })
  }

  if (request.type === 'show') {
    chrome.storage.local.get('token', (storage) => {
      if (storage.token) {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        chrome.storage.local.get('token', () => {
          const tack =
            shadowRoot.querySelector('.open-button')
          tack.setAttribute('style', 'display: none !important')
          return tack
        })
      }
    })
  }

  if (request.type === 'tabActivated') {
    chrome.storage.local.get('token', (storage) => {
      if (storage.token) {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: none !important')
        return tack
      }
    })
  }

  if (request.type === 'getTokenFromStorage') {
    if (
      window.location.href ===
      'https://www.savethisjob.com/dashboard'
    ) {
      return setToken();
    }
  }
})



const setToken = () => {
  const token = localStorage.getItem('token');
  chrome.storage.local.set({ token }, () => {
    chrome.runtime.sendMessage({ type: 'tokenSet' });
  });
};


