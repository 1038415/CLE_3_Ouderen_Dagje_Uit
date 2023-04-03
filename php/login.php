<?php
/**
 * @return array
 */
function getPerson()
{
    return [
        [
            "id" => 1,
            "name" => "Pier",

        ],
        [
            "id" => 2,
            "name" => "Helma",

        ],
        [
            "id" => 3,
            "name" => "Renske",

        ],
        [
            "id" => 4,
            "name" => "Klazina",

        ],
        [
            "id" => 5,
            "name" => "Rafaël",

        ],
        [
            "id" => 6,
            "name" => "Milou",

        ],
        [
            "id" => 7,
            "name" => "Brecht",

        ],
        [
            "id" => 8,
            "name" => "Richard",

        ],
        [
            "id" => 9,
            "name" => "Isabelle",

        ],
        [
            "id" => 10,
            "name" => "Bart",

        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
