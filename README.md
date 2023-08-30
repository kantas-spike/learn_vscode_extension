# Visual Studio Code 拡張機能の作り方を学ぶ

普段使っている Visual Studio Code の拡張機能を作成する方法について学びます。

## 方針

[Extension API | Visual Studio Code Extension API](https://code.visualstudio.com/api)のチュートリアルを順に学習します。

[インクリメンタル ハッキングサイクル](https://github.com/kantas-spike/how-to-learn-hacking-japanese/blob/main/how-to-learn-hacking.md#%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB-%E3%83%8F%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB)の方式で、段階的にチュートリアルを学んでいきます。

## 目標

- 拡張機能の基本を理解する
- 自分が作りたい拡張機能に必要な機能を理解する
  - いくつかのシェルスクリプトを実行するための格納機能を作りたい
  - シェルスクリプトのパス等は設定可能に
    - [拡張機能の設定方法](./exercises/02_extension_capabilities/my-configuration/)
  - シェルスクリプトには任意を引数を渡せる
    - [QuickInputでユーザーと対話](./exercises/02_extension_capabilities/quickinput-sample/)
  - シェルスクリプトの実行結果は見たい(エラー発生など確認用)
    - [処理の実行はターミナルで](./exercises/02_extension_capabilities/add-terminal/)

## インクリメンタルハッキングサイクルのステップ

各ステップの成果物は [exercises](./exercises/)で管理します。

- Get Started
- Extension Capabilities
- Extension Guides
- UX Guidelines showcases best practices for providing a great user experience in an extension.

## 参考

- QuickInput
  - [QuickInputとInputBoxを利用してユーザー入力を受け付ける - Visual Studio Codeの拡張機能を開発する | Yucchiy's Note](https://blog.yucchiy.com/2021/05/vscode-quickinput-inputbox/)
  - [lived/extension.js at 3da0bb1a31f2d98867a21e4cb58706ae6b62e299 · jeffalo/lived](https://github.com/jeffalo/lived/blob/3da0bb1a31f2d98867a21e4cb58706ae6b62e299/extension.js#L54)

- Terminal
  - [javascript - Execute command by creating terminal vscode extension api - Stack Overflow](https://stackoverflow.com/questions/74059732/execute-command-by-creating-terminal-vscode-extension-api)
  - [VS Code API | Visual Studio Code Extension API](https://code.visualstudio.com/api/references/vscode-api#window)
  - [VS Code API | Visual Studio Code Extension API](https://code.visualstudio.com/api/references/vscode-api#Terminal)