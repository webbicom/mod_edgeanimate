<?php
/**
 * @version $Id: mod_edgeanimate.php 20196 2013-08-05 
 * @subpackage	mod_edgeanimate
 * @copyright	Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die;
JHtml::_('behavior.framework', true);
$edgeanimatenumber = $params->get('edgeanimatenumber', 1);

if ($params->def('prepare_content', 1))
{
	JPluginHelper::importPlugin('content');

	$module->content = JHtml::_('content.prepare', $module->content, '', 'mod_edgeanimate');
}

$css_file = $params->get( 'stylesheet', 'edge.css' );
if ( $css_file ) { 

	$css_url =  JURI::root(true) . '/modules/mod_edgeanimate/css/'. $css_file;
	$document = JFactory::getDocument();
	$document->addStyleSheet ( $css_url );
}

$js_file = $params->get( 'javascript', 'nothing.js' );
if ( $js_file ) { 
	
	$js_url = JURI::root(true) . '/modules/mod_edgeanimate/js/'. $js_file;
	$document = JFactory::getDocument();
	$document->addScript ( $js_url );
}
$js_file2 = $params->get( 'javascript2', 'nothing.js' );
if ( $js_file2 ) { 
	
	$js2_url = JURI::root(true) . '/modules/mod_edgeanimate/js/'. $js_file2;
	$document = JFactory::getDocument();
	$document->addScript ( $js2_url );
}

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require JModuleHelper::getLayoutPath('mod_edgeanimate', $params->get('layout', 'default'));

