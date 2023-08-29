// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "my-configuration" is now active!');

	const get_config = (key) => vscode.workspace.getConfiguration('my-configuration').get(key)

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('my-configuration.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		const site_folder = get_config("site.folder")
		const tool_path = get_config("tool.path")
		// Display a message box to the user
		vscode.window.showInformationMessage(`cd ${site_folder} && ${tool_path} -h`);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('my-configuration.add_idea', function () {
		// The code you place here will be executed every time your command is executed
		const site_folder = get_config("site.folder")
		const tool_path = get_config("tool.path")
		// Display a message box to the user
		vscode.window.showInformationMessage(`cd ${site_folder} && ${tool_path} idea xxx`);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('my-configuration.add_stone', function () {
		// The code you place here will be executed every time your command is executed
		const site_folder = get_config("site.folder")
		const tool_path = get_config("tool.path")
		// Display a message box to the user
		vscode.window.showInformationMessage(`cd ${site_folder} && ${tool_path} stone xxx`);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('my-configuration.add_til', function () {
		// The code you place here will be executed every time your command is executed
		const site_folder = get_config("site.folder")
		const tool_path = get_config("tool.path")
		// Display a message box to the user
		vscode.window.showInformationMessage(`cd ${site_folder} && ${tool_path} til xxx`);
	}));

}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
