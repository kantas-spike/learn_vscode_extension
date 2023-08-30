// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const path = require("path")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "quickinput-sample" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "quickinput-sample.selectItem",
      async function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World from quickinput-sample!');
        const ret = await vscode.window.showQuickPick([
          "test0",
          "test1",
          "test2",
        ]);
        if (ret) {
          vscode.window.showInformationMessage(ret);
        } else {
          vscode.window.showInformationMessage("no data");
        }
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "quickinput-sample.getUserInput",
      async function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World from quickinput-sample!');
        const ret = await vscode.window.showInputBox({
          prompt: "タイトルを入力してください。",
        });
        if (ret) {
          vscode.window.showInformationMessage(ret);
        } else {
          vscode.window.showInformationMessage("no data");
        }
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "quickinput-sample.selectFolder",
      async function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World from quickinput-sample!');
        const ret = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectMany: false,
          canSelectFolders: true,
          openLabel: "出力先フォルダを選択してください",
          defaultUri: vscode.Uri.file("/Users/kanta/ibank/content"),
        });
        if (ret) {
          vscode.window.showInformationMessage(ret);
        } else {
          vscode.window.showInformationMessage("no data");
        }
      }
    )
  );

  const getDir = (baseDir) => {
    const results = []
    const dirList = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => {
      const aDir = path.resolve(baseDir, entry.name)
      results.push(aDir)
      getDir(aDir).forEach(d => results.push(d))
    });
    return results
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "quickinput-sample.addIdea",
      async function () {
        const contentDir = "/Users/kanta/ibank/content"
        const defaultOutputDir = "idea"
        const fileName = await vscode.window.showInputBox({
          prompt: "アイデアを記載するファイル名を入力してください",
          validateInput: (input) => {
            if (input.includes(" ")) {
              return "ファイル名に空白は使用できません";
            } else if (input.match(/[\\¥\/:*?"<>|]/g)) {
              return 'ファイル名に次の文字は使用できません: \\ ¥ / : * ? " < > |';
            } else {
              return null;
            }
          },
        });
        if (fileName) {
          vscode.window.showInformationMessage(fileName);
        } else {
          vscode.window.showErrorMessage("ファイル名を選択してください");
          return
        }
        const dirList = getDir(contentDir).map(d => path.relative(contentDir, d))
        const outputFolder = await vscode.window.showQuickPick(dirList, {
          canPickMany: false,
          title: "アイデアを格納するフォルダを選択してください。選択しない場合は[Esc]を押してください"
        });
        let outputPath
        if (outputFolder) {
          vscode.window.showInformationMessage(fileName);
          outputPath = path.join(contentDir, outputFolder, fileName)
        } else {
          vscode.window.showInformationMessage(`フォルダが選択されなかったため、デフォルトディレクトリ(${defaultOutputDir})に格納します。`);
          outputPath = path.join(contentDir, defaultOutputDir, fileName)
        }

        vscode.window.showInformationMessage(`${outputPath} を作成します`);
      }
    )
  );
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
