import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    @Query(returns => [Restaurant])
    restaurants(@Args("veganOnly") veganOnly: boolean): Restaurant[] {
        return []
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
        return true
    }
}