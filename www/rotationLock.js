var exec = require('cordova/exec');

var RotationLock = {
    setOrientation : function(orientation) {
        exec(null, null, "OrientationLock", "setOrientation", [ orientation ]);
    }
}

module.exports = RotationLock;