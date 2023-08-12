/******************************************************************************/
/*  JAVASCRIPT ASSETS                                                         */
/*----------------------------------------------------------------------------*/
/*  Copyright (C) 2020 MINEVERSAL                                             */
/*  Licensed material of MINEVERSAL                                           */
/*----------------------------------------------------------------------------*/
/*  Object              : JSA (JAVASCRIPT ASSETS)                             */
/*  Outline             : JSA (JAVASCRIPT ASSETS)                             */
/*  File ID             : CertGen-JSA-1										  */
/*----------------------------------------------------------------------------*/
/*  Author              : Joe                                                 */
/*  Revision Author     : -                                                   */
/*  Created Time        : 2023/08/12 09:00 (UTC+07:00)                        */
/*  Modification Time   : 2023/08/12 13:00 (UTC+07:00)                        */
/*  Version             : 1 (Number of Version)                               */
/*  Revision            : 0 (Number of Revision)                              */
/******************************************************************************/

/******************************************************************************/
/*        CONSTANT VARIABLE                                                   */
/******************************************************************************/

/******************************************************************************/
/*        GLOBAL VALIABLE                                                     */
/******************************************************************************/

/******************************************************************************/
/*        PRIVATE VARIABLE                                                    */
/******************************************************************************/
let l_obj_canvas = document.getElementById('canvas') // Get the id of Canvas Object on HTML
let l_obj_canvasContext2D = l_obj_canvas.getContext('2d') // Get the context of Canvas Object
let l_obj_inputName = document.getElementById('name') // Get the id of Input Object on HTML
let l_obj_downloadButton = document.getElementById('download-btn') // Get the id of Button Object on HTML
let l_obj_image = new Image() // Create a new Image Object

/* l_obj_image index setting */
l_obj_image.crossOrigin = "anonymous"; // Allow cross origin
l_obj_image.src = '/assets/cert/Certificate.jpg' // Set the source of image of certificate

/******************************************************************************/
/*  Function:                                                                 */
/*      fs_drawImage														  */
/*  Outline:                                                                  */
/*      Drawing the certificate when Function is called						  */
/*  Parameter:                                                                */
/*      None																  */
/*  Return Value:                                                             */
/*      None																  */
/*  Function Explanation:                                                     */
/*      Drawing the certificate when Function is called						  */
/*  Note:                                                                     */
/*      -																	  */
/*  Traceability Reference ID:                                                */
/*      -																	  */
/******************************************************************************/
function fs_drawImage() {
	// l_obj_canvasContext2D.clearRect(0, 0, l_obj_canvas.width, l_obj_canvas.height) // Clear the canvas
	l_obj_canvasContext2D.drawImage(l_obj_image, 0, 0, l_obj_canvas.width, l_obj_canvas.height) // Draw the image
	l_obj_canvasContext2D.font = '40px consolas' // Set the font
	l_obj_canvasContext2D.fillStyle = '#4285F4' //['#4285F4', '#EA4335', '#FBBC04', '#34A853'] // Set the color
	l_obj_canvasContext2D.fillText(l_obj_inputName.value, 108, 240) // Set the text and postion of text
}

/******************************************************************************/
/*        LAMBDA FUNCTION                                                     */
/******************************************************************************/
l_obj_image.onload = function () { // When the image is loaded
	fs_drawImage() // Call the function fs_drawImage
}

/******************************************************************************/
/*        TOGGLE FUNCTION                                                     */
/******************************************************************************/
l_obj_inputName.addEventListener('input', function () { // When the input value of inputName is changed
	fs_drawImage() // Call the function fs_drawImage
})

l_obj_downloadButton.addEventListener('click', function () { // When the button is clicked
	l_obj_downloadButton.href = l_obj_canvas.toDataURL('image/jpg') // Set the href of button
	l_obj_downloadButton.download = 'Certificate - ' + l_obj_inputName.value // Set the download name of button
})
/******** END OF FILE *********************************************************/