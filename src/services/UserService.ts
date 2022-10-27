export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Armando",
        email: "arneto@user.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('New insertion on DB', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
}

