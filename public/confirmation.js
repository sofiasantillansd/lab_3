(function() {

    window.ShowConfirmation = (message, callback) => {
      
      const RemoveConfirmation = () => {
        let dialogs = document.getElementsByClassName('t3-confirmation-outercontainer');
        for(let i=0; i<dialogs.length; i++){
          dialogs[i].remove();
        }
      }
      
      let outerContainer = document.createElement('div');
      outerContainer.className = "t3-confirmation-outercontainer";
      
      let textContainer = document.createElement('div');
      textContainer.className = "t3-confirmation-textcontainer";

      let buttonContainer = document.createElement('div');
      buttonContainer.className = "t3-confirmation-buttoncontainer";
      
      let textParagraph = document.createElement('p');
      textParagraph.className = "t3-confirmation-textcontainer-p";
      textParagraph.textContent = message;
      textContainer.appendChild(textParagraph);
      outerContainer.appendChild(textContainer);
      
      let buttonOK = document.createElement('a');
      buttonOK.className = "t3-confirmation-button";
      buttonOK.textContent = "OK";
      buttonOK.onclick = () => {
        RemoveConfirmation();
        return !!callback ? callback('Sit back while we make your coffee') : true;
      }
      
      let buttonCancel = document.createElement('a');
      buttonCancel.className = "t3-confirmation-button";
      buttonCancel.textContent = "Cancel";
      buttonCancel.onclick = () => {
        RemoveConfirmation();
        return !!callback ? callback('Okay we will be waiting :(') : true;
      }
      buttonContainer.appendChild(buttonOK);
      buttonContainer.appendChild(buttonCancel);
      outerContainer.appendChild(buttonContainer);
      
      document.getElementsByTagName('body')[0].appendChild(outerContainer);
      
      outerContainer.className = "t3-confirmation-outercontainer open"
      
    }
  })();
  
  
  