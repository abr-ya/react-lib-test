export enum Colors {
  blue = "#CCE9FF",
  green = "#CFF2E1",
  light_green = "#EAF6AF",
  orange = "#FFE2C5",
  grey = "#EBEBEB",
  purple = "#E6E6FA",
}

export enum DarkColors {
  blue = "#0091FF",
  green = "#10BF6A",
  light_green = "#8EA039",
  orange = "#DE7100",
  grey = "#737373",
  purple = "#8888F6",
}

export enum ActStatusColors {
  draft = Colors.purple,
  for_approval = Colors.orange,
  approved = Colors.light_green,
  in_progress = Colors.blue,
  done = Colors.green,
  for_disbandment = Colors.grey,
  disbanded = Colors.grey,
}

export enum ActTextColors {
  draft = DarkColors.purple,
  for_approval = DarkColors.orange,
  approved = DarkColors.light_green,
  in_progress = DarkColors.blue,
  done = DarkColors.green,
  for_disbandment = DarkColors.grey,
  disbanded = DarkColors.grey,
}

export enum ProcessStatusColors {
  to_do = Colors.orange,
  in_progress = Colors.blue,
  done = Colors.green,
  not_applicable = Colors.grey,
}

export enum ProcessTextColors {
  to_do = DarkColors.orange,
  in_progress = DarkColors.blue,
  done = DarkColors.green,
  not_applicable = DarkColors.grey,
}

export enum DocStatusColors {
  "01" = Colors.orange,
  "02" = Colors.orange,
  "03" = Colors.orange,
  "04" = Colors.green,
  "05" = Colors.blue,
  "06" = Colors.grey,
  "07" = Colors.grey,
  "08" = Colors.grey,
}
