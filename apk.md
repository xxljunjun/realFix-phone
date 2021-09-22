### 一、如何将 vue/cli 项目打包成 apk

<!-- - npm run build:app-plus -->
  生成了 dis 文件夹
  在 dist/build 文件夹下在 H-build 编辑器中进行打包 apk

### 二、生成 android-apk 证书

- Android 平台打包发布 apk 应用，需要使用数字证书（.keystore 文件）进行签名，用于表明开发者身份。
- 需要安装微信者开发工具
- 安装 JRE 环境 //可从 Oracle 官方下载 jre 安装包：https://www.oracle.com/technetwork/java/javase/downloads/index.html
- set PATH=%PATH%;"C:\Program Files\Java\jdk-16.0.1\bin"
  - keytool -genkey -alias yourapp.keystore -keyalg RSA -sigalg SHA1WithRSA -validity 20000 -keysize 1024 -keystore yourapp.keystore -v
  - keytool -importkeystore -srckeystore ./yourapp.keystore -destkeystore ./yourapp.keystore -deststoretype JKS
  <!-- - keytool -list -v -keystore ./HBuilder.keystore -->
    **_window+R 启用管理员权限操作_**

<!-- 建议使用 -->

- keytool -importkeystore -srckeystore ./yourapp.keystore -destkeystore ./yourapp.keystore -deststoretype pkcs12
- 秘钥：liaojunjun


- set PATH=%PATH%;"C:\Program Files\Java\jdk-16.0.1\bin"
- keytool -importkeystore -srckeystore ./yourapp.keystore -destkeystore ./yourapp.keystore -deststoretype pkcs12
