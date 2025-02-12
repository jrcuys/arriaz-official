/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		// { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		// { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		// { name: 'links' },
		// { name: 'insert' },
		// { name: 'forms' },
		// { name: 'tools' },
		// { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		// { name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		// { name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	// config.removeButtons = 'Underline,Subscript,Superscript';
	config.removeButtons = 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,PasteFromWord,Maximize,Source,Image,Copy,Cut,Paste';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.enterMode = CKEDITOR.ENTER_BR;
   	config.shiftEnterMode = CKEDITOR.ENTER_P;
   	// config.shiftEnterMode = CKEDITOR.ENTER_STRONG;
   	// config.shiftEnterMode = CKEDITOR.ENTER_B;

	config.height = '7em'; 
	config.extraPlugins = 'autogrow';
	config.autoGrow_minHeight = 100;
	config.autoGrow_maxHeight = 600;
	// config.editorplaceholder = 'Type your comment…';
};
