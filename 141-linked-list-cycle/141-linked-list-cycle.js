/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();
  while (head) {
    set.add(head);
    head = head.next;
    if (!head) return false;
    if (set.has(head)) return true;
  }

  return false;
};