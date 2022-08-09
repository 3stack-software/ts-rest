import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { router, routerBasic } from '@ts-rest/example-contracts';
import { generateOpenApi } from '@ts-rest/open-api';
import cors = require('cors');
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3334;

  app.use(cors());

  SwaggerModule.setup('api', app, generateOpenApi(router));

  SwaggerModule.setup('api-basic', app, generateOpenApi(routerBasic));

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
