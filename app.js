const images = {
  dog: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
  cat: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  rabbit: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
  bird: "https://th.bing.com/th/id/R.1b88e35949dbe05799f2c52510fd1252?rik=y%2b5hRvuT03iiug&riu=http%3a%2f%2ffree-photo.net%2fphoto_img%2f0812123257.jpg&ehk=YcEGKyBg6mSLk9AXeFI2u9GXYmy9PuXS4T5So9FI%2fHg%3d&risl=&pid=ImgRaw&r=0",
  hamster: "https://poppet.fun/wp-content/uploads/2018/12/shutterstock_1018135087-1-1024x768.png"
};

function updateImage() {
  const animal = document.getElementById("animal").value;
  document.getElementById("animalImage").src = images[animal];
}

// 初期表示
updateImage();

function checkPet() {
  const animal = document.getElementById("animal").value;
  const time = Number(document.getElementById("time").value);
  const money = Number(document.getElementById("money").value);
  const away = document.getElementById("away").value;

  let status = "";
  let message = "";
  let improve = "";
  let needTime = "";
  let needMoney = "";
  let needs = "";

  // 🐶 犬
  if (animal === "dog") {
    needTime = "60分/日";
    needMoney = "15,000円/月";
    needs = "毎日の散歩、人とのふれあい、しつけ";

    if (time >= 60 && money >= 15000 && away === "no") {
      status = "✅ 飼育可能";
      message = "この動物を飼うための条件を満たしています。";
    } else {
      status = "❌ 飼育不可能";
      message = "この動物を飼うための条件を満たしていません。";
      improve =
        "・1日60分以上の世話時間を確保する<br>" +
        "・月15,000円以上の飼育費を用意する<br>" +
        "・留守の時間を減らす";
    }
  }

  // 🐱 猫
  if (animal === "cat") {
    needTime = "30分/日";
    needMoney = "10,000円/月";
    needs = "トイレ管理、爪とぎ、健康管理";

    if (time >= 30 && money >= 10000) {
      status = "✅ 飼育可能";
      message = "この動物を飼うための条件を満たしています。";
    } else {
      status = "❌ 飼育不可能";
      message = "この動物を飼うための条件を満たしていません。";
      improve =
        "・1日30分以上の世話時間を確保する<br>" +
        "・月10,000円以上の費用を用意する";
    }
  }

  // 🐰 うさぎ（★ここを追加）
  if (animal === "rabbit") {
    needTime = "30分/日";
    needMoney = "8,000円/月";
    needs = "温度管理、ケージ掃除、健康観察";

    if (time >= 30 && money >= 8000) {
      status = "✅ 飼育可能";
      message = "この動物を飼うための条件を満たしています。";
    } else {
      status = "❌ 飼育不可能";
      message = "この動物を飼うための条件を満たしていません。";
      improve =
        "・毎日30分以上の世話時間を確保する<br>" +
        "・医療費を含めた予算を準備する";
    }
  }

  // 🐦 小鳥
  if (animal === "bird") {
    needTime = "20分/日";
    needMoney = "5,000円/月";
    needs = "毎日の世話、静かな環境、清潔なケージ";

    if (time >= 20 && money >= 5000) {
      status = "✅ 飼育可能";
      message = "この動物を飼うための条件を満たしています。";
    } else {
      status = "❌ 飼育不可能";
      message = "この動物を飼うための条件を満たしていません。";
      improve =
        "・毎日20分以上世話できる時間を確保する<br>" +
        "・飼育環境を整える";
    }
  }

  // 🐹 ハムスター
  if (animal === "hamster") {
    needTime = "10分/日";
    needMoney = "3,000円/月";
    needs = "夜行性への理解、回し車、床材交換";

    if (time >= 10 && money >= 3000) {
      status = "✅ 飼育可能";
      message = "この動物を飼うための条件を満たしています。";
    } else {
      status = "❌ 飼育不可能";
      message = "この動物を飼うための条件を満たしていません。";
      improve =
        "・毎日10分以上様子を見る<br>" +
        "・最低限の飼育費を用意する";
    }
  }

  document.getElementById("result").innerHTML = `
    <strong>${status}</strong><br><br>

    ${message}<br><br>

    <strong>必要な世話の時間</strong><br>
    ⏱ ${needTime}<br><br>

    <strong>必要なお金の目安</strong><br>
    💰 ${needMoney}<br><br>

    <strong>飼育に必要なこと</strong><br>
    🐾 ${needs}<br><br>

    ${improve ? `<strong>改善すれば飼育可能</strong><br>${improve}` : ""}
  `;
}
