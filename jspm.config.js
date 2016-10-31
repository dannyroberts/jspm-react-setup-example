SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "es6-demo/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "es6-demo/es6-demo.js",
        "es6-demo/helloworld.js",
        "npm:react@15.3.2/react.js",
        "npm:react@15.3.2.json",
        "npm:jspm-nodelibs-process@0.2.0/process.js",
        "npm:jspm-nodelibs-process@0.2.0.json",
        "npm:react@15.3.2/lib/React.js",
        "npm:react@15.3.2/lib/ReactElementValidator.js",
        "npm:fbjs@0.8.5/lib/warning.js",
        "npm:fbjs@0.8.5.json",
        "npm:fbjs@0.8.5/lib/emptyFunction.js",
        "npm:react@15.3.2/lib/getIteratorFn.js",
        "npm:react@15.3.2/lib/canDefineProperty.js",
        "npm:react@15.3.2/lib/checkReactTypeSpec.js",
        "npm:react@15.3.2/lib/ReactComponentTreeHook.js",
        "npm:fbjs@0.8.5/lib/invariant.js",
        "npm:react@15.3.2/lib/ReactCurrentOwner.js",
        "npm:react@15.3.2/lib/reactProdInvariant.js",
        "npm:react@15.3.2/lib/ReactPropTypesSecret.js",
        "npm:react@15.3.2/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.3.2/lib/ReactPropTypeLocations.js",
        "npm:fbjs@0.8.5/lib/keyMirror.js",
        "npm:react@15.3.2/lib/ReactElement.js",
        "npm:object-assign@4.1.0/index.js",
        "npm:object-assign@4.1.0.json",
        "npm:react@15.3.2/lib/onlyChild.js",
        "npm:react@15.3.2/lib/ReactVersion.js",
        "npm:react@15.3.2/lib/ReactPropTypes.js",
        "npm:react@15.3.2/lib/ReactDOMFactories.js",
        "npm:react@15.3.2/lib/ReactClass.js",
        "npm:fbjs@0.8.5/lib/keyOf.js",
        "npm:fbjs@0.8.5/lib/emptyObject.js",
        "npm:react@15.3.2/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.3.2/lib/ReactComponent.js",
        "npm:react@15.3.2/lib/ReactPureComponent.js",
        "npm:react@15.3.2/lib/ReactChildren.js",
        "npm:react@15.3.2/lib/traverseAllChildren.js",
        "npm:react@15.3.2/lib/KeyEscapeUtils.js",
        "npm:react@15.3.2/lib/PooledClass.js",
        "npm:systemjs-plugin-babel@0.0.17/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.17.json",
        "npm:systemjs-plugin-babel@0.0.17/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.17/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.17/babel-helpers/classCallCheck.js",
        "npm:react-dom@15.3.2/index.js",
        "npm:react-dom@15.3.2.json",
        "npm:react@15.3.2/lib/ReactDOM.js",
        "npm:react@15.3.2/lib/ReactDOMNullInputValuePropHook.js",
        "npm:react@15.3.2/lib/ReactDOMUnknownPropertyHook.js",
        "npm:react@15.3.2/lib/EventPluginRegistry.js",
        "npm:react@15.3.2/lib/DOMProperty.js",
        "npm:react@15.3.2/lib/ReactInstrumentation.js",
        "npm:react@15.3.2/lib/ReactDebugTool.js",
        "npm:fbjs@0.8.5/lib/performanceNow.js",
        "npm:fbjs@0.8.5/lib/performance.js",
        "npm:fbjs@0.8.5/lib/ExecutionEnvironment.js",
        "npm:react@15.3.2/lib/ReactChildrenMutationWarningHook.js",
        "npm:react@15.3.2/lib/ReactHostOperationHistoryHook.js",
        "npm:react@15.3.2/lib/ReactInvalidSetStateWarningHook.js",
        "npm:react@15.3.2/lib/renderSubtreeIntoContainer.js",
        "npm:react@15.3.2/lib/ReactMount.js",
        "npm:react@15.3.2/lib/shouldUpdateReactComponent.js",
        "npm:react@15.3.2/lib/setInnerHTML.js",
        "npm:react@15.3.2/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react@15.3.2/lib/DOMNamespaces.js",
        "npm:react@15.3.2/lib/instantiateReactComponent.js",
        "npm:react@15.3.2/lib/ReactHostComponent.js",
        "npm:react@15.3.2/lib/ReactEmptyComponent.js",
        "npm:react@15.3.2/lib/ReactCompositeComponent.js",
        "npm:fbjs@0.8.5/lib/shallowEqual.js",
        "npm:react@15.3.2/lib/ReactReconciler.js",
        "npm:react@15.3.2/lib/ReactRef.js",
        "npm:react@15.3.2/lib/ReactOwner.js",
        "npm:react@15.3.2/lib/ReactNodeTypes.js",
        "npm:react@15.3.2/lib/ReactInstanceMap.js",
        "npm:react@15.3.2/lib/ReactErrorUtils.js",
        "npm:react@15.3.2/lib/ReactComponentEnvironment.js",
        "npm:react@15.3.2/lib/ReactUpdates.js",
        "npm:react@15.3.2/lib/Transaction.js",
        "npm:react@15.3.2/lib/ReactFeatureFlags.js",
        "npm:react@15.3.2/lib/CallbackQueue.js",
        "npm:react@15.3.2/lib/ReactUpdateQueue.js",
        "npm:react@15.3.2/lib/ReactMarkupChecksum.js",
        "npm:react@15.3.2/lib/adler32.js",
        "npm:react@15.3.2/lib/ReactDOMFeatureFlags.js",
        "npm:react@15.3.2/lib/ReactDOMContainerInfo.js",
        "npm:react@15.3.2/lib/validateDOMNesting.js",
        "npm:react@15.3.2/lib/ReactDOMComponentTree.js",
        "npm:react@15.3.2/lib/ReactDOMComponentFlags.js",
        "npm:react@15.3.2/lib/ReactBrowserEventEmitter.js",
        "npm:react@15.3.2/lib/isEventSupported.js",
        "npm:react@15.3.2/lib/getVendorPrefixedEventName.js",
        "npm:react@15.3.2/lib/ViewportMetrics.js",
        "npm:react@15.3.2/lib/ReactEventEmitterMixin.js",
        "npm:react@15.3.2/lib/EventPluginHub.js",
        "npm:react@15.3.2/lib/forEachAccumulated.js",
        "npm:react@15.3.2/lib/accumulateInto.js",
        "npm:react@15.3.2/lib/EventPluginUtils.js",
        "npm:react@15.3.2/lib/EventConstants.js",
        "npm:react@15.3.2/lib/DOMLazyTree.js",
        "npm:react@15.3.2/lib/setTextContent.js",
        "npm:react@15.3.2/lib/escapeTextContentForBrowser.js",
        "npm:react@15.3.2/lib/getHostComponentFromComposite.js",
        "npm:react@15.3.2/lib/findDOMNode.js",
        "npm:react@15.3.2/lib/ReactDefaultInjection.js",
        "npm:react@15.3.2/lib/SimpleEventPlugin.js",
        "npm:react@15.3.2/lib/getEventCharCode.js",
        "npm:react@15.3.2/lib/SyntheticWheelEvent.js",
        "npm:react@15.3.2/lib/SyntheticMouseEvent.js",
        "npm:react@15.3.2/lib/getEventModifierState.js",
        "npm:react@15.3.2/lib/SyntheticUIEvent.js",
        "npm:react@15.3.2/lib/getEventTarget.js",
        "npm:react@15.3.2/lib/SyntheticEvent.js",
        "npm:react@15.3.2/lib/SyntheticTransitionEvent.js",
        "npm:react@15.3.2/lib/SyntheticTouchEvent.js",
        "npm:react@15.3.2/lib/SyntheticDragEvent.js",
        "npm:react@15.3.2/lib/SyntheticKeyboardEvent.js",
        "npm:react@15.3.2/lib/getEventKey.js",
        "npm:react@15.3.2/lib/SyntheticFocusEvent.js",
        "npm:react@15.3.2/lib/SyntheticClipboardEvent.js",
        "npm:react@15.3.2/lib/SyntheticAnimationEvent.js",
        "npm:react@15.3.2/lib/EventPropagators.js",
        "npm:fbjs@0.8.5/lib/EventListener.js",
        "npm:react@15.3.2/lib/SelectEventPlugin.js",
        "npm:react@15.3.2/lib/isTextInputElement.js",
        "npm:fbjs@0.8.5/lib/getActiveElement.js",
        "npm:react@15.3.2/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.5/lib/focusNode.js",
        "npm:fbjs@0.8.5/lib/containsNode.js",
        "npm:fbjs@0.8.5/lib/isTextNode.js",
        "npm:fbjs@0.8.5/lib/isNode.js",
        "npm:react@15.3.2/lib/ReactDOMSelection.js",
        "npm:react@15.3.2/lib/getTextContentAccessor.js",
        "npm:react@15.3.2/lib/getNodeForCharacterOffset.js",
        "npm:react@15.3.2/lib/SVGDOMPropertyConfig.js",
        "npm:react@15.3.2/lib/ReactReconcileTransaction.js",
        "npm:react@15.3.2/lib/ReactInjection.js",
        "npm:react@15.3.2/lib/ReactEventListener.js",
        "npm:fbjs@0.8.5/lib/getUnboundedScrollPosition.js",
        "npm:react@15.3.2/lib/ReactDefaultBatchingStrategy.js",
        "npm:react@15.3.2/lib/ReactDOMTextComponent.js",
        "npm:react@15.3.2/lib/DOMChildrenOperations.js",
        "npm:react@15.3.2/lib/ReactMultiChildUpdateTypes.js",
        "npm:react@15.3.2/lib/Danger.js",
        "npm:fbjs@0.8.5/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.5/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.5/lib/createArrayFromMixed.js",
        "npm:react@15.3.2/lib/ReactDOMTreeTraversal.js",
        "npm:react@15.3.2/lib/ReactDOMEmptyComponent.js",
        "npm:react@15.3.2/lib/ReactDOMComponent.js",
        "npm:react@15.3.2/lib/ReactServerRenderingTransaction.js",
        "npm:react@15.3.2/lib/ReactServerUpdateQueue.js",
        "npm:react@15.3.2/lib/ReactMultiChild.js",
        "npm:react@15.3.2/lib/flattenChildren.js",
        "npm:react@15.3.2/lib/ReactChildReconciler.js",
        "npm:react@15.3.2/lib/ReactDOMTextarea.js",
        "npm:react@15.3.2/lib/LinkedValueUtils.js",
        "npm:react@15.3.2/lib/DisabledInputUtils.js",
        "npm:react@15.3.2/lib/ReactDOMSelect.js",
        "npm:react@15.3.2/lib/ReactDOMOption.js",
        "npm:react@15.3.2/lib/ReactDOMInput.js",
        "npm:react@15.3.2/lib/DOMPropertyOperations.js",
        "npm:react@15.3.2/lib/quoteAttributeValueForBrowser.js",
        "npm:react@15.3.2/lib/ReactDOMButton.js",
        "npm:react@15.3.2/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.5/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.5/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.5/lib/hyphenate.js",
        "npm:react@15.3.2/lib/dangerousStyleValue.js",
        "npm:react@15.3.2/lib/CSSProperty.js",
        "npm:fbjs@0.8.5/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.5/lib/camelize.js",
        "npm:react@15.3.2/lib/AutoFocusUtils.js",
        "npm:react@15.3.2/lib/ReactComponentBrowserEnvironment.js",
        "npm:react@15.3.2/lib/ReactDOMIDOperations.js",
        "npm:react@15.3.2/lib/HTMLDOMPropertyConfig.js",
        "npm:react@15.3.2/lib/EnterLeaveEventPlugin.js",
        "npm:react@15.3.2/lib/DefaultEventPluginOrder.js",
        "npm:react@15.3.2/lib/ChangeEventPlugin.js",
        "npm:react@15.3.2/lib/BeforeInputEventPlugin.js",
        "npm:react@15.3.2/lib/SyntheticInputEvent.js",
        "npm:react@15.3.2/lib/SyntheticCompositionEvent.js",
        "npm:react@15.3.2/lib/FallbackCompositionState.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.18.0"
        }
      },
      "npm:babel-runtime@6.18.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "lodash": "npm:lodash@4.16.4",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-types@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.16.4",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "es6-demo": {
      "main": "es6-demo.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "npm:react@15.3.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.5",
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:fbjs@0.8.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.3.0",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.1"
      }
    },
    "npm:stream-http@2.4.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.8.1",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "brorand": "npm:brorand@1.0.6",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    }
  }
});
