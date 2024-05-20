import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentsModule } from './incidents/incidents.module';
import { OperatorsModule } from './operators/operators.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
// import { StatisticsModule } from './statistics/statistics.module';
import { User } from './users/user.entity';
import { Operator } from './operators/operator.entity';
import { Incident } from './incidents/incident.entity';
import { Chat } from './chat/chat.entity';
import { Message } from './chat/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'incidentdb',
      entities: [User, Operator, Incident, Chat, Message],
      synchronize: true,
    }),
    IncidentsModule,
    OperatorsModule,
    UsersModule,
    ChatModule,
    // StatisticsModule,
  ],
})
export class AppModule {}
