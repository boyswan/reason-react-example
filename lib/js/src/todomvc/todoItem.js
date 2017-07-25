// Generated by BUCKLESCRIPT VERSION 1.8.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var $$String    = require("bs-platform/lib/js/string.js");
var Js_boolean  = require("bs-platform/lib/js/js_boolean.js");
var ReasonReact = require("reason-react/lib/js/src/reasonReact.js");

var component = ReasonReact.statefulComponent("TodoItemRe");

function setEditFieldRef(r, param) {
  var state = param[/* state */3];
  return /* SilentUpdate */Block.__(1, [/* record */[
              /* editText */state[/* editText */0],
              /* editFieldRef */r === null ? /* None */0 : [r],
              /* editing */state[/* editing */2]
            ]]);
}

function make(todo, editing, onDestroy, onSave, onEdit, onToggle, onCancel, _) {
  var handleSubmit = function (_, param) {
    var state = param[/* state */3];
    var nonEmptyValue = $$String.trim(state[/* editText */0]);
    if (nonEmptyValue === "") {
      Curry._1(onDestroy, /* () */0);
      return /* NoUpdate */0;
    } else {
      Curry._1(onSave, nonEmptyValue);
      return /* Update */Block.__(0, [/* record */[
                  /* editText */nonEmptyValue,
                  /* editFieldRef */state[/* editFieldRef */1],
                  /* editing */state[/* editing */2]
                ]]);
    }
  };
  var handleKeyDown = function ($$event, self) {
    if ($$event.which === 27) {
      Curry._1(onCancel, /* () */0);
      var init = self[/* state */3];
      return /* Update */Block.__(0, [/* record */[
                  /* editText */todo[/* title */1],
                  /* editFieldRef */init[/* editFieldRef */1],
                  /* editing */init[/* editing */2]
                ]]);
    } else if ($$event.which === 13) {
      return handleSubmit($$event, self);
    } else {
      return /* NoUpdate */0;
    }
  };
  var handleChange = function ($$event, param) {
    if (editing !== 0) {
      var state = param[/* state */3];
      return /* Update */Block.__(0, [/* record */[
                  /* editText */$$event.target.value,
                  /* editFieldRef */state[/* editFieldRef */1],
                  /* editing */state[/* editing */2]
                ]]);
    } else {
      return /* NoUpdate */0;
    }
  };
  var handleEdit = function (_, param) {
    var state = param[/* state */3];
    Curry._1(onEdit, /* () */0);
    return /* Update */Block.__(0, [/* record */[
                /* editText */todo[/* title */1],
                /* editFieldRef */state[/* editFieldRef */1],
                /* editing */state[/* editing */2]
              ]]);
  };
  var newrecord = component.slice();
  newrecord[/* willReceiveProps */3] = (function (param) {
      var state = param[/* state */3];
      return /* record */[
              /* editText */state[/* editText */0],
              /* editFieldRef */state[/* editFieldRef */1],
              /* editing */editing
            ];
    });
  newrecord[/* didUpdate */5] = (function (param) {
      var match = param[/* oldSelf */0][/* state */3][/* editing */2];
      var match$1 = param[/* newSelf */1][/* state */3][/* editFieldRef */1];
      if (match !== 0) {
        return /* () */0;
      } else if (editing !== 0) {
        if (match$1) {
          var field = match$1[0];
          field.focus();
          field.setSelectionRange(field.value.length, field.value.length);
          return /* () */0;
        } else {
          return /* () */0;
        }
      } else {
        return /* () */0;
      }
    });
  newrecord[/* render */9] = (function (param) {
      var update = param[/* update */2];
      var match = todo[/* completed */2];
      var className = $$String.concat(" ", /* :: */[
            match !== 0 ? "completed" : "",
            /* :: */[
              editing !== 0 ? "editing" : "",
              /* [] */0
            ]
          ]);
      return React.createElement("li", {
                  className: className
                }, React.createElement("div", {
                      className: "view"
                    }, React.createElement("input", {
                          className: "toggle",
                          checked: Js_boolean.to_js_boolean(todo[/* completed */2]),
                          type: "checkbox",
                          onChange: (function () {
                              return Curry._1(onToggle, /* () */0);
                            })
                        }), React.createElement("label", {
                          onDoubleClick: Curry._1(update, handleEdit)
                        }, todo[/* title */1]), React.createElement("button", {
                          className: "destroy",
                          onClick: (function () {
                              return Curry._1(onDestroy, /* () */0);
                            })
                        })), React.createElement("input", {
                      ref: Curry._1(update, setEditFieldRef),
                      className: "edit",
                      value: param[/* state */3][/* editText */0],
                      onKeyDown: Curry._1(update, handleKeyDown),
                      onBlur: Curry._1(update, handleSubmit),
                      onChange: Curry._1(update, handleChange)
                    }));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* editText */todo[/* title */1],
              /* editFieldRef : None */0,
              /* editing */editing
            ];
    });
  return newrecord;
}

var escapeKey = 27;

var enterKey = 13;

exports.escapeKey       = escapeKey;
exports.enterKey        = enterKey;
exports.component       = component;
exports.setEditFieldRef = setEditFieldRef;
exports.make            = make;
/* component Not a pure module */