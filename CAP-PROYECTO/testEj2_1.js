let a1 = [ [ [ [1], [] ], [ [2], [ [3], [4] ] ] ], [ [ [], [5] ], [ [6], [7] ] ] ];
let a2 = [ [ [ [1], [2] ], [ [3], [4] ] ], [ [ [5], [6] ], [ [7], [] ] ] ];
let a3 = [ [ [ [1], [2] ], [ [3], [4] ] ], [ [ [5], [9] ], [ [7], [] ] ] ];
let a4 = [ [ [ [1], [2] ], [ [3], [4] ] ], [ [ [5], [6] ], [ [7], [8] ] ] ];
let a5 = [ [ [ [1], [] ], [ [2], [ [3], [4] ] ] ], [ [ [], [5] ], [ [6], [8] ] ] ];
let a6 = [ [ [ [1], [] ], [ [7], [ [3], [4] ] ] ], [ [ [], [5] ], [ [6], [7] ] ] ];

print("Test 1: Tree 1 == Tree 2 -> (true)");
same_fringe(a1,a1);
print("\n");
print("Test 2: Tree 1 != Tree 2, but same fringe -> (true)");
same_fringe(a1,a2);
print("\n");
print("Test 3: Tree 1 with fewer leaves than Tree 2 -> (false)");
same_fringe(a4,a2);
print("\n");
print("Test 4: Tree 1 with more leaves than Tree 2 -> (false)");
same_fringe(a2,a4);
print("\n");
print("Test 5: Early difference -> (false)");
same_fringe(a1,a6);
print("\n");
print("Test 6: Difference in last iteration -> (false)");
same_fringe(a1,a5);
print("\n");
