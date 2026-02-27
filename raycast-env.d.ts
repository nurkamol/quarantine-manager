/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `remove-quarantine` command */
  export type RemoveQuarantine = ExtensionPreferences & {}
  /** Preferences accessible in the `check-quarantine` command */
  export type CheckQuarantine = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `remove-quarantine` command */
  export type RemoveQuarantine = {}
  /** Arguments passed to the `check-quarantine` command */
  export type CheckQuarantine = {}
}

