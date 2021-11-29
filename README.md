# opentelemetry-workspace
Workspace for OpenTelemetry


## Notes from https://www.youtube.com/watch?v=r8UvWSX3KA8 (FreeCodeCamp Course)

### Running Zipkin
+ docker run --rm -d -p 8011:9411 --name zipkin openzipkin/zipkin

### upgrading node on Centos7 if needed: https://tecadmin.net/install-latest-nodejs-and-npm-on-centos/
+ yum install -y gcc-c++ make 
+ curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash - 

### package install
+ npm i @opentelemetry/core @opentelemetry/api @opentelemetry/node @opentelemetry/plugin-http @opentelemetry/plugin-https @opentelemetry/exporter-zipkin @opentelemetry/tracing @opentelemetry/instrumentation-http @opentelemetry/sdk-trace-node @opentelemetry/sdk-trace-base @opentelemetry/plugin-express @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node express

### this is where I paused
+ ot-sample.js -  https://opentelemetry.io/docs/js/getting-started/nodejs/
+ no-file yet - https://github.com/open-telemetry/opentelemetry-js
+ zipkin-sample.js - https://www.npmjs.com/package/@opentelemetry/exporter-zipkin
+ tracing.js - code comes from youtube walkthrough

### how to run
+ node --require './tracing.js' app.js

