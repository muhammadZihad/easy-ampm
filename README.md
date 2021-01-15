# easy-ampm

This is a simple package for converting given Seconds (second count starts from 12:00AM) into 12/24H time format.

# Installation

`npm i easyampm --save`

Then...

```
import {easyAmPm} from 'easyampm';

let converted_time = easyAmPm({
    time: 6300,
    format: "12H",
    spaced: false
});
```

## Options

easyAmPm() supports 3 options (1 of them is required)

- _time_ - _seconds_ (Required | Must be an Integer number between 0 to 86399)
- _format_ - _12H | 24H_ (Default is 12H)
- _spaced_ - _boolean_ (Default is false)

## Examples

- _spaced_ -
  _true_ => 12:10 AM
  _false_ => 12:10 AM
