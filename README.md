# Sunrise, Sunset

There's a sunrise and a sunset every single day, and they're absolutely free!

Users can search for a location name and they receive the time of today's sunrise and sunset in that location.

## Installation & usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to `fp_kurita_lap3_debug-OGWJ`
* Run `npm i` to install the dependencies.

### Usage

* run `npm run dev`.
* In your browser you may now open the Sunrise, Sunset app at the url `localhost:8080`.
* Enjoy.

![demo](https://raw.githubusercontent.com/getfutureproof/fp_lap_3_debug_assignment-OGWJ/master/screencap.gif?token=ANHFCK3P25LWBKPIYJDYMVTBJGK7M)

## Changelog

### 14 September 2021
* **Added react-redux and react-router-dom dependencies.**
* **fixed imports and added redux provider**
* **Added root id to index.html**
* **Added routing to App.js**
* **Added const to some existing function declarations**
* **Added __mocks__ directory for testing**
* **Added alert role to Search page error message**
* **Added controlled input to Search Form**
* **Initialized location value to London**
* **Minor change to test to account for initialization**
* **Added back button functionality.**

## Bugs
* **UI is not responsive or mobile friendly**
* ~~**axios fetch to LatitutdeLongitude api (src/actions/index.js fetchLongLat ln.25) is not correctly catching city not found error**~~ (Fixed @OGWJ 14-09-21)
  * Explanation: Catch block was trying to access the status property of a variable with the value of an axios response, but axios throws an error if status is not 2XX and the value of that variable is left undefined.
  * Solution: Check if axios error message caught in catch block includes 404 (i.e. city not found) and throw our new custom error message.
  * Note: This is not demonstrated in the demo gif, but legacy code was indicative of this behaviour.
* **Fixing above error handling bug breaks one existing test**