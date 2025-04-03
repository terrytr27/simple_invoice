# Introduction
This repo is a solution to a home test for `101 Digital: ReactNative Assessment`
# Demo video


https://github.com/user-attachments/assets/57c6d93e-4a33-45ad-99ae-b2bbbc5f7d64


# Requirement Checklist
| Screen | Item | Status |
| - | - | - |
| Login | Follow the API specification provided in Appendix A | ✅ |
| | Create a screen / form to login and save the required data to use in subsequent API calls | ✅ |
| | The form should have validations | ✅ |
| Create Invoice | Follow the API specification provided in Appendix A | ✅ |
| | Create a screen / form to capture the Invoice inputs | ✅ |
| | The invoice should have only 1 line item. | ✅ |
| | The form should have validations | ✅ |
| List / Search / View Invoices | Build a screen / form to display a LIST of invoices that have been created | ✅ |
| | Each time you create a new invoice, it should be shown in this list | ✅ |
| | Set list as home screen | |
| | The screen should allow the user to do some of the more common list management feature such as search, sort, filter | ✅ |
# Solution Guideliness checklist
| Item | Status |
| - | - |
| Implement using React Native CLI | ✅ |
| Needs to work on iOS and Android | ✅ |
| Feel free to use whatever mechanism you see fit in order to visually present your UI | ✅ |
| You are free to use any popular open source libraries that you are familiar with for productivity and efficiency | ✅ |
| Code should be well-commented | ✅ |
| Your code should have some level of automated tests | ✅ |
| Automated UI tests using Detox will be viewed favorably. | ✅ |
# Technical approaches
- Framework: React native
- State managemen tool: Redux
- Automation test tool: Detox
- Screens: 3 screens including Login, Home, Create Invoice
- Packages

| Package | Purpose |
| - | - |
| Native-base | UI component |
| Yup | Validation |
| Formik | Handling form |
| i18next | Handle multiple language support |
| Redux | State management |
| Patch packge | Handle package modifying |

# Technical perspective

## How to run
1. Open terminal and run `npm i` or `yarn`
2. Run `npm run start` or `yarn start` to start the metro bundle
3. Run `npm run android` to run the app on Android or `npm run ios` to run the app on iOS

## How to run automation test
1. Open terminal and run `npm i` or `yarn`
2. Run `npm run start` or `yarn start` to start the metro bundle
3. Build test application with `detox build --configuration ios.sim.debug` for iOS and `detox build --configuration android.emu.debug` for Android 
4. Run test with `detox test --configuration ios.sim.debug` for iOS and `detox test --configuration android.emu.debug` for Android

**Test results**

![Screenshot 2025-04-03 at 08 36 43](https://github.com/user-attachments/assets/381cd2d0-2f6c-4bdc-b6b2-bbfc7ef97d14)
![Screenshot 2025-04-03 at 08 57 43](https://github.com/user-attachments/assets/d8e90202-0840-4dfe-8dd2-36b781122ebc)
![Screenshot 2025-04-03 at 09 07 28](https://github.com/user-attachments/assets/4db65de7-08b5-4a67-9e91-9ee946c8da19)

# Comments
During the implementation phase there are 2 problem comming up
## The application is running with React Native version 0.78.2 which is incompatible with native-base library 
- `BackHandler.removeEventListener` is removed https://reactnative.dev/docs/backhandler. However native-base is still using it https://github.com/GeekyAnts/NativeBase/blob/master/src/hooks/useKeyboardDismissable.ts#L54
- **Solution**: Using patch package to overwrite the native-base to resolve the issue

## Create invoice returning the validation error from backend
- **Solution**: Add addressType to fix the payload
  
  ![image](https://github.com/user-attachments/assets/066fb7d6-a0ca-4670-997b-5961e6b03863)



