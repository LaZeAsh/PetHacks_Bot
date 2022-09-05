import mongoose from 'mongoose';
import userModel from './models/user';
import verifyRoleModel from './models/verifyroleid';
import unverifiedRoleModel from './models/unverifiedroleid';

export async function mongo() {
    mongoose.connect(process.env.MONGO_KEY as string).then(() => console.log(`Mongo is connected`));
}

export async function createUserModel(FIRST_NAME: string, LAST_NAME: string, EMAIL: string) {
    if (await userModel.exists({ email: EMAIL })) {
        await userModel.updateMany({ firstName: FIRST_NAME, lastName: LAST_NAME });
        return false;
    } else {
        await (await userModel.create({ firstName: FIRST_NAME, lastName: LAST_NAME, email: EMAIL })).save();
        return true;
    }
}

export async function readUserModel(FIRST_NAME: string, LAST_NAME: string, EMAIL: string) {
    let data: any = "";

    await userModel.findOne({ email: EMAIL }).then((doc) => {
        if(!doc) return;
        data = doc;
    })

    if(data.firstName === FIRST_NAME && data.lastName === LAST_NAME) {
        return true;
    } else {
        return false;
    }
}

export async function createVerifyRole(GUILD_ID: string, ROLE_ID: string) {
    if(await verifyRoleModel.exists({ guildID: GUILD_ID })) {
        await verifyRoleModel.updateOne({ verifyRoleID: ROLE_ID });
        return false;
    } else {
        await (await verifyRoleModel.create({ guildID: GUILD_ID, verifyRoleID: ROLE_ID })).save();
        return true;
    }
}

export async function createUnverifiedRole(GUILD_ID: string, ROLE_ID: string) {
    if(await unverifiedRoleModel.exists({ guildID: GUILD_ID })) {
        await unverifiedRoleModel.updateOne({ unverifiedRoleID: ROLE_ID });
        return false;
    } else {
        await (await unverifiedRoleModel.create({ guildID: GUILD_ID, unverifiedRoleID: ROLE_ID })).save();
        return true;
    }
}

export async function findVerifyRole(GUILD_ID: string) {
    let roleID = "";
    await verifyRoleModel.findOne({ guildID: GUILD_ID }).then((doc) => {
        if(!doc) return;
        roleID = doc.verifyRoleID;
    })

    return roleID
}

export async function findunVerifiedRole(GUILD_ID: string) {
    let roleID = "";
    await unverifiedRoleModel.findOne({ guildID: GUILD_ID }).then((doc) => {
        if(!doc) return;
        roleID = doc.unverifiedRoleID;
    })

    return roleID
}