// import { connectRedis } from "../Config/redis.conf";
const x=5
// export const StoreCache = async (key: string, value: string) => {
//   const client = await connectRedis();
//   await client
//     .set(key, value)
//     .then(async (res) => {
//       console.log("cache stored");
//       console.log(res);
//       await client
//         .disconnect()
//         .then(() => {
//           console.log("redis disconnected");
//         })
//         .catch((err) => {
//           throw err;
//         });
//     })
//     .catch(async (err) => {
//       await client
//         .disconnect()
//         .then(() => {
//           console.log("redis disconnected");
//         })
//         .catch((err) => {
//           throw err;
//         });
//       throw err;
//     });
// };

// export const GetCache = async (key: string) => {
//   const client = await connectRedis();
//   await client
//     .get(key)
//     .then(async (res) => {
//       console.log("cache is\n");
//       console.log(res);
//       await client
//         .disconnect()
//         .then(() => {
//           console.log("redis disconnected");
//         })
//         .catch((err) => {
//           throw err;
//         });
//     })
//     .catch(async (err) => {
//       await client
//         .disconnect()
//         .then(() => {
//           console.log("redis disconnected");
//         })
//         .catch((err) => {
//           throw err;
//         });
//       throw err;
//     });
// };
