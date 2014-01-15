/**
 * Created by Vitaly Egorov <egorov@samsonos.com> on 15.01.14.
 */
/**
 * Superpuper black backgrounded popup
 */
var sjstinybox = {
    /**
     *
     * @param handler
     */
    tinyboxAjax : function(handler){
        // Iterate all DOM elements in current selection
        return this.each(function(elm, respContainerName)
        {
            // If no response container name is specified use 'html'
            respContainerName = respContainerName ? respContainerName : 'html';

            // Bind asynchronous request on element click
            elm.ajaxClick(function(response, clickable){

                var handler =
                // If we recieved html container
                if (response[respContainerName] != undefined) {
                    // Create SamsonJS object
                    var form = s(response[respContainerName]);
                    // Append response to body
                    s(document.body).append(form);
                    // Show tinybox
                    var tb = tinybox(form);
                }
            });
        });
    }
};

// Add plugin to SamsonJS
SamsonJS.extend(sjstinybox);