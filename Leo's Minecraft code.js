player.onChat("dig air", function () {
    while (false) {
        blocks.fill(
        blocks.block(Block.Air),
        positions.create(-5, -5, -5),
        positions.create(5, -5, 5),
        FillOperation.Replace
        )
    }
});

player.onChat("dig tnt", function () {
    while (false) {
        blocks.fill(
        blocks.block(Block.TNT),
        positions.create(-5, -5, -5),
        positions.create(5, -1, 5),
        FillOperation.Replace
        )
    }
});

let item = 0
player.onChat("wander", function () {
    agent.teleportToPlayer()
    agent.setAssist(AgentAssist.PlaceOnMove, true)
    agent.setAssist(AgentAssist.DetroyObstacles, true)
    for (let i = 0; i < 100; i++) {
        item = Math.randomRange(0, 10)
        if (item <= 1) {
            agent.turn(TurnDirection.Left)
        } else if (item <= 3) {
            agent.turn(TurnDirection.Right)
        } else {
            agent.move(SixDirection.Forward, 1)
        }
    }
});

player.onChat("zombiepig", function () {
    mobs.spawn(mobs.animal(AnimalMob.Pig), positions.create(5, 0, 0))
    mobs.spawn(mobs.projectile(ProjectileMob.LightningBolt), positions.create(5, 0, 0))
});

player.onChat("rain", function (amount) {
    gameplay.setWeather(Weather.Rain)
    for (let i = 0; i < amount; i++) {
        mobs.spawn(mobs.animal(AnimalMob.Ocelot), positions.random(
        positions.create(10, 5, 10),
        positions.create(-10, 5, -10)
        ))
        mobs.spawn(mobs.animal(AnimalMob.Wolf), positions.random(
        positions.create(10, 5, 10),
        positions.create(-10, 5, -10)
        ))
    }
})

