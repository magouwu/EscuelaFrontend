const nums = [1, 2, 0]

const nums2 = [3, 4, -1, 1]

const nums3 = [7, 8, 9, 11, 12]

const find = (nums) => {
  let m = 1
  const x = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (m < nums[i]) {
      x.add(nums[i])
    } else if (m == nums[i]) {
      m = m + 1

      while (x.has(m)) {
        x.delete(m)
        m = m + 1
      }
    }
  }

  return m
}

console.log(find(nums))
console.log(find(nums2))
console.log(find(nums3))
