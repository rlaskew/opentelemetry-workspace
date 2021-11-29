/* tracing.js */

// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");

const { SimpleSpanProcessor } = require("@opentelemetry/tracing");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const { LogLevel } = require("@opentelemetry/core");

const provider = new NodeTracerProvider({
//   logLevel: LogLevel.ERROR
})

//
provider.register()

// provider.addSpanProcessor(
//    new SimpleSpanProcessor({
//      new ZipkinExporter({
//        serviceName: 'getting-started'
//      })
//    )
//)

// Add your zipkin url (`http://localhost:9411/api/v2/spans` is used as
// default) and application name to the Zipkin options.
// You can also define your custom headers which will be added automatically.
const options = {
  headers: {
     'my-header': 'header-value',
  },
  url: 'http://localhost:9411/api/v2/spans',
  // optional interceptor
  getExportRequestHeaders: () => {
    return {
      'my-header': 'header-value',
    }
  }
}
const exporter = new ZipkinExporter(options);
//tracer.addSpanProcessor(new BatchSpanProcessor(exporter));

//
const sdk = new opentelemetry.NodeSDK({
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  //traceExporter: new BatchSpanProcessor(exporter),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()
