/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document */

import ClassicTestEditor from '../_utils/classictesteditor';
import testUtils from '../_utils/utils';

import Indent from '../../src/indent/indent';
import IndentEditing from '../../src/indent/indentediting';
import IndentUI from '../../src/indent/indentui';

describe( 'Indent', () => {
	let editor, element;

	testUtils.createSinonSandbox();

	beforeEach( () => {
		element = document.createElement( 'div' );
		document.body.appendChild( element );

		return ClassicTestEditor
			.create( element, { plugins: [ Indent ] } )
			.then( newEditor => {
				editor = newEditor;
			} );
	} );

	afterEach( () => {
		element.remove();

		if ( editor ) {
			return editor.destroy();
		}
	} );

	it( 'should be named', () => {
		expect( Indent.pluginName ).to.equal( 'Indent' );
	} );

	it( 'should load the IndentUI plugin', () => {
		expect( editor.plugins.get( IndentUI ) ).to.be.instanceOf( IndentUI );
	} );

	it( 'should load the IndentEditing plugin', () => {
		expect( editor.plugins.get( IndentEditing ) ).to.be.instanceOf( IndentEditing );
	} );
} );
