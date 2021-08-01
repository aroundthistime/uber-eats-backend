import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType()
export class createRestaurantDto {
    @IsString()
    @Length(5, 10)
    @Field(type => String)
    name: string;

    @IsBoolean()
    @Field(type => Boolean)
    isVegan: boolean;

    @IsString()
    @Field(type => String)
    address: string;

    @IsString()
    @Field(type => String)
    ownerName: string;
}