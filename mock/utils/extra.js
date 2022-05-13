const { mock } = require("mockjs");

function mockOperate() {
    return mock({
        "array|1": [
            "深圳技师学院",
            "深圳职业技术学院",
            "深圳信息学院"
        ]
    }).array;
}

function mockSchool(){
    return mock({
        "array|1": [
            "深技师学区",
            "深职院学区",
            "深信息学区",
        ]
    }).array;
}

module.exports = {
    mockOperate,
    mockSchool
}