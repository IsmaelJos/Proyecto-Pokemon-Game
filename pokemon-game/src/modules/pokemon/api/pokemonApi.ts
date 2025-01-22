import axios from "axios";
import { useState, useEffect } from 'react';

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
}
  
  export interface PokemonDetails extends Pokemon {
    abilities?: {
      ability: string;
      name: string;
    }[];
}      


