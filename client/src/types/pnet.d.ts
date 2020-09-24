interface PnetProfileCard {
  id: string,
  name: string,
  name_kana: string,
  belong: string,
  image: string,
}

interface PnetProfile extends PnetProfileCard {
  self_intro: string
}

interface Tag {
  id: string,
  title: string,
  good: {
    user_id: string,
    comment: string
  }[],
  bad: {
    user_id: string,
    comment: string
  }[]
}

interface Career {
  history_id: string,
  title: string,
  year: string,
  detail: string
}

interface Hobby {
  id: string,
  title: string,
  detail: string
}

interface PnetUserInfo extends PnetProfile {
  hobby: Hobby[],
  tag: Tag[],
  career: Career[]
}
