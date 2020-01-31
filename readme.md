# eventio-frontend
Eventio frontend

# Requirements
On your PC:
- Node v10.0+ (older may work but it hasnt been tested) w/ NPM
- Expo CLI - `npm install expo-cli -g`
  
On your phone:  
- Expo app - https://play.google.com/store/apps/details?id=host.exp.exponent
  
# Run The App
To run the app:
1. On your PC, open the terminal and navigate to the root folder of the project
2. Run `npm i` to install all the packages required for the project to run
3. Run: `npm start` or `expo start`. This will open a local dev server which you can control in browser.

Now you can choose how you can your app on your phone:
1. Locally via USB
   - On your device enable USB debugging in its device settings, then connect it via USB to your PC
   - On your PC, in the browser controller GUI in the bottom right corner, choose the option _Local_
   - Click the button _Run on Android device/emulator_. Expo should automatically start on the device.
2. Via LAN
   - Make sure that both devices are connected to the same network
   - In the browser GUI, choose the option _LAN_
   - Open Expo on your phone, on the navigator bar search for _Projects_
   - The first option should be _Scan QR Code_. Use it to scan the QR code provided in the web controller. The app should run.
  
## Notes
Expo may ask you to make an account. It's a 2 second job, you don't even need to verify it.  
Unless you use Android Studio or Xcode, __DO NOT__ use react-native CLI to run the app.  
  
This app was made for Android devices. It may not work on iOS devices.  
  
__For any additional questions you can contact me (Spinzed) or any of the contributors.__  
