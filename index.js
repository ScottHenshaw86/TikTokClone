/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import Amplify, { Auth } from 'aws-amplify';

import Amplify from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import awsmobile from './aws-exports';


Amplify.configure(awsmobile);
Auth.configure(awsmobile);

AppRegistry.registerComponent(appName, () => App);
