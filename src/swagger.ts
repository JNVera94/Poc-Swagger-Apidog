import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    
    schemas: {
      alumnos: {
        type: "object",
        required: ["name", "lastname", "age", "email"],
        properties: {
          name: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          age: {
            type: "integer",
          },
          email: {
            type: "string",
          },
        },
      },
      
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/Alumno/alumno.routes.ts"],
};

export default swaggerJSDoc(swaggerOptions);