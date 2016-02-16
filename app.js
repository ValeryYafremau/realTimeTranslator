	
var $result = $('#result'),
	$uploadedImage = $('#image');
	
$('button').on('click', upload);

/**
 * Uploads image.
 */
function upload() {
	var src = document.getElementById('path').value,
		image = new Image();

	image.onload = function () {
		convertImageToText();
		translate();
	}
	$uploadedImage.attr('src', src)
	image.src = src;
};

/**
 * Converts image to text.
 */
function convertImageToText () {
	var context = document.createElement('canvas').getContext('2d'),
		imageData,
		convertedText;

	context.drawImage($uploadedImage[0], 0, 0);		
	imageData = context.getImageData(0, 0, $uploadedImage.width(), $uploadedImage.height());		
	convertedText = OCRAD(imageData);
	$result.html(convertedText);
};

/**
 * Translates all text on a page.
 */
function translate () {
	var s = document.createElement('script');
		s.type = 'text/javascript';
		s.charset = 'UTF-8';
		s.src = ((location && location.href && location.href.indexOf('https') == 0) ? 'https://ssl.microsofttranslator.com' : 'http://www.microsofttranslator.com' ) + '/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**&ctf=True&ui=true&settings=Manual&from=';
	var p = document.getElementsByTagName('head')[0] || document.documentElement;
	    p.insertBefore(s, p.firstChild);
};
