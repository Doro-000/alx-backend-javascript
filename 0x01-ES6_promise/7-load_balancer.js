export default async function loadBalancer(chinaDownload, USDownload) {
  let winner;
  await Promise.race([chinaDownload, USDownload]).then((value) => {
    winner = value;
  });
  return winner;
}
