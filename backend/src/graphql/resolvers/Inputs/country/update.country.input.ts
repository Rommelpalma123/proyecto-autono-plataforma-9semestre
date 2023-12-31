import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateCountryInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string
}
