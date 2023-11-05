//  데이터베이스에서 가져온 구독자 데이터
const subscriber = {
  email: "yunajoe@gmail.com",
  rec_count: 20,
};

// 쿠폰등급 문자열로...
const rank1 = "best";
const rank2 = "good";
const rank3 = "worst";

// coupon목록에 있는 rank를 결정하는 하는 것은  "계산" 함수
function subCouponRank() {
  if (subscriber.rec_count >= 10) {
    return "best";
  }
  return "good";
}

// 데이터베이스에서 가져온 쿠폰목록(data)
const coupon = {
  code: "xxxxx",
  rank: "good",
};

// 특적등급이 best, good, bad가 있을때 특정등급만 뽑는함수(calculate)
function selectCouponRank(coupons, rank) {
  const arr = [];
  for (let i = 0; i < coupons.length; i++) {
    let coupon = coupons[i];
    if (coupon.rank === rank) {
      arr.push(coupon.code);
    }
  }
}

// 이메일(data)
const message = {
  from: "codeCopration.co",
  to: "yunajoe@gmail.com",
  subjuect: "hi~",
  body: "todya..is a day!",
};

// 쿠폰등급에 따른 이메일를 구현하는 함수(calculate)
function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber);
  if (rank === "best") {
    return {
      from: "codeCopration.co",
      to: subscriber.email,
      subjuect: "hi~",
      body: "todya..is a day!" + bests.join(","),
    };
  } else {
    return {
      from: "codeCopration.co",
      to: subscriber.email,
      subjuect: "hi~",
      body: "todya..is a day!" + goods.join(","),
    };
  }
}

// 보낼 이메일 목록 준비하기(calculate)
function emailForSubstribers(subscribers, goods, bests) {
  const emails = [];
  for (let s = 0; s < subscribers.length; s++) {
    const sbus = subscriber[s];
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }
  return emails;
}

// 이메일보내기(action)
// fecthCouponsFromDB() , fetchSubscribersFromDB() 디비에서 데이터를 불러오는것이, 실행시점에 따라 데이터 내용이 달라지기 떄문에 action이다
function sendIssue() {
  const coupons = fecthCouponsFromDB();
  const goodCoupons = selectCouponRank(coupons, "good");
  const bestCoupons = selectCouponRank(coupons, "best");
  //   페이지 설정가능
  const page = 0;
  const subscribers = fetchSubscribersFromDB(page);
  while (subscribers.length > 0) {
    const emails = emailForSubscriber(subscribers, goodCoupons, bestCoupons);
    for (let i = 0; i < emails.length; i++) {
      const email = emails[i];
      emailSystem.send(email);
    }
    page++;
    const subscribers = fetchSubscribersFromDB(page);
  }
}
