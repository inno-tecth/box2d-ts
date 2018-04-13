

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

export function b2Assert(condition: boolean, ...args: any[]): void {
  if (!condition) {
    debugger;
  }
}

export const b2_maxFloat: number = 1E+37; // FLT_MAX instead of Number.MAX_VALUE;
export const b2_epsilon: number = 1E-5; // FLT_EPSILON instead of Number.MIN_VALUE;
export const b2_epsilon_sq: number = (b2_epsilon * b2_epsilon);
export const b2_pi: number = 3.14159265359; // Math.PI;

/// @file
/// Global tuning constants based on meters-kilograms-seconds (MKS) units.
///

// Collision

/// The maximum number of contact points between two convex shapes. Do
/// not change this value.
export const b2_maxManifoldPoints: number = 2;

/// The maximum number of vertices on a convex polygon. You cannot increase
/// this too much because b2BlockAllocator has a maximum object size.
export const b2_maxPolygonVertices: number = 8;

/// This is used to fatten AABBs in the dynamic tree. This allows proxies
/// to move by a small amount without triggering a tree adjustment.
/// This is in meters.
export const b2_aabbExtension: number = 0.1;

/// This is used to fatten AABBs in the dynamic tree. This is used to predict
/// the future position based on the current displacement.
/// This is a dimensionless multiplier.
export const b2_aabbMultiplier: number = 2;

/// A small length used as a collision and constraint tolerance. Usually it is
/// chosen to be numerically significant, but visually insignificant.
export const b2_linearSlop: number = 0.008; // 0.005;

/// A small angle used as a collision and constraint tolerance. Usually it is
/// chosen to be numerically significant, but visually insignificant.
export const b2_angularSlop: number = 2 / 180 * b2_pi;

/// The radius of the polygon/edge shape skin. This should not be modified. Making
/// this smaller means polygons will have an insufficient buffer for continuous collision.
/// Making it larger may create artifacts for vertex collision.
export const b2_polygonRadius: number = 2 * b2_linearSlop;

/// Maximum number of sub-steps per contact in continuous physics simulation.
export const b2_maxSubSteps: number = 8;


// Dynamics

/// Maximum number of contacts to be handled to solve a TOI impact.
export const b2_maxTOIContacts: number = 32;

/// A velocity threshold for elastic collisions. Any collision with a relative linear
/// velocity below this threshold will be treated as inelastic.
export const b2_velocityThreshold: number = 1;

/// The maximum linear position correction used when solving constraints. This helps to
/// prevent overshoot.
export const b2_maxLinearCorrection: number = 0.2;

/// The maximum angular position correction used when solving constraints. This helps to
/// prevent overshoot.
export const b2_maxAngularCorrection: number = 8 / 180 * b2_pi;

/// The maximum linear velocity of a body. This limit is very large and is used
/// to prevent numerical problems. You shouldn't need to adjust this.
export const b2_maxTranslation: number = 2;
export const b2_maxTranslationSquared: number = b2_maxTranslation * b2_maxTranslation;

/// The maximum angular velocity of a body. This limit is very large and is used
/// to prevent numerical problems. You shouldn't need to adjust this.
export const b2_maxRotation: number = 0.5 * b2_pi;
export const b2_maxRotationSquared: number = b2_maxRotation * b2_maxRotation;

/// This scale factor controls how fast overlap is resolved. Ideally this would be 1 so
/// that overlap is removed in one time step. However using values close to 1 often lead
/// to overshoot.
export const b2_baumgarte: number = 0.2;
export const b2_toiBaumgarte: number = 0.75;


///#if B2_ENABLE_PARTICLE

// Particle

/// A symbolic constant that stands for particle allocation error.
export const b2_invalidParticleIndex: number = -1;

export const b2_maxParticleIndex: number = 0x7FFFFFFF;

/// The default distance between particles, multiplied by the particle diameter.
export const b2_particleStride: number = 0.75;

/// The minimum particle weight that produces pressure.
export const b2_minParticleWeight: number = 1.0;

/// The upper limit for particle pressure.
export const b2_maxParticlePressure: number = 0.25;

/// The upper limit for force between particles.
export const b2_maxParticleForce: number = 0.5;

/// The maximum distance between particles in a triad, multiplied by the particle diameter.
export const b2_maxTriadDistance: number = 2.0;
export const b2_maxTriadDistanceSquared: number = (b2_maxTriadDistance * b2_maxTriadDistance);

/// The initial size of particle data buffers.
export const b2_minParticleSystemBufferCapacity: number = 256;

/// The time into the future that collisions against barrier particles will be detected.
export const b2_barrierCollisionTime: number = 2.5;

///#endif


// Sleep

/// The time that a body must be still before it will go to sleep.
export const b2_timeToSleep: number = 0.5;

/// A body cannot sleep if its linear velocity is above this tolerance.
export const b2_linearSleepTolerance: number = 0.01;

/// A body cannot sleep if its angular velocity is above this tolerance.
export const b2_angularSleepTolerance: number = 2 / 180 * b2_pi;

// Memory Allocation

/// Implement this function to use your own memory allocator.
export function b2Alloc(size: number): any {
  return null;
}

/// If you implement b2Alloc, you should also implement this function.
export function b2Free(mem: any): void {
}

/// Logging function.
export function b2Log(message: string, ...args: any[]): void {
  // const args = Array.prototype.slice.call(arguments);
  // const str = goog.string.format.apply(null, args.slice(0));
  // console.log(message);
}

/// Version numbering scheme.
/// See http://en.wikipedia.org/wiki/Software_versioning
export class b2Version {
  public major: number = 0; ///< significant changes
  public minor: number = 0; ///< incremental changes
  public revision: number = 0; ///< bug fixes

  constructor(major: number = 0, minor: number = 0, revision: number = 0) {
    this.major = major;
    this.minor = minor;
    this.revision = revision;
  }

  public toString(): string {
    return this.major + "." + this.minor + "." + this.revision;
  }
}

/// Current version.
export const b2_version: b2Version = new b2Version(2, 3, 2);

export const b2_changelist: number = 313;

export function b2ParseInt(v: string): number {
  return parseInt(v, 10);
}

export function b2ParseUInt(v: string): number {
  return Math.abs(parseInt(v, 10));
}

export function b2MakeArray(length: number, init: { (i: number): any; }): any[] {
  let a: any[] = [];
  for (let i: number = 0; i < length; ++i) {
    a.push(init(i));
  }
  return a;
}

export function b2MakeNullArray(length: number): any[] {
  const a: any[] = [];
  for (let i: number = 0; i < length; ++i) {
    a.push(null);
  }
  return a;
}

export function b2MakeNumberArray(length: number, init: number = 0): number[] {
  const a: any[] = [];
  for (let i: number = 0; i < length; ++i) {
    a.push(init);
  }
  return a;
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export const b2_pi_over_180: number = b2_pi / 180;
export const b2_180_over_pi: number = 180 / b2_pi;
export const b2_two_pi: number = 2 * b2_pi;

export function b2Abs(n: number): number {
  return (n < 0) ? (-n) : (n);
}

export function b2Min(a: number, b: number): number {
  return (a < b) ? (a) : (b);
}

export function b2Max(a: number, b: number): number {
  return (a > b) ? (a) : (b);
}

export function b2Clamp(a: number, lo: number, hi: number): number {
  return (a < lo) ? (lo) : ((a > hi) ? (hi) : (a));
}

export function b2Swap(a: any[], b: any[]): void {
  ///b2Assert(false);
  const tmp: any = a[0];
  a[0] = b[0];
  b[0] = tmp;
}

/// This function is used to ensure that a floating point number is
/// not a NaN or infinity.
export function b2IsValid(n: number): boolean {
  return isFinite(n);
}

export function b2Sq(n: number): number {
  return n * n;
}

/// This is a approximate yet fast inverse square-root.
export function b2InvSqrt(n: number): number {
  return 1 / Math.sqrt(n);
}

export function b2Sqrt(n: number): number {
  return Math.sqrt(n);
}

export function b2Pow(x: number, y: number): number {
  return Math.pow(x, y);
}

export function b2DegToRad(degrees: number): number {
  return degrees * b2_pi_over_180;
}

export function b2RadToDeg(radians: number): number {
  return radians * b2_180_over_pi;
}

export function b2Cos(radians: number): number {
  return Math.cos(radians);
}

export function b2Sin(radians: number): number {
  return Math.sin(radians);
}

export function b2Acos(n: number): number {
  return Math.acos(n);
}

export function b2Asin(n: number): number {
  return Math.asin(n);
}

export function b2Atan2(y: number, x: number): number {
  return Math.atan2(y, x);
}

export function b2NextPowerOfTwo(x: number): number {
  x |= (x >> 1) & 0x7FFFFFFF;
  x |= (x >> 2) & 0x3FFFFFFF;
  x |= (x >> 4) & 0x0FFFFFFF;
  x |= (x >> 8) & 0x00FFFFFF;
  x |= (x >> 16) & 0x0000FFFF;
  return x + 1;
}

export function b2IsPowerOfTwo(x: number): boolean {
  return x > 0 && (x & (x - 1)) === 0;
}

export function b2Random(): number {
  return Math.random() * 2 - 1;
}

export function b2RandomRange(lo: number, hi: number): number {
  return (hi - lo) * Math.random() + lo;
}

/// A 2D column vector.
export class b2Vec2 {
  public static ZERO = new b2Vec2(0, 0);
  public static UNITX = new b2Vec2(1, 0);
  public static UNITY = new b2Vec2(0, 1);

  public static s_t0 = new b2Vec2();
  public static s_t1 = new b2Vec2();
  public static s_t2 = new b2Vec2();
  public static s_t3 = new b2Vec2();

  public x: number;
  public y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public Clone(): b2Vec2 {
    return new b2Vec2(this.x, this.y);
  }

  public SetZero(): b2Vec2 {
    this.x = 0;
    this.y = 0;
    return this;
  }

  public Set(x: number, y: number): b2Vec2 {
    this.x = x;
    this.y = y;
    return this;
  }

  public Copy(other: b2Vec2): b2Vec2 {
    ///b2Assert(this !== other);
    this.x = other.x;
    this.y = other.y;
    return this;
  }

  public SelfAdd(v: b2Vec2): b2Vec2 {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public SelfAddXY(x: number, y: number): b2Vec2 {
    this.x += x;
    this.y += y;
    return this;
  }

  public SelfSub(v: b2Vec2): b2Vec2 {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  public SelfSubXY(x: number, y: number): b2Vec2 {
    this.x -= x;
    this.y -= y;
    return this;
  }

  public SelfMul(s: number): b2Vec2 {
    this.x *= s;
    this.y *= s;
    return this;
  }

  public SelfMulAdd(s: number, v: b2Vec2): b2Vec2 {
    this.x += s * v.x;
    this.y += s * v.y;
    return this;
  }

  public SelfMulSub(s: number, v: b2Vec2): b2Vec2 {
    this.x -= s * v.x;
    this.y -= s * v.y;
    return this;
  }

  public Dot(v: b2Vec2): number {
    return this.x * v.x + this.y * v.y;
  }

  public Cross(v: b2Vec2): number {
    return this.x * v.y - this.y * v.x;
  }

  public Length(): number {
    const x: number = this.x, y: number = this.y;
    return Math.sqrt(x * x + y * y);
  }

  public LengthSquared(): number {
    const x: number = this.x, y: number = this.y;
    return (x * x + y * y);
  }

  public Normalize(): number {
    const length: number = this.Length();
    if (length >= b2_epsilon) {
      const inv_length: number = 1 / length;
      this.x *= inv_length;
      this.y *= inv_length;
    }
    return length;
  }

  public SelfNormalize(): b2Vec2 {
    const length: number = this.Length();
    if (length >= b2_epsilon) {
      const inv_length: number = 1 / length;
      this.x *= inv_length;
      this.y *= inv_length;
    }
    return this;
  }

  public SelfRotate(radians: number): b2Vec2 {
    const c: number = Math.cos(radians);
    const s: number = Math.sin(radians);
    const x: number = this.x;
    this.x = c * x - s * this.y;
    this.y = s * x + c * this.y;
    return this;
  }

  public IsValid(): boolean {
    return isFinite(this.x) && isFinite(this.y);
  }

  public SelfCrossVS(s: number): b2Vec2 {
    const x: number = this.x;
    this.x =  s * this.y;
    this.y = -s * x;
    return this;
  }

  public SelfCrossSV(s: number): b2Vec2 {
    const x: number = this.x;
    this.x = -s * this.y;
    this.y =  s * x;
    return this;
  }

  public SelfMinV(v: b2Vec2): b2Vec2 {
    this.x = b2Min(this.x, v.x);
    this.y = b2Min(this.y, v.y);
    return this;
  }

  public SelfMaxV(v: b2Vec2): b2Vec2 {
    this.x = b2Max(this.x, v.x);
    this.y = b2Max(this.y, v.y);
    return this;
  }

  public SelfAbs(): b2Vec2 {
    this.x = b2Abs(this.x);
    this.y = b2Abs(this.y);
    return this;
  }

  public SelfNeg(): b2Vec2 {
    this.x = (-this.x);
    this.y = (-this.y);
    return this;
  }

  public SelfSkew(): b2Vec2 {
    const x: number = this.x;
    this.x = -this.y;
    this.y = x;
    return this;
  }

  public static MakeArray(length: number): b2Vec2[] {
    return b2MakeArray(length, function (i: number): b2Vec2 { return new b2Vec2(); });
  }

  public static AbsV(v: b2Vec2, out: b2Vec2): b2Vec2 { return b2AbsV(v, out); }
  public static MinV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2MinV(a, b, out); }
  public static MaxV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2MaxV(a, b, out); }
  public static ClampV(v: b2Vec2, lo: b2Vec2, hi: b2Vec2, out: b2Vec2): b2Vec2 { return b2ClampV(v, lo, hi, out); }
  public static RotateV(v: b2Vec2, radians: number, out: b2Vec2): b2Vec2 { return b2RotateV(v, radians, out); }
  public static DotVV(a: b2Vec2, b: b2Vec2): number { return b2DotVV(a, b); }
  public static CrossVV(a: b2Vec2, b: b2Vec2): number { return b2CrossVV(a, b); }
  public static CrossVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2 { return b2CrossVS(v, s, out); }
  public static CrossVOne(v: b2Vec2, out: b2Vec2): b2Vec2 { return b2CrossVOne(v, out); }
  public static CrossSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2CrossSV(s, v, out); }
  public static CrossOneV(v: b2Vec2, out: b2Vec2): b2Vec2 { return b2CrossOneV(v, out); }
  public static AddVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2AddVV(a, b, out); }
  public static SubVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2SubVV(a, b, out); }
  public static MulSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulSV(s, v, out); }
  public static MulVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2 { return b2MulVS(v, s, out); }
  public static AddVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2AddVMulSV(a, s, b, out); }
  public static SubVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2SubVMulSV(a, s, b, out); }
  public static AddVCrossSV(a: b2Vec2, s: number, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2AddVCrossSV(a, s, v, out); }
  public static MidVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2MidVV(a, b, out); }
  public static ExtVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { return b2ExtVV(a, b, out); }
  public static IsEqualToV(a: b2Vec2, b: b2Vec2): boolean { return b2IsEqualToV(a, b); }
  public static DistanceVV(a: b2Vec2, b: b2Vec2): number { return b2DistanceVV(a, b); }
  public static DistanceSquaredVV(a: b2Vec2, b: b2Vec2): number { return b2DistanceSquaredVV(a, b); }
  public static NegV(v: b2Vec2, out: b2Vec2): b2Vec2 { return b2NegV(v, out); }
}

export const b2Vec2_zero: b2Vec2 = new b2Vec2(0, 0);

function b2AbsV(v: b2Vec2, out: b2Vec2): b2Vec2 {
  out.x = b2Abs(v.x);
  out.y = b2Abs(v.y);
  return out;
}

function b2MinV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 {
  out.x = b2Min(a.x, b.x);
  out.y = b2Min(a.y, b.y);
  return out;
}

function b2MaxV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 {
  out.x = b2Max(a.x, b.x);
  out.y = b2Max(a.y, b.y);
  return out;
}

function b2ClampV(v: b2Vec2, lo: b2Vec2, hi: b2Vec2, out: b2Vec2): b2Vec2 {
  out.x = b2Clamp(v.x, lo.x, hi.x);
  out.y = b2Clamp(v.y, lo.y, hi.y);
  return out;
}

function b2RotateV(v: b2Vec2, radians: number, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x, v_y: number = v.y;
  const c: number = Math.cos(radians);
  const s: number = Math.sin(radians);
  out.x = c * v_x - s * v_y;
  out.y = s * v_x + c * v_y;
  return out;
}

function b2DotVV(a: b2Vec2, b: b2Vec2): number {
  return a.x * b.x + a.y * b.y;
}

function b2CrossVV(a: b2Vec2, b: b2Vec2): number {
  return a.x * b.y - a.y * b.x;
}

function b2CrossVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x;
  out.x =  s * v.y;
  out.y = -s * v_x;
  return out;
}

function b2CrossVOne(v: b2Vec2, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x;
  out.x =  v.y;
  out.y = -v_x;
  return out;
}

function b2CrossSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x;
  out.x = -s * v.y;
  out.y =  s * v_x;
  return out;
}

function b2CrossOneV(v: b2Vec2, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x;
  out.x = -v.y;
  out.y =  v_x;
  return out;
}

function b2AddVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = a.x + b.x; out.y = a.y + b.y; return out; }

function b2SubVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = a.x - b.x; out.y = a.y - b.y; return out; }

function b2MulSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2 { out.x = v.x * s; out.y = v.y * s; return out; }
function b2MulVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2 { out.x = v.x * s; out.y = v.y * s; return out; }

function b2AddVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = a.x + (s * b.x); out.y = a.y + (s * b.y); return out; }
function b2SubVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = a.x - (s * b.x); out.y = a.y - (s * b.y); return out; }

function b2AddVCrossSV(a: b2Vec2, s: number, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x;
  out.x = a.x - (s * v.y);
  out.y = a.y + (s * v_x);
  return out;
}

function b2MidVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = (a.x + b.x) * 0.5; out.y = (a.y + b.y) * 0.5; return out; }

function b2ExtVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2 { out.x = (b.x - a.x) * 0.5; out.y = (b.y - a.y) * 0.5; return out; }

function b2IsEqualToV(a: b2Vec2, b: b2Vec2): boolean {
  return a.x === b.x && a.y === b.y;
}

function b2DistanceVV(a: b2Vec2, b: b2Vec2): number {
  const c_x: number = a.x - b.x;
  const c_y: number = a.y - b.y;
  return Math.sqrt(c_x * c_x + c_y * c_y);
}

function b2DistanceSquaredVV(a: b2Vec2, b: b2Vec2): number {
  const c_x: number = a.x - b.x;
  const c_y: number = a.y - b.y;
  return (c_x * c_x + c_y * c_y);
}

function b2NegV(v: b2Vec2, out: b2Vec2): b2Vec2 { out.x = -v.x; out.y = -v.y; return out; }

/// A 2D column vector with 3 elements.
export class b2Vec3 {
  public static ZERO = new b2Vec3(0, 0, 0);

  public static s_t0 = new b2Vec3();

  public x: number;
  public y: number;
  public z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public Clone(): b2Vec3 {
    return new b2Vec3(this.x, this.y, this.z);
  }

  public SetZero(): b2Vec3 {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  }

  public SetXYZ(x: number, y: number, z: number): b2Vec3 {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public Copy(other: b2Vec3): b2Vec3 {
    ///b2Assert(this !== other);
    this.x = other.x;
    this.y = other.y;
    this.z = other.z;
    return this;
  }

  public SelfNeg(): b2Vec3 {
    this.x = (-this.x);
    this.y = (-this.y);
    this.z = (-this.z);
    return this;
  }

  public SelfAdd(v: b2Vec3): b2Vec3 {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public SelfAddXYZ(x: number, y: number, z: number): b2Vec3 {
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  public SelfSub(v: b2Vec3): b2Vec3 {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  public SelfSubXYZ(x: number, y: number, z: number): b2Vec3 {
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  public SelfMul(s: number): b2Vec3 {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  public static DotV3V3(a: b2Vec3, b: b2Vec3): number { return b2DotV3V3(a, b); }
  public static CrossV3V3(a: b2Vec3, b: b2Vec3, out: b2Vec3): b2Vec3 { return b2CrossV3V3(a, b, out); }
}

function b2DotV3V3(a: b2Vec3, b: b2Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function b2CrossV3V3(a: b2Vec3, b: b2Vec3, out: b2Vec3): b2Vec3 {
  const a_x: number = a.x, a_y = a.y, a_z = a.z;
  const b_x: number = b.x, b_y = b.y, b_z = b.z;
  out.x = a_y * b_z - a_z * b_y;
  out.y = a_z * b_x - a_x * b_z;
  out.z = a_x * b_y - a_y * b_x;
  return out;
}

/// A 2-by-2 matrix. Stored in column-major order.
export class b2Mat22 {
  public static IDENTITY = new b2Mat22();

  public ex: b2Vec2 = new b2Vec2(1, 0);
  public ey: b2Vec2 = new b2Vec2(0, 1);

  public Clone(): b2Mat22 {
    return new b2Mat22().Copy(this);
  }

  public static FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22 {
    return new b2Mat22().SetVV(c1, c2);
  }

  public static FromSSSS(r1c1: number, r1c2: number, r2c1: number, r2c2: number): b2Mat22 {
    return new b2Mat22().SetSSSS(r1c1, r1c2, r2c1, r2c2);
  }

  public static FromAngle(radians: number): b2Mat22 {
    return new b2Mat22().SetAngle(radians);
  }

  public SetSSSS(r1c1: number, r1c2: number, r2c1: number, r2c2: number): b2Mat22 {
    this.ex.Set(r1c1, r2c1);
    this.ey.Set(r1c2, r2c2);
    return this;
  }

  public SetVV(c1: b2Vec2, c2: b2Vec2): b2Mat22 {
    this.ex.Copy(c1);
    this.ey.Copy(c2);
    return this;
  }

  public SetAngle(radians: number): b2Mat22 {
    const c: number = Math.cos(radians);
    const s: number = Math.sin(radians);
    this.ex.Set( c, s);
    this.ey.Set(-s, c);
    return this;
  }

  public Copy(other: b2Mat22): b2Mat22 {
    ///b2Assert(this !== other);
    this.ex.Copy(other.ex);
    this.ey.Copy(other.ey);
    return this;
  }

  public SetIdentity(): b2Mat22 {
    this.ex.Set(1, 0);
    this.ey.Set(0, 1);
    return this;
  }

  public SetZero(): b2Mat22 {
    this.ex.SetZero();
    this.ey.SetZero();
    return this;
  }

  public GetAngle(): number {
    return Math.atan2(this.ex.y, this.ex.x);
  }

  public GetInverse(out: b2Mat22): b2Mat22 {
    const a: number = this.ex.x;
    const b: number = this.ey.x;
    const c: number = this.ex.y;
    const d: number = this.ey.y;
    let det: number = a * d - b * c;
    if (det !== 0) {
      det = 1 / det;
    }
    out.ex.x =   det * d;
    out.ey.x = (-det * b);
    out.ex.y = (-det * c);
    out.ey.y =   det * a;
    return out;
  }

  public Solve(b_x: number, b_y: number, out: b2Vec2): b2Vec2 {
    const a11: number = this.ex.x, a12 = this.ey.x;
    const a21: number = this.ex.y, a22 = this.ey.y;
    let det: number = a11 * a22 - a12 * a21;
    if (det !== 0) {
      det = 1 / det;
    }
    out.x = det * (a22 * b_x - a12 * b_y);
    out.y = det * (a11 * b_y - a21 * b_x);
    return out;
  }

  public SelfAbs(): b2Mat22 {
    this.ex.SelfAbs();
    this.ey.SelfAbs();
    return this;
  }

  public SelfInv(): b2Mat22 {
    return this.GetInverse(this);
  }

  public SelfAddM(M: b2Mat22): b2Mat22 {
    this.ex.SelfAdd(M.ex);
    this.ey.SelfAdd(M.ey);
    return this;
  }

  public SelfSubM(M: b2Mat22): b2Mat22 {
    this.ex.SelfSub(M.ex);
    this.ey.SelfSub(M.ey);
    return this;
  }

  public static AbsM(M: b2Mat22, out: b2Mat22): b2Mat22 { return b2AbsM(M, out); }
  public static MulMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulMV(M, v, out); }
  public static MulTMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulTMV(M, v, out); }
  public static AddMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 { return b2AddMM(A, B, out); }
  public static MulMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 { return b2MulMM(A, B, out); }
  public static MulTMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 { return b2MulTMM(A, B, out); }
}

function b2AbsM(M: b2Mat22, out: b2Mat22): b2Mat22 {
  const M_ex: b2Vec2 = M.ex, M_ey: b2Vec2 = M.ey;
  out.ex.x = b2Abs(M_ex.x);
  out.ex.y = b2Abs(M_ex.y);
  out.ey.x = b2Abs(M_ey.x);
  out.ey.y = b2Abs(M_ey.y);
  return out;
}

function b2MulMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const M_ex: b2Vec2 = M.ex, M_ey: b2Vec2 = M.ey;
  const v_x: number = v.x, v_y: number = v.y;
  out.x = M_ex.x * v_x + M_ey.x * v_y;
  out.y = M_ex.y * v_x + M_ey.y * v_y;
  return out;
}

function b2MulTMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const M_ex: b2Vec2 = M.ex, M_ey: b2Vec2 = M.ey;
  const v_x: number = v.x, v_y: number = v.y;
  out.x = M_ex.x * v_x + M_ex.y * v_y;
  out.y = M_ey.x * v_x + M_ey.y * v_y;
  return out;
}

function b2AddMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 {
  const A_ex: b2Vec2 = A.ex, A_ey: b2Vec2 = A.ey;
  const B_ex: b2Vec2 = B.ex, B_ey: b2Vec2 = B.ey;
  out.ex.x = A_ex.x + B_ex.x;
  out.ex.y = A_ex.y + B_ex.y;
  out.ey.x = A_ey.x + B_ey.x;
  out.ey.y = A_ey.y + B_ey.y;
  return out;
}

function b2MulMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 {
  const A_ex_x: number = A.ex.x, A_ex_y: number = A.ex.y;
  const A_ey_x: number = A.ey.x, A_ey_y: number = A.ey.y;
  const B_ex_x: number = B.ex.x, B_ex_y: number = B.ex.y;
  const B_ey_x: number = B.ey.x, B_ey_y: number = B.ey.y;
  out.ex.x = A_ex_x * B_ex_x + A_ey_x * B_ex_y;
  out.ex.y = A_ex_y * B_ex_x + A_ey_y * B_ex_y;
  out.ey.x = A_ex_x * B_ey_x + A_ey_x * B_ey_y;
  out.ey.y = A_ex_y * B_ey_x + A_ey_y * B_ey_y;
  return out;
}

function b2MulTMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22 {
  const A_ex_x: number = A.ex.x, A_ex_y: number = A.ex.y;
  const A_ey_x: number = A.ey.x, A_ey_y: number = A.ey.y;
  const B_ex_x: number = B.ex.x, B_ex_y: number = B.ex.y;
  const B_ey_x: number = B.ey.x, B_ey_y: number = B.ey.y;
  out.ex.x = A_ex_x * B_ex_x + A_ex_y * B_ex_y;
  out.ex.y = A_ey_x * B_ex_x + A_ey_y * B_ex_y;
  out.ey.x = A_ex_x * B_ey_x + A_ex_y * B_ey_y;
  out.ey.y = A_ey_x * B_ey_x + A_ey_y * B_ey_y;
  return out;
}

/// A 3-by-3 matrix. Stored in column-major order.
export class b2Mat33 {
  public static IDENTITY = new b2Mat33();

  public ex: b2Vec3 = new b2Vec3(1, 0, 0);
  public ey: b2Vec3 = new b2Vec3(0, 1, 0);
  public ez: b2Vec3 = new b2Vec3(0, 0, 1);

  public Clone(): b2Mat33 {
    return new b2Mat33().Copy(this);
  }

  public SetVVV(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): b2Mat33 {
    this.ex.Copy(c1);
    this.ey.Copy(c2);
    this.ez.Copy(c3);
    return this;
  }

  public Copy(other: b2Mat33): b2Mat33 {
    ///b2Assert(this !== other);
    this.ex.Copy(other.ex);
    this.ey.Copy(other.ey);
    this.ez.Copy(other.ez);
    return this;
  }

  public SetIdentity(): b2Mat33 {
    this.ex.SetXYZ(1, 0, 0);
    this.ey.SetXYZ(0, 1, 0);
    this.ez.SetXYZ(0, 0, 1);
    return this;
  }

  public SetZero(): b2Mat33 {
    this.ex.SetZero();
    this.ey.SetZero();
    this.ez.SetZero();
    return this;
  }

  public SelfAddM(M: b2Mat33): b2Mat33 {
    this.ex.SelfAdd(M.ex);
    this.ey.SelfAdd(M.ey);
    this.ez.SelfAdd(M.ez);
    return this;
  }

  public Solve33(b_x: number, b_y: number, b_z: number, out: b2Vec3): b2Vec3 {
    const a11: number = this.ex.x, a21: number = this.ex.y, a31: number = this.ex.z;
    const a12: number = this.ey.x, a22: number = this.ey.y, a32: number = this.ey.z;
    const a13: number = this.ez.x, a23: number = this.ez.y, a33: number = this.ez.z;
    let det: number = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
    if (det !== 0) {
      det = 1 / det;
    }
    out.x = det * (b_x * (a22 * a33 - a32 * a23) + b_y * (a32 * a13 - a12 * a33) + b_z * (a12 * a23 - a22 * a13));
    out.y = det * (a11 * (b_y * a33 - b_z * a23) + a21 * (b_z * a13 - b_x * a33) + a31 * (b_x * a23 - b_y * a13));
    out.z = det * (a11 * (a22 * b_z - a32 * b_y) + a21 * (a32 * b_x - a12 * b_z) + a31 * (a12 * b_y - a22 * b_x));
    return out;
  }

  public Solve22(b_x: number, b_y: number, out: b2Vec2): b2Vec2 {
    const a11: number = this.ex.x, a12: number = this.ey.x;
    const a21: number = this.ex.y, a22: number = this.ey.y;
    let det: number = a11 * a22 - a12 * a21;
    if (det !== 0) {
      det = 1 / det;
    }
    out.x = det * (a22 * b_x - a12 * b_y);
    out.y = det * (a11 * b_y - a21 * b_x);
    return out;
  }

  public GetInverse22(M: b2Mat33): void {
    const a: number = this.ex.x, b: number = this.ey.x, c: number = this.ex.y, d: number = this.ey.y;
    let det: number = a * d - b * c;
    if (det !== 0) {
      det = 1 / det;
    }

    M.ex.x =  det * d; M.ey.x = -det * b; M.ex.z = 0;
    M.ex.y = -det * c; M.ey.y =  det * a; M.ey.z = 0;
    M.ez.x =        0; M.ez.y =        0; M.ez.z = 0;
  }

  public GetSymInverse33(M: b2Mat33): void {
    let det: number = b2DotV3V3(this.ex, b2CrossV3V3(this.ey, this.ez, b2Vec3.s_t0));
    if (det !== 0) {
      det = 1 / det;
    }

    const a11: number = this.ex.x, a12: number = this.ey.x, a13: number = this.ez.x;
    const a22: number = this.ey.y, a23: number = this.ez.y;
    const a33: number = this.ez.z;

    M.ex.x = det * (a22 * a33 - a23 * a23);
    M.ex.y = det * (a13 * a23 - a12 * a33);
    M.ex.z = det * (a12 * a23 - a13 * a22);

    M.ey.x = M.ex.y;
    M.ey.y = det * (a11 * a33 - a13 * a13);
    M.ey.z = det * (a13 * a12 - a11 * a23);

    M.ez.x = M.ex.z;
    M.ez.y = M.ey.z;
    M.ez.z = det * (a11 * a22 - a12 * a12);
  }

  public static MulM33V3(A: b2Mat33, v: b2Vec3, out: b2Vec3): b2Vec3 { return b2MulM33V3(A, v, out); }
  public static MulM33XYZ(A: b2Mat33, x: number, y: number, z: number, out: b2Vec3): b2Vec3 { return b2MulM33XYZ(A, x, y, z, out); }
  public static MulM33V2(A: b2Mat33, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulM33V2(A, v, out); }
  public static MulM33XY(A: b2Mat33, x: number, y: number, out: b2Vec2): b2Vec2 { return b2MulM33XY(A, x, y, out); }
}

function b2MulM33V3(A: b2Mat33, v: b2Vec3, out: b2Vec3): b2Vec3 {
  const v_x: number = v.x, v_y: number = v.y, v_z: number = v.z;
  out.x = A.ex.x * v_x + A.ey.x * v_y + A.ez.x * v_z;
  out.y = A.ex.y * v_x + A.ey.y * v_y + A.ez.y * v_z;
  out.z = A.ex.z * v_x + A.ey.z * v_y + A.ez.z * v_z;
  return out;
}
function b2MulM33XYZ(A: b2Mat33, x: number, y: number, z: number, out: b2Vec3): b2Vec3 {
  out.x = A.ex.x * x + A.ey.x * y + A.ez.x * z;
  out.y = A.ex.y * x + A.ey.y * y + A.ez.y * z;
  out.z = A.ex.z * x + A.ey.z * y + A.ez.z * z;
  return out;
}
function b2MulM33V2(A: b2Mat33, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const v_x: number = v.x, v_y: number = v.y;
  out.x = A.ex.x * v_x + A.ey.x * v_y;
  out.y = A.ex.y * v_x + A.ey.y * v_y;
  return out;
}
function b2MulM33XY(A: b2Mat33, x: number, y: number, out: b2Vec2): b2Vec2 {
  out.x = A.ex.x * x + A.ey.x * y;
  out.y = A.ex.y * x + A.ey.y * y;
  return out;
}

/// Rotation
export class b2Rot {
  public static IDENTITY = new b2Rot();

  public s: number = 0;
  public c: number = 1;

  constructor(angle: number = 0) {
    if (angle) {
      this.s = Math.sin(angle);
      this.c = Math.cos(angle);
    }
  }

  public Clone(): b2Rot {
    return new b2Rot().Copy(this);
  }

  public Copy(other: b2Rot): b2Rot {
    this.s = other.s;
    this.c = other.c;
    return this;
  }

  public SetAngle(angle: number): b2Rot {
    this.s = Math.sin(angle);
    this.c = Math.cos(angle);
    return this;
  }

  public SetIdentity(): b2Rot {
    this.s = 0;
    this.c = 1;
    return this;
  }

  public GetAngle(): number {
    return Math.atan2(this.s, this.c);
  }

  public GetXAxis(out: b2Vec2): b2Vec2 {
    out.x = this.c;
    out.y = this.s;
    return out;
  }

  public GetYAxis(out: b2Vec2): b2Vec2 {
    out.x = -this.s;
    out.y = this.c;
    return out;
  }

  public static MulRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot { return b2MulRR(q, r, out); }
  public static MulTRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot { return b2MulTRR(q, r, out); }
  public static MulRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulRV(q, v, out); }
  public static MulTRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulTRV(q, v, out); }
}

function b2MulRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot {
  // [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
  // [qs  qc]   [rs  rc]   [qs*rc+qc*rs -qs*rs+qc*rc]
  // s = qs * rc + qc * rs
  // c = qc * rc - qs * rs
  const q_c: number = q.c, q_s: number = q.s;
  const r_c: number = r.c, r_s: number = r.s;
  out.s = q_s * r_c + q_c * r_s;
  out.c = q_c * r_c - q_s * r_s;
  return out;
}

function b2MulTRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot {
  // [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
  // [-qs qc]   [rs  rc]   [-qs*rc+qc*rs qs*rs+qc*rc]
  // s = qc * rs - qs * rc
  // c = qc * rc + qs * rs
  const q_c: number = q.c, q_s: number = q.s;
  const r_c: number = r.c, r_s: number = r.s;
  out.s = q_c * r_s - q_s * r_c;
  out.c = q_c * r_c + q_s * r_s;
  return out;
}

function b2MulRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const q_c: number = q.c, q_s: number = q.s;
  const v_x: number = v.x, v_y: number = v.y;
  out.x = q_c * v_x - q_s * v_y;
  out.y = q_s * v_x + q_c * v_y;
  return out;
}

function b2MulTRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2 {
  const q_c: number = q.c, q_s: number = q.s;
  const v_x: number = v.x, v_y: number = v.y;
  out.x =  q_c * v_x + q_s * v_y;
  out.y = -q_s * v_x + q_c * v_y;
  return out;
}

/// A transform contains translation and rotation. It is used to represent
/// the position and orientation of rigid frames.
export class b2Transform {
  public static IDENTITY = new b2Transform();

  public p: b2Vec2 = new b2Vec2();
  public q: b2Rot = new b2Rot();

  public Clone(): b2Transform {
    return new b2Transform().Copy(this);
  }

  public Copy(other: b2Transform): b2Transform {
    ///b2Assert(this !== other);
    this.p.Copy(other.p);
    this.q.Copy(other.q);
    return this;
  }

  public SetIdentity(): b2Transform {
    this.p.SetZero();
    this.q.SetIdentity();
    return this;
  }

  public SetPositionRotation(position: b2Vec2, q: b2Rot): b2Transform {
    this.p.Copy(position);
    this.q.Copy(q);
    return this;
  }

  public SetPositionAngle(pos: b2Vec2, a: number): b2Transform {
    this.p.Copy(pos);
    this.q.SetAngle(a);
    return this;
  }

  public SetPosition(position: b2Vec2): b2Transform {
    this.p.Copy(position);
    return this;
  }

  public SetPositionXY(x: number, y: number): b2Transform {
    this.p.Set(x, y);
    return this;
  }

  public SetRotation(rotation: b2Rot): b2Transform {
    this.q.Copy(rotation);
    return this;
  }

  public SetRotationAngle(radians: number): b2Transform {
    this.q.SetAngle(radians);
    return this;
  }

  public GetPosition(): b2Vec2 {
    return this.p;
  }

  public GetRotation(): b2Rot {
    return this.q;
  }

  public GetRotationAngle(): number {
    return this.q.GetAngle();
  }

  public GetAngle(): number {
    return this.q.GetAngle();
  }

  public static MulXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulXV(T, v, out); }
  public static MulTXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2 { return b2MulTXV(T, v, out); }
  public static MulXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform { return b2MulXX(A, B, out); }
  public static MulTXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform { return b2MulTXX(A, B, out); }
}

function b2MulXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2 {
//  float32 x = (T.q.c * v.x - T.q.s * v.y) + T.p.x;
//  float32 y = (T.q.s * v.x + T.q.c * v.y) + T.p.y;
//
//  return b2Vec2(x, y);
  const T_q_c: number = T.q.c, T_q_s: number = T.q.s;
  const v_x: number = v.x, v_y: number = v.y;
  out.x = (T_q_c * v_x - T_q_s * v_y) + T.p.x;
  out.y = (T_q_s * v_x + T_q_c * v_y) + T.p.y;
  return out;
}

function b2MulTXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2 {
//  float32 px = v.x - T.p.x;
//  float32 py = v.y - T.p.y;
//  float32 x = (T.q.c * px + T.q.s * py);
//  float32 y = (-T.q.s * px + T.q.c * py);
//
//  return b2Vec2(x, y);
  const T_q_c: number = T.q.c, T_q_s: number = T.q.s;
  const p_x: number = v.x - T.p.x;
  const p_y: number = v.y - T.p.y;
  out.x = ( T_q_c * p_x + T_q_s * p_y);
  out.y = (-T_q_s * p_x + T_q_c * p_y);
  return out;
}

function b2MulXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform {
  b2MulRR(A.q, B.q, out.q);
  b2AddVV(b2MulRV(A.q, B.p, out.p), A.p, out.p);
  return out;
}

function b2MulTXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform {
  b2MulTRR(A.q, B.q, out.q);
  b2MulTRV(A.q, b2SubVV(B.p, A.p, out.p), out.p);
  return out;
}

/// This describes the motion of a body/shape for TOI computation.
/// Shapes are defined with respect to the body origin, which may
/// no coincide with the center of mass. However, to support dynamics
/// we must interpolate the center of mass position.
export class b2Sweep {
  public localCenter: b2Vec2 = new b2Vec2();
  public c0: b2Vec2 = new b2Vec2();
  public c: b2Vec2 = new b2Vec2();
  public a0: number = 0;
  public a: number = 0;
  public alpha0: number = 0;

  public Clone(): b2Sweep {
    return new b2Sweep().Copy(this);
  }

  public Copy(other: b2Sweep): b2Sweep {
    ///b2Assert(this !== other);
    this.localCenter.Copy(other.localCenter);
    this.c0.Copy(other.c0);
    this.c.Copy(other.c);
    this.a0 = other.a0;
    this.a = other.a;
    this.alpha0 = other.alpha0;
    return this;
  }

  public GetTransform(xf: b2Transform, beta: number): b2Transform {
    const one_minus_beta: number = (1 - beta);
    xf.p.x = one_minus_beta * this.c0.x + beta * this.c.x;
    xf.p.y = one_minus_beta * this.c0.y + beta * this.c.y;
    const angle: number = one_minus_beta * this.a0 + beta * this.a;
    xf.q.SetAngle(angle);

    xf.p.SelfSub(b2MulRV(xf.q, this.localCenter, b2Vec2.s_t0));
    return xf;
  }

  public Advance(alpha: number): void {
    ///b2Assert(this.alpha0 < 1);
    const beta: number = (alpha - this.alpha0) / (1 - this.alpha0);
    const one_minus_beta: number = (1 - beta);
    this.c0.x = one_minus_beta * this.c0.x + beta * this.c.x;
    this.c0.y = one_minus_beta * this.c0.y + beta * this.c.y;
    this.a0 = one_minus_beta * this.a0 + beta * this.a;
    this.alpha0 = alpha;
  }

  public Normalize(): void {
    const d: number = b2_two_pi * Math.floor(this.a0 / b2_two_pi);
    this.a0 -= d;
    this.a -= d;
  }
}

/*
* Copyright (c) 2011 Erin Catto http://box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Color for debug drawing. Each value has the range [0,1].
export class b2Color {
  public static RED: b2Color = new b2Color(1, 0, 0);
  public static GREEN: b2Color = new b2Color(0, 1, 0);
  public static BLUE: b2Color = new b2Color(0, 0, 1);

  public r: number;
  public g: number;
  public b: number;
  public a: number;

  constructor(rr: number = 0.5, gg: number = 0.5, bb: number = 0.5, aa: number = 1.0) {
    this.r = rr;
    this.g = gg;
    this.b = bb;
    this.a = aa;
  }

  public Clone(): b2Color {
    return new b2Color().Copy(this);
  }

  public Copy(other: b2Color): b2Color {
    this.r = other.r;
    this.g = other.g;
    this.b = other.b;
    this.a = other.a;
    return this;
  }

  public IsEqual(color: b2Color): boolean {
    return (this.r === color.r) && (this.g === color.g) && (this.b === color.b) && (this.a === color.a);
  }

  public IsZero(): boolean {
    return (this.r === 0) && (this.g === 0) && (this.b === 0) && (this.a === 0);
  }

  public GetColor(out: b2Color): b2Color {
    out.Copy(this);
    return out;
  }

  public SetColor(color: b2Color): void {
    this.Copy(color);
  }

  public Set(a0: number | b2Color, a1?: number, a2?: number, a3: number = 1.0): void {
    if (a0 instanceof b2Color) {
      this.Copy(a0);
    } else {
      this.SetRGBA(a0, a1, a2, a3);
    }
  }

  public SetRGB(rr: number, gg: number, bb: number): b2Color {
    this.r = rr;
    this.g = gg;
    this.b = bb;
    return this;
  }

  public SetRGBA(rr: number, gg: number, bb: number, aa: number): b2Color {
    this.r = rr;
    this.g = gg;
    this.b = bb;
    this.a = aa;
    return this;
  }

  public SelfAdd(color: b2Color): b2Color {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    this.a += color.a;
    return this;
  }

  public Add(color: b2Color, out: b2Color): b2Color {
    out.r = this.r + color.r;
    out.g = this.g + color.g;
    out.b = this.b + color.b;
    out.a = this.a + color.a;
    return out;
  }

  public SelfSub(color: b2Color): b2Color {
    this.r -= color.r;
    this.g -= color.g;
    this.b -= color.b;
    this.a -= color.a;
    return this;
  }

  public Sub(color: b2Color, out: b2Color): b2Color {
    out.r = this.r - color.r;
    out.g = this.g - color.g;
    out.b = this.b - color.b;
    out.a = this.a - color.a;
    return out;
  }

  public SelfMul_0_1(s: number): b2Color {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    this.a *= s;
    return this;
  }

  public Mul_0_1(s: number, out: b2Color): b2Color {
    out.r = this.r * s;
    out.g = this.g * s;
    out.b = this.b * s;
    out.a = this.a * s;
    return this;
  }

  public Mix(mixColor: b2Color, strength: number): void {
    b2Color.MixColors(this, mixColor, strength);
  }

  public static MixColors(colorA: b2Color, colorB: b2Color, strength: number): void {
    const dr = (strength * (colorB.r - colorA.r));
    const dg = (strength * (colorB.g - colorA.g));
    const db = (strength * (colorB.b - colorA.b));
    const da = (strength * (colorB.a - colorA.a));
    colorA.r += dr;
    colorA.g += dg;
    colorA.b += db;
    colorA.a += da;
    colorB.r -= dr;
    colorB.g -= dg;
    colorB.b -= db;
    colorB.a -= da;
  }

  public MakeStyleString(alpha: number = this.a): string {
    return b2Color.MakeStyleString(this.r, this.g, this.b, alpha);
  }

  public static MakeStyleString(r: number, g: number, b: number, a: number = 1.0): string {
    r = Math.round(Math.max(0, Math.min(255, r * 255)));
    g = Math.round(Math.max(0, Math.min(255, g * 255)));
    b = Math.round(Math.max(0, Math.min(255, b * 255)));
    a = Math.max(0, Math.min(1, a));
    if (a < 1.0) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
      return "rgb(" + r + "," + g + "," + b + ")";
    }
  }
}

export const enum b2DrawFlags {
  e_none = 0,
  e_shapeBit = 0x0001, ///< draw shapes
  e_jointBit = 0x0002, ///< draw joint connections
  e_aabbBit = 0x0004, ///< draw axis aligned bounding boxes
  e_pairBit = 0x0008, ///< draw broad-phase pairs
  e_centerOfMassBit = 0x0010, ///< draw center of mass frame
  ///#if B2_ENABLE_PARTICLE
  e_particleBit = 0x0020, ///< draw particles
  ///#endif
  e_controllerBit = 0x0040, /// @see b2Controller list
  e_all = 0x003f
}

/// Implement and register this class with a b2World to provide debug drawing of physics
/// entities in your game.
export class b2Draw {
  public m_drawFlags: b2DrawFlags = 0;

  public SetFlags(flags: b2DrawFlags): void {
    this.m_drawFlags = flags;
  }

  public GetFlags(): b2DrawFlags {
    return this.m_drawFlags;
  }

  public AppendFlags(flags: b2DrawFlags): void {
    this.m_drawFlags |= flags;
  }

  public ClearFlags(flags: b2DrawFlags): void {
    this.m_drawFlags &= ~flags;
  }

  public PushTransform(xf: b2Transform): void {}

  public PopTransform(xf: b2Transform): void {}

  public DrawPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void {}

  public DrawSolidPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void {}

  public DrawCircle(center: b2Vec2, radius: number, color: b2Color): void {}

  public DrawSolidCircle(center: b2Vec2, radius: number, axis: b2Vec2, color: b2Color): void {}

  ///#if B2_ENABLE_PARTICLE
  public DrawParticles(centers: b2Vec2[], radius: number, colors: b2Color[], count: number): void {}
  ///#endif

  public DrawSegment(p1: b2Vec2, p2: b2Vec2, color: b2Color): void {}

  public DrawTransform(xf: b2Transform): void {}
}

/*
* Copyright (c) 2011 Erin Catto http://box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

/// Timer for profiling. This has platform specific code and may
/// not work on every platform.
export class b2Timer {
  public m_start: number = Date.now();

  /// Reset the timer.
  public Reset(): b2Timer {
    this.m_start = Date.now();
    return this;
  }

  /// Get the time since construction or the last reset.
  public GetMilliseconds(): number {
    return Date.now() - this.m_start;
  }
}

export class b2Counter {
  public m_count: number = 0;
  public m_min_count: number = 0;
  public m_max_count: number = 0;

  public GetCount(): number {
    return this.m_count;
  }

  public GetMinCount(): number {
    return this.m_min_count;
  }

  public GetMaxCount(): number {
    return this.m_max_count;
  }

  public ResetCount(): number {
    const count: number = this.m_count;
    this.m_count = 0;
    return count;
  }

  public ResetMinCount(): void {
    this.m_min_count = 0;
  }

  public ResetMaxCount(): void {
    this.m_max_count = 0;
  }

  public Increment(): void {
    this.m_count++;

    if (this.m_max_count < this.m_count) {
      this.m_max_count = this.m_count;
    }
  }

  public Decrement(): void {
    this.m_count--;

    if (this.m_min_count > this.m_count) {
      this.m_min_count = this.m_count;
    }
  }
}

/*
* Copyright (c) 2010 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

/// This is a growable LIFO stack with an initial capacity of N.
/// If the stack size exceeds the initial capacity, the heap is used
/// to increase the size of the stack.

export class b2GrowableStack {
  public m_stack: any[] = [];
  public m_count: number = 0;

  constructor(N: number) {
    this.m_stack = [/*N*/];
    this.m_count = 0;
  }

  public Reset(): b2GrowableStack {
    this.m_count = 0;
    return this;
  }

  public Push(element: any): void {
    this.m_stack[this.m_count] = element;
    this.m_count++;
  }

  public Pop(): any {
    ///b2Assert(this.m_count > 0);
    this.m_count--;
    const element: any = this.m_stack[this.m_count];
    this.m_stack[this.m_count] = null;
    return element;
  }

  public GetCount(): number {
    return this.m_count;
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

export class b2BlockAllocator {}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

export class b2StackAllocator {}


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// A distance proxy is used by the GJK algorithm.
/// It encapsulates any shape.
export class b2DistanceProxy {
  public m_buffer: b2Vec2[] = b2Vec2.MakeArray(2);
  public m_vertices: b2Vec2[] = this.m_buffer;
  public m_count: number = 0;
  public m_radius: number = 0;

  public Reset(): b2DistanceProxy {
    this.m_vertices = this.m_buffer;
    this.m_count = 0;
    this.m_radius = 0;
    return this;
  }

  public SetShape(shape: b2Shape, index: number): void {
    shape.SetupDistanceProxy(this, index);
  }

  public GetSupport(d: b2Vec2): number {
    let bestIndex: number = 0;
    let bestValue: number = b2Vec2.DotVV(this.m_vertices[0], d);
    for (let i: number = 1; i < this.m_count; ++i) {
      const value: number = b2Vec2.DotVV(this.m_vertices[i], d);
      if (value > bestValue) {
        bestIndex = i;
        bestValue = value;
      }
    }

    return bestIndex;
  }

  public GetSupportVertex(d: b2Vec2): b2Vec2 {
    let bestIndex: number = 0;
    let bestValue: number = b2Vec2.DotVV(this.m_vertices[0], d);
    for (let i: number = 1; i < this.m_count; ++i) {
      const value: number = b2Vec2.DotVV(this.m_vertices[i], d);
      if (value > bestValue) {
        bestIndex = i;
        bestValue = value;
      }
    }

    return this.m_vertices[bestIndex];
  }

  public GetVertexCount(): number {
    return this.m_count;
  }

  public GetVertex(index: number): b2Vec2 {
    ///b2Assert(0 <= index && index < this.m_count);
    return this.m_vertices[index];
  }
}

export class b2SimplexCache {
  public metric: number = 0;
  public count: number = 0;
  public indexA: number[] = [ 0, 0, 0 ];
  public indexB: number[] = [ 0, 0, 0 ];

  public Reset(): b2SimplexCache {
    this.metric = 0;
    this.count = 0;
    return this;
  }
}

export class b2DistanceInput {
  public proxyA: b2DistanceProxy = new b2DistanceProxy();
  public proxyB: b2DistanceProxy = new b2DistanceProxy();
  public transformA: b2Transform = new b2Transform();
  public transformB: b2Transform = new b2Transform();
  public useRadii: boolean = false;

  public Reset(): b2DistanceInput {
    this.proxyA.Reset();
    this.proxyB.Reset();
    this.transformA.SetIdentity();
    this.transformB.SetIdentity();
    this.useRadii = false;
    return this;
  }
}

export class b2DistanceOutput {
  public pointA: b2Vec2 = new b2Vec2();
  public pointB: b2Vec2 = new b2Vec2();
  public distance: number = 0;
  public iterations: number = 0; ///< number of GJK iterations used

  public Reset(): b2DistanceOutput {
    this.pointA.SetZero();
    this.pointB.SetZero();
    this.distance = 0;
    this.iterations = 0;
    return this;
  }
}


export let b2_gjkCalls: number = 0;
export let b2_gjkIters: number = 0;
export let b2_gjkMaxIters: number = 0;

export class b2SimplexVertex {
  public wA: b2Vec2 = new b2Vec2(); // support point in proxyA
  public wB: b2Vec2 = new b2Vec2(); // support point in proxyB
  public w: b2Vec2 = new b2Vec2(); // wB - wA
  public a: number = 0; // barycentric coordinate for closest point
  public indexA: number = 0; // wA index
  public indexB: number = 0; // wB index

  public Copy(other: b2SimplexVertex): b2SimplexVertex {
    this.wA.Copy(other.wA);     // support point in proxyA
    this.wB.Copy(other.wB);     // support point in proxyB
    this.w.Copy(other.w);       // wB - wA
    this.a = other.a;           // barycentric coordinate for closest point
    this.indexA = other.indexA; // wA index
    this.indexB = other.indexB; // wB index
    return this;
  }
}

export class b2Simplex {
  public m_v1: b2SimplexVertex = new b2SimplexVertex();
  public m_v2: b2SimplexVertex = new b2SimplexVertex();
  public m_v3: b2SimplexVertex = new b2SimplexVertex();
  public m_vertices: b2SimplexVertex[] = [/*3*/];
  public m_count: number = 0;

  constructor() {
    this.m_vertices[0] = this.m_v1;
    this.m_vertices[1] = this.m_v2;
    this.m_vertices[2] = this.m_v3;
  }

  public ReadCache(cache: b2SimplexCache, proxyA: b2DistanceProxy, transformA: b2Transform, proxyB: b2DistanceProxy, transformB: b2Transform): void {
    ///b2Assert(0 <= cache.count && cache.count <= 3);

    // Copy data from cache.
    this.m_count = cache.count;
    const vertices: b2SimplexVertex[] = this.m_vertices;
    for (let i: number = 0; i < this.m_count; ++i) {
      const v: b2SimplexVertex = vertices[i];
      v.indexA = cache.indexA[i];
      v.indexB = cache.indexB[i];
      const wALocal: b2Vec2 = proxyA.GetVertex(v.indexA);
      const wBLocal: b2Vec2 = proxyB.GetVertex(v.indexB);
      b2Transform.MulXV(transformA, wALocal, v.wA);
      b2Transform.MulXV(transformB, wBLocal, v.wB);
      b2Vec2.SubVV(v.wB, v.wA, v.w);
      v.a = 0;
    }

    // Compute the new simplex metric, if it is substantially different than
    // old metric then flush the simplex.
    if (this.m_count > 1) {
      const metric1: number = cache.metric;
      const metric2: number = this.GetMetric();
      if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < b2_epsilon) {
        // Reset the simplex.
        this.m_count = 0;
      }
    }

    // If the cache is empty or invalid ...
    if (this.m_count === 0) {
      const v: b2SimplexVertex = vertices[0];
      v.indexA = 0;
      v.indexB = 0;
      const wALocal: b2Vec2 = proxyA.GetVertex(0);
      const wBLocal: b2Vec2 = proxyB.GetVertex(0);
      b2Transform.MulXV(transformA, wALocal, v.wA);
      b2Transform.MulXV(transformB, wBLocal, v.wB);
      b2Vec2.SubVV(v.wB, v.wA, v.w);
      v.a = 1;
      this.m_count = 1;
    }
  }

  public WriteCache(cache: b2SimplexCache): void {
    cache.metric = this.GetMetric();
    cache.count = this.m_count;
    const vertices: b2SimplexVertex[] = this.m_vertices;
    for (let i: number = 0; i < this.m_count; ++i) {
      cache.indexA[i] = vertices[i].indexA;
      cache.indexB[i] = vertices[i].indexB;
    }
  }

  public GetSearchDirection(out: b2Vec2): b2Vec2 {
    switch (this.m_count) {
    case 1:
      return b2Vec2.NegV(this.m_v1.w, out);

    case 2: {
        const e12: b2Vec2 = b2Vec2.SubVV(this.m_v2.w, this.m_v1.w, out);
        const sgn: number = b2Vec2.CrossVV(e12, b2Vec2.NegV(this.m_v1.w, b2Vec2.s_t0));
        if (sgn > 0) {
          // Origin is left of e12.
          return b2Vec2.CrossOneV(e12, out);
        } else {
          // Origin is right of e12.
          return b2Vec2.CrossVOne(e12, out);
        }
      }

    default:
      ///b2Assert(false);
      return out.SetZero();
    }
  }

  public GetClosestPoint(out: b2Vec2): b2Vec2 {
    switch (this.m_count) {
    case 0:
      ///b2Assert(false);
      return out.SetZero();

    case 1:
      return out.Copy(this.m_v1.w);

    case 2:
      return out.Set(
        this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
        this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);

    case 3:
      return out.SetZero();

    default:
      ///b2Assert(false);
      return out.SetZero();
    }
  }

  public GetWitnessPoints(pA: b2Vec2, pB: b2Vec2): void {
    switch (this.m_count) {
    case 0:
      ///b2Assert(false);
      break;

    case 1:
      pA.Copy(this.m_v1.wA);
      pB.Copy(this.m_v1.wB);
      break;

    case 2:
      pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
      pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
      pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
      pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
      break;

    case 3:
      pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
      pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
      break;

    default:
      ///b2Assert(false);
      break;
    }
  }

  public GetMetric(): number {
    switch (this.m_count) {
    case 0:
      ///b2Assert(false);
      return 0;

    case 1:
      return 0;

    case 2:
      return b2Vec2.DistanceVV(this.m_v1.w, this.m_v2.w);

    case 3:
      return b2Vec2.CrossVV(b2Vec2.SubVV(this.m_v2.w, this.m_v1.w, b2Vec2.s_t0), b2Vec2.SubVV(this.m_v3.w, this.m_v1.w, b2Vec2.s_t1));

    default:
      ///b2Assert(false);
      return 0;
    }
  }

  public Solve2(): void {
    const w1: b2Vec2 = this.m_v1.w;
    const w2: b2Vec2 = this.m_v2.w;
    const e12: b2Vec2 = b2Vec2.SubVV(w2, w1, b2Simplex.s_e12);

    // w1 region
    const d12_2: number = (-b2Vec2.DotVV(w1, e12));
    if (d12_2 <= 0) {
      // a2 <= 0, so we clamp it to 0
      this.m_v1.a = 1;
      this.m_count = 1;
      return;
    }

    // w2 region
    const d12_1: number = b2Vec2.DotVV(w2, e12);
    if (d12_1 <= 0) {
      // a1 <= 0, so we clamp it to 0
      this.m_v2.a = 1;
      this.m_count = 1;
      this.m_v1.Copy(this.m_v2);
      return;
    }

    // Must be in e12 region.
    const inv_d12: number = 1 / (d12_1 + d12_2);
    this.m_v1.a = d12_1 * inv_d12;
    this.m_v2.a = d12_2 * inv_d12;
    this.m_count = 2;
  }

  public Solve3(): void {
    const w1: b2Vec2 = this.m_v1.w;
    const w2: b2Vec2 = this.m_v2.w;
    const w3: b2Vec2 = this.m_v3.w;

    // Edge12
    // [1      1     ][a1] = [1]
    // [w1.e12 w2.e12][a2] = [0]
    // a3 = 0
    const e12: b2Vec2 = b2Vec2.SubVV(w2, w1, b2Simplex.s_e12);
    const w1e12: number = b2Vec2.DotVV(w1, e12);
    const w2e12: number = b2Vec2.DotVV(w2, e12);
    const d12_1: number = w2e12;
    const d12_2: number = (-w1e12);

    // Edge13
    // [1      1     ][a1] = [1]
    // [w1.e13 w3.e13][a3] = [0]
    // a2 = 0
    const e13: b2Vec2 = b2Vec2.SubVV(w3, w1, b2Simplex.s_e13);
    const w1e13: number = b2Vec2.DotVV(w1, e13);
    const w3e13: number = b2Vec2.DotVV(w3, e13);
    const d13_1: number = w3e13;
    const d13_2: number = (-w1e13);

    // Edge23
    // [1      1     ][a2] = [1]
    // [w2.e23 w3.e23][a3] = [0]
    // a1 = 0
    const e23: b2Vec2 = b2Vec2.SubVV(w3, w2, b2Simplex.s_e23);
    const w2e23: number = b2Vec2.DotVV(w2, e23);
    const w3e23: number = b2Vec2.DotVV(w3, e23);
    const d23_1: number = w3e23;
    const d23_2: number = (-w2e23);

    // Triangle123
    const n123: number = b2Vec2.CrossVV(e12, e13);

    const d123_1: number = n123 * b2Vec2.CrossVV(w2, w3);
    const d123_2: number = n123 * b2Vec2.CrossVV(w3, w1);
    const d123_3: number = n123 * b2Vec2.CrossVV(w1, w2);

    // w1 region
    if (d12_2 <= 0 && d13_2 <= 0) {
      this.m_v1.a = 1;
      this.m_count = 1;
      return;
    }

    // e12
    if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
      const inv_d12: number = 1 / (d12_1 + d12_2);
      this.m_v1.a = d12_1 * inv_d12;
      this.m_v2.a = d12_2 * inv_d12;
      this.m_count = 2;
      return;
    }

    // e13
    if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
      const inv_d13: number = 1 / (d13_1 + d13_2);
      this.m_v1.a = d13_1 * inv_d13;
      this.m_v3.a = d13_2 * inv_d13;
      this.m_count = 2;
      this.m_v2.Copy(this.m_v3);
      return;
    }

    // w2 region
    if (d12_1 <= 0 && d23_2 <= 0) {
      this.m_v2.a = 1;
      this.m_count = 1;
      this.m_v1.Copy(this.m_v2);
      return;
    }

    // w3 region
    if (d13_1 <= 0 && d23_1 <= 0) {
      this.m_v3.a = 1;
      this.m_count = 1;
      this.m_v1.Copy(this.m_v3);
      return;
    }

    // e23
    if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
      const inv_d23: number = 1 / (d23_1 + d23_2);
      this.m_v2.a = d23_1 * inv_d23;
      this.m_v3.a = d23_2 * inv_d23;
      this.m_count = 2;
      this.m_v1.Copy(this.m_v3);
      return;
    }

    // Must be in triangle123
    const inv_d123: number = 1 / (d123_1 + d123_2 + d123_3);
    this.m_v1.a = d123_1 * inv_d123;
    this.m_v2.a = d123_2 * inv_d123;
    this.m_v3.a = d123_3 * inv_d123;
    this.m_count = 3;
  }
  private static s_e12: b2Vec2 = new b2Vec2();
  private static s_e13: b2Vec2 = new b2Vec2();
  private static s_e23: b2Vec2 = new b2Vec2();
}

const b2Distance_s_simplex: b2Simplex = new b2Simplex();
const b2Distance_s_saveA = [ 0, 0, 0 ];
const b2Distance_s_saveB = [ 0, 0, 0 ];
const b2Distance_s_p: b2Vec2 = new b2Vec2();
const b2Distance_s_d: b2Vec2 = new b2Vec2();
const b2Distance_s_normal: b2Vec2 = new b2Vec2();
const b2Distance_s_supportA: b2Vec2 = new b2Vec2();
const b2Distance_s_supportB: b2Vec2 = new b2Vec2();
export function b2Distance(output: b2DistanceOutput, cache: b2SimplexCache, input: b2DistanceInput): void {
  ++b2_gjkCalls;

  const proxyA: b2DistanceProxy = input.proxyA;
  const proxyB: b2DistanceProxy = input.proxyB;

  const transformA: b2Transform = input.transformA;
  const transformB: b2Transform = input.transformB;

  // Initialize the simplex.
  const simplex: b2Simplex = b2Distance_s_simplex;
  simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);

  // Get simplex vertices as an array.
  const vertices: b2SimplexVertex[] = simplex.m_vertices;
  const k_maxIters: number = 20;

  // These store the vertices of the last simplex so that we
  // can check for duplicates and prevent cycling.
  const saveA: number[] = b2Distance_s_saveA;
  const saveB: number[] = b2Distance_s_saveB;
  let saveCount: number = 0;

  let distanceSqr1: number = b2_maxFloat;
  let distanceSqr2: number = distanceSqr1;

  // Main iteration loop.
  let iter: number = 0;
  while (iter < k_maxIters) {
    // Copy simplex so we can identify duplicates.
    saveCount = simplex.m_count;
    for (let i: number = 0; i < saveCount; ++i) {
      saveA[i] = vertices[i].indexA;
      saveB[i] = vertices[i].indexB;
    }

    switch (simplex.m_count) {
    case 1:
      break;

    case 2:
      simplex.Solve2();
      break;

    case 3:
      simplex.Solve3();
      break;

    default:
      ///b2Assert(false);
      break;
    }

    // If we have 3 points, then the origin is in the corresponding triangle.
    if (simplex.m_count === 3) {
      break;
    }

    // Compute closest point.
    const p: b2Vec2 = simplex.GetClosestPoint(b2Distance_s_p);
    distanceSqr2 = p.LengthSquared();

    // Ensure progress
    /*
    TODO: to fix compile warning
    if (distanceSqr2 > distanceSqr1) {
      //break;
    }
    */
    distanceSqr1 = distanceSqr2;

    // Get search direction.
    const d: b2Vec2 = simplex.GetSearchDirection(b2Distance_s_d);

    // Ensure the search direction is numerically fit.
    if (d.LengthSquared() < b2_epsilon_sq) {
      // The origin is probably contained by a line segment
      // or triangle. Thus the shapes are overlapped.

      // We can't return zero here even though there may be overlap.
      // In case the simplex is a point, segment, or triangle it is difficult
      // to determine if the origin is contained in the CSO or very close to it.
      break;
    }

    // Compute a tentative new simplex vertex using support points.
    const vertex: b2SimplexVertex = vertices[simplex.m_count];
    vertex.indexA = proxyA.GetSupport(b2Rot.MulTRV(transformA.q, b2Vec2.NegV(d, b2Vec2.s_t0), b2Distance_s_supportA));
    b2Transform.MulXV(transformA, proxyA.GetVertex(vertex.indexA), vertex.wA);
    vertex.indexB = proxyB.GetSupport(b2Rot.MulTRV(transformB.q, d, b2Distance_s_supportB));
    b2Transform.MulXV(transformB, proxyB.GetVertex(vertex.indexB), vertex.wB);
    b2Vec2.SubVV(vertex.wB, vertex.wA, vertex.w);

    // Iteration count is equated to the number of support point calls.
    ++iter;
    ++b2_gjkIters;

    // Check for duplicate support points. This is the main termination criteria.
    let duplicate: boolean = false;
    for (let i: number = 0; i < saveCount; ++i) {
      if (vertex.indexA === saveA[i] && vertex.indexB === saveB[i]) {
        duplicate = true;
        break;
      }
    }

    // If we found a duplicate support point we must exit to avoid cycling.
    if (duplicate) {
      break;
    }

    // New vertex is ok and needed.
    ++simplex.m_count;
  }

  b2_gjkMaxIters = b2Max(b2_gjkMaxIters, iter);

  // Prepare output.
  simplex.GetWitnessPoints(output.pointA, output.pointB);
  output.distance = b2Vec2.DistanceVV(output.pointA, output.pointB);
  output.iterations = iter;

  // Cache the simplex.
  simplex.WriteCache(cache);

  // Apply radii if requested.
  if (input.useRadii) {
    const rA: number = proxyA.m_radius;
    const rB: number = proxyB.m_radius;

    if (output.distance > (rA + rB) && output.distance > b2_epsilon) {
      // Shapes are still no overlapped.
      // Move the witness points to the outer surface.
      output.distance -= rA + rB;
      const normal: b2Vec2 = b2Vec2.SubVV(output.pointB, output.pointA, b2Distance_s_normal);
      normal.Normalize();
      output.pointA.SelfMulAdd(rA, normal);
      output.pointB.SelfMulSub(rB, normal);
    } else {
      // Shapes are overlapped when radii are considered.
      // Move the witness points to the middle.
      const p: b2Vec2 = b2Vec2.MidVV(output.pointA, output.pointB, b2Distance_s_p);
      output.pointA.Copy(p);
      output.pointB.Copy(p);
      output.distance = 0;
    }
  }
}

/// This holds the mass data computed for a shape.
export class b2MassData {
  /// The mass of the shape, usually in kilograms.
  public mass: number = 0;

  /// The position of the shape's centroid relative to the shape's origin.
  public center: b2Vec2 = new b2Vec2(0, 0);

  /// The rotational inertia of the shape about the local origin.
  public I: number = 0;
}

export const enum b2ShapeType {
  e_unknown = -1,
  e_circleShape = 0,
  e_edgeShape = 1,
  e_polygonShape = 2,
  e_chainShape = 3,
  e_shapeTypeCount = 4
}

/// A shape is used for collision detection. You can create a shape however you like.
/// Shapes used for simulation in b2World are created automatically when a b2Fixture
/// is created. Shapes may encapsulate a one or more child shapes.
export abstract class b2Shape {
  public m_type: b2ShapeType = b2ShapeType.e_unknown;
  public m_radius: number = 0;

  constructor(type: b2ShapeType, radius: number) {
    this.m_type = type;
    this.m_radius = radius;
  }

  /// Clone the concrete shape using the provided allocator.
  public abstract Clone(): b2Shape;

  public Copy(other: b2Shape): b2Shape {
    ///b2Assert(this.m_type === other.m_type);
    this.m_radius = other.m_radius;
    return this;
  }

  /// Get the type of this shape. You can use this to down cast to the concrete shape.
  /// @return the shape type.
  public GetType(): b2ShapeType {
    return this.m_type;
  }

  /// Get the number of child primitives.
  public abstract GetChildCount(): number;

  /// Test a point for containment in this shape. This only works for convex shapes.
  /// @param xf the shape world transform.
  /// @param p a point in world coordinates.
  public abstract TestPoint(xf: b2Transform, p: b2Vec2): boolean;

  ///#if B2_ENABLE_PARTICLE
  /// Compute the distance from the current shape to the specified point. This only works for convex shapes.
  /// @param xf the shape world transform.
  /// @param p a point in world coordinates.
  /// @param distance returns the distance from the current shape.
  /// @param normal returns the direction in which the distance increases.
  public abstract ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
  ///#endif

  /// Cast a ray against a child shape.
  /// @param output the ray-cast results.
  /// @param input the ray-cast input parameters.
  /// @param transform the transform to be applied to the shape.
  /// @param childIndex the child shape index
  public abstract RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;

  /// Given a transform, compute the associated axis aligned bounding box for a child shape.
  /// @param aabb returns the axis aligned box.
  /// @param xf the world transform of the shape.
  /// @param childIndex the child shape
  public abstract ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;

  /// Compute the mass properties of this shape using its dimensions and density.
  /// The inertia tensor is computed about the local origin.
  /// @param massData returns the mass data for this shape.
  /// @param density the density in kilograms per meter squared.
  public abstract ComputeMass(massData: b2MassData, density: number): void;

  public abstract SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;

  public abstract ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;

  public abstract Dump(log: (format: string, ...args: any[]) => void): void;
}

/// @file
/// Structures and functions used for computing contact points, distance
/// queries, and TOI queries.

export const enum b2ContactFeatureType {
  e_vertex = 0,
  e_face = 1
}

/// The features that intersect to form the contact point
/// This must be 4 bytes or less.
export class b2ContactFeature {
  public _key: number = 0;
  public _key_invalid = false;
  public _indexA: number = 0;
  public _indexB: number = 0;
  public _typeA: number = 0;
  public _typeB: number = 0;

  constructor() {
  }

  public get key(): number {
    if (this._key_invalid) {
      this._key_invalid = false;
      this._key = this._indexA | (this._indexB << 8) | (this._typeA << 16) | (this._typeB << 24);
    }
    return this._key;
  }

  public set key(value: number) {
    this._key = value;
    this._key_invalid = false;
    this._indexA = this._key & 0xff;
    this._indexB = (this._key >> 8) & 0xff;
    this._typeA = (this._key >> 16) & 0xff;
    this._typeB = (this._key >> 24) & 0xff;
  }

  public get indexA(): number {
    return this._indexA;
  }

  public set indexA(value: number) {
    this._indexA = value;
    this._key_invalid = true;
  }

  public get indexB(): number {
    return this._indexB;
  }

  public set indexB(value: number) {
    this._indexB = value;
    this._key_invalid = true;
  }

  public get typeA(): number {
    return this._typeA;
  }

  public set typeA(value: number) {
    this._typeA = value;
    this._key_invalid = true;
  }

  public get typeB(): number {
    return this._typeB;
  }

  public set typeB(value: number) {
    this._typeB = value;
    this._key_invalid = true;
  }
}

/// Contact ids to facilitate warm starting.
export class b2ContactID {
  public cf: b2ContactFeature = new b2ContactFeature();

  public Copy(o: b2ContactID): b2ContactID {
    this.key = o.key;
    return this;
  }

  public Clone(): b2ContactID {
    return new b2ContactID().Copy(this);
  }

  public get key(): number {
    return this.cf.key;
  }

  public set key(value: number) {
    this.cf.key = value;
  }
}

/// A manifold point is a contact point belonging to a contact
/// manifold. It holds details related to the geometry and dynamics
/// of the contact points.
/// The local point usage depends on the manifold type:
/// -e_circles: the local center of circleB
/// -e_faceA: the local center of cirlceB or the clip point of polygonB
/// -e_faceB: the clip point of polygonA
/// This structure is stored across time steps, so we keep it small.
/// Note: the impulses are used for internal caching and may not
/// provide reliable contact forces, especially for high speed collisions.
export class b2ManifoldPoint {
  public localPoint: b2Vec2 = new b2Vec2();  ///< usage depends on manifold type
  public normalImpulse: number = 0;      ///< the non-penetration impulse
  public tangentImpulse: number = 0;      ///< the friction impulse
  public id: b2ContactID = new b2ContactID();  ///< uniquely identifies a contact point between two shapes

  public static MakeArray(length: number): b2ManifoldPoint[] {
    return b2MakeArray(length, function (i: number): b2ManifoldPoint { return new b2ManifoldPoint(); } );
  }

  public Reset(): void {
    this.localPoint.SetZero();
    this.normalImpulse = 0;
    this.tangentImpulse = 0;
    this.id.key = 0;
  }

  public Copy(o: b2ManifoldPoint): b2ManifoldPoint {
    this.localPoint.Copy(o.localPoint);
    this.normalImpulse = o.normalImpulse;
    this.tangentImpulse = o.tangentImpulse;
    this.id.Copy(o.id);
    return this;
  }
}

export const enum b2ManifoldType {
  e_unknown = -1,
  e_circles = 0,
  e_faceA = 1,
  e_faceB = 2
}

/// A manifold for two touching convex shapes.
/// Box2D supports multiple types of contact:
/// - clip point versus plane with radius
/// - point versus point with radius (circles)
/// The local point usage depends on the manifold type:
/// -e_circles: the local center of circleA
/// -e_faceA: the center of faceA
/// -e_faceB: the center of faceB
/// Similarly the local normal usage:
/// -e_circles: not used
/// -e_faceA: the normal on polygonA
/// -e_faceB: the normal on polygonB
/// We store contacts in this way so that position correction can
/// account for movement, which is critical for continuous physics.
/// All contact scenarios must be expressed in one of these types.
/// This structure is stored across time steps, so we keep it small.
export class b2Manifold {
  public points: b2ManifoldPoint[] = b2ManifoldPoint.MakeArray(b2_maxManifoldPoints);
  public localNormal: b2Vec2 = new b2Vec2();
  public localPoint: b2Vec2 = new b2Vec2();
  public type: number = b2ManifoldType.e_unknown;
  public pointCount: number = 0;

  public Reset(): void {
    for (let i: number = 0; i < b2_maxManifoldPoints; ++i) {
      ///b2Assert(this.points[i] instanceof b2ManifoldPoint);
      this.points[i].Reset();
    }
    this.localNormal.SetZero();
    this.localPoint.SetZero();
    this.type = b2ManifoldType.e_unknown;
    this.pointCount = 0;
  }

  public Copy(o: b2Manifold): b2Manifold {
    this.pointCount = o.pointCount;
    for (let i: number = 0; i < b2_maxManifoldPoints; ++i) {
      ///b2Assert(this.points[i] instanceof b2ManifoldPoint);
      this.points[i].Copy(o.points[i]);
    }
    this.localNormal.Copy(o.localNormal);
    this.localPoint.Copy(o.localPoint);
    this.type = o.type;
    return this;
  }

  public Clone(): b2Manifold {
    return new b2Manifold().Copy(this);
  }
}

export class b2WorldManifold {
  public normal: b2Vec2 = new b2Vec2();
  public points: b2Vec2[] = b2Vec2.MakeArray(b2_maxManifoldPoints);
  public separations: number[] = b2MakeNumberArray(b2_maxManifoldPoints);

  private static Initialize_s_pointA = new b2Vec2();
  private static Initialize_s_pointB = new b2Vec2();
  private static Initialize_s_cA = new b2Vec2();
  private static Initialize_s_cB = new b2Vec2();
  private static Initialize_s_planePoint = new b2Vec2();
  private static Initialize_s_clipPoint = new b2Vec2();
  public Initialize(manifold: b2Manifold, xfA: b2Transform, radiusA: number, xfB: b2Transform, radiusB: number): void {
    if (manifold.pointCount === 0) {
      return;
    }

    switch (manifold.type) {
    case b2ManifoldType.e_circles: {
        this.normal.Set(1, 0);
        const pointA: b2Vec2 = b2Transform.MulXV(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_pointA);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, manifold.points[0].localPoint, b2WorldManifold.Initialize_s_pointB);
        if (b2Vec2.DistanceSquaredVV(pointA, pointB) > b2_epsilon_sq) {
          b2Vec2.SubVV(pointB, pointA, this.normal).SelfNormalize();
        }

        const cA: b2Vec2 = b2Vec2.AddVMulSV(pointA, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
        const cB: b2Vec2 = b2Vec2.SubVMulSV(pointB, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
        b2Vec2.MidVV(cA, cB, this.points[0]);
        this.separations[0] = b2Vec2.DotVV(b2Vec2.SubVV(cB, cA, b2Vec2.s_t0), this.normal); // b2Dot(cB - cA, normal);
      }
      break;

    case b2ManifoldType.e_faceA: {
        b2Rot.MulRV(xfA.q, manifold.localNormal, this.normal);
        const planePoint: b2Vec2 = b2Transform.MulXV(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);

        for (let i: number = 0; i < manifold.pointCount; ++i) {
          const clipPoint: b2Vec2 = b2Transform.MulXV(xfB, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
          const s: number = radiusA - b2Vec2.DotVV(b2Vec2.SubVV(clipPoint, planePoint, b2Vec2.s_t0), this.normal);
          const cA: b2Vec2 = b2Vec2.AddVMulSV(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cA);
          const cB: b2Vec2 = b2Vec2.SubVMulSV(clipPoint, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
          b2Vec2.MidVV(cA, cB, this.points[i]);
          this.separations[i] = b2Vec2.DotVV(b2Vec2.SubVV(cB, cA, b2Vec2.s_t0), this.normal); // b2Dot(cB - cA, normal);
        }
      }
      break;

    case b2ManifoldType.e_faceB: {
        b2Rot.MulRV(xfB.q, manifold.localNormal, this.normal);
        const planePoint: b2Vec2 = b2Transform.MulXV(xfB, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);

        for (let i: number = 0; i < manifold.pointCount; ++i) {
          const clipPoint: b2Vec2 = b2Transform.MulXV(xfA, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
          const s: number = radiusB - b2Vec2.DotVV(b2Vec2.SubVV(clipPoint, planePoint, b2Vec2.s_t0), this.normal);
          const cB: b2Vec2 = b2Vec2.AddVMulSV(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cB);
          const cA: b2Vec2 = b2Vec2.SubVMulSV(clipPoint, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
          b2Vec2.MidVV(cA, cB, this.points[i]);
          this.separations[i] = b2Vec2.DotVV(b2Vec2.SubVV(cA, cB, b2Vec2.s_t0), this.normal); // b2Dot(cA - cB, normal);
        }

        // Ensure normal points from A to B.
        this.normal.SelfNeg();
      }
      break;
    }
  }
}

/// This is used for determining the state of contact points.
export const enum b2PointState {
  b2_nullState = 0, ///< point does not exist
  b2_addState = 1, ///< point was added in the update
  b2_persistState = 2, ///< point persisted across the update
  b2_removeState = 3  ///< point was removed in the update
}

/// Compute the point states given two manifolds. The states pertain to the transition from manifold1
/// to manifold2. So state1 is either persist or remove while state2 is either add or persist.
export function b2GetPointStates(state1: b2PointState[], state2: b2PointState[], manifold1: b2Manifold, manifold2: b2Manifold): void {
  // Detect persists and removes.
  let i: number;
  for (i = 0; i < manifold1.pointCount; ++i) {
    const id: b2ContactID = manifold1.points[i].id;
    const key: number = id.key;

    state1[i] = b2PointState.b2_removeState;

    for (let j: number = 0, jct = manifold2.pointCount; j < jct; ++j) {
      if (manifold2.points[j].id.key === key) {
        state1[i] = b2PointState.b2_persistState;
        break;
      }
    }
  }
  for (; i < b2_maxManifoldPoints; ++i) {
    state1[i] = b2PointState.b2_nullState;
  }

  // Detect persists and adds.
  for (i = 0; i < manifold2.pointCount; ++i) {
    const id: b2ContactID = manifold2.points[i].id;
    const key: number = id.key;

    state2[i] = b2PointState.b2_addState;

    for (let j: number = 0, jct = manifold1.pointCount; j < jct; ++j) {
      if (manifold1.points[j].id.key === key) {
        state2[i] = b2PointState.b2_persistState;
        break;
      }
    }
  }
  for (; i < b2_maxManifoldPoints; ++i) {
    state2[i] = b2PointState.b2_nullState;
  }
}

/// Used for computing contact manifolds.
export class b2ClipVertex {
  public v: b2Vec2 = new b2Vec2();
  public id: b2ContactID = new b2ContactID();

  public static MakeArray(length: number): b2ClipVertex[] {
    return b2MakeArray(length, function (i: number): b2ClipVertex { return new b2ClipVertex(); });
  }

  public Copy(other: b2ClipVertex): b2ClipVertex {
    this.v.Copy(other.v);
    this.id.Copy(other.id);
    return this;
  }
}

/// Ray-cast input data. The ray extends from p1 to p1 + maxFraction * (p2 - p1).
export class b2RayCastInput {
  public p1: b2Vec2 = new b2Vec2();
  public p2: b2Vec2 = new b2Vec2();
  public maxFraction: number = 1;

  public Copy(o: b2RayCastInput): b2RayCastInput {
    this.p1.Copy(o.p1);
    this.p2.Copy(o.p2);
    this.maxFraction = o.maxFraction;
    return this;
  }
}

/// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
/// come from b2RayCastInput.
export class b2RayCastOutput {
  public normal: b2Vec2 = new b2Vec2();
  public fraction: number = 0;

  public Copy(o: b2RayCastOutput): b2RayCastOutput {
    this.normal.Copy(o.normal);
    this.fraction = o.fraction;
    return this;
  }
}

/// An axis aligned bounding box.
export class b2AABB {
  public lowerBound: b2Vec2 = new b2Vec2(); ///< the lower vertex
  public upperBound: b2Vec2 = new b2Vec2(); ///< the upper vertex

  private m_cache_center: b2Vec2 = new b2Vec2(); // access using GetCenter()
  private m_cache_extent: b2Vec2 = new b2Vec2(); // access using GetExtents()

  public Copy(o: b2AABB): b2AABB {
    this.lowerBound.Copy(o.lowerBound);
    this.upperBound.Copy(o.upperBound);
    return this;
  }

  /// Verify that the bounds are sorted.
  public IsValid(): boolean {
    const d_x: number = this.upperBound.x - this.lowerBound.x;
    const d_y: number = this.upperBound.y - this.lowerBound.y;
    let valid: boolean = d_x >= 0 && d_y >= 0;
    valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
    return valid;
  }

  /// Get the center of the AABB.
  public GetCenter(): b2Vec2 {
    return b2Vec2.MidVV(this.lowerBound, this.upperBound, this.m_cache_center);
  }

  /// Get the extents of the AABB (half-widths).
  public GetExtents(): b2Vec2 {
    return b2Vec2.ExtVV(this.lowerBound, this.upperBound, this.m_cache_extent);
  }

  /// Get the perimeter length
  public GetPerimeter(): number {
    const wx: number = this.upperBound.x - this.lowerBound.x;
    const wy: number = this.upperBound.y - this.lowerBound.y;
    return 2 * (wx + wy);
  }

  /// Combine an AABB into this one.
  public Combine1(aabb: b2AABB): b2AABB {
    this.lowerBound.x = b2Min(this.lowerBound.x, aabb.lowerBound.x);
    this.lowerBound.y = b2Min(this.lowerBound.y, aabb.lowerBound.y);
    this.upperBound.x = b2Max(this.upperBound.x, aabb.upperBound.x);
    this.upperBound.y = b2Max(this.upperBound.y, aabb.upperBound.y);
    return this;
  }

  /// Combine two AABBs into this one.
  public Combine2(aabb1: b2AABB, aabb2: b2AABB): b2AABB {
    this.lowerBound.x = b2Min(aabb1.lowerBound.x, aabb2.lowerBound.x);
    this.lowerBound.y = b2Min(aabb1.lowerBound.y, aabb2.lowerBound.y);
    this.upperBound.x = b2Max(aabb1.upperBound.x, aabb2.upperBound.x);
    this.upperBound.y = b2Max(aabb1.upperBound.y, aabb2.upperBound.y);
    return this;
  }

  public static Combine(aabb1: b2AABB, aabb2: b2AABB, out: b2AABB): b2AABB {
    out.Combine2(aabb1, aabb2);
    return out;
  }

  /// Does this aabb contain the provided AABB.
  public Contains(aabb: b2AABB): boolean {
    let result: boolean = true;
    result = result && this.lowerBound.x <= aabb.lowerBound.x;
    result = result && this.lowerBound.y <= aabb.lowerBound.y;
    result = result && aabb.upperBound.x <= this.upperBound.x;
    result = result && aabb.upperBound.y <= this.upperBound.y;
    return result;
  }

  // From Real-time Collision Detection, p179.
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput): boolean {
    let tmin: number = (-b2_maxFloat);
    let tmax: number = b2_maxFloat;

    const p_x: number = input.p1.x;
    const p_y: number = input.p1.y;
    const d_x: number = input.p2.x - input.p1.x;
    const d_y: number = input.p2.y - input.p1.y;
    const absD_x: number = b2Abs(d_x);
    const absD_y: number = b2Abs(d_y);

    const normal: b2Vec2 = output.normal;

    if (absD_x < b2_epsilon) {
      // Parallel.
      if (p_x < this.lowerBound.x || this.upperBound.x < p_x) {
        return false;
      }
    } else {
      const inv_d: number = 1 / d_x;
      let t1: number = (this.lowerBound.x - p_x) * inv_d;
      let t2: number = (this.upperBound.x - p_x) * inv_d;

      // Sign of the normal vector.
      let s: number = (-1);

      if (t1 > t2) {
        const t3: number = t1;
        t1 = t2;
        t2 = t3;
        s = 1;
      }

      // Push the min up
      if (t1 > tmin) {
        normal.x = s;
        normal.y = 0;
        tmin = t1;
      }

      // Pull the max down
      tmax = b2Min(tmax, t2);

      if (tmin > tmax) {
        return false;
      }
    }

    if (absD_y < b2_epsilon) {
      // Parallel.
      if (p_y < this.lowerBound.y || this.upperBound.y < p_y) {
        return false;
      }
    } else {
      const inv_d: number = 1 / d_y;
      let t1: number = (this.lowerBound.y - p_y) * inv_d;
      let t2: number = (this.upperBound.y - p_y) * inv_d;

      // Sign of the normal vector.
      let s: number = (-1);

      if (t1 > t2) {
        const t3: number = t1;
        t1 = t2;
        t2 = t3;
        s = 1;
      }

      // Push the min up
      if (t1 > tmin) {
        normal.x = 0;
        normal.y = s;
        tmin = t1;
      }

      // Pull the max down
      tmax = b2Min(tmax, t2);

      if (tmin > tmax) {
        return false;
      }
    }

    // Does the ray start inside the box?
    // Does the ray intersect beyond the max fraction?
    if (tmin < 0 || input.maxFraction < tmin) {
      return false;
    }

    // Intersection.
    output.fraction = tmin;

    return true;
  }

  public TestOverlap(other: b2AABB): boolean {
    const d1_x: number = other.lowerBound.x - this.upperBound.x;
    const d1_y: number = other.lowerBound.y - this.upperBound.y;
    const d2_x: number = this.lowerBound.x - other.upperBound.x;
    const d2_y: number = this.lowerBound.y - other.upperBound.y;

    if (d1_x > 0 || d1_y > 0)
      return false;

    if (d2_x > 0 || d2_y > 0)
      return false;

    return true;
  }
}

export function b2TestOverlapAABB(a: b2AABB, b: b2AABB): boolean {
  const d1_x: number = b.lowerBound.x - a.upperBound.x;
  const d1_y: number = b.lowerBound.y - a.upperBound.y;
  const d2_x: number = a.lowerBound.x - b.upperBound.x;
  const d2_y: number = a.lowerBound.y - b.upperBound.y;

  if (d1_x > 0 || d1_y > 0)
    return false;

  if (d2_x > 0 || d2_y > 0)
    return false;

  return true;
}

/// Clipping for contact manifolds.
export function b2ClipSegmentToLine(vOut: b2ClipVertex[], vIn: b2ClipVertex[], normal: b2Vec2, offset: number, vertexIndexA: number): number {
  // Start with no output points
  let numOut: number = 0;

  const vIn0: b2ClipVertex = vIn[0];
  const vIn1: b2ClipVertex = vIn[1];

  // Calculate the distance of end points to the line
  const distance0: number = b2Vec2.DotVV(normal, vIn0.v) - offset;
  const distance1: number = b2Vec2.DotVV(normal, vIn1.v) - offset;

  // If the points are behind the plane
  if (distance0 <= 0) vOut[numOut++].Copy(vIn0);
  if (distance1 <= 0) vOut[numOut++].Copy(vIn1);

  // If the points are on different sides of the plane
  if (distance0 * distance1 < 0) {
    // Find intersection point of edge and plane
    const interp: number = distance0 / (distance0 - distance1);
    const v: b2Vec2 = vOut[numOut].v;
    v.x = vIn0.v.x + interp * (vIn1.v.x - vIn0.v.x);
    v.y = vIn0.v.y + interp * (vIn1.v.y - vIn0.v.y);

    // VertexA is hitting edgeB.
    const id: b2ContactID = vOut[numOut].id;
    id.cf.indexA = vertexIndexA;
    id.cf.indexB = vIn0.id.cf.indexB;
    id.cf.typeA = b2ContactFeatureType.e_vertex;
    id.cf.typeB = b2ContactFeatureType.e_face;
    ++numOut;
  }

  return numOut;
}

/// Determine if two generic shapes overlap.
const b2TestOverlapShape_s_input: b2DistanceInput = new b2DistanceInput();
const b2TestOverlapShape_s_simplexCache: b2SimplexCache = new b2SimplexCache();
const b2TestOverlapShape_s_output: b2DistanceOutput = new b2DistanceOutput();
export function b2TestOverlapShape(shapeA: b2Shape, indexA: number, shapeB: b2Shape, indexB: number, xfA: b2Transform, xfB: b2Transform): boolean {
  const input: b2DistanceInput = b2TestOverlapShape_s_input.Reset();
  input.proxyA.SetShape(shapeA, indexA);
  input.proxyB.SetShape(shapeB, indexB);
  input.transformA.Copy(xfA);
  input.transformB.Copy(xfB);
  input.useRadii = true;

  const simplexCache: b2SimplexCache = b2TestOverlapShape_s_simplexCache.Reset();
  simplexCache.count = 0;

  const output: b2DistanceOutput = b2TestOverlapShape_s_output.Reset();

  b2Distance(output, simplexCache, input);

  return output.distance < 10 * b2_epsilon;
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// A node in the dynamic tree. The client does not interact with this directly.
export class b2TreeNode {
  public m_id: number = 0;
  public aabb: b2AABB = new b2AABB();
  public userData: any = null;
  public parent: b2TreeNode = null; // or b2TreeNode.prototype.next
  public child1: b2TreeNode = null; // or b2TreeNode.prototype.next
  public child2: b2TreeNode = null; // or b2TreeNode.prototype.next
  public height: number = 0; // leaf = 0, free node = -1

  constructor(id: number = 0) {
    this.m_id = id;
  }

  public IsLeaf(): boolean {
    return this.child1 === null;
  }
}

export class b2DynamicTree {
  public m_root: b2TreeNode = null;

  // b2TreeNode* public m_nodes;
  // int32 public m_nodeCount;
  // int32 public m_nodeCapacity;

  public m_freeList: b2TreeNode = null;

  public m_path: number = 0;

  public m_insertionCount: number = 0;

  public static s_stack = new b2GrowableStack(256);
  public static s_r = new b2Vec2();
  public static s_v = new b2Vec2();
  public static s_abs_v = new b2Vec2();
  public static s_segmentAABB = new b2AABB();
  public static s_subInput = new b2RayCastInput();
  public static s_combinedAABB = new b2AABB();
  public static s_aabb = new b2AABB();

  public GetUserData(proxy: b2TreeNode): any {
    ///b2Assert(proxy !== null);
    return proxy.userData;
  }

  public GetFatAABB(proxy: b2TreeNode): b2AABB {
    ///b2Assert(proxy !== null);
    return proxy.aabb;
  }

  public Query(callback: (node: b2TreeNode) => boolean, aabb: b2AABB): void {
    if (this.m_root === null) return;

    const stack: b2GrowableStack = b2DynamicTree.s_stack.Reset();
    stack.Push(this.m_root);

    while (stack.GetCount() > 0) {
      const node: b2TreeNode = stack.Pop();
      if (node === null) {
        continue;
      }

      if (node.aabb.TestOverlap(aabb)) {
        if (node.IsLeaf()) {
          const proceed: boolean = callback(node);
          if (!proceed) {
            return;
          }
        } else {
          stack.Push(node.child1);
          stack.Push(node.child2);
        }
      }
    }
  }

  public RayCast(callback: (input: b2RayCastInput, node: b2TreeNode) => number, input: b2RayCastInput): void {
    if (this.m_root === null) return;

    const p1: b2Vec2 = input.p1;
    const p2: b2Vec2 = input.p2;
    const r: b2Vec2 = b2Vec2.SubVV(p2, p1, b2DynamicTree.s_r);
    ///b2Assert(r.LengthSquared() > 0);
    r.Normalize();

    // v is perpendicular to the segment.
    const v: b2Vec2 = b2Vec2.CrossOneV(r, b2DynamicTree.s_v);
    const abs_v: b2Vec2 = b2Vec2.AbsV(v, b2DynamicTree.s_abs_v);

    // Separating axis for segment (Gino, p80).
    // |dot(v, p1 - c)| > dot(|v|, h)

    let maxFraction: number = input.maxFraction;

    // Build a bounding box for the segment.
    const segmentAABB: b2AABB = b2DynamicTree.s_segmentAABB;
    let t_x: number = p1.x + maxFraction * (p2.x - p1.x);
    let t_y: number = p1.y + maxFraction * (p2.y - p1.y);
    segmentAABB.lowerBound.x = b2Min(p1.x, t_x);
    segmentAABB.lowerBound.y = b2Min(p1.y, t_y);
    segmentAABB.upperBound.x = b2Max(p1.x, t_x);
    segmentAABB.upperBound.y = b2Max(p1.y, t_y);

    const stack: b2GrowableStack = b2DynamicTree.s_stack.Reset();
    stack.Push(this.m_root);

    while (stack.GetCount() > 0) {
      const node: b2TreeNode = stack.Pop();
      if (node === null) {
        continue;
      }

      if (!b2TestOverlapAABB(node.aabb, segmentAABB)) {
        continue;
      }

      // Separating axis for segment (Gino, p80).
      // |dot(v, p1 - c)| > dot(|v|, h)
      const c: b2Vec2 = node.aabb.GetCenter();
      const h: b2Vec2 = node.aabb.GetExtents();
      const separation: number = b2Abs(b2Vec2.DotVV(v, b2Vec2.SubVV(p1, c, b2Vec2.s_t0))) - b2Vec2.DotVV(abs_v, h);
      if (separation > 0) {
        continue;
      }

      if (node.IsLeaf()) {
        const subInput: b2RayCastInput = b2DynamicTree.s_subInput;
        subInput.p1.Copy(input.p1);
        subInput.p2.Copy(input.p2);
        subInput.maxFraction = maxFraction;

        const value: number = callback(subInput, node);

        if (value === 0) {
          // The client has terminated the ray cast.
          return;
        }

        if (value > 0) {
          // Update segment bounding box.
          maxFraction = value;
          t_x = p1.x + maxFraction * (p2.x - p1.x);
          t_y = p1.y + maxFraction * (p2.y - p1.y);
          segmentAABB.lowerBound.x = b2Min(p1.x, t_x);
          segmentAABB.lowerBound.y = b2Min(p1.y, t_y);
          segmentAABB.upperBound.x = b2Max(p1.x, t_x);
          segmentAABB.upperBound.y = b2Max(p1.y, t_y);
        }
      } else {
        stack.Push(node.child1);
        stack.Push(node.child2);
      }
    }
  }

  public static s_node_id: number = 0;

  public AllocateNode(): b2TreeNode {
    // Expand the node pool as needed.
    if (this.m_freeList) {
      const node: b2TreeNode = this.m_freeList;
      this.m_freeList = node.parent; // this.m_freeList = node.next;
      node.parent = null;
      node.child1 = null;
      node.child2 = null;
      node.height = 0;
      node.userData = null;
      return node;
    }

    return new b2TreeNode(b2DynamicTree.s_node_id++);
  }

  public FreeNode(node: b2TreeNode): void {
    node.parent = this.m_freeList; // node.next = this.m_freeList;
    node.height = -1;
    this.m_freeList = node;
  }

  public CreateProxy(aabb: b2AABB, userData: any): b2TreeNode {
    const node: b2TreeNode = this.AllocateNode();

    // Fatten the aabb.
    const r_x: number = b2_aabbExtension;
    const r_y: number = b2_aabbExtension;
    node.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
    node.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
    node.aabb.upperBound.x = aabb.upperBound.x + r_x;
    node.aabb.upperBound.y = aabb.upperBound.y + r_y;
    node.userData = userData;
    node.height = 0;

    this.InsertLeaf(node);

    return node;
  }

  public DestroyProxy(proxy: b2TreeNode): void {
    ///b2Assert(proxy.IsLeaf());

    this.RemoveLeaf(proxy);
    this.FreeNode(proxy);
  }

  public MoveProxy(proxy: b2TreeNode, aabb: b2AABB, displacement: b2Vec2): boolean {
    ///b2Assert(proxy.IsLeaf());

    if (proxy.aabb.Contains(aabb)) {
      return false;
    }

    this.RemoveLeaf(proxy);

    // Extend AABB.
    // Predict AABB displacement.
    const r_x: number = b2_aabbExtension + b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : (-displacement.x));
    const r_y: number = b2_aabbExtension + b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : (-displacement.y));
    proxy.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
    proxy.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
    proxy.aabb.upperBound.x = aabb.upperBound.x + r_x;
    proxy.aabb.upperBound.y = aabb.upperBound.y + r_y;

    this.InsertLeaf(proxy);
    return true;
  }

  public InsertLeaf(leaf: b2TreeNode): void {
    ++this.m_insertionCount;

    if (this.m_root === null) {
      this.m_root = leaf;
      this.m_root.parent = null;
      return;
    }

    // Find the best sibling for this node
    const leafAABB: b2AABB = leaf.aabb;
    ///const center: b2Vec2 = leafAABB.GetCenter();
    let index: b2TreeNode = this.m_root;
    let child1: b2TreeNode;
    let child2: b2TreeNode;
    while (!index.IsLeaf()) {
      child1 = index.child1;
      child2 = index.child2;

      const area: number = index.aabb.GetPerimeter();

      const combinedAABB: b2AABB = b2DynamicTree.s_combinedAABB;
      combinedAABB.Combine2(index.aabb, leafAABB);
      const combinedArea: number = combinedAABB.GetPerimeter();

      // Cost of creating a new parent for this node and the new leaf
      const cost: number = 2 * combinedArea;

      // Minimum cost of pushing the leaf further down the tree
      const inheritanceCost: number = 2 * (combinedArea - area);

      // Cost of descending into child1
      let cost1: number;
      const aabb: b2AABB = b2DynamicTree.s_aabb;
      let oldArea: number;
      let newArea: number;
      if (child1.IsLeaf()) {
        aabb.Combine2(leafAABB, child1.aabb);
        cost1 = aabb.GetPerimeter() + inheritanceCost;
      } else {
        aabb.Combine2(leafAABB, child1.aabb);
        oldArea = child1.aabb.GetPerimeter();
        newArea = aabb.GetPerimeter();
        cost1 = (newArea - oldArea) + inheritanceCost;
      }

      // Cost of descending into child2
      let cost2: number;
      if (child2.IsLeaf()) {
        aabb.Combine2(leafAABB, child2.aabb);
        cost2 = aabb.GetPerimeter() + inheritanceCost;
      } else {
        aabb.Combine2(leafAABB, child2.aabb);
        oldArea = child2.aabb.GetPerimeter();
        newArea = aabb.GetPerimeter();
        cost2 = newArea - oldArea + inheritanceCost;
      }

      // Descend according to the minimum cost.
      if (cost < cost1 && cost < cost2) {
        break;
      }

      // Descend
      if (cost1 < cost2) {
        index = child1;
      } else {
        index = child2;
      }
    }

    const sibling: b2TreeNode = index;

    // Create a parent for the siblings.
    const oldParent: b2TreeNode = sibling.parent;
    const newParent: b2TreeNode = this.AllocateNode();
    newParent.parent = oldParent;
    newParent.userData = null;
    newParent.aabb.Combine2(leafAABB, sibling.aabb);
    newParent.height = sibling.height + 1;

    if (oldParent) {
      // The sibling was not the root.
      if (oldParent.child1 === sibling) {
        oldParent.child1 = newParent;
      } else {
        oldParent.child2 = newParent;
      }

      newParent.child1 = sibling;
      newParent.child2 = leaf;
      sibling.parent = newParent;
      leaf.parent = newParent;
    } else {
      // The sibling was the root.
      newParent.child1 = sibling;
      newParent.child2 = leaf;
      sibling.parent = newParent;
      leaf.parent = newParent;
      this.m_root = newParent;
    }

    // Walk back up the tree fixing heights and AABBs
    index = leaf.parent;
    while (index !== null) {
      index = this.Balance(index);

      child1 = index.child1;
      child2 = index.child2;

      ///b2Assert(child1 !== null);
      ///b2Assert(child2 !== null);

      index.height = 1 + b2Max(child1.height, child2.height);
      index.aabb.Combine2(child1.aabb, child2.aabb);

      index = index.parent;
    }

    // this.Validate();
  }

  public RemoveLeaf(leaf: b2TreeNode): void {
    if (leaf === this.m_root) {
      this.m_root = null;
      return;
    }

    const parent: b2TreeNode = leaf.parent;
    const grandParent: b2TreeNode = parent.parent;
    let sibling: b2TreeNode;
    if (parent.child1 === leaf) {
      sibling = parent.child2;
    } else {
      sibling = parent.child1;
    }

    if (grandParent) {
      // Destroy parent and connect sibling to grandParent.
      if (grandParent.child1 === parent) {
        grandParent.child1 = sibling;
      } else {
        grandParent.child2 = sibling;
      }
      sibling.parent = grandParent;
      this.FreeNode(parent);

      // Adjust ancestor bounds.
      let index: b2TreeNode = grandParent;
      while (index) {
        index = this.Balance(index);

        const child1: b2TreeNode = index.child1;
        const child2: b2TreeNode = index.child2;

        index.aabb.Combine2(child1.aabb, child2.aabb);
        index.height = 1 + b2Max(child1.height, child2.height);

        index = index.parent;
      }
    } else {
      this.m_root = sibling;
      sibling.parent = null;
      this.FreeNode(parent);
    }

    // this.Validate();
  }

  public Balance(A: b2TreeNode): b2TreeNode {
    ///b2Assert(A !== null);

    if (A.IsLeaf() || A.height < 2) {
      return A;
    }

    const B: b2TreeNode = A.child1;
    const C: b2TreeNode = A.child2;

    const balance: number = C.height - B.height;

    // Rotate C up
    if (balance > 1) {
      const F: b2TreeNode = C.child1;
      const G: b2TreeNode = C.child2;

      // Swap A and C
      C.child1 = A;
      C.parent = A.parent;
      A.parent = C;

      // A's old parent should point to C
      if (C.parent !== null) {
        if (C.parent.child1 === A) {
          C.parent.child1 = C;
        } else {
          ///b2Assert(C.parent.child2 === A);
          C.parent.child2 = C;
        }
      } else {
        this.m_root = C;
      }

      // Rotate
      if (F.height > G.height) {
        C.child2 = F;
        A.child2 = G;
        G.parent = A;
        A.aabb.Combine2(B.aabb, G.aabb);
        C.aabb.Combine2(A.aabb, F.aabb);

        A.height = 1 + b2Max(B.height, G.height);
        C.height = 1 + b2Max(A.height, F.height);
      } else {
        C.child2 = G;
        A.child2 = F;
        F.parent = A;
        A.aabb.Combine2(B.aabb, F.aabb);
        C.aabb.Combine2(A.aabb, G.aabb);

        A.height = 1 + b2Max(B.height, F.height);
        C.height = 1 + b2Max(A.height, G.height);
      }

      return C;
    }

    // Rotate B up
    if (balance < -1) {
      const D: b2TreeNode = B.child1;
      const E: b2TreeNode = B.child2;

      // Swap A and B
      B.child1 = A;
      B.parent = A.parent;
      A.parent = B;

      // A's old parent should point to B
      if (B.parent !== null) {
        if (B.parent.child1 === A) {
          B.parent.child1 = B;
        } else {
          ///b2Assert(B.parent.child2 === A);
          B.parent.child2 = B;
        }
      } else {
        this.m_root = B;
      }

      // Rotate
      if (D.height > E.height) {
        B.child2 = D;
        A.child1 = E;
        E.parent = A;
        A.aabb.Combine2(C.aabb, E.aabb);
        B.aabb.Combine2(A.aabb, D.aabb);

        A.height = 1 + b2Max(C.height, E.height);
        B.height = 1 + b2Max(A.height, D.height);
      } else {
        B.child2 = E;
        A.child1 = D;
        D.parent = A;
        A.aabb.Combine2(C.aabb, D.aabb);
        B.aabb.Combine2(A.aabb, E.aabb);

        A.height = 1 + b2Max(C.height, D.height);
        B.height = 1 + b2Max(A.height, E.height);
      }

      return B;
    }

    return A;
  }

  public GetHeight(): number {
    if (this.m_root === null) {
      return 0;
    }

    return this.m_root.height;
  }

  private static GetAreaNode(node: b2TreeNode): number {
    if (node === null) {
      return 0;
    }

    if (node.IsLeaf()) {
      return 0;
    }

    let area: number = node.aabb.GetPerimeter();
    area += b2DynamicTree.GetAreaNode(node.child1);
    area += b2DynamicTree.GetAreaNode(node.child2);
    return area;
  }

  public GetAreaRatio(): number {
    if (this.m_root === null) {
      return 0;
    }

    const root: b2TreeNode = this.m_root;
    const rootArea: number = root.aabb.GetPerimeter();

    const totalArea: number = b2DynamicTree.GetAreaNode(this.m_root);

    /*
    float32 totalArea = 0.0;
    for (int32 i = 0; i < m_nodeCapacity; ++i) {
      const b2TreeNode* node = m_nodes + i;
      if (node.height < 0) {
        // Free node in pool
        continue;
      }

      totalArea += node.aabb.GetPerimeter();
    }
    */

    return totalArea / rootArea;
  }

  public ComputeHeightNode(node: b2TreeNode): number {
    if (node.IsLeaf()) {
      return 0;
    }

    const height1: number = this.ComputeHeightNode(node.child1);
    const height2: number = this.ComputeHeightNode(node.child2);
    return 1 + b2Max(height1, height2);
  }

  public ComputeHeight(): number {
    const height: number = this.ComputeHeightNode(this.m_root);
    return height;
  }

  public ValidateStructure(index: b2TreeNode): void {
    if (index === null) {
      return;
    }

    if (index === this.m_root) {
      ///b2Assert(index.parent === null);
    }

    const node: b2TreeNode = index;

    const child1: b2TreeNode = node.child1;
    const child2: b2TreeNode = node.child2;

    if (node.IsLeaf()) {
      ///b2Assert(child1 === null);
      ///b2Assert(child2 === null);
      ///b2Assert(node.height === 0);
      return;
    }

    ///b2Assert(child1.parent === index);
    ///b2Assert(child2.parent === index);

    this.ValidateStructure(child1);
    this.ValidateStructure(child2);
  }

  public ValidateMetrics(index: b2TreeNode): void {
    if (index === null) {
      return;
    }

    const node: b2TreeNode = index;

    const child1: b2TreeNode = node.child1;
    const child2: b2TreeNode = node.child2;

    if (node.IsLeaf()) {
      ///b2Assert(child1 === null);
      ///b2Assert(child2 === null);
      ///b2Assert(node.height === 0);
      return;
    }

    ///const height1: number = child1.height;
    ///const height2: number = child2.height;
    ///const height: number = 1 + b2Max(height1, height2);
    ///b2Assert(node.height === height);

    const aabb: b2AABB = b2DynamicTree.s_aabb;
    aabb.Combine2(child1.aabb, child2.aabb);

    ///b2Assert(aabb.lowerBound === node.aabb.lowerBound);
    ///b2Assert(aabb.upperBound === node.aabb.upperBound);

    this.ValidateMetrics(child1);
    this.ValidateMetrics(child2);
  }

  public Validate(): void {
    this.ValidateStructure(this.m_root);
    this.ValidateMetrics(this.m_root);

    let freeCount: number = 0;
    let freeIndex: b2TreeNode = this.m_freeList;
    while (freeIndex !== null) {
      freeIndex = freeIndex.parent; // freeIndex = freeIndex.next;
      ++freeCount;
    }

    ///b2Assert(this.GetHeight() === this.ComputeHeight());
  }

  private static GetMaxBalanceNode(node: b2TreeNode, maxBalance: number): number {
    if (node === null) {
      return maxBalance;
    }

    if (node.height <= 1) {
      return maxBalance;
    }

    ///b2Assert(!node.IsLeaf());

    const child1: b2TreeNode = node.child1;
    const child2: b2TreeNode = node.child2;
    const balance: number = b2Abs(child2.height - child1.height);
    return b2Max(maxBalance, balance);
  }

  public GetMaxBalance(): number {
    const maxBalance: number = b2DynamicTree.GetMaxBalanceNode(this.m_root, 0);

    /*
    int32 maxBalance = 0;
    for (int32 i = 0; i < m_nodeCapacity; ++i) {
      const b2TreeNode* node = m_nodes + i;
      if (node.height <= 1) {
        continue;
      }

      b2Assert(!node.IsLeaf());

      int32 child1 = node.child1;
      int32 child2 = node.child2;
      int32 balance = b2Abs(m_nodes[child2].height - m_nodes[child1].height);
      maxBalance = b2Max(maxBalance, balance);
    }
    */

    return maxBalance;
  }

  public RebuildBottomUp(): void {
    /*
    int32* nodes = (int32*)b2Alloc(m_nodeCount * sizeof(int32));
    int32 count = 0;

    // Build array of leaves. Free the rest.
    for (int32 i = 0; i < m_nodeCapacity; ++i) {
      if (m_nodes[i].height < 0) {
        // free node in pool
        continue;
      }

      if (m_nodes[i].IsLeaf()) {
        m_nodes[i].parent = b2_nullNode;
        nodes[count] = i;
        ++count;
      } else {
        FreeNode(i);
      }
    }

    while (count > 1) {
      float32 minCost = b2_maxFloat;
      int32 iMin = -1, jMin = -1;
      for (int32 i = 0; i < count; ++i) {
        b2AABB aabbi = m_nodes[nodes[i]].aabb;

        for (int32 j = i + 1; j < count; ++j) {
          b2AABB aabbj = m_nodes[nodes[j]].aabb;
          b2AABB b;
          b.Combine(aabbi, aabbj);
          float32 cost = b.GetPerimeter();
          if (cost < minCost) {
            iMin = i;
            jMin = j;
            minCost = cost;
          }
        }
      }

      int32 index1 = nodes[iMin];
      int32 index2 = nodes[jMin];
      b2TreeNode* child1 = m_nodes + index1;
      b2TreeNode* child2 = m_nodes + index2;

      int32 parentIndex = AllocateNode();
      b2TreeNode* parent = m_nodes + parentIndex;
      parent.child1 = index1;
      parent.child2 = index2;
      parent.height = 1 + b2Max(child1.height, child2.height);
      parent.aabb.Combine(child1.aabb, child2.aabb);
      parent.parent = b2_nullNode;

      child1.parent = parentIndex;
      child2.parent = parentIndex;

      nodes[jMin] = nodes[count-1];
      nodes[iMin] = parentIndex;
      --count;
    }

    m_root = nodes[0];
    b2Free(nodes);
    */

    this.Validate();
  }

  private static ShiftOriginNode(node: b2TreeNode, newOrigin: b2Vec2): void {
    if (node === null) {
      return;
    }

    if (node.height <= 1) {
      return;
    }

    ///b2Assert(!node.IsLeaf());

    const child1: b2TreeNode = node.child1;
    const child2: b2TreeNode = node.child2;
    b2DynamicTree.ShiftOriginNode(child1, newOrigin);
    b2DynamicTree.ShiftOriginNode(child2, newOrigin);

    node.aabb.lowerBound.SelfSub(newOrigin);
    node.aabb.upperBound.SelfSub(newOrigin);
  }

  public ShiftOrigin(newOrigin: b2Vec2): void {

    b2DynamicTree.ShiftOriginNode(this.m_root, newOrigin);

    /*
    // Build array of leaves. Free the rest.
    for (int32 i = 0; i < m_nodeCapacity; ++i) {
      m_nodes[i].aabb.lowerBound -= newOrigin;
      m_nodes[i].aabb.upperBound -= newOrigin;
    }
    */
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export let b2_toiTime: number = 0;
export let b2_toiMaxTime: number = 0;
export let b2_toiCalls: number = 0;
export let b2_toiIters: number = 0;
export let b2_toiMaxIters: number = 0;
export let b2_toiRootIters: number = 0;
export let b2_toiMaxRootIters: number = 0;

const b2TimeOfImpact_s_xfA: b2Transform = new b2Transform();
const b2TimeOfImpact_s_xfB: b2Transform = new b2Transform();
const b2TimeOfImpact_s_pointA: b2Vec2 = new b2Vec2();
const b2TimeOfImpact_s_pointB: b2Vec2 = new b2Vec2();
const b2TimeOfImpact_s_normal: b2Vec2 = new b2Vec2();
const b2TimeOfImpact_s_axisA: b2Vec2 = new b2Vec2();
const b2TimeOfImpact_s_axisB: b2Vec2 = new b2Vec2();

/// Input parameters for b2TimeOfImpact
export class b2TOIInput {
  public proxyA: b2DistanceProxy = new b2DistanceProxy();
  public proxyB: b2DistanceProxy = new b2DistanceProxy();
  public sweepA: b2Sweep = new b2Sweep();
  public sweepB: b2Sweep = new b2Sweep();
  public tMax: number = 0; // defines sweep interval [0, tMax]
}

export const enum b2TOIOutputState {
  e_unknown = 0,
  e_failed = 1,
  e_overlapped = 2,
  e_touching = 3,
  e_separated = 4
}

export class b2TOIOutput {
  public state = b2TOIOutputState.e_unknown;
  public t: number = 0;
}

export const enum b2SeparationFunctionType {
  e_unknown = -1,
  e_points = 0,
  e_faceA = 1,
  e_faceB = 2
}

export class b2SeparationFunction {
  public m_proxyA: b2DistanceProxy;
  public m_proxyB: b2DistanceProxy;
  public m_sweepA: b2Sweep = new b2Sweep();
  public m_sweepB: b2Sweep = new b2Sweep();
  public m_type: b2SeparationFunctionType = b2SeparationFunctionType.e_unknown;
  public m_localPoint: b2Vec2 = new b2Vec2();
  public m_axis: b2Vec2 = new b2Vec2();

  public Initialize(cache: b2SimplexCache, proxyA: b2DistanceProxy, sweepA: b2Sweep, proxyB: b2DistanceProxy, sweepB: b2Sweep, t1: number): number {
    this.m_proxyA = proxyA;
    this.m_proxyB = proxyB;
    const count: number = cache.count;
    ///b2Assert(0 < count && count < 3);

    this.m_sweepA.Copy(sweepA);
    this.m_sweepB.Copy(sweepB);

    const xfA: b2Transform = b2TimeOfImpact_s_xfA;
    const xfB: b2Transform = b2TimeOfImpact_s_xfB;
    this.m_sweepA.GetTransform(xfA, t1);
    this.m_sweepB.GetTransform(xfB, t1);

    if (count === 1) {
      this.m_type = b2SeparationFunctionType.e_points;
      const localPointA: b2Vec2 = this.m_proxyA.GetVertex(cache.indexA[0]);
      const localPointB: b2Vec2 = this.m_proxyB.GetVertex(cache.indexB[0]);
      const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
      const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
      b2Vec2.SubVV(pointB, pointA, this.m_axis);
      const s: number = this.m_axis.Normalize();
      ///#if B2_ENABLE_PARTICLE
      this.m_localPoint.SetZero();
      ///#endif
      return s;
    } else if (cache.indexA[0] === cache.indexA[1]) {
      // Two points on B and one on A.
      this.m_type = b2SeparationFunctionType.e_faceB;
      const localPointB1: b2Vec2 = this.m_proxyB.GetVertex(cache.indexB[0]);
      const localPointB2: b2Vec2 = this.m_proxyB.GetVertex(cache.indexB[1]);

      b2Vec2.CrossVOne(b2Vec2.SubVV(localPointB2, localPointB1, b2Vec2.s_t0), this.m_axis).SelfNormalize();
      const normal: b2Vec2 = b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);

      b2Vec2.MidVV(localPointB1, localPointB2, this.m_localPoint);
      const pointB: b2Vec2 = b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);

      const localPointA: b2Vec2 = this.m_proxyA.GetVertex(cache.indexA[0]);
      const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);

      let s: number = b2Vec2.DotVV(b2Vec2.SubVV(pointA, pointB, b2Vec2.s_t0), normal);
      if (s < 0) {
        this.m_axis.SelfNeg();
        s = -s;
      }
      return s;
    } else {
      // Two points on A and one or two points on B.
      this.m_type = b2SeparationFunctionType.e_faceA;
      const localPointA1: b2Vec2 = this.m_proxyA.GetVertex(cache.indexA[0]);
      const localPointA2: b2Vec2 = this.m_proxyA.GetVertex(cache.indexA[1]);

      b2Vec2.CrossVOne(b2Vec2.SubVV(localPointA2, localPointA1, b2Vec2.s_t0), this.m_axis).SelfNormalize();
      const normal: b2Vec2 = b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);

      b2Vec2.MidVV(localPointA1, localPointA2, this.m_localPoint);
      const pointA: b2Vec2 = b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);

      const localPointB: b2Vec2 = this.m_proxyB.GetVertex(cache.indexB[0]);
      const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);

      let s: number = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), normal);
      if (s < 0) {
        this.m_axis.SelfNeg();
        s = -s;
      }
      return s;
    }
  }

  public FindMinSeparation(indexA: number[], indexB: number[], t: number): number {
    const xfA: b2Transform = b2TimeOfImpact_s_xfA;
    const xfB: b2Transform = b2TimeOfImpact_s_xfB;
    this.m_sweepA.GetTransform(xfA, t);
    this.m_sweepB.GetTransform(xfB, t);

    switch (this.m_type) {
    case b2SeparationFunctionType.e_points: {
        const axisA: b2Vec2 = b2Rot.MulTRV(xfA.q, this.m_axis, b2TimeOfImpact_s_axisA);
        const axisB: b2Vec2 = b2Rot.MulTRV(xfB.q, b2Vec2.NegV(this.m_axis, b2Vec2.s_t0), b2TimeOfImpact_s_axisB);

        indexA[0] = this.m_proxyA.GetSupport(axisA);
        indexB[0] = this.m_proxyB.GetSupport(axisB);

        const localPointA: b2Vec2 = this.m_proxyA.GetVertex(indexA[0]);
        const localPointB: b2Vec2 = this.m_proxyB.GetVertex(indexB[0]);

        const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);

        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), this.m_axis);
        return separation;
      }

    case b2SeparationFunctionType.e_faceA: {
        const normal: b2Vec2 = b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
        const pointA: b2Vec2 = b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);

        const axisB: b2Vec2 = b2Rot.MulTRV(xfB.q, b2Vec2.NegV(normal, b2Vec2.s_t0), b2TimeOfImpact_s_axisB);

        indexA[0] = -1;
        indexB[0] = this.m_proxyB.GetSupport(axisB);

        const localPointB: b2Vec2 = this.m_proxyB.GetVertex(indexB[0]);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);

        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), normal);
        return separation;
      }

    case b2SeparationFunctionType.e_faceB: {
        const normal: b2Vec2 = b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);

        const axisA: b2Vec2 = b2Rot.MulTRV(xfA.q, b2Vec2.NegV(normal, b2Vec2.s_t0), b2TimeOfImpact_s_axisA);

        indexB[0] = -1;
        indexA[0] = this.m_proxyA.GetSupport(axisA);

        const localPointA: b2Vec2 = this.m_proxyA.GetVertex(indexA[0]);
        const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);

        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointA, pointB, b2Vec2.s_t0), normal);
        return separation;
      }

    default:
      ///b2Assert(false);
      indexA[0] = -1;
      indexB[0] = -1;
      return 0;
    }
  }

  public Evaluate(indexA: number, indexB: number, t: number): number {
    const xfA: b2Transform = b2TimeOfImpact_s_xfA;
    const xfB: b2Transform = b2TimeOfImpact_s_xfB;
    this.m_sweepA.GetTransform(xfA, t);
    this.m_sweepB.GetTransform(xfB, t);

    switch (this.m_type) {
    case b2SeparationFunctionType.e_points: {
        const localPointA: b2Vec2 = this.m_proxyA.GetVertex(indexA);
        const localPointB: b2Vec2 = this.m_proxyB.GetVertex(indexB);

        const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), this.m_axis);

        return separation;
      }

    case b2SeparationFunctionType.e_faceA: {
        const normal: b2Vec2 = b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
        const pointA: b2Vec2 = b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);

        const localPointB: b2Vec2 = this.m_proxyB.GetVertex(indexB);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);

        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), normal);
        return separation;
      }

    case b2SeparationFunctionType.e_faceB: {
        const normal: b2Vec2 = b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
        const pointB: b2Vec2 = b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);

        const localPointA: b2Vec2 = this.m_proxyA.GetVertex(indexA);
        const pointA: b2Vec2 = b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);

        const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(pointA, pointB, b2Vec2.s_t0), normal);
        return separation;
      }

    default:
      ///b2Assert(false);
      return 0;
    }
  }
}

const b2TimeOfImpact_s_timer: b2Timer = new b2Timer();
const b2TimeOfImpact_s_cache: b2SimplexCache = new b2SimplexCache();
const b2TimeOfImpact_s_distanceInput: b2DistanceInput = new b2DistanceInput();
const b2TimeOfImpact_s_distanceOutput: b2DistanceOutput = new b2DistanceOutput();
const b2TimeOfImpact_s_fcn: b2SeparationFunction = new b2SeparationFunction();
const b2TimeOfImpact_s_indexA = [ 0 ];
const b2TimeOfImpact_s_indexB = [ 0 ];
const b2TimeOfImpact_s_sweepA: b2Sweep = new b2Sweep();
const b2TimeOfImpact_s_sweepB: b2Sweep = new b2Sweep();
export function b2TimeOfImpact(output: b2TOIOutput, input: b2TOIInput): void {
  const timer: b2Timer = b2TimeOfImpact_s_timer.Reset();

  ++b2_toiCalls;

  output.state = b2TOIOutputState.e_unknown;
  output.t = input.tMax;

  const proxyA: b2DistanceProxy = input.proxyA;
  const proxyB: b2DistanceProxy = input.proxyB;

  const sweepA: b2Sweep = b2TimeOfImpact_s_sweepA.Copy(input.sweepA);
  const sweepB: b2Sweep = b2TimeOfImpact_s_sweepB.Copy(input.sweepB);

  // Large rotations can make the root finder fail, so we normalize the
  // sweep angles.
  sweepA.Normalize();
  sweepB.Normalize();

  const tMax: number = input.tMax;

  const totalRadius: number = proxyA.m_radius + proxyB.m_radius;
  const target: number = b2Max(b2_linearSlop, totalRadius - 3 * b2_linearSlop);
  const tolerance: number = 0.25 * b2_linearSlop;
  ///b2Assert(target > tolerance);

  let t1: number = 0;
  const k_maxIterations: number = 20; // TODO_ERIN b2Settings
  let iter: number = 0;

  // Prepare input for distance query.
  const cache: b2SimplexCache = b2TimeOfImpact_s_cache;
  cache.count = 0;
  const distanceInput: b2DistanceInput = b2TimeOfImpact_s_distanceInput;
  distanceInput.proxyA = input.proxyA;
  distanceInput.proxyB = input.proxyB;
  distanceInput.useRadii = false;

  // The outer loop progressively attempts to compute new separating axes.
  // This loop terminates when an axis is repeated (no progress is made).
  for (; ; ) {
    const xfA: b2Transform = b2TimeOfImpact_s_xfA;
    const xfB: b2Transform = b2TimeOfImpact_s_xfB;
    sweepA.GetTransform(xfA, t1);
    sweepB.GetTransform(xfB, t1);

    // Get the distance between shapes. We can also use the results
    // to get a separating axis.
    distanceInput.transformA.Copy(xfA);
    distanceInput.transformB.Copy(xfB);
    const distanceOutput: b2DistanceOutput = b2TimeOfImpact_s_distanceOutput;
    b2Distance(distanceOutput, cache, distanceInput);

    // If the shapes are overlapped, we give up on continuous collision.
    if (distanceOutput.distance <= 0) {
      // Failure!
      output.state = b2TOIOutputState.e_overlapped;
      output.t = 0;
      break;
    }

    if (distanceOutput.distance < target + tolerance) {
      // Victory!
      output.state = b2TOIOutputState.e_touching;
      output.t = t1;
      break;
    }

    // Initialize the separating axis.
    const fcn: b2SeparationFunction = b2TimeOfImpact_s_fcn;
    fcn.Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
/*
#if 0
    // Dump the curve seen by the root finder {
      const int32 N = 100;
      float32 dx = 1.0f / N;
      float32 xs[N+1];
      float32 fs[N+1];

      float32 x = 0.0f;

      for (int32 i = 0; i <= N; ++i) {
        sweepA.GetTransform(&xfA, x);
        sweepB.GetTransform(&xfB, x);
        float32 f = fcn.Evaluate(xfA, xfB) - target;

        printf("%g %g\n", x, f);

        xs[i] = x;
        fs[i] = f;

        x += dx;
      }
    }
#endif
*/

    // Compute the TOI on the separating axis. We do this by successively
    // resolving the deepest point. This loop is bounded by the number of vertices.
    let done: boolean = false;
    let t2: number = tMax;
    let pushBackIter: number = 0;
    for (; ; ) {
      // Find the deepest point at t2. Store the witness point indices.
      const indexA: number[] = b2TimeOfImpact_s_indexA;
      const indexB: number[] = b2TimeOfImpact_s_indexB;
      let s2: number = fcn.FindMinSeparation(indexA, indexB, t2);

      // Is the final configuration separated?
      if (s2 > (target + tolerance)) {
        // Victory!
        output.state = b2TOIOutputState.e_separated;
        output.t = tMax;
        done = true;
        break;
      }

      // Has the separation reached tolerance?
      if (s2 > (target - tolerance)) {
        // Advance the sweeps
        t1 = t2;
        break;
      }

      // Compute the initial separation of the witness points.
      let s1: number = fcn.Evaluate(indexA[0], indexB[0], t1);

      // Check for initial overlap. This might happen if the root finder
      // runs out of iterations.
      if (s1 < (target - tolerance)) {
        output.state = b2TOIOutputState.e_failed;
        output.t = t1;
        done = true;
        break;
      }

      // Check for touching
      if (s1 <= (target + tolerance)) {
        // Victory! t1 should hold the TOI (could be 0.0).
        output.state = b2TOIOutputState.e_touching;
        output.t = t1;
        done = true;
        break;
      }

      // Compute 1D root of: f(x) - target = 0
      let rootIterCount: number = 0;
      let a1: number = t1;
      let a2: number = t2;
      for (; ; ) {
        // Use a mix of the secant rule and bisection.
        let t: number = 0;
        if (rootIterCount & 1) {
          // Secant rule to improve convergence.
          t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
        } else {
          // Bisection to guarantee progress.
          t = 0.5 * (a1 + a2);
        }

        ++rootIterCount;
        ++b2_toiRootIters;

        const s: number = fcn.Evaluate(indexA[0], indexB[0], t);

        if (b2Abs(s - target) < tolerance) {
          // t2 holds a tentative value for t1
          t2 = t;
          break;
        }

        // Ensure we continue to bracket the root.
        if (s > target) {
          a1 = t;
          s1 = s;
        } else {
          a2 = t;
          s2 = s;
        }

        if (rootIterCount === 50) {
          break;
        }
      }

      b2_toiMaxRootIters = b2Max(b2_toiMaxRootIters, rootIterCount);

      ++pushBackIter;

      if (pushBackIter === b2_maxPolygonVertices) {
        break;
      }
    }

    ++iter;
    ++b2_toiIters;

    if (done) {
      break;
    }

    if (iter === k_maxIterations) {
      // Root finder got stuck. Semi-victory.
      output.state = b2TOIOutputState.e_failed;
      output.t = t1;
      break;
    }
  }

  b2_toiMaxIters = b2Max(b2_toiMaxIters, iter);

  const time: number = timer.GetMilliseconds();
  b2_toiMaxTime = b2Max(b2_toiMaxTime, time);
  b2_toiTime += time;
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Profiling data. Times are in milliseconds.
export class b2Profile {
  public step: number = 0;
  public collide: number = 0;
  public solve: number = 0;
  public solveInit: number = 0;
  public solveVelocity: number = 0;
  public solvePosition: number = 0;
  public broadphase: number = 0;
  public solveTOI: number = 0;

  public Reset() {
    this.step = 0;
    this.collide = 0;
    this.solve = 0;
    this.solveInit = 0;
    this.solveVelocity = 0;
    this.solvePosition = 0;
    this.broadphase = 0;
    this.solveTOI = 0;
    return this;
  }
}

/// This is an internal structure.
export class b2TimeStep {
  public dt: number = 0; // time step
  public inv_dt: number = 0; // inverse time step (0 if dt == 0).
  public dtRatio: number = 0; // dt * inv_dt0
  public velocityIterations: number = 0;
  public positionIterations: number = 0;
  ///#if B2_ENABLE_PARTICLE
  public particleIterations: number = 0;
  ///#endif
  public warmStarting: boolean = false;

  public Copy(step: b2TimeStep): b2TimeStep {
    this.dt = step.dt;
    this.inv_dt = step.inv_dt;
    this.dtRatio = step.dtRatio;
    this.positionIterations = step.positionIterations;
    this.velocityIterations = step.velocityIterations;
    ///#if B2_ENABLE_PARTICLE
    this.particleIterations = step.particleIterations;
    ///#endif
    this.warmStarting = step.warmStarting;
    return this;
  }
}

export class b2Position {
  public c: b2Vec2 = new b2Vec2();
  public a: number = 0;

  public static MakeArray(length: number): b2Position[] {
    return b2MakeArray(length, function (i: number): b2Position { return new b2Position(); } );
  }
}

export class b2Velocity {
  public v: b2Vec2 = new b2Vec2();
  public w: number = 0;

  public static MakeArray(length: number): b2Velocity[] {
    return b2MakeArray(length, function (i: number): b2Velocity { return new b2Velocity(); } );
  }
}

export class b2SolverData {
  public step: b2TimeStep = new b2TimeStep();
  public positions: b2Position[] = null;
  public velocities: b2Velocity[] = null;
}

export const enum b2JointType {
  e_unknownJoint = 0,
  e_revoluteJoint = 1,
  e_prismaticJoint = 2,
  e_distanceJoint = 3,
  e_pulleyJoint = 4,
  e_mouseJoint = 5,
  e_gearJoint = 6,
  e_wheelJoint = 7,
  e_weldJoint = 8,
  e_frictionJoint = 9,
  e_ropeJoint = 10,
  e_motorJoint = 11,
  e_areaJoint = 12
}

export const enum b2LimitState {
  e_inactiveLimit = 0,
  e_atLowerLimit = 1,
  e_atUpperLimit = 2,
  e_equalLimits = 3
}

export class b2Jacobian {
  public linear: b2Vec2 = new b2Vec2();
  public angularA: number = 0;
  public angularB: number = 0;

  public SetZero(): b2Jacobian {
    this.linear.SetZero();
    this.angularA = 0;
    this.angularB = 0;
    return this;
  }

  public Set(x: b2Vec2, a1: number, a2: number): b2Jacobian {
    this.linear.Copy(x);
    this.angularA = a1;
    this.angularB = a2;
    return this;
  }
}

/// A joint edge is used to connect bodies and joints together
/// in a joint graph where each body is a node and each joint
/// is an edge. A joint edge belongs to a doubly linked list
/// maintained in each attached body. Each joint has two joint
/// nodes, one for each attached body.
export class b2JointEdge {
  public other: b2Body = null;    ///< provides quick access to the other body attached.
  public joint: b2Joint = null;    ///< the joint
  public prev: b2JointEdge = null;  ///< the previous joint edge in the body's joint list
  public next: b2JointEdge = null;  ///< the next joint edge in the body's joint list
}

/// Joint definitions are used to construct joints.
export class b2JointDef {
  /// The joint type is set automatically for concrete joint types.
  public type: b2JointType = b2JointType.e_unknownJoint;

  /// Use this to attach application specific data to your joints.
  public userData: any = null;

  /// The first attached body.
  public bodyA: b2Body = null;

  /// The second attached body.
  public bodyB: b2Body = null;

  /// Set this flag to true if the attached bodies should collide.
  public collideConnected: boolean = false;

  constructor(type: b2JointType) {
    this.type = type;
  }
}

/// The base joint class. Joints are used to constraint two bodies together in
/// various fashions. Some joints also feature limits and motors.
export class b2Joint {
  public m_type: b2JointType = b2JointType.e_unknownJoint;
  public m_prev: b2Joint = null;
  public m_next: b2Joint = null;
  public m_edgeA: b2JointEdge = new b2JointEdge();
  public m_edgeB: b2JointEdge = new b2JointEdge();
  public m_bodyA: b2Body = null;
  public m_bodyB: b2Body = null;

  public m_index: number = 0;

  public m_islandFlag: boolean = false;
  public m_collideConnected: boolean = false;

  public m_userData: any = null;

  constructor(def: b2JointDef) {
    ///b2Assert(def.bodyA !== def.bodyB);

    this.m_type = def.type;
    this.m_bodyA = def.bodyA;
    this.m_bodyB = def.bodyB;

    this.m_collideConnected = def.collideConnected;

    this.m_userData = def.userData;
  }

  /// Get the type of the concrete joint.
  public GetType(): b2JointType {
    return this.m_type;
  }

  /// Get the first body attached to this joint.
  public GetBodyA(): b2Body {
    return this.m_bodyA;
  }

  /// Get the second body attached to this joint.
  public GetBodyB(): b2Body {
    return this.m_bodyB;
  }

  /// Get the anchor point on bodyA in world coordinates.
  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  /// Get the anchor point on bodyB in world coordinates.
  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  /// Get the reaction force on bodyB at the joint anchor in Newtons.
  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  /// Get the reaction torque on bodyB in N*m.
  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  /// Get the next joint the world joint list.
  public GetNext(): b2Joint {
    return this.m_next;
  }

  /// Get the user data pointer.
  public GetUserData(): any {
    return this.m_userData;
  }

  /// Set the user data pointer.
  public SetUserData(data: any): void {
    this.m_userData = data;
  }

  /// Short-cut function to determine if either body is inactive.
  public IsActive(): boolean {
    return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
  }

  /// Get collide connected.
  /// Note: modifying the collide connect flag won't work correctly because
  /// the flag is only checked when fixture AABBs begin to overlap.
  public GetCollideConnected(): boolean {
    return this.m_collideConnected;
  }

  /// Dump this joint to the log file.
  public Dump(log: (format: string, ...args: any[]) => void): void {
    log("// Dump is not supported for this joint type.\n");
  }

  /// Shift the origin for any points stored in world coordinates.
  public ShiftOrigin(newOrigin: b2Vec2): void {
  }

  public InitVelocityConstraints(data: b2SolverData): void {
  }

  public SolveVelocityConstraints(data: b2SolverData): void {
  }

  // This returns true if the position errors are within tolerance.
  public SolvePositionConstraints(data: b2SolverData): boolean {
    return false;
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// This holds contact filtering data.
export class b2Filter {
  /// The collision category bits. Normally you would just set one bit.
  public categoryBits: number = 0x0001;

  /// The collision mask bits. This states the categories that this
  /// shape would accept for collision.
  public maskBits: number = 0xFFFF;

  /// Collision groups allow a certain group of objects to never collide (negative)
  /// or always collide (positive). Zero means no collision group. Non-zero group
  /// filtering always wins against the mask bits.
  public groupIndex: number = 0;

  public Clone(): b2Filter {
    return new b2Filter().Copy(this);
  }

  public Copy(other: b2Filter): b2Filter {
    ///b2Assert(this !== other);
    this.categoryBits = other.categoryBits;
    this.maskBits = other.maskBits;
    this.groupIndex = other.groupIndex;
    return this;
  }
}

/// A fixture definition is used to create a fixture. This class defines an
/// abstract fixture definition. You can reuse fixture definitions safely.
export class b2FixtureDef {
  /// The shape, this must be set. The shape will be cloned, so you
  /// can create the shape on the stack.
  public shape: b2Shape = null;

  /// Use this to store application specific fixture data.
  public userData: any = null;

  /// The friction coefficient, usually in the range [0,1].
  public friction: number = 0.2;

  /// The restitution (elasticity) usually in the range [0,1].
  public restitution: number = 0;

  /// The density, usually in kg/m^2.
  public density: number = 0;

  /// A sensor shape collects contact information but never generates a collision
  /// response.
  public isSensor: boolean = false;

  /// Contact filtering data.
  public filter: b2Filter = new b2Filter();
}

/// This proxy is used internally to connect fixtures to the broad-phase.
export class b2FixtureProxy {
  public aabb: b2AABB = new b2AABB();
  public fixture: b2Fixture = null;
  public childIndex: number = 0;
  public proxy: b2TreeNode = null;
  public static MakeArray(length: number): b2FixtureProxy[] {
    return b2MakeArray(length, function (i) { return new b2FixtureProxy(); });
  }
}

/// A fixture is used to attach a shape to a body for collision detection. A fixture
/// inherits its transform from its parent. Fixtures hold additional non-geometric data
/// such as friction, collision filters, etc.
/// Fixtures are created via b2Body::CreateFixture.
/// @warning you cannot reuse fixtures.
export class b2Fixture {
  public m_density: number = 0;

  public m_next: b2Fixture = null;
  public m_body: b2Body = null;

  public m_shape: b2Shape = null;

  public m_friction: number = 0;
  public m_restitution: number = 0;

  public m_proxies: b2FixtureProxy[] = null;
  public m_proxyCount: number = 0;

  public m_filter: b2Filter = new b2Filter();

  public m_isSensor: boolean = false;

  public m_userData: any = null;

  /// Get the type of the child shape. You can use this to down cast to the concrete shape.
  /// @return the shape type.
  public GetType(): b2ShapeType {
    return this.m_shape.GetType();
  }

  /// Get the child shape. You can modify the child shape, however you should not change the
  /// number of vertices because this will crash some collision caching mechanisms.
  /// Manipulating the shape may lead to non-physical behavior.
  public GetShape(): b2Shape {
    return this.m_shape;
  }

  /// Set if this fixture is a sensor.
  public SetSensor(sensor: boolean): void {
    if (sensor !== this.m_isSensor) {
      this.m_body.SetAwake(true);
      this.m_isSensor = sensor;
    }
  }

  /// Is this fixture a sensor (non-solid)?
  /// @return the true if the shape is a sensor.
  public IsSensor(): boolean {
    return this.m_isSensor;
  }

  /// Set the contact filtering data. This will not update contacts until the next time
  /// step when either parent body is active and awake.
  /// This automatically calls Refilter.
  public SetFilterData(filter: b2Filter): void {
    this.m_filter.Copy(filter);

    this.Refilter();
  }

  /// Get the contact filtering data.
  public GetFilterData(): b2Filter {
    return this.m_filter;
  }

  /// Call this if you want to establish collision that was previously disabled by b2ContactFilter::ShouldCollide.
  public Refilter(): void {
    if (this.m_body) {
      return;
    }

    // Flag associated contacts for filtering.
    let edge = this.m_body.GetContactList();

    while (edge) {
      const contact = edge.contact;
      const fixtureA = contact.GetFixtureA();
      const fixtureB = contact.GetFixtureB();
      if (fixtureA === this || fixtureB === this) {
        contact.FlagForFiltering();
      }

      edge = edge.next;
    }

    const world = this.m_body.GetWorld();

    if (world === null) {
      return;
    }

    // Touch each proxy so that new pairs may be created
    const broadPhase = world.m_contactManager.m_broadPhase;
    for (let i: number = 0; i < this.m_proxyCount; ++i) {
      broadPhase.TouchProxy(this.m_proxies[i].proxy);
    }
  }

  /// Get the parent body of this fixture. This is NULL if the fixture is not attached.
  /// @return the parent body.
  public GetBody(): b2Body {
    return this.m_body;
  }

  /// Get the next fixture in the parent body's fixture list.
  /// @return the next shape.
  public GetNext(): b2Fixture {
    return this.m_next;
  }

  /// Get the user data that was assigned in the fixture definition. Use this to
  /// store your application specific data.
  public GetUserData(): any {
    return this.m_userData;
  }

  /// Set the user data. Use this to store your application specific data.
  public SetUserData(data: any): void {
    this.m_userData = data;
  }

  /// Test a point for containment in this fixture.
  /// @param p a point in world coordinates.
  public TestPoint(p: b2Vec2): boolean {
    return this.m_shape.TestPoint(this.m_body.GetTransform(), p);
  }

  ///#if B2_ENABLE_PARTICLE
  public ComputeDistance(p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    return this.m_shape.ComputeDistance(this.m_body.GetTransform(), p, normal, childIndex);
  }
  ///#endif

  /// Cast a ray against this shape.
  /// @param output the ray-cast results.
  /// @param input the ray-cast input parameters.
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput, childIndex: number): boolean {
    return this.m_shape.RayCast(output, input, this.m_body.GetTransform(), childIndex);
  }

  /// Get the mass data for this fixture. The mass data is based on the density and
  /// the shape. The rotational inertia is about the shape's origin. This operation
  /// may be expensive.
  public GetMassData(massData: b2MassData = new b2MassData()): b2MassData {
    this.m_shape.ComputeMass(massData, this.m_density);

    return massData;
  }

  /// Set the density of this fixture. This will _not_ automatically adjust the mass
  /// of the body. You must call b2Body::ResetMassData to update the body's mass.
  public SetDensity(density: number): void {
    this.m_density = density;
  }

  /// Get the density of this fixture.
  public GetDensity(): number {
    return this.m_density;
  }

  /// Get the coefficient of friction.
  public GetFriction(): number {
    return this.m_friction;
  }

  /// Set the coefficient of friction. This will _not_ change the friction of
  /// existing contacts.
  public SetFriction(friction: number): void {
    this.m_friction = friction;
  }

  /// Get the coefficient of restitution.
  public GetRestitution(): number {
    return this.m_restitution;
  }

  /// Set the coefficient of restitution. This will _not_ change the restitution of
  /// existing contacts.
  public SetRestitution(restitution: number): void {
    this.m_restitution = restitution;
  }

  /// Get the fixture's AABB. This AABB may be enlarge and/or stale.
  /// If you need a more accurate AABB, compute it using the shape and
  /// the body transform.
  public GetAABB(childIndex: number): b2AABB {
    ///b2Assert(0 <= childIndex && childIndex < this.m_proxyCount);
    return this.m_proxies[childIndex].aabb;
  }

  /// Dump this fixture to the log file.
  public Dump(log: (format: string, ...args: any[]) => void, bodyIndex: number): void {
    log("    const fd: b2FixtureDef = new b2FixtureDef();\n");
    log("    fd.friction = %.15f;\n", this.m_friction);
    log("    fd.restitution = %.15f;\n", this.m_restitution);
    log("    fd.density = %.15f;\n", this.m_density);
    log("    fd.isSensor = %s;\n", (this.m_isSensor) ? ("true") : ("false"));
    log("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits);
    log("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits);
    log("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex);

    this.m_shape.Dump(log);

    log("\n");
    log("    fd.shape = shape;\n");
    log("\n");
    log("    bodies[%d].CreateFixture(fd);\n", bodyIndex);
  }

  // We need separation create/destroy functions from the constructor/destructor because
  // the destructor cannot access the allocator (no destructor arguments allowed by C++).
  public Create(body: b2Body, def: b2FixtureDef): void {
    this.m_userData = def.userData;
    this.m_friction = def.friction;
    this.m_restitution = def.restitution;

    this.m_body = body;
    this.m_next = null;

    this.m_filter.Copy(def.filter);

    this.m_isSensor = def.isSensor;

    this.m_shape = def.shape.Clone();

    // Reserve proxy space
    // const childCount = m_shape->GetChildCount();
    // m_proxies = (b2FixtureProxy*)allocator->Allocate(childCount * sizeof(b2FixtureProxy));
    // for (int32 i = 0; i < childCount; ++i)
    // {
    //   m_proxies[i].fixture = NULL;
    //   m_proxies[i].proxyId = b2BroadPhase::e_nullProxy;
    // }
    this.m_proxies = b2FixtureProxy.MakeArray(this.m_shape.GetChildCount());
    this.m_proxyCount = 0;

    this.m_density = def.density;
  }

  public Destroy(): void {
    // The proxies must be destroyed before calling this.
    ///b2Assert(this.m_proxyCount === 0);

    // Free the proxy array.
    // int32 childCount = m_shape->GetChildCount();
    // allocator->Free(m_proxies, childCount * sizeof(b2FixtureProxy));
    // m_proxies = NULL;

    this.m_shape = null;
  }

  // These support body activation/deactivation.
  public CreateProxies(broadPhase: b2BroadPhase, xf: b2Transform): void {
    ///b2Assert(this.m_proxyCount === 0);

    // Create proxies in the broad-phase.
    this.m_proxyCount = this.m_shape.GetChildCount();

    for (let i: number = 0; i < this.m_proxyCount; ++i) {
      const proxy = this.m_proxies[i];
      this.m_shape.ComputeAABB(proxy.aabb, xf, i);
      proxy.proxy = broadPhase.CreateProxy(proxy.aabb, proxy);
      proxy.fixture = this;
      proxy.childIndex = i;
    }
  }

  public DestroyProxies(broadPhase: b2BroadPhase): void {
    // Destroy proxies in the broad-phase.
    for (let i: number = 0; i < this.m_proxyCount; ++i) {
      const proxy = this.m_proxies[i];
      broadPhase.DestroyProxy(proxy.proxy);
      proxy.proxy = null;
    }

    this.m_proxyCount = 0;
  }

  private static Synchronize_s_aabb1 = new b2AABB();
  private static Synchronize_s_aabb2 = new b2AABB();
  private static Synchronize_s_displacement = new b2Vec2();
  public Synchronize(broadPhase: b2BroadPhase, transform1: b2Transform, transform2: b2Transform): void {
    if (this.m_proxyCount === 0) {
      return;
    }

    for (let i: number = 0; i < this.m_proxyCount; ++i) {
      const proxy = this.m_proxies[i];

      // Compute an AABB that covers the swept shape (may miss some rotation effect).
      const aabb1 = b2Fixture.Synchronize_s_aabb1;
      const aabb2 = b2Fixture.Synchronize_s_aabb2;
      this.m_shape.ComputeAABB(aabb1, transform1, i);
      this.m_shape.ComputeAABB(aabb2, transform2, i);

      proxy.aabb.Combine2(aabb1, aabb2);

      const displacement: b2Vec2 = b2Vec2.SubVV(transform2.p, transform1.p, b2Fixture.Synchronize_s_displacement);

      broadPhase.MoveProxy(proxy.proxy, proxy.aabb, displacement);
    }
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2010 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2010 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// A line segment (edge) shape. These can be connected in chains or loops
/// to other edge shapes. The connectivity information is used to ensure
/// correct contact normals.
export class b2EdgeShape extends b2Shape {
  public m_vertex1: b2Vec2 = new b2Vec2();
  public m_vertex2: b2Vec2 = new b2Vec2();
  public m_vertex0: b2Vec2 = new b2Vec2();
  public m_vertex3: b2Vec2 = new b2Vec2();
  public m_hasVertex0: boolean = false;
  public m_hasVertex3: boolean = false;

  constructor() {
    super(b2ShapeType.e_edgeShape, b2_polygonRadius);
  }

  /// Set this as an isolated edge.
  public Set(v1: b2Vec2, v2: b2Vec2): b2EdgeShape {
    this.m_vertex1.Copy(v1);
    this.m_vertex2.Copy(v2);
    this.m_hasVertex0 = false;
    this.m_hasVertex3 = false;
    return this;
  }

  /// Implement b2Shape.
  public Clone(): b2EdgeShape {
    return new b2EdgeShape().Copy(this);
  }

  public Copy(other: b2EdgeShape): b2EdgeShape {
    super.Copy(other);

    ///b2Assert(other instanceof b2EdgeShape);

    this.m_vertex1.Copy(other.m_vertex1);
    this.m_vertex2.Copy(other.m_vertex2);
    this.m_vertex0.Copy(other.m_vertex0);
    this.m_vertex3.Copy(other.m_vertex3);
    this.m_hasVertex0 = other.m_hasVertex0;
    this.m_hasVertex3 = other.m_hasVertex3;

    return this;
  }

  /// @see b2Shape::GetChildCount
  public GetChildCount(): number {
    return 1;
  }

  /// @see b2Shape::TestPoint
  public TestPoint(xf: b2Transform, p: b2Vec2): boolean {
    return false;
  }

  ///#if B2_ENABLE_PARTICLE
  /// @see b2Shape::ComputeDistance
  private static ComputeDistance_s_v1 = new b2Vec2();
  private static ComputeDistance_s_v2 = new b2Vec2();
  private static ComputeDistance_s_d = new b2Vec2();
  private static ComputeDistance_s_s = new b2Vec2();
  public ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    const v1 = b2Transform.MulXV(xf, this.m_vertex1, b2EdgeShape.ComputeDistance_s_v1);
    const v2 = b2Transform.MulXV(xf, this.m_vertex2, b2EdgeShape.ComputeDistance_s_v2);

    const d = b2Vec2.SubVV(p, v1, b2EdgeShape.ComputeDistance_s_d);
    const s = b2Vec2.SubVV(v2, v1, b2EdgeShape.ComputeDistance_s_s);
    const ds = b2Vec2.DotVV(d, s);
    if (ds > 0) {
      const s2 = b2Vec2.DotVV(s, s);
      if (ds > s2) {
        b2Vec2.SubVV(p, v2, d);
      } else {
        d.SelfMulSub(ds / s2, s);
      }
    }
    normal.Copy(d);
    return normal.Normalize();
  }
  ///#endif

  /// Implement b2Shape.
  // p = p1 + t * d
  // v = v1 + s * e
  // p1 + t * d = v1 + s * e
  // s * e - t * d = p1 - v1
  private static RayCast_s_p1 = new b2Vec2();
  private static RayCast_s_p2 = new b2Vec2();
  private static RayCast_s_d = new b2Vec2();
  private static RayCast_s_e = new b2Vec2();
  private static RayCast_s_q = new b2Vec2();
  private static RayCast_s_r = new b2Vec2();
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean {
    // Put the ray into the edge's frame of reference.
    const p1: b2Vec2 = b2Transform.MulTXV(xf, input.p1, b2EdgeShape.RayCast_s_p1);
    const p2: b2Vec2 = b2Transform.MulTXV(xf, input.p2, b2EdgeShape.RayCast_s_p2);
    const d: b2Vec2 = b2Vec2.SubVV(p2, p1, b2EdgeShape.RayCast_s_d);

    const v1: b2Vec2 = this.m_vertex1;
    const v2: b2Vec2 = this.m_vertex2;
    const e: b2Vec2 = b2Vec2.SubVV(v2, v1, b2EdgeShape.RayCast_s_e);
    const normal: b2Vec2 = output.normal.Set(e.y, -e.x).SelfNormalize();

    // q = p1 + t * d
    // dot(normal, q - v1) = 0
    // dot(normal, p1 - v1) + t * dot(normal, d) = 0
    const numerator: number = b2Vec2.DotVV(normal, b2Vec2.SubVV(v1, p1, b2Vec2.s_t0));
    const denominator: number = b2Vec2.DotVV(normal, d);

    if (denominator === 0) {
      return false;
    }

    const t: number = numerator / denominator;
    if (t < 0 || input.maxFraction < t) {
      return false;
    }

    const q: b2Vec2 = b2Vec2.AddVMulSV(p1, t, d, b2EdgeShape.RayCast_s_q);

    // q = v1 + s * r
    // s = dot(q - v1, r) / dot(r, r)
    const r: b2Vec2 = b2Vec2.SubVV(v2, v1, b2EdgeShape.RayCast_s_r);
    const rr: number = b2Vec2.DotVV(r, r);
    if (rr === 0) {
      return false;
    }

    const s: number = b2Vec2.DotVV(b2Vec2.SubVV(q, v1, b2Vec2.s_t0), r) / rr;
    if (s < 0 || 1 < s) {
      return false;
    }

    output.fraction = t;
    b2Rot.MulRV(xf.q, output.normal, output.normal);
    if (numerator > 0) {
      output.normal.SelfNeg();
    }
    return true;
  }

  /// @see b2Shape::ComputeAABB
  private static ComputeAABB_s_v1 = new b2Vec2();
  private static ComputeAABB_s_v2 = new b2Vec2();
  public ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void {
    const v1: b2Vec2 = b2Transform.MulXV(xf, this.m_vertex1, b2EdgeShape.ComputeAABB_s_v1);
    const v2: b2Vec2 = b2Transform.MulXV(xf, this.m_vertex2, b2EdgeShape.ComputeAABB_s_v2);

    b2Vec2.MinV(v1, v2, aabb.lowerBound);
    b2Vec2.MaxV(v1, v2, aabb.upperBound);

    const r: number = this.m_radius;
    aabb.lowerBound.SelfSubXY(r, r);
    aabb.upperBound.SelfAddXY(r, r);
  }

  /// @see b2Shape::ComputeMass
  public ComputeMass(massData: b2MassData, density: number): void {
    massData.mass = 0;
    b2Vec2.MidVV(this.m_vertex1, this.m_vertex2, massData.center);
    massData.I = 0;
  }

  public SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void {
    proxy.m_vertices = proxy.m_buffer;
    proxy.m_vertices[0].Copy(this.m_vertex1);
    proxy.m_vertices[1].Copy(this.m_vertex2);
    proxy.m_count = 2;
    proxy.m_radius = this.m_radius;
  }

  public ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number {
    c.SetZero();
    return 0;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    log("    const shape: b2EdgeShape = new b2EdgeShape();\n");
    log("    shape.m_radius = %.15f;\n", this.m_radius);
    log("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y);
    log("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y);
    log("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y);
    log("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y);
    log("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0);
    log("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3);
  }
}

/// A chain shape is a free form sequence of line segments.
/// The chain has two-sided collision, so you can use inside and outside collision.
/// Therefore, you may use any winding order.
/// Since there may be many vertices, they are allocated using b2Alloc.
/// Connectivity information is used to create smooth collisions.
/// WARNING: The chain will not collide properly if there are self-intersections.
export class b2ChainShape extends b2Shape {
  public m_vertices: b2Vec2[];
  public m_count: number = 0;
  public m_prevVertex: b2Vec2 = new b2Vec2();
  public m_nextVertex: b2Vec2 = new b2Vec2();
  public m_hasPrevVertex: boolean = false;
  public m_hasNextVertex: boolean = false;

  constructor() {
    super(b2ShapeType.e_chainShape, b2_polygonRadius);
  }

  /// Create a loop. This automatically adjusts connectivity.
  /// @param vertices an array of vertices, these are copied
  /// @param count the vertex count
  public CreateLoop(vertices: b2Vec2[], count: number = vertices.length): b2ChainShape {
    ///b2Assert(this.m_vertices === null && this.m_count === 0);
    ///b2Assert(count >= 3);
    ///for (let i: number = 1; i < count; ++i) {
    ///  const v1 = vertices[i - 1];
    ///  const v2 = vertices[i];
    ///  // If the code crashes here, it means your vertices are too close together.
    ///  b2Assert(b2Vec2.DistanceSquaredVV(v1, v2) > b2_linearSlop * b2_linearSlop);
    ///}

    this.m_count = count + 1;
    this.m_vertices = b2Vec2.MakeArray(this.m_count);
    for (let i: number = 0; i < count; ++i) {
      this.m_vertices[i].Copy(vertices[i]);
    }
    this.m_vertices[count].Copy(this.m_vertices[0]);
    this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]);
    this.m_nextVertex.Copy(this.m_vertices[1]);
    this.m_hasPrevVertex = true;
    this.m_hasNextVertex = true;
    return this;
  }

  /// Create a chain with isolated end vertices.
  /// @param vertices an array of vertices, these are copied
  /// @param count the vertex count
  public CreateChain(vertices: b2Vec2[], count: number = vertices.length): b2ChainShape {
    ///b2Assert(this.m_vertices === null && this.m_count === 0);
    ///b2Assert(count >= 2);
    ///for (let i: number = 1; i < count; ++i) {
    ///  const v1 = vertices[i - 1];
    ///  const v2 = vertices[i];
    ///  // If the code crashes here, it means your vertices are too close together.
    ///  b2Assert(b2Vec2.DistanceSquaredVV(v1, v2) > b2_linearSlop * b2_linearSlop);
    ///}

    this.m_count = count;
    this.m_vertices = b2Vec2.MakeArray(count);
    for (let i: number = 0; i < count; ++i) {
      this.m_vertices[i].Copy(vertices[i]);
    }
    this.m_hasPrevVertex = false;
    this.m_hasNextVertex = false;

  this.m_prevVertex.SetZero();
  this.m_nextVertex.SetZero();

    return this;
  }

  /// Establish connectivity to a vertex that precedes the first vertex.
  /// Don't call this for loops.
  public SetPrevVertex(prevVertex: b2Vec2): b2ChainShape {
    this.m_prevVertex.Copy(prevVertex);
    this.m_hasPrevVertex = true;
    return this;
  }

  /// Establish connectivity to a vertex that follows the last vertex.
  /// Don't call this for loops.
  public SetNextVertex(nextVertex: b2Vec2): b2ChainShape {
    this.m_nextVertex.Copy(nextVertex);
    this.m_hasNextVertex = true;
    return this;
  }

  /// Implement b2Shape. Vertices are cloned using b2Alloc.
  public Clone(): b2ChainShape {
    return new b2ChainShape().Copy(this);
  }

  public Copy(other: b2ChainShape): b2ChainShape {
    super.Copy(other);

    ///b2Assert(other instanceof b2ChainShape);

    this.CreateChain(other.m_vertices, other.m_count);
    this.m_prevVertex.Copy(other.m_prevVertex);
    this.m_nextVertex.Copy(other.m_nextVertex);
    this.m_hasPrevVertex = other.m_hasPrevVertex;
    this.m_hasNextVertex = other.m_hasNextVertex;

    return this;
  }

  /// @see b2Shape::GetChildCount
  public GetChildCount(): number {
    // edge count = vertex count - 1
    return this.m_count - 1;
  }

  /// Get a child edge.
  public GetChildEdge(edge: b2EdgeShape, index: number): void {
    ///b2Assert(0 <= index && index < this.m_count - 1);
    edge.m_type = b2ShapeType.e_edgeShape;
    edge.m_radius = this.m_radius;

    edge.m_vertex1.Copy(this.m_vertices[index]);
    edge.m_vertex2.Copy(this.m_vertices[index + 1]);

    if (index > 0) {
      edge.m_vertex0.Copy(this.m_vertices[index - 1]);
      edge.m_hasVertex0 = true;
    } else {
      edge.m_vertex0.Copy(this.m_prevVertex);
      edge.m_hasVertex0 = this.m_hasPrevVertex;
    }

    if (index < this.m_count - 2) {
      edge.m_vertex3.Copy(this.m_vertices[index + 2]);
      edge.m_hasVertex3 = true;
    } else {
      edge.m_vertex3.Copy(this.m_nextVertex);
      edge.m_hasVertex3 = this.m_hasNextVertex;
    }
  }

  /// This always return false.
  /// @see b2Shape::TestPoint
  public TestPoint(xf: b2Transform, p: b2Vec2): boolean {
    return false;
  }

  ///#if B2_ENABLE_PARTICLE
  /// @see b2Shape::ComputeDistance
  private static ComputeDistance_s_edgeShape = new b2EdgeShape();
  public ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    const edge = b2ChainShape.ComputeDistance_s_edgeShape;
    this.GetChildEdge(edge, childIndex);
    return edge.ComputeDistance(xf, p, normal, 0);
  }
  ///#endif

  /// Implement b2Shape.
  private static RayCast_s_edgeShape = new b2EdgeShape();
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean {
    ///b2Assert(childIndex < this.m_count);

    const edgeShape: b2EdgeShape = b2ChainShape.RayCast_s_edgeShape;

    edgeShape.m_vertex1.Copy(this.m_vertices[childIndex]);
    edgeShape.m_vertex2.Copy(this.m_vertices[(childIndex + 1) % this.m_count]);

    return edgeShape.RayCast(output, input, xf, 0);
  }

  /// @see b2Shape::ComputeAABB
  private static ComputeAABB_s_v1 = new b2Vec2();
  private static ComputeAABB_s_v2 = new b2Vec2();
  public ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void {
    ///b2Assert(childIndex < this.m_count);

    const vertexi1: b2Vec2 = this.m_vertices[childIndex];
    const vertexi2: b2Vec2 = this.m_vertices[(childIndex + 1) % this.m_count];

    const v1: b2Vec2 = b2Transform.MulXV(xf, vertexi1, b2ChainShape.ComputeAABB_s_v1);
    const v2: b2Vec2 = b2Transform.MulXV(xf, vertexi2, b2ChainShape.ComputeAABB_s_v2);

    b2Vec2.MinV(v1, v2, aabb.lowerBound);
    b2Vec2.MaxV(v1, v2, aabb.upperBound);
  }

  /// Chains have zero mass.
  /// @see b2Shape::ComputeMass
  public ComputeMass(massData: b2MassData, density: number): void {
    massData.mass = 0;
    massData.center.SetZero();
    massData.I = 0;
  }

  public SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void {
    ///b2Assert(0 <= index && index < this.m_count);

    proxy.m_vertices = proxy.m_buffer;
    proxy.m_vertices[0].Copy(this.m_vertices[index]);
    if (index + 1 < this.m_count) {
      proxy.m_vertices[1].Copy(this.m_vertices[index + 1]);
    } else {
      proxy.m_vertices[1].Copy(this.m_vertices[0]);
    }
    proxy.m_count = 2;
    proxy.m_radius = this.m_radius;
  }

  public ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number {
    c.SetZero();
    return 0;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    log("    const shape: b2ChainShape = new b2ChainShape();\n");
    log("    const vs: b2Vec2[] = b2Vec2.MakeArray(%d);\n", b2_maxPolygonVertices);
    for (let i: number = 0; i < this.m_count; ++i) {
      log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
    }
    log("    shape.CreateChain(vs, %d);\n", this.m_count);
    log("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y);
    log("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y);
    log("    shape.m_hasPrevVertex = %s;\n", (this.m_hasPrevVertex) ? ("true") : ("false"));
    log("    shape.m_hasNextVertex = %s;\n", (this.m_hasNextVertex) ? ("true") : ("false"));
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// A circle shape.
export class b2CircleShape extends b2Shape {
  public m_p: b2Vec2 = new b2Vec2();

  constructor(radius: number = 0) {
    super(b2ShapeType.e_circleShape, radius);
  }

  /// Implement b2Shape.
  public Clone(): b2CircleShape {
    return new b2CircleShape().Copy(this);
  }

  public Copy(other: b2CircleShape): b2CircleShape {
    super.Copy(other);

    ///b2Assert(other instanceof b2CircleShape);

    this.m_p.Copy(other.m_p);
    return this;
  }

  /// @see b2Shape::GetChildCount
  public GetChildCount(): number {
    return 1;
  }

  /// Implement b2Shape.
  private static TestPoint_s_center = new b2Vec2();
  private static TestPoint_s_d = new b2Vec2();
  public TestPoint(transform: b2Transform, p: b2Vec2): boolean {
    const center: b2Vec2 = b2Transform.MulXV(transform, this.m_p, b2CircleShape.TestPoint_s_center);
    const d: b2Vec2 = b2Vec2.SubVV(p, center, b2CircleShape.TestPoint_s_d);
    return b2Vec2.DotVV(d, d) <= b2Sq(this.m_radius);
  }

  ///#if B2_ENABLE_PARTICLE
  /// @see b2Shape::ComputeDistance
  private static ComputeDistance_s_center = new b2Vec2();
  public ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    const center = b2Transform.MulXV(xf, this.m_p, b2CircleShape.ComputeDistance_s_center);
    b2Vec2.SubVV(p, center, normal);
    return normal.Normalize() - this.m_radius;
  }
  ///#endif

  /// Implement b2Shape.
  // Collision Detection in Interactive 3D Environments by Gino van den Bergen
  // From Section 3.1.2
  // x = s + a * r
  // norm(x) = radius
  private static RayCast_s_position = new b2Vec2();
  private static RayCast_s_s = new b2Vec2();
  private static RayCast_s_r = new b2Vec2();
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean {
    const position: b2Vec2 = b2Transform.MulXV(transform, this.m_p, b2CircleShape.RayCast_s_position);
    const s: b2Vec2 = b2Vec2.SubVV(input.p1, position, b2CircleShape.RayCast_s_s);
    const b: number = b2Vec2.DotVV(s, s) - b2Sq(this.m_radius);

    // Solve quadratic equation.
    const r: b2Vec2 = b2Vec2.SubVV(input.p2, input.p1, b2CircleShape.RayCast_s_r);
    const c: number = b2Vec2.DotVV(s, r);
    const rr: number = b2Vec2.DotVV(r, r);
    const sigma = c * c - rr * b;

    // Check for negative discriminant and short segment.
    if (sigma < 0 || rr < b2_epsilon) {
      return false;
    }

    // Find the point of intersection of the line with the circle.
    let a: number = (-(c + b2Sqrt(sigma)));

    // Is the intersection point on the segment?
    if (0 <= a && a <= input.maxFraction * rr) {
      a /= rr;
      output.fraction = a;
      b2Vec2.AddVMulSV(s, a, r, output.normal).SelfNormalize();
      return true;
    }

    return false;
  }

  /// @see b2Shape::ComputeAABB
  private static ComputeAABB_s_p = new b2Vec2();
  public ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void {
    const p: b2Vec2 = b2Transform.MulXV(transform, this.m_p, b2CircleShape.ComputeAABB_s_p);
    aabb.lowerBound.Set(p.x - this.m_radius, p.y - this.m_radius);
    aabb.upperBound.Set(p.x + this.m_radius, p.y + this.m_radius);
  }

  /// @see b2Shape::ComputeMass
  public ComputeMass(massData: b2MassData, density: number): void {
    const radius_sq: number = b2Sq(this.m_radius);
    massData.mass = density * b2_pi * radius_sq;
    massData.center.Copy(this.m_p);

    // inertia about the local origin
    massData.I = massData.mass * (0.5 * radius_sq + b2Vec2.DotVV(this.m_p, this.m_p));
  }

  public SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void {
    proxy.m_vertices = proxy.m_buffer;
    proxy.m_vertices[0].Copy(this.m_p);
    proxy.m_count = 1;
    proxy.m_radius = this.m_radius;
  }

  public ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number {
    const p: b2Vec2 = b2Transform.MulXV(xf, this.m_p, new b2Vec2());
    const l: number = (-(b2Vec2.DotVV(normal, p) - offset));

    if (l < (-this.m_radius) + b2_epsilon) {
      // Completely dry
      return 0;
    }
    if (l > this.m_radius) {
      // Completely wet
      c.Copy(p);
      return b2_pi * this.m_radius * this.m_radius;
    }

    // Magic
    const r2: number = this.m_radius * this.m_radius;
    const l2: number = l * l;
    const area: number = r2 * (b2Asin(l / this.m_radius) + b2_pi / 2) + l * b2Sqrt(r2 - l2);
    const com: number = (-2 / 3 * b2Pow(r2 - l2, 1.5) / area);

    c.x = p.x + normal.x * com;
    c.y = p.y + normal.y * com;

    return area;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    log("    const shape: b2CircleShape = new b2CircleShape();\n");
    log("    shape.m_radius = %.15f;\n", this.m_radius);
    log("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// A convex polygon. It is assumed that the interior of the polygon is to
/// the left of each edge.
/// Polygons have a maximum number of vertices equal to b2_maxPolygonVertices.
/// In most cases you should not need many vertices for a convex polygon.
export class b2PolygonShape extends b2Shape {
  public m_centroid: b2Vec2 = new b2Vec2(0, 0);
  public m_vertices: b2Vec2[] = b2Vec2.MakeArray(b2_maxPolygonVertices);
  public m_normals: b2Vec2[] = b2Vec2.MakeArray(b2_maxPolygonVertices);
  public m_count: number = 0;

  constructor() {
    super(b2ShapeType.e_polygonShape, b2_polygonRadius);
  }

  /// Implement b2Shape.
  public Clone(): b2PolygonShape {
    return new b2PolygonShape().Copy(this);
  }

  public Copy(other: b2PolygonShape): b2PolygonShape {
    super.Copy(other);

    ///b2Assert(other instanceof b2PolygonShape);

    this.m_centroid.Copy(other.m_centroid);
    this.m_count = other.m_count;
    for (let i: number = 0; i < this.m_count; ++i) {
      this.m_vertices[i].Copy(other.m_vertices[i]);
      this.m_normals[i].Copy(other.m_normals[i]);
    }
    return this;
  }

  /// @see b2Shape::GetChildCount
  public GetChildCount(): number {
    return 1;
  }

  /// Create a convex hull from the given array of points.
  /// The count must be in the range [3, b2_maxPolygonVertices].
  /// @warning the points may be re-ordered, even if they form a convex polygon
  /// @warning collinear points are handled but not removed. Collinear points
  /// may lead to poor stacking behavior.
  private static Set_s_ps = b2Vec2.MakeArray(b2_maxPolygonVertices);
  private static Set_s_hull = b2MakeNumberArray(b2_maxPolygonVertices);
  private static Set_s_r = new b2Vec2();
  private static Set_s_v = new b2Vec2();
  public Set(vertices: b2Vec2[], count: number = vertices.length, start: number = 0): b2PolygonShape {

    ///b2Assert(3 <= count && count <= b2_maxPolygonVertices);
    if (count < 3) {
      return this.SetAsBox(1, 1);
    }

    let n: number = b2Min(count, b2_maxPolygonVertices);

    // Perform welding and copy vertices into local buffer.
    const ps: b2Vec2[] = b2PolygonShape.Set_s_ps;
    let tempCount = 0;
    for (let i = 0; i < n; ++i) {
      const /*b2Vec2*/ v = vertices[start + i];

      let /*bool*/ unique = true;
      for (let /*int32*/ j = 0; j < tempCount; ++j) {
        if (b2Vec2.DistanceSquaredVV(v, ps[j]) < ((0.5 * b2_linearSlop) * (0.5 * b2_linearSlop))) {
          unique = false;
          break;
        }
      }

      if (unique) {
        ps[tempCount++].Copy(v); // ps[tempCount++] = v;
      }
    }

    n = tempCount;
    if (n < 3) {
      // Polygon is degenerate.
      ///b2Assert(false);
      return this.SetAsBox(1.0, 1.0);
    }

    // Create the convex hull using the Gift wrapping algorithm
    // http://en.wikipedia.org/wiki/Gift_wrapping_algorithm

    // Find the right most point on the hull
    let i0: number = 0;
    let x0: number = ps[0].x;
    for (let i: number = 1; i < n; ++i) {
      const x: number = ps[i].x;
      if (x > x0 || (x === x0 && ps[i].y < ps[i0].y)) {
        i0 = i;
        x0 = x;
      }
    }

    const hull: number[] = b2PolygonShape.Set_s_hull;
    let m: number = 0;
    let ih: number = i0;

    for (; ; ) {
      hull[m] = ih;

      let ie: number = 0;
      for (let j: number = 1; j < n; ++j) {
        if (ie === ih) {
          ie = j;
          continue;
        }

        const r: b2Vec2 = b2Vec2.SubVV(ps[ie], ps[hull[m]], b2PolygonShape.Set_s_r);
        const v: b2Vec2 = b2Vec2.SubVV(ps[j], ps[hull[m]], b2PolygonShape.Set_s_v);
        const c: number = b2Vec2.CrossVV(r, v);
        if (c < 0) {
          ie = j;
        }

        // Collinearity check
        if (c === 0 && v.LengthSquared() > r.LengthSquared()) {
          ie = j;
        }
      }

      ++m;
      ih = ie;

      if (ie === i0) {
        break;
      }
    }

    this.m_count = m;

    // Copy vertices.
    for (let i: number = 0; i < m; ++i) {
      this.m_vertices[i].Copy(ps[hull[i]]);
    }

    // Compute normals. Ensure the edges have non-zero length.
    for (let i: number = 0; i < m; ++i) {
      const vertexi1: b2Vec2 = this.m_vertices[i];
      const vertexi2: b2Vec2 = this.m_vertices[(i + 1) % m];
      const edge: b2Vec2 = b2Vec2.SubVV(vertexi2, vertexi1, b2Vec2.s_t0); // edge uses s_t0
      ///b2Assert(edge.LengthSquared() > b2_epsilon_sq);
      b2Vec2.CrossVOne(edge, this.m_normals[i]).SelfNormalize();
    }

    // Compute the polygon centroid.
    b2PolygonShape.ComputeCentroid(this.m_vertices, m, this.m_centroid);

    return this;
  }

  public SetAsArray(vertices: b2Vec2[], count: number = vertices.length): b2PolygonShape {
    return this.Set(vertices, count);
  }

  /// Build vertices to represent an axis-aligned box or an oriented box.
  /// @param hx the half-width.
  /// @param hy the half-height.
  /// @param center the center of the box in local coordinates.
  /// @param angle the rotation of the box in local coordinates.
  public SetAsBox(hx: number, hy: number, center?: b2Vec2, angle: number = 0): b2PolygonShape {
    this.m_count = 4;
    this.m_vertices[0].Set((-hx), (-hy));
    this.m_vertices[1].Set(hx, (-hy));
    this.m_vertices[2].Set(hx, hy);
    this.m_vertices[3].Set((-hx), hy);
    this.m_normals[0].Set(0, (-1));
    this.m_normals[1].Set(1, 0);
    this.m_normals[2].Set(0, 1);
    this.m_normals[3].Set((-1), 0);
    this.m_centroid.SetZero();

    if (center instanceof b2Vec2) {
      this.m_centroid.Copy(center);

      const xf: b2Transform = new b2Transform();
      xf.SetPosition(center);
      xf.SetRotationAngle(angle);

      // Transform vertices and normals.
      for (let i: number = 0; i < this.m_count; ++i) {
        b2Transform.MulXV(xf, this.m_vertices[i], this.m_vertices[i]);
        b2Rot.MulRV(xf.q, this.m_normals[i], this.m_normals[i]);
      }
    }

    return this;
  }

  /// @see b2Shape::TestPoint
  private static TestPoint_s_pLocal = new b2Vec2();
  public TestPoint(xf: b2Transform, p: b2Vec2): boolean {
    const pLocal: b2Vec2 = b2Transform.MulTXV(xf, p, b2PolygonShape.TestPoint_s_pLocal);

    for (let i: number = 0; i < this.m_count; ++i) {
      const dot: number = b2Vec2.DotVV(this.m_normals[i], b2Vec2.SubVV(pLocal, this.m_vertices[i], b2Vec2.s_t0));
      if (dot > 0) {
        return false;
      }
    }

    return true;
  }

  ///#if B2_ENABLE_PARTICLE
  /// @see b2Shape::ComputeDistance
  private static ComputeDistance_s_pLocal = new b2Vec2();
  private static ComputeDistance_s_normalForMaxDistance = new b2Vec2();
  private static ComputeDistance_s_minDistance = new b2Vec2();
  private static ComputeDistance_s_distance = new b2Vec2();
  public ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    const pLocal = b2Transform.MulTXV(xf, p, b2PolygonShape.ComputeDistance_s_pLocal);
    let maxDistance = -b2_maxFloat;
    const normalForMaxDistance = b2PolygonShape.ComputeDistance_s_normalForMaxDistance.Copy(pLocal);

    for (let i = 0; i < this.m_count; ++i) {
      const dot = b2Vec2.DotVV(this.m_normals[i], b2Vec2.SubVV(pLocal, this.m_vertices[i], b2Vec2.s_t0));
      if (dot > maxDistance) {
        maxDistance = dot;
        normalForMaxDistance.Copy(this.m_normals[i]);
      }
    }

    if (maxDistance > 0) {
      const minDistance = b2PolygonShape.ComputeDistance_s_minDistance.Copy(normalForMaxDistance);
      let minDistance2 = maxDistance * maxDistance;
      for (let i = 0; i < this.m_count; ++i) {
        const distance = b2Vec2.SubVV(pLocal, this.m_vertices[i], b2PolygonShape.ComputeDistance_s_distance);
        const distance2 = distance.LengthSquared();
        if (minDistance2 > distance2) {
          minDistance.Copy(distance);
          minDistance2 = distance2;
        }
      }

      b2Rot.MulRV(xf.q, minDistance, normal);
      normal.Normalize();
      return Math.sqrt(minDistance2);
    } else {
      b2Rot.MulRV(xf.q, normalForMaxDistance, normal);
      return maxDistance;
    }
  }
  ///#endif

  /// Implement b2Shape.
  private static RayCast_s_p1 = new b2Vec2();
  private static RayCast_s_p2 = new b2Vec2();
  private static RayCast_s_d = new b2Vec2();
  public RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean {
    // Put the ray into the polygon's frame of reference.
    const p1: b2Vec2 = b2Transform.MulTXV(xf, input.p1, b2PolygonShape.RayCast_s_p1);
    const p2: b2Vec2 = b2Transform.MulTXV(xf, input.p2, b2PolygonShape.RayCast_s_p2);
    const d: b2Vec2 = b2Vec2.SubVV(p2, p1, b2PolygonShape.RayCast_s_d);

    let lower: number = 0, upper = input.maxFraction;

    let index: number = -1;

    for (let i: number = 0; i < this.m_count; ++i) {
      // p = p1 + a * d
      // dot(normal, p - v) = 0
      // dot(normal, p1 - v) + a * dot(normal, d) = 0
      const numerator: number = b2Vec2.DotVV(this.m_normals[i], b2Vec2.SubVV(this.m_vertices[i], p1, b2Vec2.s_t0));
      const denominator: number = b2Vec2.DotVV(this.m_normals[i], d);

      if (denominator === 0) {
        if (numerator < 0) {
          return false;
        }
      } else {
        // Note: we want this predicate without division:
        // lower < numerator / denominator, where denominator < 0
        // Since denominator < 0, we have to flip the inequality:
        // lower < numerator / denominator <==> denominator * lower > numerator.
        if (denominator < 0 && numerator < lower * denominator) {
          // Increase lower.
          // The segment enters this half-space.
          lower = numerator / denominator;
          index = i;
        } else if (denominator > 0 && numerator < upper * denominator) {
          // Decrease upper.
          // The segment exits this half-space.
          upper = numerator / denominator;
        }
      }

      // The use of epsilon here causes the assert on lower to trip
      // in some cases. Apparently the use of epsilon was to make edge
      // shapes work, but now those are handled separately.
      // if (upper < lower - b2_epsilon)
      if (upper < lower) {
        return false;
      }
    }

    ///b2Assert(0 <= lower && lower <= input.maxFraction);

    if (index >= 0) {
      output.fraction = lower;
      b2Rot.MulRV(xf.q, this.m_normals[index], output.normal);
      return true;
    }

    return false;
  }

  /// @see b2Shape::ComputeAABB
  private static ComputeAABB_s_v = new b2Vec2();
  public ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void {
    const lower: b2Vec2 = b2Transform.MulXV(xf, this.m_vertices[0], aabb.lowerBound);
    const upper: b2Vec2 = aabb.upperBound.Copy(lower);

    for (let i: number = 0; i < this.m_count; ++i) {
      const v: b2Vec2 = b2Transform.MulXV(xf, this.m_vertices[i], b2PolygonShape.ComputeAABB_s_v);
      b2Vec2.MinV(v, lower, lower);
      b2Vec2.MaxV(v, upper, upper);
    }

    const r: number = this.m_radius;
    lower.SelfSubXY(r, r);
    upper.SelfAddXY(r, r);
  }

  /// @see b2Shape::ComputeMass
  private static ComputeMass_s_center = new b2Vec2();
  private static ComputeMass_s_s = new b2Vec2();
  private static ComputeMass_s_e1 = new b2Vec2();
  private static ComputeMass_s_e2 = new b2Vec2();
  public ComputeMass(massData: b2MassData, density: number): void {
    // Polygon mass, centroid, and inertia.
    // Let rho be the polygon density in mass per unit area.
    // Then:
    // mass = rho * int(dA)
    // centroid.x = (1/mass) * rho * int(x * dA)
    // centroid.y = (1/mass) * rho * int(y * dA)
    // I = rho * int((x*x + y*y) * dA)
    //
    // We can compute these integrals by summing all the integrals
    // for each triangle of the polygon. To evaluate the integral
    // for a single triangle, we make a change of variables to
    // the (u,v) coordinates of the triangle:
    // x = x0 + e1x * u + e2x * v
    // y = y0 + e1y * u + e2y * v
    // where 0 <= u && 0 <= v && u + v <= 1.
    //
    // We integrate u from [0,1-v] and then v from [0,1].
    // We also need to use the Jacobian of the transformation:
    // D = cross(e1, e2)
    //
    // Simplification: triangle centroid = (1/3) * (p1 + p2 + p3)
    //
    // The rest of the derivation is handled by computer algebra.

    ///b2Assert(this.m_count >= 3);

    const center: b2Vec2 = b2PolygonShape.ComputeMass_s_center.SetZero();
    let area: number = 0;
    let I: number = 0;

    // s is the reference point for forming triangles.
    // It's location doesn't change the result (except for rounding error).
    const s: b2Vec2 = b2PolygonShape.ComputeMass_s_s.SetZero();

    // This code would put the reference point inside the polygon.
    for (let i: number = 0; i < this.m_count; ++i) {
      s.SelfAdd(this.m_vertices[i]);
    }
    s.SelfMul(1 / this.m_count);

    const k_inv3: number = 1 / 3;

    for (let i: number = 0; i < this.m_count; ++i) {
      // Triangle vertices.
      const e1: b2Vec2 = b2Vec2.SubVV(this.m_vertices[i], s, b2PolygonShape.ComputeMass_s_e1);
      const e2: b2Vec2 = b2Vec2.SubVV(this.m_vertices[(i + 1) % this.m_count], s, b2PolygonShape.ComputeMass_s_e2);

      const D: number = b2Vec2.CrossVV(e1, e2);

      const triangleArea: number = 0.5 * D;
      area += triangleArea;

      // Area weighted centroid
      center.SelfAdd(b2Vec2.MulSV(triangleArea * k_inv3, b2Vec2.AddVV(e1, e2, b2Vec2.s_t0), b2Vec2.s_t1));

      const ex1: number = e1.x;
      const ey1: number = e1.y;
      const ex2: number = e2.x;
      const ey2: number = e2.y;

      const intx2: number = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
      const inty2: number = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;

      I += (0.25 * k_inv3 * D) * (intx2 + inty2);
    }

    // Total mass
    massData.mass = density * area;

    // Center of mass
    ///b2Assert(area > b2_epsilon);
    center.SelfMul(1 / area);
    b2Vec2.AddVV(center, s, massData.center);

    // Inertia tensor relative to the local origin (point s).
    massData.I = density * I;

    // Shift to center of mass then to original body origin.
    massData.I += massData.mass * (b2Vec2.DotVV(massData.center, massData.center) - b2Vec2.DotVV(center, center));
  }

  private static Validate_s_e = new b2Vec2();
  private static Validate_s_v = new b2Vec2();
  public Validate(): boolean {
    for (let i: number = 0; i < this.m_count; ++i) {
      const i1 = i;
      const i2 = (i + 1) % this.m_count;
      const p: b2Vec2 = this.m_vertices[i1];
      const e: b2Vec2 = b2Vec2.SubVV(this.m_vertices[i2], p, b2PolygonShape.Validate_s_e);

      for (let j: number = 0; j < this.m_count; ++j) {
        if (j === i1 || j === i2) {
          continue;
        }

        const v: b2Vec2 = b2Vec2.SubVV(this.m_vertices[j], p, b2PolygonShape.Validate_s_v);
        const c: number = b2Vec2.CrossVV(e, v);
        if (c < 0) {
          return false;
        }
      }
    }

    return true;
  }

  public SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void {
    proxy.m_vertices = this.m_vertices;
    proxy.m_count = this.m_count;
    proxy.m_radius = this.m_radius;
  }

  private static ComputeSubmergedArea_s_normalL = new b2Vec2();
  private static ComputeSubmergedArea_s_depths = b2MakeNumberArray(b2_maxPolygonVertices);
  private static ComputeSubmergedArea_s_md = new b2MassData();
  private static ComputeSubmergedArea_s_intoVec = new b2Vec2();
  private static ComputeSubmergedArea_s_outoVec = new b2Vec2();
  private static ComputeSubmergedArea_s_center = new b2Vec2();
  public ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number {
    // Transform plane into shape co-ordinates
    const normalL: b2Vec2 = b2Rot.MulTRV(xf.q, normal, b2PolygonShape.ComputeSubmergedArea_s_normalL);
    const offsetL: number = offset - b2Vec2.DotVV(normal, xf.p);

    const depths: number[] = b2PolygonShape.ComputeSubmergedArea_s_depths;
    let diveCount: number = 0;
    let intoIndex: number = -1;
    let outoIndex: number = -1;

    let lastSubmerged: boolean = false;
    for (let i: number = 0; i < this.m_count; ++i) {
      depths[i] = b2Vec2.DotVV(normalL, this.m_vertices[i]) - offsetL;
      const isSubmerged: boolean = depths[i] < (-b2_epsilon);
      if (i > 0) {
        if (isSubmerged) {
          if (!lastSubmerged) {
            intoIndex = i - 1;
            diveCount++;
          }
        } else {
          if (lastSubmerged) {
            outoIndex = i - 1;
            diveCount++;
          }
        }
      }
      lastSubmerged = isSubmerged;
    }
    switch (diveCount) {
    case 0:
      if (lastSubmerged) {
        // Completely submerged
        const md: b2MassData = b2PolygonShape.ComputeSubmergedArea_s_md;
        this.ComputeMass(md, 1);
        b2Transform.MulXV(xf, md.center, c);
        return md.mass;
      } else {
        // Completely dry
        return 0;
      }
    case 1:
      if (intoIndex === (-1)) {
        intoIndex = this.m_count - 1;
      } else {
        outoIndex = this.m_count - 1;
      }
      break;
    }
    const intoIndex2: number = ((intoIndex + 1) % this.m_count);
    const outoIndex2: number = ((outoIndex + 1) % this.m_count);
    const intoLamdda: number = (0 - depths[intoIndex]) / (depths[intoIndex2] - depths[intoIndex]);
    const outoLamdda: number = (0 - depths[outoIndex]) / (depths[outoIndex2] - depths[outoIndex]);

    const intoVec: b2Vec2 = b2PolygonShape.ComputeSubmergedArea_s_intoVec.Set(
      this.m_vertices[intoIndex].x * (1 - intoLamdda) + this.m_vertices[intoIndex2].x * intoLamdda,
      this.m_vertices[intoIndex].y * (1 - intoLamdda) + this.m_vertices[intoIndex2].y * intoLamdda);
    const outoVec: b2Vec2 = b2PolygonShape.ComputeSubmergedArea_s_outoVec.Set(
      this.m_vertices[outoIndex].x * (1 - outoLamdda) + this.m_vertices[outoIndex2].x * outoLamdda,
      this.m_vertices[outoIndex].y * (1 - outoLamdda) + this.m_vertices[outoIndex2].y * outoLamdda);

    // Initialize accumulator
    let area: number = 0;
    const center: b2Vec2 = b2PolygonShape.ComputeSubmergedArea_s_center.SetZero();
    let p2: b2Vec2 = this.m_vertices[intoIndex2];
    let p3: b2Vec2;

    // An awkward loop from intoIndex2+1 to outIndex2
    let i: number = intoIndex2;
    while (i !== outoIndex2) {
      i = (i + 1) % this.m_count;
      if (i === outoIndex2)
        p3 = outoVec;
      else
        p3  = this.m_vertices[i];

      const triangleArea: number = 0.5 * ((p2.x - intoVec.x) * (p3.y - intoVec.y) - (p2.y - intoVec.y) * (p3.x - intoVec.x));
      area += triangleArea;
      // Area weighted centroid
      center.x += triangleArea * (intoVec.x + p2.x + p3.x) / 3;
      center.y += triangleArea * (intoVec.y + p2.y + p3.y) / 3;

      p2 = p3;
    }

    // Normalize and transform centroid
    center.SelfMul(1 / area);
    b2Transform.MulXV(xf, center, c);

    return area;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    log("    const shape: b2PolygonShape = new b2PolygonShape();\n");
    log("    const vs: b2Vec2[] = b2Vec2.MakeArray(%d);\n", b2_maxPolygonVertices);
    for (let i: number = 0; i < this.m_count; ++i) {
      log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
    }
    log("    shape.Set(vs, %d);\n", this.m_count);
  }

  private static ComputeCentroid_s_pRef = new b2Vec2();
  private static ComputeCentroid_s_e1 = new b2Vec2();
  private static ComputeCentroid_s_e2 = new b2Vec2();
  public static ComputeCentroid(vs: b2Vec2[], count: number, out: b2Vec2): b2Vec2 {
    ///b2Assert(count >= 3);

    const c: b2Vec2 = out; c.SetZero();
    let area: number = 0;

    // s is the reference point for forming triangles.
    // It's location doesn't change the result (except for rounding error).
    const pRef: b2Vec2 = b2PolygonShape.ComputeCentroid_s_pRef.SetZero();
    /*
#if 0
    // This code would put the reference point inside the polygon.
    for (let i: number = 0; i < count; ++i) {
      pRef.SelfAdd(vs[i]);
    }
    pRef.SelfMul(1 / count);
#endif
    */

    const inv3: number = 1 / 3;

    for (let i: number = 0; i < count; ++i) {
      // Triangle vertices.
      const p1: b2Vec2 = pRef;
      const p2: b2Vec2 = vs[i];
      const p3: b2Vec2 = vs[(i + 1) % count];

      const e1: b2Vec2 = b2Vec2.SubVV(p2, p1, b2PolygonShape.ComputeCentroid_s_e1);
      const e2: b2Vec2 = b2Vec2.SubVV(p3, p1, b2PolygonShape.ComputeCentroid_s_e2);

      const D: number = b2Vec2.CrossVV(e1, e2);

      const triangleArea: number = 0.5 * D;
      area += triangleArea;

      // Area weighted centroid
      c.x += triangleArea * inv3 * (p1.x + p2.x + p3.x);
      c.y += triangleArea * inv3 * (p1.y + p2.y + p3.y);
    }

    // Centroid
    ///b2Assert(area > b2_epsilon);
    c.SelfMul(1 / area);
    return c;
  }

  /*
  public static ComputeOBB(obb, vs, count) {
    const i: number = 0;
    const p: Array = [count + 1];
    for (i = 0; i < count; ++i) {
      p[i] = vs[i];
    }
    p[count] = p[0];
    const minArea = b2_maxFloat;
    for (i = 1; i <= count; ++i) {
      const root = p[i - 1];
      const uxX = p[i].x - root.x;
      const uxY = p[i].y - root.y;
      const length = b2Sqrt(uxX * uxX + uxY * uxY);
      uxX /= length;
      uxY /= length;
      const uyX = (-uxY);
      const uyY = uxX;
      const lowerX = b2_maxFloat;
      const lowerY = b2_maxFloat;
      const upperX = (-b2_maxFloat);
      const upperY = (-b2_maxFloat);
      for (let j: number = 0; j < count; ++j) {
        const dX = p[j].x - root.x;
        const dY = p[j].y - root.y;
        const rX = (uxX * dX + uxY * dY);
        const rY = (uyX * dX + uyY * dY);
        if (rX < lowerX) lowerX = rX;
        if (rY < lowerY) lowerY = rY;
        if (rX > upperX) upperX = rX;
        if (rY > upperY) upperY = rY;
      }
      const area = (upperX - lowerX) * (upperY - lowerY);
      if (area < 0.95 * minArea) {
        minArea = area;
        obb.R.ex.x = uxX;
        obb.R.ex.y = uxY;
        obb.R.ey.x = uyX;
        obb.R.ey.y = uyY;
        const center_x: number = 0.5 * (lowerX + upperX);
        const center_y: number = 0.5 * (lowerY + upperY);
        const tMat = obb.R;
        obb.center.x = root.x + (tMat.ex.x * center_x + tMat.ey.x * center_y);
        obb.center.y = root.y + (tMat.ex.y * center_x + tMat.ey.y * center_y);
        obb.extents.x = 0.5 * (upperX - lowerX);
        obb.extents.y = 0.5 * (upperY - lowerY);
      }
    }
  }
  */
}



/*
* Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Distance joint definition. This requires defining an
/// anchor point on both bodies and the non-zero length of the
/// distance joint. The definition uses local anchor points
/// so that the initial configuration can violate the constraint
/// slightly. This helps when saving and loading a game.
/// @warning Do not use a zero or short length.
export class b2DistanceJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2();
  public localAnchorB: b2Vec2 = new b2Vec2();
  public length: number = 1;
  public frequencyHz: number = 0;
  public dampingRatio: number = 0;

  constructor() {
    super(b2JointType.e_distanceJoint);
  }

  public Initialize(b1: b2Body, b2: b2Body, anchor1: b2Vec2, anchor2: b2Vec2): void {
    this.bodyA = b1;
    this.bodyB = b2;
    this.bodyA.GetLocalPoint(anchor1, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor2, this.localAnchorB);
    this.length = b2Vec2.DistanceVV(anchor1, anchor2);
    this.frequencyHz = 0;
    this.dampingRatio = 0;
  }
}

export class b2DistanceJoint extends b2Joint {
  public m_frequencyHz: number = 0;
  public m_dampingRatio: number = 0;
  public m_bias: number = 0;

  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_gamma: number = 0;
  public m_impulse: number = 0;
  public m_length: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_u: b2Vec2 = new b2Vec2();
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_mass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();

  constructor(def: b2DistanceJointDef) {
    super(def);

    this.m_frequencyHz = def.frequencyHz;
    this.m_dampingRatio = def.dampingRatio;

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_length = def.length;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    return out.Set(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public SetLength(length: number): void {
    this.m_length = length;
  }

  public Length() {
    return this.m_length;
  }

  public SetFrequency(hz: number): void {
    this.m_frequencyHz = hz;
  }

  public GetFrequency() {
    return this.m_frequencyHz;
  }

  public SetDampingRatio(ratio: number): void {
    this.m_dampingRatio = ratio;
  }

  public GetDampingRatio() {
    return this.m_dampingRatio;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA: number = this.m_bodyA.m_islandIndex;
    const indexB: number = this.m_bodyB.m_islandIndex;

    log("  const jd: b2DistanceJointDef = new b2DistanceJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.length = %.15f;\n", this.m_length);
    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }

  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // const qA: b2Rot = new b2Rot(aA), qB: b2Rot = new b2Rot(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // m_u = cB + m_rB - cA - m_rA;
    this.m_u.x = cB.x + this.m_rB.x - cA.x - this.m_rA.x;
    this.m_u.y = cB.y + this.m_rB.y - cA.y - this.m_rA.y;

    // Handle singularity.
    const length: number = this.m_u.Length();
    if (length > b2_linearSlop) {
      this.m_u.SelfMul(1 / length);
    } else {
      this.m_u.SetZero();
    }

    // float32 crAu = b2Cross(m_rA, m_u);
    const crAu: number = b2Vec2.CrossVV(this.m_rA, this.m_u);
    // float32 crBu = b2Cross(m_rB, m_u);
    const crBu: number = b2Vec2.CrossVV(this.m_rB, this.m_u);
    // float32 invMass = m_invMassA + m_invIA * crAu * crAu + m_invMassB + m_invIB * crBu * crBu;
    let invMass: number = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;

    // Compute the effective mass matrix.
    this.m_mass = invMass !== 0 ? 1 / invMass : 0;

    if (this.m_frequencyHz > 0) {
      const C: number = length - this.m_length;

      // Frequency
      const omega: number = 2 * b2_pi * this.m_frequencyHz;

      // Damping coefficient
      const d: number = 2 * this.m_mass * this.m_dampingRatio * omega;

      // Spring stiffness
      const k: number = this.m_mass * omega * omega;

      // magic formulas
      const h: number = data.step.dt;
      this.m_gamma = h * (d + h * k);
      this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
      this.m_bias = C * h * k * this.m_gamma;

      invMass += this.m_gamma;
      this.m_mass = invMass !== 0 ? 1 / invMass : 0;
    } else {
      this.m_gamma = 0;
      this.m_bias = 0;
    }

    if (data.step.warmStarting) {
      // Scale the impulse to support a variable time step.
      this.m_impulse *= data.step.dtRatio;

      // b2Vec2 P = m_impulse * m_u;
      const P: b2Vec2 = b2Vec2.MulSV(this.m_impulse, this.m_u, b2DistanceJoint.InitVelocityConstraints_s_P);

      // vA -= m_invMassA * P;
      vA.SelfMulSub(this.m_invMassA, P);
      // wA -= m_invIA * b2Cross(m_rA, P);
      wA -= this.m_invIA * b2Vec2.CrossVV(this.m_rA, P);
      // vB += m_invMassB * P;
      vB.SelfMulAdd(this.m_invMassB, P);
      // wB += m_invIB * b2Cross(m_rB, P);
      wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, P);
    } else {
      this.m_impulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_vpA = new b2Vec2();
  private static SolveVelocityConstraints_s_vpB = new b2Vec2();
  private static SolveVelocityConstraints_s_P = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // b2Vec2 vpA = vA + b2Cross(wA, m_rA);
    const vpA: b2Vec2 = b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2DistanceJoint.SolveVelocityConstraints_s_vpA);
    // b2Vec2 vpB = vB + b2Cross(wB, m_rB);
    const vpB: b2Vec2 = b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2DistanceJoint.SolveVelocityConstraints_s_vpB);
    // float32 Cdot = b2Dot(m_u, vpB - vpA);
    const Cdot: number = b2Vec2.DotVV(this.m_u, b2Vec2.SubVV(vpB, vpA, b2Vec2.s_t0));

    const impulse: number = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
    this.m_impulse += impulse;

    // b2Vec2 P = impulse * m_u;
    const P: b2Vec2 = b2Vec2.MulSV(impulse, this.m_u, b2DistanceJoint.SolveVelocityConstraints_s_P);

    // vA -= m_invMassA * P;
    vA.SelfMulSub(this.m_invMassA, P);
    // wA -= m_invIA * b2Cross(m_rA, P);
    wA -= this.m_invIA * b2Vec2.CrossVV(this.m_rA, P);
    // vB += m_invMassB * P;
    vB.SelfMulAdd(this.m_invMassB, P);
    // wB += m_invIB * b2Cross(m_rB, P);
    wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, P);

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_P = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    if (this.m_frequencyHz > 0) {
      // There is no position correction for soft distance constraints.
      return true;
    }

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    // const qA: b2Rot = new b2Rot(aA), qB: b2Rot = new b2Rot(aB);
    ///const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    const rA: b2Vec2 = b2Rot.MulRV(this.m_qA, this.m_lalcA, this.m_rA); // use m_rA
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    const rB: b2Vec2 = b2Rot.MulRV(this.m_qB, this.m_lalcB, this.m_rB); // use m_rB
    // b2Vec2 u = cB + rB - cA - rA;
    const u: b2Vec2 = this.m_u; // use m_u
    u.x = cB.x + rB.x - cA.x - rA.x;
    u.y = cB.y + rB.y - cA.y - rA.y;

    // float32 length = u.Normalize();
    const length: number = this.m_u.Normalize();
    // float32 C = length - m_length;
    let C: number = length - this.m_length;
    C = b2Clamp(C, (-b2_maxLinearCorrection), b2_maxLinearCorrection);

    const impulse: number = (-this.m_mass * C);
    // b2Vec2 P = impulse * u;
    const P: b2Vec2 = b2Vec2.MulSV(impulse, u, b2DistanceJoint.SolvePositionConstraints_s_P);

    // cA -= m_invMassA * P;
    cA.SelfMulSub(this.m_invMassA, P);
    // aA -= m_invIA * b2Cross(rA, P);
    aA -= this.m_invIA * b2Vec2.CrossVV(rA, P);
    // cB += m_invMassB * P;
    cB.SelfMulAdd(this.m_invMassB, P);
    // aB += m_invIB * b2Cross(rB, P);
    aB += this.m_invIB * b2Vec2.CrossVV(rB, P);

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return b2Abs(C) < b2_linearSlop;
  }
}

export class b2AreaJointDef extends b2JointDef {
  public world: b2World = null;

  public bodies: b2Body[] = [];

  public frequencyHz: number = 0;

  public dampingRatio: number = 0;

  constructor() {
    super(b2JointType.e_areaJoint);
  }

  public AddBody(body: b2Body): void {
    this.bodies.push(body);

    if (this.bodies.length === 1) {
      this.bodyA = body;
    } else if (this.bodies.length === 2) {
      this.bodyB = body;
    }
  }
}

export class b2AreaJoint extends b2Joint {
  public m_bodies: b2Body[] = null;
  public m_frequencyHz: number = 0;
  public m_dampingRatio: number = 0;

  // Solver shared
  public m_impulse: number = 0;

  // Solver temp
  public m_targetLengths: number[] = null;
  public m_targetArea: number = 0;
  public m_normals: b2Vec2[] = null;
  public m_joints: b2DistanceJoint[] = null;
  public m_deltas: b2Vec2[] = null;
  public m_delta: b2Vec2 = null;

  constructor(def: b2AreaJointDef) {
    super(def);

    ///b2Assert(def.bodies.length >= 3, "You cannot create an area joint with less than three bodies.");

    this.m_bodies = def.bodies;
    this.m_frequencyHz = def.frequencyHz;
    this.m_dampingRatio = def.dampingRatio;

    this.m_targetLengths = b2MakeNumberArray(def.bodies.length);
    this.m_normals = b2Vec2.MakeArray(def.bodies.length);
    this.m_joints = b2MakeNullArray(def.bodies.length);
    this.m_deltas = b2Vec2.MakeArray(def.bodies.length);
    this.m_delta = new b2Vec2();

    const djd: b2DistanceJointDef = new b2DistanceJointDef();
    djd.frequencyHz = def.frequencyHz;
    djd.dampingRatio = def.dampingRatio;

    this.m_targetArea = 0;

    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const body: b2Body = this.m_bodies[i];
      const next: b2Body = this.m_bodies[(i + 1) % this.m_bodies.length];

      const body_c: b2Vec2 = body.GetWorldCenter();
      const next_c: b2Vec2 = next.GetWorldCenter();

      this.m_targetLengths[i] = b2Vec2.DistanceVV(body_c, next_c);

      this.m_targetArea += b2Vec2.CrossVV(body_c, next_c);

      djd.Initialize(body, next, body_c, next_c);
      this.m_joints[i] = <b2DistanceJoint> def.world.CreateJoint(djd);
    }

    this.m_targetArea *= 0.5;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    return out.SetZero();
  }

  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  public SetFrequency(hz: number): void {
    this.m_frequencyHz = hz;

    for (let i: number = 0; i < this.m_joints.length; ++i) {
      this.m_joints[i].SetFrequency(hz);
    }
  }

  public GetFrequency() {
    return this.m_frequencyHz;
  }

  public SetDampingRatio(ratio: number): void {
    this.m_dampingRatio = ratio;

    for (let i: number = 0; i < this.m_joints.length; ++i) {
      this.m_joints[i].SetDampingRatio(ratio);
    }
  }

  public GetDampingRatio() {
    return this.m_dampingRatio;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    log("Area joint dumping is not supported.\n");
  }

  public InitVelocityConstraints(data: b2SolverData): void {
    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const prev: b2Body = this.m_bodies[(i + this.m_bodies.length - 1) % this.m_bodies.length];
      const next: b2Body = this.m_bodies[(i + 1) % this.m_bodies.length];
      const prev_c: b2Vec2 = data.positions[prev.m_islandIndex].c;
      const next_c: b2Vec2 = data.positions[next.m_islandIndex].c;
      const delta: b2Vec2 = this.m_deltas[i];

      b2Vec2.SubVV(next_c, prev_c, delta);
    }

    if (data.step.warmStarting) {
      this.m_impulse *= data.step.dtRatio;

      for (let i: number = 0; i < this.m_bodies.length; ++i) {
        const body: b2Body = this.m_bodies[i];
        const body_v: b2Vec2 = data.velocities[body.m_islandIndex].v;
        const delta: b2Vec2 = this.m_deltas[i];

        body_v.x += body.m_invMass *  delta.y * 0.5 * this.m_impulse;
        body_v.y += body.m_invMass * -delta.x * 0.5 * this.m_impulse;
      }
    } else {
      this.m_impulse = 0;
    }
  }

  public SolveVelocityConstraints(data: b2SolverData): void {
    let dotMassSum: number = 0;
    let crossMassSum: number = 0;

    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const body: b2Body = this.m_bodies[i];
      const body_v: b2Vec2 = data.velocities[body.m_islandIndex].v;
      const delta: b2Vec2 = this.m_deltas[i];

      dotMassSum += delta.LengthSquared() / body.GetMass();
      crossMassSum += b2Vec2.CrossVV(body_v, delta);
    }

    const lambda: number = -2 * crossMassSum / dotMassSum;
    // lambda = b2Clamp(lambda, -b2_maxLinearCorrection, b2_maxLinearCorrection);

    this.m_impulse += lambda;

    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const body: b2Body = this.m_bodies[i];
      const body_v: b2Vec2 = data.velocities[body.m_islandIndex].v;
      const delta: b2Vec2 = this.m_deltas[i];

      body_v.x += body.m_invMass *  delta.y * 0.5 * lambda;
      body_v.y += body.m_invMass * -delta.x * 0.5 * lambda;
    }
  }

  public SolvePositionConstraints(data: b2SolverData): boolean {
    let perimeter: number = 0;
    let area: number = 0;

    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const body: b2Body = this.m_bodies[i];
      const next: b2Body = this.m_bodies[(i + 1) % this.m_bodies.length];
      const body_c: b2Vec2 = data.positions[body.m_islandIndex].c;
      const next_c: b2Vec2 = data.positions[next.m_islandIndex].c;

      const delta: b2Vec2 = b2Vec2.SubVV(next_c, body_c, this.m_delta);

      let dist: number = delta.Length();
      if (dist < b2_epsilon) {
        dist = 1;
      }

      this.m_normals[i].x =  delta.y / dist;
      this.m_normals[i].y = -delta.x / dist;

      perimeter += dist;

      area += b2Vec2.CrossVV(body_c, next_c);
    }

    area *= 0.5;

    const deltaArea: number = this.m_targetArea - area;
    const toExtrude: number = 0.5 * deltaArea / perimeter;
    let done: boolean = true;

    for (let i: number = 0; i < this.m_bodies.length; ++i) {
      const body: b2Body = this.m_bodies[i];
      const body_c: b2Vec2 = data.positions[body.m_islandIndex].c;
      const next_i: number = (i + 1) % this.m_bodies.length;

      const delta: b2Vec2 = b2Vec2.AddVV(this.m_normals[i], this.m_normals[next_i], this.m_delta);
      delta.SelfMul(toExtrude);

      const norm_sq: number = delta.LengthSquared();
      if (norm_sq > b2Sq(b2_maxLinearCorrection)) {
        delta.SelfMul(b2_maxLinearCorrection / b2Sqrt(norm_sq));
      }
      if (norm_sq > b2Sq(b2_linearSlop)) {
        done = false;
      }

      body_c.x += delta.x;
      body_c.y += delta.y;
    }

    return done;
  }
}

/*
* Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Friction joint definition.
export class b2FrictionJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2();

  public localAnchorB: b2Vec2 = new b2Vec2();

  public maxForce: number = 0;

  public maxTorque: number = 0;

  constructor() {
    super(b2JointType.e_frictionJoint);
  }

  public Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
  }
}

export class b2FrictionJoint extends b2Joint {
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();

  // Solver shared
  public m_linearImpulse: b2Vec2 = new b2Vec2();
  public m_angularImpulse: number = 0;
  public m_maxForce: number = 0;
  public m_maxTorque: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_linearMass: b2Mat22 = new b2Mat22();
  public m_angularMass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_K: b2Mat22 = new b2Mat22();

  constructor(def: b2FrictionJointDef) {
    super(def);

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);

    this.m_linearImpulse.SetZero();
    this.m_maxForce = def.maxForce;
    this.m_maxTorque = def.maxTorque;

    this.m_linearMass.SetZero();
  }

  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    // const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    // const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // const qA: b2Rot = new b2Rot(aA), qB: b2Rot = new b2Rot(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // Compute the effective mass matrix.
    // m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // J = [-I -r1_skew I r2_skew]
    //     [ 0       -1 0       1]
    // r_skew = [-ry; rx]

    // Matlab
    // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
    //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
    //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const K: b2Mat22 = this.m_K; // new b2Mat22();
    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
    K.ey.x = K.ex.y;
    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

    K.GetInverse(this.m_linearMass);

    this.m_angularMass = iA + iB;
    if (this.m_angularMass > 0) {
      this.m_angularMass = 1 / this.m_angularMass;
    }

    if (data.step.warmStarting) {
      // Scale impulses to support a variable time step.
      // m_linearImpulse *= data.step.dtRatio;
      this.m_linearImpulse.SelfMul(data.step.dtRatio);
      this.m_angularImpulse *= data.step.dtRatio;

      // const P: b2Vec2(m_linearImpulse.x, m_linearImpulse.y);
      const P: b2Vec2 = this.m_linearImpulse;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      // wA -= iA * (b2Cross(m_rA, P) + m_angularImpulse);
      wA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + this.m_angularImpulse);
      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      // wB += iB * (b2Cross(m_rB, P) + m_angularImpulse);
      wB += iB * (b2Vec2.CrossVV(this.m_rB, P) + this.m_angularImpulse);
    } else {
      this.m_linearImpulse.SetZero();
      this.m_angularImpulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_Cdot_v2 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulseV = new b2Vec2();
  private static SolveVelocityConstraints_s_oldImpulseV = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const h: number = data.step.dt;

    // Solve angular friction
    {
      const Cdot: number = wB - wA;
      let impulse: number = (-this.m_angularMass * Cdot);

      const oldImpulse: number = this.m_angularImpulse;
      const maxImpulse: number = h * this.m_maxTorque;
      this.m_angularImpulse = b2Clamp(this.m_angularImpulse + impulse, (-maxImpulse), maxImpulse);
      impulse = this.m_angularImpulse - oldImpulse;

      wA -= iA * impulse;
      wB += iB * impulse;
    }

    // Solve linear friction
    {
      // b2Vec2 Cdot = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
      const Cdot_v2: b2Vec2 = b2Vec2.SubVV(
        b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Vec2.s_t0),
        b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Vec2.s_t1),
        b2FrictionJoint.SolveVelocityConstraints_s_Cdot_v2);

      // b2Vec2 impulse = -b2Mul(m_linearMass, Cdot);
      const impulseV: b2Vec2 = b2Mat22.MulMV(this.m_linearMass, Cdot_v2, b2FrictionJoint.SolveVelocityConstraints_s_impulseV).SelfNeg();
      // b2Vec2 oldImpulse = m_linearImpulse;
      const oldImpulseV = b2FrictionJoint.SolveVelocityConstraints_s_oldImpulseV.Copy(this.m_linearImpulse);
      // m_linearImpulse += impulse;
      this.m_linearImpulse.SelfAdd(impulseV);

      const maxImpulse: number = h * this.m_maxForce;

      if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
        this.m_linearImpulse.Normalize();
        this.m_linearImpulse.SelfMul(maxImpulse);
      }

      // impulse = m_linearImpulse - oldImpulse;
      b2Vec2.SubVV(this.m_linearImpulse, oldImpulseV, impulseV);

      // vA -= mA * impulse;
      vA.SelfMulSub(mA, impulseV);
      // wA -= iA * b2Cross(m_rA, impulse);
      wA -= iA * b2Vec2.CrossVV(this.m_rA, impulseV);

      // vB += mB * impulse;
      vB.SelfMulAdd(mB, impulseV);
      // wB += iB * b2Cross(m_rB, impulse);
      wB += iB * b2Vec2.CrossVV(this.m_rB, impulseV);
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  public SolvePositionConstraints(data: b2SolverData): boolean {
    return true;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    return out.Set(inv_dt * this.m_linearImpulse.x, inv_dt * this.m_linearImpulse.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_angularImpulse;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public SetMaxForce(force: number): void {
    this.m_maxForce = force;
  }

  public GetMaxForce(): number {
    return this.m_maxForce;
  }

  public SetMaxTorque(torque: number): void {
    this.m_maxTorque = torque;
  }

  public GetMaxTorque(): number {
    return this.m_maxTorque;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    const indexA: number = this.m_bodyA.m_islandIndex;
    const indexB: number = this.m_bodyB.m_islandIndex;

    log("  const jd: b2FrictionJointDef = new b2FrictionJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.maxForce = %.15f;\n", this.m_maxForce);
    log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Prismatic joint definition. This requires defining a line of
/// motion using an axis and an anchor point. The definition uses local
/// anchor points and a local axis so that the initial configuration
/// can violate the constraint slightly. The joint translation is zero
/// when the local anchor points coincide in world space. Using local
/// anchors and a local axis helps when saving and loading a game.
export class b2PrismaticJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = null;

  public localAnchorB: b2Vec2 = null;

  public localAxisA: b2Vec2 = null;

  public referenceAngle: number = 0;

  public enableLimit = false;

  public lowerTranslation: number = 0;

  public upperTranslation: number = 0;

  public enableMotor = false;

  public maxMotorForce: number = 0;

  public motorSpeed: number = 0;

  constructor() {
    super(b2JointType.e_prismaticJoint);

    this.localAnchorA = new b2Vec2();
    this.localAnchorB = new b2Vec2();
    this.localAxisA = new b2Vec2(1, 0);
  }

  public Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2, axis: b2Vec2): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
    this.bodyA.GetLocalVector(axis, this.localAxisA);
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  }
}

export class b2PrismaticJoint extends b2Joint {
  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_localXAxisA: b2Vec2 = new b2Vec2();
  public m_localYAxisA: b2Vec2 = new b2Vec2();
  public m_referenceAngle: number = 0;
  public m_impulse: b2Vec3 = new b2Vec3(0, 0, 0);
  public m_motorImpulse: number = 0;
  public m_lowerTranslation: number = 0;
  public m_upperTranslation: number = 0;
  public m_maxMotorForce: number = 0;
  public m_motorSpeed: number = 0;
  public m_enableLimit: boolean = false;
  public m_enableMotor: boolean = false;
  public m_limitState: b2LimitState = b2LimitState.e_inactiveLimit;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_axis: b2Vec2 = new b2Vec2(0, 0);
  public m_perp: b2Vec2 = new b2Vec2(0, 0);
  public m_s1: number = 0;
  public m_s2: number = 0;
  public m_a1: number = 0;
  public m_a2: number = 0;
  public m_K: b2Mat33 = new b2Mat33();
  public m_K3: b2Mat33 = new b2Mat33();
  public m_K2: b2Mat22 = new b2Mat22();
  public m_motorMass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();

  constructor(def: b2PrismaticJointDef) {
    super(def);

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_localXAxisA.Copy(def.localAxisA).SelfNormalize();
    b2Vec2.CrossOneV(this.m_localXAxisA, this.m_localYAxisA);
    this.m_referenceAngle = def.referenceAngle;
    this.m_lowerTranslation = def.lowerTranslation;
    this.m_upperTranslation = def.upperTranslation;
    this.m_maxMotorForce = def.maxMotorForce;
    this.m_motorSpeed = def.motorSpeed;
    this.m_enableLimit = def.enableLimit;
    this.m_enableMotor = def.enableMotor;
  }

  private static InitVelocityConstraints_s_d = new b2Vec2();
  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // Compute the effective masses.
    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // b2Vec2 d = (cB - cA) + rB - rA;
    const d: b2Vec2 = b2Vec2.AddVV(
      b2Vec2.SubVV(cB, cA, b2Vec2.s_t0),
      b2Vec2.SubVV(rB, rA, b2Vec2.s_t1),
      b2PrismaticJoint.InitVelocityConstraints_s_d);

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    // Compute motor Jacobian and effective mass.
    {
      // m_axis = b2Mul(qA, m_localXAxisA);
      b2Rot.MulRV(qA, this.m_localXAxisA, this.m_axis);
      // m_a1 = b2Cross(d + rA, m_axis);
      this.m_a1 = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), this.m_axis);
      // m_a2 = b2Cross(rB, m_axis);
      this.m_a2 = b2Vec2.CrossVV(rB, this.m_axis);

      this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
      if (this.m_motorMass > 0) {
        this.m_motorMass = 1 / this.m_motorMass;
      }
    }

    // Prismatic constraint.
    {
      // m_perp = b2Mul(qA, m_localYAxisA);
      b2Rot.MulRV(qA, this.m_localYAxisA, this.m_perp);

      // m_s1 = b2Cross(d + rA, m_perp);
      this.m_s1 = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), this.m_perp);
      // m_s2 = b2Cross(rB, m_perp);
      this.m_s2 = b2Vec2.CrossVV(rB, this.m_perp);

      // float32 k11 = mA + mB + iA * m_s1 * m_s1 + iB * m_s2 * m_s2;
      this.m_K.ex.x = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
      // float32 k12 = iA * m_s1 + iB * m_s2;
      this.m_K.ex.y = iA * this.m_s1 + iB * this.m_s2;
      // float32 k13 = iA * m_s1 * m_a1 + iB * m_s2 * m_a2;
      this.m_K.ex.z = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;
      this.m_K.ey.x = this.m_K.ex.y;
      // float32 k22 = iA + iB;
      this.m_K.ey.y = iA + iB;
      if (this.m_K.ey.y === 0) {
        // For bodies with fixed rotation.
        this.m_K.ey.y = 1;
      }
      // float32 k23 = iA * m_a1 + iB * m_a2;
      this.m_K.ey.z = iA * this.m_a1 + iB * this.m_a2;
      this.m_K.ez.x = this.m_K.ex.z;
      this.m_K.ez.y = this.m_K.ey.z;
      // float32 k33 = mA + mB + iA * m_a1 * m_a1 + iB * m_a2 * m_a2;
      this.m_K.ez.z = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;

      // m_K.ex.Set(k11, k12, k13);
      // m_K.ey.Set(k12, k22, k23);
      // m_K.ez.Set(k13, k23, k33);
    }

    // Compute motor and limit terms.
    if (this.m_enableLimit) {
      // float32 jointTranslation = b2Dot(m_axis, d);
      const jointTranslation: number = b2Vec2.DotVV(this.m_axis, d);
      if (b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2_linearSlop) {
        this.m_limitState = b2LimitState.e_equalLimits;
      } else if (jointTranslation <= this.m_lowerTranslation) {
        if (this.m_limitState !== b2LimitState.e_atLowerLimit) {
          this.m_limitState = b2LimitState.e_atLowerLimit;
          this.m_impulse.z = 0;
        }
      } else if (jointTranslation >= this.m_upperTranslation) {
        if (this.m_limitState !== b2LimitState.e_atUpperLimit) {
          this.m_limitState = b2LimitState.e_atUpperLimit;
          this.m_impulse.z = 0;
        }
      } else {
        this.m_limitState = b2LimitState.e_inactiveLimit;
        this.m_impulse.z = 0;
      }
    } else {
      this.m_limitState = b2LimitState.e_inactiveLimit;
      this.m_impulse.z = 0;
    }

    if (!this.m_enableMotor) {
      this.m_motorImpulse = 0;
    }

    if (data.step.warmStarting) {
      // Account for variable time step.
      // m_impulse *= data.step.dtRatio;
      this.m_impulse.SelfMul(data.step.dtRatio);
      this.m_motorImpulse *= data.step.dtRatio;

      // b2Vec2 P = m_impulse.x * m_perp + (m_motorImpulse + m_impulse.z) * m_axis;
      const P: b2Vec2 = b2Vec2.AddVV(
        b2Vec2.MulSV(this.m_impulse.x, this.m_perp, b2Vec2.s_t0),
        b2Vec2.MulSV((this.m_motorImpulse + this.m_impulse.z), this.m_axis, b2Vec2.s_t1),
        b2PrismaticJoint.InitVelocityConstraints_s_P);
      // float32 LA = m_impulse.x * m_s1 + m_impulse.y + (m_motorImpulse + m_impulse.z) * m_a1;
      const LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
      // float32 LB = m_impulse.x * m_s2 + m_impulse.y + (m_motorImpulse + m_impulse.z) * m_a2;
      const LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    } else {
      this.m_impulse.SetZero();
      this.m_motorImpulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_P = new b2Vec2();
  private static SolveVelocityConstraints_s_f2r = new b2Vec2();
  private static SolveVelocityConstraints_s_f1 = new b2Vec3();
  private static SolveVelocityConstraints_s_df3 = new b2Vec3();
  private static SolveVelocityConstraints_s_df2 = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    // Solve linear motor constraint.
    if (this.m_enableMotor && this.m_limitState !== b2LimitState.e_equalLimits) {
      // float32 Cdot = b2Dot(m_axis, vB - vA) + m_a2 * wB - m_a1 * wA;
      const Cdot: number = b2Vec2.DotVV(this.m_axis, b2Vec2.SubVV(vB, vA, b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
      let impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
      const oldImpulse = this.m_motorImpulse;
      const maxImpulse = data.step.dt * this.m_maxMotorForce;
      this.m_motorImpulse = b2Clamp(this.m_motorImpulse + impulse, (-maxImpulse), maxImpulse);
      impulse = this.m_motorImpulse - oldImpulse;

      // b2Vec2 P = impulse * m_axis;
      const P: b2Vec2 = b2Vec2.MulSV(impulse, this.m_axis, b2PrismaticJoint.SolveVelocityConstraints_s_P);
      const LA = impulse * this.m_a1;
      const LB = impulse * this.m_a2;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    }

    // b2Vec2 Cdot1;
    // Cdot1.x = b2Dot(m_perp, vB - vA) + m_s2 * wB - m_s1 * wA;
    const Cdot1_x: number = b2Vec2.DotVV(this.m_perp, b2Vec2.SubVV(vB, vA, b2Vec2.s_t0)) + this.m_s2 * wB - this.m_s1 * wA;
    // Cdot1.y = wB - wA;
    const Cdot1_y = wB - wA;

    if (this.m_enableLimit && this.m_limitState !== b2LimitState.e_inactiveLimit) {
      // Solve prismatic and limit constraint in block form.
      // float32 Cdot2;
      // Cdot2 = b2Dot(m_axis, vB - vA) + m_a2 * wB - m_a1 * wA;
      const Cdot2: number = b2Vec2.DotVV(this.m_axis, b2Vec2.SubVV(vB, vA, b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
      // b2Vec3 Cdot(Cdot1.x, Cdot1.y, Cdot2);

      // b2Vec3 f1 = m_impulse;
      const f1 = b2PrismaticJoint.SolveVelocityConstraints_s_f1.Copy(this.m_impulse);
      // b2Vec3 df =  m_K.Solve33(-Cdot);
      const df3 = this.m_K.Solve33((-Cdot1_x), (-Cdot1_y), (-Cdot2), b2PrismaticJoint.SolveVelocityConstraints_s_df3);
      // m_impulse += df;
      this.m_impulse.SelfAdd(df3);

      if (this.m_limitState === b2LimitState.e_atLowerLimit) {
        this.m_impulse.z = b2Max(this.m_impulse.z, 0);
      } else if (this.m_limitState === b2LimitState.e_atUpperLimit) {
        this.m_impulse.z = b2Min(this.m_impulse.z, 0);
      }

      // f2(1:2) = invK(1:2,1:2) * (-Cdot(1:2) - K(1:2,3) * (f2(3) - f1(3))) + f1(1:2)
      // b2Vec2 b = -Cdot1 - (m_impulse.z - f1.z) * b2Vec2(m_K.ez.x, m_K.ez.y);
      const b_x = (-Cdot1_x) - (this.m_impulse.z - f1.z) * this.m_K.ez.x;
      const b_y = (-Cdot1_y) - (this.m_impulse.z - f1.z) * this.m_K.ez.y;
      // b2Vec2 f2r = m_K.Solve22(b) + b2Vec2(f1.x, f1.y);
      const f2r = this.m_K.Solve22(b_x, b_y, b2PrismaticJoint.SolveVelocityConstraints_s_f2r);
      f2r.x += f1.x;
      f2r.y += f1.y;
      // m_impulse.x = f2r.x;
      this.m_impulse.x = f2r.x;
      // m_impulse.y = f2r.y;
      this.m_impulse.y = f2r.y;

      // df = m_impulse - f1;
      df3.x = this.m_impulse.x - f1.x;
      df3.y = this.m_impulse.y - f1.y;
      df3.z = this.m_impulse.z - f1.z;

      // b2Vec2 P = df.x * m_perp + df.z * m_axis;
      const P: b2Vec2 = b2Vec2.AddVV(
        b2Vec2.MulSV(df3.x, this.m_perp, b2Vec2.s_t0),
        b2Vec2.MulSV(df3.z, this.m_axis, b2Vec2.s_t1),
        b2PrismaticJoint.SolveVelocityConstraints_s_P);
      // float32 LA = df.x * m_s1 + df.y + df.z * m_a1;
      const LA = df3.x * this.m_s1 + df3.y + df3.z * this.m_a1;
      // float32 LB = df.x * m_s2 + df.y + df.z * m_a2;
      const LB = df3.x * this.m_s2 + df3.y + df3.z * this.m_a2;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    } else {
      // Limit is inactive, just solve the prismatic constraint in block form.
      // b2Vec2 df = m_K.Solve22(-Cdot1);
      const df2 = this.m_K.Solve22((-Cdot1_x), (-Cdot1_y), b2PrismaticJoint.SolveVelocityConstraints_s_df2);
      this.m_impulse.x += df2.x;
      this.m_impulse.y += df2.y;

      // b2Vec2 P = df.x * m_perp;
      const P: b2Vec2 = b2Vec2.MulSV(df2.x, this.m_perp, b2PrismaticJoint.SolveVelocityConstraints_s_P);
      // float32 LA = df.x * m_s1 + df.y;
      const LA = df2.x * this.m_s1 + df2.y;
      // float32 LB = df.x * m_s2 + df.y;
      const LB = df2.x * this.m_s2 + df2.y;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_d = new b2Vec2();
  private static SolvePositionConstraints_s_impulse = new b2Vec3();
  private static SolvePositionConstraints_s_impulse1 = new b2Vec2();
  private static SolvePositionConstraints_s_P = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // b2Vec2 d = cB + rB - cA - rA;
    const d: b2Vec2 = b2Vec2.SubVV(
      b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
      b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
      b2PrismaticJoint.SolvePositionConstraints_s_d);

    // b2Vec2 axis = b2Mul(qA, m_localXAxisA);
    const axis: b2Vec2 = b2Rot.MulRV(qA, this.m_localXAxisA, this.m_axis);
    // float32 a1 = b2Cross(d + rA, axis);
    const a1 = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), axis);
    // float32 a2 = b2Cross(rB, axis);
    const a2 = b2Vec2.CrossVV(rB, axis);
    // b2Vec2 perp = b2Mul(qA, m_localYAxisA);
    const perp: b2Vec2 = b2Rot.MulRV(qA, this.m_localYAxisA, this.m_perp);

    // float32 s1 = b2Cross(d + rA, perp);
    const s1 = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), perp);
    // float32 s2 = b2Cross(rB, perp);
    const s2 = b2Vec2.CrossVV(rB, perp);

    // b2Vec3 impulse;
    let impulse = b2PrismaticJoint.SolvePositionConstraints_s_impulse;
    // b2Vec2 C1;
    // C1.x = b2Dot(perp, d);
    const C1_x: number = b2Vec2.DotVV(perp, d);
    // C1.y = aB - aA - m_referenceAngle;
    const C1_y = aB - aA - this.m_referenceAngle;

    let linearError = b2Abs(C1_x);
    let angularError = b2Abs(C1_y);

    let active = false;
    let C2: number = 0;
    if (this.m_enableLimit) {
      // float32 translation = b2Dot(axis, d);
      const translation: number = b2Vec2.DotVV(axis, d);
      if (b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2_linearSlop) {
        // Prevent large angular corrections
        C2 = b2Clamp(translation, (-b2_maxLinearCorrection), b2_maxLinearCorrection);
        linearError = b2Max(linearError, b2Abs(translation));
        active = true;
      } else if (translation <= this.m_lowerTranslation) {
        // Prevent large linear corrections and allow some slop.
        C2 = b2Clamp(translation - this.m_lowerTranslation + b2_linearSlop, (-b2_maxLinearCorrection), 0);
        linearError = b2Max(linearError, this.m_lowerTranslation - translation);
        active = true;
      } else if (translation >= this.m_upperTranslation) {
        // Prevent large linear corrections and allow some slop.
        C2 = b2Clamp(translation - this.m_upperTranslation - b2_linearSlop, 0, b2_maxLinearCorrection);
        linearError = b2Max(linearError, translation - this.m_upperTranslation);
        active = true;
      }
    }

    if (active) {
      // float32 k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      // float32 k12 = iA * s1 + iB * s2;
      const k12 = iA * s1 + iB * s2;
      // float32 k13 = iA * s1 * a1 + iB * s2 * a2;
      const k13 = iA * s1 * a1 + iB * s2 * a2;
      // float32 k22 = iA + iB;
      let k22 = iA + iB;
      if (k22 === 0) {
        // For fixed rotation
        k22 = 1;
      }
      // float32 k23 = iA * a1 + iB * a2;
      const k23 = iA * a1 + iB * a2;
      // float32 k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
      const k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;

      // b2Mat33 K;
      const K = this.m_K3;
      // K.ex.Set(k11, k12, k13);
      K.ex.SetXYZ(k11, k12, k13);
      // K.ey.Set(k12, k22, k23);
      K.ey.SetXYZ(k12, k22, k23);
      // K.ez.Set(k13, k23, k33);
      K.ez.SetXYZ(k13, k23, k33);

      // b2Vec3 C;
      // C.x = C1.x;
      // C.y = C1.y;
      // C.z = C2;

      // impulse = K.Solve33(-C);
      impulse = K.Solve33((-C1_x), (-C1_y), (-C2), impulse);
    } else {
      // float32 k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      // float32 k12 = iA * s1 + iB * s2;
      const k12 = iA * s1 + iB * s2;
      // float32 k22 = iA + iB;
      let k22 = iA + iB;
      if (k22 === 0) {
        k22 = 1;
      }

      // b2Mat22 K;
      const K2 = this.m_K2;
      // K.ex.Set(k11, k12);
      K2.ex.Set(k11, k12);
      // K.ey.Set(k12, k22);
      K2.ey.Set(k12, k22);

      // b2Vec2 impulse1 = K.Solve(-C1);
      const impulse1 = K2.Solve((-C1_x), (-C1_y), b2PrismaticJoint.SolvePositionConstraints_s_impulse1);
      impulse.x = impulse1.x;
      impulse.y = impulse1.y;
      impulse.z = 0;
    }

    // b2Vec2 P = impulse.x * perp + impulse.z * axis;
    const P: b2Vec2 = b2Vec2.AddVV(
      b2Vec2.MulSV(impulse.x, perp, b2Vec2.s_t0),
      b2Vec2.MulSV(impulse.z, axis, b2Vec2.s_t1),
      b2PrismaticJoint.SolvePositionConstraints_s_P);
    // float32 LA = impulse.x * s1 + impulse.y + impulse.z * a1;
    const LA = impulse.x * s1 + impulse.y + impulse.z * a1;
    // float32 LB = impulse.x * s2 + impulse.y + impulse.z * a2;
    const LB = impulse.x * s2 + impulse.y + impulse.z * a2;

    // cA -= mA * P;
    cA.SelfMulSub(mA, P);
    aA -= iA * LA;
    // cB += mB * P;
    cB.SelfMulAdd(mB, P);
    aB += iB * LB;

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return linearError <= b2_linearSlop && angularError <= b2_angularSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // return inv_dt * (m_impulse.x * m_perp + (m_motorImpulse + m_impulse.z) * m_axis);
    return out.Set(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_impulse.y;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public GetLocalAxisA(): b2Vec2 { return this.m_localXAxisA; }

  public GetReferenceAngle() { return this.m_referenceAngle; }

  private static GetJointTranslation_s_pA = new b2Vec2();
  private static GetJointTranslation_s_pB = new b2Vec2();
  private static GetJointTranslation_s_d = new b2Vec2();
  private static GetJointTranslation_s_axis = new b2Vec2();
  public GetJointTranslation(): number {
    // b2Vec2 pA = m_bodyA.GetWorldPoint(m_localAnchorA);
    const pA = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, b2PrismaticJoint.GetJointTranslation_s_pA);
    // b2Vec2 pB = m_bodyB.GetWorldPoint(m_localAnchorB);
    const pB = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, b2PrismaticJoint.GetJointTranslation_s_pB);
    // b2Vec2 d = pB - pA;
    const d: b2Vec2 = b2Vec2.SubVV(pB, pA, b2PrismaticJoint.GetJointTranslation_s_d);
    // b2Vec2 axis = m_bodyA.GetWorldVector(m_localXAxisA);
    const axis = this.m_bodyA.GetWorldVector(this.m_localXAxisA, b2PrismaticJoint.GetJointTranslation_s_axis);

    // float32 translation = b2Dot(d, axis);
    const translation: number = b2Vec2.DotVV(d, axis);
    return translation;
  }

  public GetJointSpeed(): number {
    const bA: b2Body = this.m_bodyA;
    const bB: b2Body = this.m_bodyB;

    // b2Vec2 rA = b2Mul(bA->m_xf.q, m_localAnchorA - bA->m_sweep.localCenter);
    b2Vec2.SubVV(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(bA.m_xf.q, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(bB->m_xf.q, m_localAnchorB - bB->m_sweep.localCenter);
    b2Vec2.SubVV(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(bB.m_xf.q, this.m_lalcB, this.m_rB);
    // b2Vec2 pA = bA->m_sweep.c + rA;
    const pA: b2Vec2 = b2Vec2.AddVV(bA.m_sweep.c, rA, b2Vec2.s_t0); // pA uses s_t0
    // b2Vec2 pB = bB->m_sweep.c + rB;
    const pB: b2Vec2 = b2Vec2.AddVV(bB.m_sweep.c, rB, b2Vec2.s_t1); // pB uses s_t1
    // b2Vec2 d = pB - pA;
    const d: b2Vec2 = b2Vec2.SubVV(pB, pA, b2Vec2.s_t2); // d uses s_t2
    // b2Vec2 axis = b2Mul(bA.m_xf.q, m_localXAxisA);
    const axis = bA.GetWorldVector(this.m_localXAxisA, this.m_axis);

    const vA = bA.m_linearVelocity;
    const vB = bB.m_linearVelocity;
    const wA = bA.m_angularVelocity;
    const wB = bB.m_angularVelocity;

    // float32 speed = b2Dot(d, b2Cross(wA, axis)) + b2Dot(axis, vB + b2Cross(wB, rB) - vA - b2Cross(wA, rA));
    const speed =
      b2Vec2.DotVV(d, b2Vec2.CrossSV(wA, axis, b2Vec2.s_t0)) +
      b2Vec2.DotVV(
        axis,
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, rA, b2Vec2.s_t1),
          b2Vec2.s_t0));
    return speed;
  }

  public IsLimitEnabled() {
    return this.m_enableLimit;
  }

  public EnableLimit(flag: boolean) {
    if (flag !== this.m_enableLimit) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableLimit = flag;
      this.m_impulse.z = 0;
    }
  }

  public GetLowerLimit() {
    return this.m_lowerTranslation;
  }

  public GetUpperLimit() {
    return this.m_upperTranslation;
  }

  public SetLimits(lower: number, upper: number): void {
    if (lower !== this.m_lowerTranslation || upper !== this.m_upperTranslation) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_lowerTranslation = lower;
      this.m_upperTranslation = upper;
      this.m_impulse.z = 0;
    }
  }

  public IsMotorEnabled(): boolean {
    return this.m_enableMotor;
  }

  public EnableMotor(flag: boolean): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_enableMotor = flag;
  }

  public SetMotorSpeed(speed: number): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_motorSpeed = speed;
  }

  public GetMotorSpeed() {
    return this.m_motorSpeed;
  }

  public SetMaxMotorForce(force: number): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_maxMotorForce = force;
  }

  public GetMaxMotorForce(): number { return this.m_maxMotorForce; }

  public GetMotorForce(inv_dt: number): number {
    return inv_dt * this.m_motorImpulse;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2PrismaticJointDef = new b2PrismaticJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
    log("  jd.enableLimit = %s;\n", (this.m_enableLimit) ? ("true") : ("false"));
    log("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation);
    log("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation);
    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
    log("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Revolute joint definition. This requires defining an
/// anchor point where the bodies are joined. The definition
/// uses local anchor points so that the initial configuration
/// can violate the constraint slightly. You also need to
/// specify the initial relative angle for joint limits. This
/// helps when saving and loading a game.
/// The local anchor points are measured from the body's origin
/// rather than the center of mass because:
/// 1. you might not know where the center of mass will be.
/// 2. if you add/remove shapes from a body and recompute the mass,
///    the joints will be broken.
export class b2RevoluteJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2(0, 0);

  public localAnchorB: b2Vec2 = new b2Vec2(0, 0);

  public referenceAngle: number = 0;

  public enableLimit = false;

  public lowerAngle: number = 0;

  public upperAngle: number = 0;

  public enableMotor = false;

  public motorSpeed: number = 0;

  public maxMotorTorque: number = 0;

  constructor() {
    super(b2JointType.e_revoluteJoint);
  }

  public Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  }
}


export class b2RevoluteJoint extends b2Joint {
  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_impulse: b2Vec3 = new b2Vec3();
  public m_motorImpulse: number = 0;

  public m_enableMotor: boolean = false;
  public m_maxMotorTorque: number = 0;
  public m_motorSpeed: number = 0;

  public m_enableLimit: boolean = false;
  public m_referenceAngle: number = 0;
  public m_lowerAngle: number = 0;
  public m_upperAngle: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_mass: b2Mat33 = new b2Mat33(); // effective mass for point-to-point constraint.
  public m_motorMass: number = 0; // effective mass for motor/limit angular constraint.
  public m_limitState: b2LimitState = b2LimitState.e_inactiveLimit;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_K: b2Mat22 = new b2Mat22();

  constructor(def: b2RevoluteJointDef) {
    super(def);

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_referenceAngle = def.referenceAngle;

    this.m_impulse.SetZero();
    this.m_motorImpulse = 0;

    this.m_lowerAngle = def.lowerAngle;
    this.m_upperAngle = def.upperAngle;
    this.m_maxMotorTorque = def.maxMotorTorque;
    this.m_motorSpeed = def.motorSpeed;
    this.m_enableLimit = def.enableLimit;
    this.m_enableMotor = def.enableMotor;
    this.m_limitState = b2LimitState.e_inactiveLimit;
  }

  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // b2Rot qA(aA), qB(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // J = [-I -r1_skew I r2_skew]
    //     [ 0       -1 0       1]
    // r_skew = [-ry; rx]

    // Matlab
    // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
    //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
    //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const fixedRotation: boolean = (iA + iB === 0);

    this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
    this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
    this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
    this.m_mass.ex.y = this.m_mass.ey.x;
    this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
    this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
    this.m_mass.ex.z = this.m_mass.ez.x;
    this.m_mass.ey.z = this.m_mass.ez.y;
    this.m_mass.ez.z = iA + iB;

    this.m_motorMass = iA + iB;
    if (this.m_motorMass > 0) {
      this.m_motorMass = 1 / this.m_motorMass;
    }

    if (!this.m_enableMotor || fixedRotation) {
      this.m_motorImpulse = 0;
    }

    if (this.m_enableLimit && !fixedRotation) {
      const jointAngle: number = aB - aA - this.m_referenceAngle;
      if (b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b2_angularSlop) {
        this.m_limitState = b2LimitState.e_equalLimits;
      } else if (jointAngle <= this.m_lowerAngle) {
        if (this.m_limitState !== b2LimitState.e_atLowerLimit) {
          this.m_impulse.z = 0;
        }
        this.m_limitState = b2LimitState.e_atLowerLimit;
      } else if (jointAngle >= this.m_upperAngle) {
        if (this.m_limitState !== b2LimitState.e_atUpperLimit) {
          this.m_impulse.z = 0;
        }
        this.m_limitState = b2LimitState.e_atUpperLimit;
      } else {
        this.m_limitState = b2LimitState.e_inactiveLimit;
        this.m_impulse.z = 0;
      }
    } else {
      this.m_limitState = b2LimitState.e_inactiveLimit;
    }

    if (data.step.warmStarting) {
      // Scale impulses to support a variable time step.
      this.m_impulse.SelfMul(data.step.dtRatio);
      this.m_motorImpulse *= data.step.dtRatio;

      // b2Vec2 P(m_impulse.x, m_impulse.y);
      const P: b2Vec2 = b2RevoluteJoint.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y);

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + this.m_motorImpulse + this.m_impulse.z);

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * (b2Vec2.CrossVV(this.m_rB, P) + this.m_motorImpulse + this.m_impulse.z);
    } else {
      this.m_impulse.SetZero();
      this.m_motorImpulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_P: b2Vec2 = new b2Vec2();
  private static SolveVelocityConstraints_s_Cdot_v2: b2Vec2 = new b2Vec2();
  private static SolveVelocityConstraints_s_Cdot1: b2Vec2 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse_v3: b2Vec3 = new b2Vec3();
  private static SolveVelocityConstraints_s_reduced_v2: b2Vec2 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse_v2: b2Vec2 = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const fixedRotation: boolean = (iA + iB === 0);

    // Solve motor constraint.
    if (this.m_enableMotor && this.m_limitState !== b2LimitState.e_equalLimits && !fixedRotation) {
      const Cdot: number = wB - wA - this.m_motorSpeed;
      let impulse: number = -this.m_motorMass * Cdot;
      const oldImpulse: number = this.m_motorImpulse;
      const maxImpulse: number = data.step.dt * this.m_maxMotorTorque;
      this.m_motorImpulse = b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
      impulse = this.m_motorImpulse - oldImpulse;

      wA -= iA * impulse;
      wB += iB * impulse;
    }

    // Solve limit constraint.
    if (this.m_enableLimit && this.m_limitState !== b2LimitState.e_inactiveLimit && !fixedRotation) {
      // b2Vec2 Cdot1 = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
      const Cdot1: b2Vec2 = b2Vec2.SubVV(
        b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Vec2.s_t0),
        b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Vec2.s_t1),
        b2RevoluteJoint.SolveVelocityConstraints_s_Cdot1);
      const Cdot2: number = wB - wA;
      // b2Vec3 Cdot(Cdot1.x, Cdot1.y, Cdot2);

      // b2Vec3 impulse = -this.m_mass.Solve33(Cdot);
      const impulse_v3: b2Vec3 = this.m_mass.Solve33(Cdot1.x, Cdot1.y, Cdot2, b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v3).SelfNeg();

      if (this.m_limitState === b2LimitState.e_equalLimits) {
        this.m_impulse.SelfAdd(impulse_v3);
      } else if (this.m_limitState === b2LimitState.e_atLowerLimit) {
        const newImpulse: number = this.m_impulse.z + impulse_v3.z;
        if (newImpulse < 0) {
          // b2Vec2 rhs = -Cdot1 + m_impulse.z * b2Vec2(m_mass.ez.x, m_mass.ez.y);
          const rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
          const rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
          const reduced_v2: b2Vec2 = this.m_mass.Solve22(rhs_x, rhs_y, b2RevoluteJoint.SolveVelocityConstraints_s_reduced_v2);
          impulse_v3.x = reduced_v2.x;
          impulse_v3.y = reduced_v2.y;
          impulse_v3.z = -this.m_impulse.z;
          this.m_impulse.x += reduced_v2.x;
          this.m_impulse.y += reduced_v2.y;
          this.m_impulse.z = 0;
        } else {
          this.m_impulse.SelfAdd(impulse_v3);
        }
      } else if (this.m_limitState === b2LimitState.e_atUpperLimit) {
        const newImpulse: number = this.m_impulse.z + impulse_v3.z;
        if (newImpulse > 0) {
          // b2Vec2 rhs = -Cdot1 + m_impulse.z * b2Vec2(m_mass.ez.x, m_mass.ez.y);
          const rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
          const rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
          const reduced_v2: b2Vec2 = this.m_mass.Solve22(rhs_x, rhs_y, b2RevoluteJoint.SolveVelocityConstraints_s_reduced_v2);
          impulse_v3.x = reduced_v2.x;
          impulse_v3.y = reduced_v2.y;
          impulse_v3.z = -this.m_impulse.z;
          this.m_impulse.x += reduced_v2.x;
          this.m_impulse.y += reduced_v2.y;
          this.m_impulse.z = 0;
        } else {
          this.m_impulse.SelfAdd(impulse_v3);
        }
      }

      // b2Vec2 P(impulse.x, impulse.y);
      const P: b2Vec2 = b2RevoluteJoint.SolveVelocityConstraints_s_P.Set(impulse_v3.x, impulse_v3.y);

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + impulse_v3.z);

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * (b2Vec2.CrossVV(this.m_rB, P) + impulse_v3.z);
    } else {
      // Solve point-to-point constraint
      // b2Vec2 Cdot = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
      const Cdot_v2: b2Vec2 = b2Vec2.SubVV(
        b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Vec2.s_t0),
        b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Vec2.s_t1),
        b2RevoluteJoint.SolveVelocityConstraints_s_Cdot_v2);
      // b2Vec2 impulse = m_mass.Solve22(-Cdot);
      const impulse_v2: b2Vec2 = this.m_mass.Solve22(-Cdot_v2.x, -Cdot_v2.y, b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v2);

      this.m_impulse.x += impulse_v2.x;
      this.m_impulse.y += impulse_v2.y;

      // vA -= mA * impulse;
      vA.SelfMulSub(mA, impulse_v2);
      wA -= iA * b2Vec2.CrossVV(this.m_rA, impulse_v2);

      // vB += mB * impulse;
      vB.SelfMulAdd(mB, impulse_v2);
      wB += iB * b2Vec2.CrossVV(this.m_rB, impulse_v2);
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_C_v2 = new b2Vec2();
  private static SolvePositionConstraints_s_impulse = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    // b2Rot qA(aA), qB(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    let angularError: number = 0;
    let positionError: number = 0;

    const fixedRotation: boolean = (this.m_invIA + this.m_invIB === 0);

    // Solve angular limit constraint.
    if (this.m_enableLimit && this.m_limitState !== b2LimitState.e_inactiveLimit && !fixedRotation) {
      const angle: number = aB - aA - this.m_referenceAngle;
      let limitImpulse: number = 0;

      if (this.m_limitState === b2LimitState.e_equalLimits) {
        // Prevent large angular corrections
        const C: number = b2Clamp(angle - this.m_lowerAngle, -b2_maxAngularCorrection, b2_maxAngularCorrection);
        limitImpulse = -this.m_motorMass * C;
        angularError = b2Abs(C);
      } else if (this.m_limitState === b2LimitState.e_atLowerLimit) {
        let C: number = angle - this.m_lowerAngle;
        angularError = -C;

        // Prevent large angular corrections and allow some slop.
        C = b2Clamp(C + b2_angularSlop, -b2_maxAngularCorrection, 0);
        limitImpulse = -this.m_motorMass * C;
      } else if (this.m_limitState === b2LimitState.e_atUpperLimit) {
        let C: number = angle - this.m_upperAngle;
        angularError = C;

        // Prevent large angular corrections and allow some slop.
        C = b2Clamp(C - b2_angularSlop, 0, b2_maxAngularCorrection);
        limitImpulse = -this.m_motorMass * C;
      }

      aA -= this.m_invIA * limitImpulse;
      aB += this.m_invIB * limitImpulse;
    }

    // Solve point-to-point constraint.
    {
      qA.SetAngle(aA);
      qB.SetAngle(aB);
      // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
      b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
      const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
      // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
      b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
      const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

      // b2Vec2 C = cB + rB - cA - rA;
      const C_v2 =
        b2Vec2.SubVV(
          b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
          b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
          b2RevoluteJoint.SolvePositionConstraints_s_C_v2);
      // positionError = C.Length();
      positionError = C_v2.Length();

      const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
      const iA: number = this.m_invIA, iB: number = this.m_invIB;

      const K: b2Mat22 = this.m_K;
      K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
      K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
      K.ey.x = K.ex.y;
      K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

      // b2Vec2 impulse = -K.Solve(C);
      const impulse: b2Vec2 = K.Solve(C_v2.x, C_v2.y, b2RevoluteJoint.SolvePositionConstraints_s_impulse).SelfNeg();

      // cA -= mA * impulse;
      cA.SelfMulSub(mA, impulse);
      aA -= iA * b2Vec2.CrossVV(rA, impulse);

      // cB += mB * impulse;
      cB.SelfMulAdd(mB, impulse);
      aB += iB * b2Vec2.CrossVV(rB, impulse);
    }

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return positionError <= b2_linearSlop && angularError <= b2_angularSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // b2Vec2 P(this.m_impulse.x, this.m_impulse.y);
    // return inv_dt * P;
    return out.Set(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_impulse.z;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public GetReferenceAngle() { return this.m_referenceAngle; }

  public GetJointAngle(): number {
    // b2Body* bA = this.m_bodyA;
    // b2Body* bB = this.m_bodyB;
    // return bB->this.m_sweep.a - bA->this.m_sweep.a - this.m_referenceAngle;
    return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
  }

  public GetJointSpeed(): number {
    // b2Body* bA = this.m_bodyA;
    // b2Body* bB = this.m_bodyB;
    // return bB->this.m_angularVelocity - bA->this.m_angularVelocity;
    return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
  }

  public IsMotorEnabled(): boolean {
    return this.m_enableMotor;
  }

  public EnableMotor(flag: boolean): void {
    if (this.m_enableMotor !== flag) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableMotor = flag;
    }
  }

  public GetMotorTorque(inv_dt: number): number {
    return inv_dt * this.m_motorImpulse;
  }

  public GetMotorSpeed(): number {
    return this.m_motorSpeed;
  }

  public SetMaxMotorTorque(torque: number): void {
    this.m_maxMotorTorque = torque;
  }

  public GetMaxMotorTorque(): number { return this.m_maxMotorTorque; }

  public IsLimitEnabled(): boolean {
    return this.m_enableLimit;
  }

  public EnableLimit(flag: boolean): void {
    if (flag !== this.m_enableLimit) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableLimit = flag;
      this.m_impulse.z = 0;
    }
  }

  public GetLowerLimit(): number {
    return this.m_lowerAngle;
  }

  public GetUpperLimit(): number {
    return this.m_upperAngle;
  }

  public SetLimits(lower: number, upper: number): void {

    if (lower !== this.m_lowerAngle || upper !== this.m_upperAngle) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_impulse.z = 0;
      this.m_lowerAngle = lower;
      this.m_upperAngle = upper;
    }
  }

  public SetMotorSpeed(speed: number): void {
    if (this.m_motorSpeed !== speed) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_motorSpeed = speed;
    }
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2RevoluteJointDef = new b2RevoluteJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
    log("  jd.enableLimit = %s;\n", (this.m_enableLimit) ? ("true") : ("false"));
    log("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle);
    log("  jd.upperAngle = %.15f;\n", this.m_upperAngle);
    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
    log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/// Gear joint definition. This definition requires two existing
/// revolute or prismatic joints (any combination will work).
export class b2GearJointDef extends b2JointDef {
  public joint1: b2Joint = null;

  public joint2: b2Joint = null;

  public ratio: number = 1;

  constructor() {
    super(b2JointType.e_gearJoint);
  }
}

export class b2GearJoint extends b2Joint {
  public m_joint1: b2Joint = null;
  public m_joint2: b2Joint = null;

  public m_typeA: b2JointType = b2JointType.e_unknownJoint;
  public m_typeB: b2JointType = b2JointType.e_unknownJoint;

  // Body A is connected to body C
  // Body B is connected to body D
  public m_bodyC: b2Body = null;
  public m_bodyD: b2Body = null;

  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_localAnchorC: b2Vec2 = new b2Vec2();
  public m_localAnchorD: b2Vec2 = new b2Vec2();

  public m_localAxisC: b2Vec2 = new b2Vec2();
  public m_localAxisD: b2Vec2 = new b2Vec2();

  public m_referenceAngleA: number = 0;
  public m_referenceAngleB: number = 0;

  public m_constant: number = 0;
  public m_ratio: number = 0;

  public m_impulse: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_indexC: number = 0;
  public m_indexD: number = 0;
  public m_lcA: b2Vec2 = new b2Vec2();
  public m_lcB: b2Vec2 = new b2Vec2();
  public m_lcC: b2Vec2 = new b2Vec2();
  public m_lcD: b2Vec2 = new b2Vec2();
  public m_mA: number = 0;
  public m_mB: number = 0;
  public m_mC: number = 0;
  public m_mD: number = 0;
  public m_iA: number = 0;
  public m_iB: number = 0;
  public m_iC: number = 0;
  public m_iD: number = 0;
  public m_JvAC: b2Vec2 = new b2Vec2();
  public m_JvBD: b2Vec2 = new b2Vec2();
  public m_JwA: number = 0;
  public m_JwB: number = 0;
  public m_JwC: number = 0;
  public m_JwD: number = 0;
  public m_mass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_qC: b2Rot = new b2Rot();
  public m_qD: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_lalcC: b2Vec2 = new b2Vec2();
  public m_lalcD: b2Vec2 = new b2Vec2();

  constructor(def: b2GearJointDef) {
    super(def);

    this.m_joint1 = def.joint1;
    this.m_joint2 = def.joint2;

    this.m_typeA = this.m_joint1.GetType();
    this.m_typeB = this.m_joint2.GetType();

    ///b2Assert(this.m_typeA === b2JointType.e_revoluteJoint || this.m_typeA === b2JointType.e_prismaticJoint);
    ///b2Assert(this.m_typeB === b2JointType.e_revoluteJoint || this.m_typeB === b2JointType.e_prismaticJoint);

    let coordinateA: number, coordinateB: number;

    // TODO_ERIN there might be some problem with the joint edges in b2Joint.

    this.m_bodyC = this.m_joint1.GetBodyA();
    this.m_bodyA = this.m_joint1.GetBodyB();

    // Get geometry of joint1
    const xfA: b2Transform = this.m_bodyA.m_xf;
    const aA: number = this.m_bodyA.m_sweep.a;
    const xfC: b2Transform = this.m_bodyC.m_xf;
    const aC: number = this.m_bodyC.m_sweep.a;

    if (this.m_typeA === b2JointType.e_revoluteJoint) {
      const revolute: b2RevoluteJoint = <b2RevoluteJoint> def.joint1;
      this.m_localAnchorC.Copy(revolute.m_localAnchorA);
      this.m_localAnchorA.Copy(revolute.m_localAnchorB);
      this.m_referenceAngleA = revolute.m_referenceAngle;
      this.m_localAxisC.SetZero();

      coordinateA = aA - aC - this.m_referenceAngleA;
    } else {
      const prismatic: b2PrismaticJoint = <b2PrismaticJoint> def.joint1;
      this.m_localAnchorC.Copy(prismatic.m_localAnchorA);
      this.m_localAnchorA.Copy(prismatic.m_localAnchorB);
      this.m_referenceAngleA = prismatic.m_referenceAngle;
      this.m_localAxisC.Copy(prismatic.m_localXAxisA);

      // b2Vec2 pC = m_localAnchorC;
      const pC = this.m_localAnchorC;
      // b2Vec2 pA = b2MulT(xfC.q, b2Mul(xfA.q, m_localAnchorA) + (xfA.p - xfC.p));
      const pA: b2Vec2 = b2Rot.MulTRV(
        xfC.q,
        b2Vec2.AddVV(
          b2Rot.MulRV(xfA.q, this.m_localAnchorA, b2Vec2.s_t0),
          b2Vec2.SubVV(xfA.p, xfC.p, b2Vec2.s_t1),
          b2Vec2.s_t0),
        b2Vec2.s_t0); // pA uses s_t0
      // coordinateA = b2Dot(pA - pC, m_localAxisC);
      coordinateA = b2Vec2.DotVV(b2Vec2.SubVV(pA, pC, b2Vec2.s_t0), this.m_localAxisC);
    }

    this.m_bodyD = this.m_joint2.GetBodyA();
    this.m_bodyB = this.m_joint2.GetBodyB();

    // Get geometry of joint2
    const xfB: b2Transform = this.m_bodyB.m_xf;
    const aB: number = this.m_bodyB.m_sweep.a;
    const xfD: b2Transform = this.m_bodyD.m_xf;
    const aD: number = this.m_bodyD.m_sweep.a;

    if (this.m_typeB === b2JointType.e_revoluteJoint) {
      const revolute: b2RevoluteJoint = <b2RevoluteJoint> def.joint2;
      this.m_localAnchorD.Copy(revolute.m_localAnchorA);
      this.m_localAnchorB.Copy(revolute.m_localAnchorB);
      this.m_referenceAngleB = revolute.m_referenceAngle;
      this.m_localAxisD.SetZero();

      coordinateB = aB - aD - this.m_referenceAngleB;
    } else {
      const prismatic: b2PrismaticJoint = <b2PrismaticJoint> def.joint2;
      this.m_localAnchorD.Copy(prismatic.m_localAnchorA);
      this.m_localAnchorB.Copy(prismatic.m_localAnchorB);
      this.m_referenceAngleB = prismatic.m_referenceAngle;
      this.m_localAxisD.Copy(prismatic.m_localXAxisA);

      // b2Vec2 pD = m_localAnchorD;
      const pD = this.m_localAnchorD;
      // b2Vec2 pB = b2MulT(xfD.q, b2Mul(xfB.q, m_localAnchorB) + (xfB.p - xfD.p));
      const pB: b2Vec2 = b2Rot.MulTRV(
        xfD.q,
        b2Vec2.AddVV(
          b2Rot.MulRV(xfB.q, this.m_localAnchorB, b2Vec2.s_t0),
          b2Vec2.SubVV(xfB.p, xfD.p, b2Vec2.s_t1),
          b2Vec2.s_t0),
        b2Vec2.s_t0); // pB uses s_t0
      // coordinateB = b2Dot(pB - pD, m_localAxisD);
      coordinateB = b2Vec2.DotVV(b2Vec2.SubVV(pB, pD, b2Vec2.s_t0), this.m_localAxisD);
    }

    this.m_ratio = def.ratio;

    this.m_constant = coordinateA + this.m_ratio * coordinateB;

    this.m_impulse = 0;
  }

  private static InitVelocityConstraints_s_u = new b2Vec2();
  private static InitVelocityConstraints_s_rA = new b2Vec2();
  private static InitVelocityConstraints_s_rB = new b2Vec2();
  private static InitVelocityConstraints_s_rC = new b2Vec2();
  private static InitVelocityConstraints_s_rD = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_indexC = this.m_bodyC.m_islandIndex;
    this.m_indexD = this.m_bodyD.m_islandIndex;
    this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter);
    this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter);
    this.m_mA = this.m_bodyA.m_invMass;
    this.m_mB = this.m_bodyB.m_invMass;
    this.m_mC = this.m_bodyC.m_invMass;
    this.m_mD = this.m_bodyD.m_invMass;
    this.m_iA = this.m_bodyA.m_invI;
    this.m_iB = this.m_bodyB.m_invI;
    this.m_iC = this.m_bodyC.m_invI;
    this.m_iD = this.m_bodyD.m_invI;

    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const aC: number = data.positions[this.m_indexC].a;
    const vC: b2Vec2 = data.velocities[this.m_indexC].v;
    let wC: number = data.velocities[this.m_indexC].w;

    const aD: number = data.positions[this.m_indexD].a;
    const vD: b2Vec2 = data.velocities[this.m_indexD].v;
    let wD: number = data.velocities[this.m_indexD].w;

    // b2Rot qA(aA), qB(aB), qC(aC), qD(aD);
    const qA: b2Rot = this.m_qA.SetAngle(aA),
      qB: b2Rot = this.m_qB.SetAngle(aB),
      qC: b2Rot = this.m_qC.SetAngle(aC),
      qD: b2Rot = this.m_qD.SetAngle(aD);

    this.m_mass = 0;

    if (this.m_typeA === b2JointType.e_revoluteJoint) {
      this.m_JvAC.SetZero();
      this.m_JwA = 1;
      this.m_JwC = 1;
      this.m_mass += this.m_iA + this.m_iC;
    } else {
      // b2Vec2 u = b2Mul(qC, m_localAxisC);
      const u: b2Vec2 = b2Rot.MulRV(qC, this.m_localAxisC, b2GearJoint.InitVelocityConstraints_s_u);
      // b2Vec2 rC = b2Mul(qC, m_localAnchorC - m_lcC);
      b2Vec2.SubVV(this.m_localAnchorC, this.m_lcC, this.m_lalcC);
      const rC: b2Vec2 = b2Rot.MulRV(qC, this.m_lalcC, b2GearJoint.InitVelocityConstraints_s_rC);
      // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_lcA);
      b2Vec2.SubVV(this.m_localAnchorA, this.m_lcA, this.m_lalcA);
      const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, b2GearJoint.InitVelocityConstraints_s_rA);
      // m_JvAC = u;
      this.m_JvAC.Copy(u);
      // m_JwC = b2Cross(rC, u);
      this.m_JwC = b2Vec2.CrossVV(rC, u);
      // m_JwA = b2Cross(rA, u);
      this.m_JwA = b2Vec2.CrossVV(rA, u);
      this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
    }

    if (this.m_typeB === b2JointType.e_revoluteJoint) {
      this.m_JvBD.SetZero();
      this.m_JwB = this.m_ratio;
      this.m_JwD = this.m_ratio;
      this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
    } else {
      // b2Vec2 u = b2Mul(qD, m_localAxisD);
      const u: b2Vec2 = b2Rot.MulRV(qD, this.m_localAxisD, b2GearJoint.InitVelocityConstraints_s_u);
      // b2Vec2 rD = b2Mul(qD, m_localAnchorD - m_lcD);
      b2Vec2.SubVV(this.m_localAnchorD, this.m_lcD, this.m_lalcD);
      const rD: b2Vec2 = b2Rot.MulRV(qD, this.m_lalcD, b2GearJoint.InitVelocityConstraints_s_rD);
      // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_lcB);
      b2Vec2.SubVV(this.m_localAnchorB, this.m_lcB, this.m_lalcB);
      const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, b2GearJoint.InitVelocityConstraints_s_rB);
      // m_JvBD = m_ratio * u;
      b2Vec2.MulSV(this.m_ratio, u, this.m_JvBD);
      // m_JwD = m_ratio * b2Cross(rD, u);
      this.m_JwD = this.m_ratio * b2Vec2.CrossVV(rD, u);
      // m_JwB = m_ratio * b2Cross(rB, u);
      this.m_JwB = this.m_ratio * b2Vec2.CrossVV(rB, u);
      this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
    }

    // Compute effective mass.
    this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;

    if (data.step.warmStarting) {
      // vA += (m_mA * m_impulse) * m_JvAC;
      vA.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC);
      wA += this.m_iA * this.m_impulse * this.m_JwA;
      // vB += (m_mB * m_impulse) * m_JvBD;
      vB.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD);
      wB += this.m_iB * this.m_impulse * this.m_JwB;
      // vC -= (m_mC * m_impulse) * m_JvAC;
      vC.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC);
      wC -= this.m_iC * this.m_impulse * this.m_JwC;
      // vD -= (m_mD * m_impulse) * m_JvBD;
      vD.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD);
      wD -= this.m_iD * this.m_impulse * this.m_JwD;
    } else {
      this.m_impulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
    // data.velocities[this.m_indexC].v = vC;
    data.velocities[this.m_indexC].w = wC;
    // data.velocities[this.m_indexD].v = vD;
    data.velocities[this.m_indexD].w = wD;
  }

  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;
    const vC: b2Vec2 = data.velocities[this.m_indexC].v;
    let wC: number = data.velocities[this.m_indexC].w;
    const vD: b2Vec2 = data.velocities[this.m_indexD].v;
    let wD: number = data.velocities[this.m_indexD].w;

    // float32 Cdot = b2Dot(m_JvAC, vA - vC) + b2Dot(m_JvBD, vB - vD);
    let Cdot =
      b2Vec2.DotVV(this.m_JvAC, b2Vec2.SubVV(vA, vC, b2Vec2.s_t0)) +
      b2Vec2.DotVV(this.m_JvBD, b2Vec2.SubVV(vB, vD, b2Vec2.s_t0));
    Cdot += (this.m_JwA * wA - this.m_JwC * wC) + (this.m_JwB * wB - this.m_JwD * wD);

    const impulse: number = -this.m_mass * Cdot;
    this.m_impulse += impulse;

    // vA += (m_mA * impulse) * m_JvAC;
    vA.SelfMulAdd((this.m_mA * impulse), this.m_JvAC);
    wA += this.m_iA * impulse * this.m_JwA;
    // vB += (m_mB * impulse) * m_JvBD;
    vB.SelfMulAdd((this.m_mB * impulse), this.m_JvBD);
    wB += this.m_iB * impulse * this.m_JwB;
    // vC -= (m_mC * impulse) * m_JvAC;
    vC.SelfMulSub((this.m_mC * impulse), this.m_JvAC);
    wC -= this.m_iC * impulse * this.m_JwC;
    // vD -= (m_mD * impulse) * m_JvBD;
    vD.SelfMulSub((this.m_mD * impulse), this.m_JvBD);
    wD -= this.m_iD * impulse * this.m_JwD;

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
    // data.velocities[this.m_indexC].v = vC;
    data.velocities[this.m_indexC].w = wC;
    // data.velocities[this.m_indexD].v = vD;
    data.velocities[this.m_indexD].w = wD;
  }

  private static SolvePositionConstraints_s_u = new b2Vec2();
  private static SolvePositionConstraints_s_rA = new b2Vec2();
  private static SolvePositionConstraints_s_rB = new b2Vec2();
  private static SolvePositionConstraints_s_rC = new b2Vec2();
  private static SolvePositionConstraints_s_rD = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;
    const cC: b2Vec2 = data.positions[this.m_indexC].c;
    let aC: number = data.positions[this.m_indexC].a;
    const cD: b2Vec2 = data.positions[this.m_indexD].c;
    let aD: number = data.positions[this.m_indexD].a;

    // b2Rot qA(aA), qB(aB), qC(aC), qD(aD);
    const qA: b2Rot = this.m_qA.SetAngle(aA),
      qB: b2Rot = this.m_qB.SetAngle(aB),
      qC: b2Rot = this.m_qC.SetAngle(aC),
      qD: b2Rot = this.m_qD.SetAngle(aD);

    const linearError: number = 0;

    let coordinateA: number, coordinateB: number;

    const JvAC: b2Vec2 = this.m_JvAC, JvBD: b2Vec2 = this.m_JvBD;
    let JwA: number, JwB: number, JwC: number, JwD: number;
    let mass: number = 0;

    if (this.m_typeA === b2JointType.e_revoluteJoint) {
      JvAC.SetZero();
      JwA = 1;
      JwC = 1;
      mass += this.m_iA + this.m_iC;

      coordinateA = aA - aC - this.m_referenceAngleA;
    } else {
      // b2Vec2 u = b2Mul(qC, m_localAxisC);
      const u: b2Vec2 = b2Rot.MulRV(qC, this.m_localAxisC, b2GearJoint.SolvePositionConstraints_s_u);
      // b2Vec2 rC = b2Mul(qC, m_localAnchorC - m_lcC);
      const rC: b2Vec2 = b2Rot.MulRV(qC, this.m_lalcC, b2GearJoint.SolvePositionConstraints_s_rC);
      // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_lcA);
      const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, b2GearJoint.SolvePositionConstraints_s_rA);
      // JvAC = u;
      JvAC.Copy(u);
      // JwC = b2Cross(rC, u);
      JwC = b2Vec2.CrossVV(rC, u);
      // JwA = b2Cross(rA, u);
      JwA = b2Vec2.CrossVV(rA, u);
      mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;

      // b2Vec2 pC = m_localAnchorC - m_lcC;
      const pC = this.m_lalcC;
      // b2Vec2 pA = b2MulT(qC, rA + (cA - cC));
      const pA: b2Vec2 = b2Rot.MulTRV(
        qC,
        b2Vec2.AddVV(
          rA,
          b2Vec2.SubVV(cA, cC, b2Vec2.s_t0),
          b2Vec2.s_t0),
        b2Vec2.s_t0); // pA uses s_t0
      // coordinateA = b2Dot(pA - pC, m_localAxisC);
      coordinateA = b2Vec2.DotVV(b2Vec2.SubVV(pA, pC, b2Vec2.s_t0), this.m_localAxisC);
    }

    if (this.m_typeB === b2JointType.e_revoluteJoint) {
      JvBD.SetZero();
      JwB = this.m_ratio;
      JwD = this.m_ratio;
      mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);

      coordinateB = aB - aD - this.m_referenceAngleB;
    } else {
      // b2Vec2 u = b2Mul(qD, m_localAxisD);
      const u: b2Vec2 = b2Rot.MulRV(qD, this.m_localAxisD, b2GearJoint.SolvePositionConstraints_s_u);
      // b2Vec2 rD = b2Mul(qD, m_localAnchorD - m_lcD);
      const rD: b2Vec2 = b2Rot.MulRV(qD, this.m_lalcD, b2GearJoint.SolvePositionConstraints_s_rD);
      // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_lcB);
      const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, b2GearJoint.SolvePositionConstraints_s_rB);
      // JvBD = m_ratio * u;
      b2Vec2.MulSV(this.m_ratio, u, JvBD);
      // JwD = m_ratio * b2Cross(rD, u);
      JwD = this.m_ratio * b2Vec2.CrossVV(rD, u);
      // JwB = m_ratio * b2Cross(rB, u);
      JwB = this.m_ratio * b2Vec2.CrossVV(rB, u);
      mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;

      // b2Vec2 pD = m_localAnchorD - m_lcD;
      const pD = this.m_lalcD;
      // b2Vec2 pB = b2MulT(qD, rB + (cB - cD));
      const pB: b2Vec2 = b2Rot.MulTRV(
        qD,
        b2Vec2.AddVV(
          rB,
          b2Vec2.SubVV(cB, cD, b2Vec2.s_t0),
          b2Vec2.s_t0),
        b2Vec2.s_t0); // pB uses s_t0
      // coordinateB = b2Dot(pB - pD, m_localAxisD);
      coordinateB = b2Vec2.DotVV(b2Vec2.SubVV(pB, pD, b2Vec2.s_t0), this.m_localAxisD);
    }

    const C: number = (coordinateA + this.m_ratio * coordinateB) - this.m_constant;

    let impulse: number = 0;
    if (mass > 0) {
      impulse = -C / mass;
    }

    // cA += m_mA * impulse * JvAC;
    cA.SelfMulAdd(this.m_mA * impulse, JvAC);
    aA += this.m_iA * impulse * JwA;
    // cB += m_mB * impulse * JvBD;
    cB.SelfMulAdd(this.m_mB * impulse, JvBD);
    aB += this.m_iB * impulse * JwB;
    // cC -= m_mC * impulse * JvAC;
    cC.SelfMulSub(this.m_mC * impulse, JvAC);
    aC -= this.m_iC * impulse * JwC;
    // cD -= m_mD * impulse * JvBD;
    cD.SelfMulSub(this.m_mD * impulse, JvBD);
    aD -= this.m_iD * impulse * JwD;

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;
    // data.positions[this.m_indexC].c = cC;
    data.positions[this.m_indexC].a = aC;
    // data.positions[this.m_indexD].c = cD;
    data.positions[this.m_indexD].a = aD;

    // TODO_ERIN not implemented
    return linearError < b2_linearSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // b2Vec2 P = m_impulse * m_JvAC;
    // return inv_dt * P;
    return b2Vec2.MulSV(inv_dt * this.m_impulse, this.m_JvAC, out);
  }

  public GetReactionTorque(inv_dt: number): number {
    // float32 L = m_impulse * m_JwA;
    // return inv_dt * L;
    return inv_dt * this.m_impulse * this.m_JwA;
  }

  public GetJoint1() { return this.m_joint1; }

  public GetJoint2() { return this.m_joint2; }

  public GetRatio() {
    return this.m_ratio;
  }

  public SetRatio(ratio: number): void {
    ///b2Assert(b2IsValid(ratio));
    this.m_ratio = ratio;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    const index1 = this.m_joint1.m_index;
    const index2 = this.m_joint2.m_index;

    log("  const jd: b2GearJointDef = new b2GearJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.joint1 = joints[%d];\n", index1);
    log("  jd.joint2 = joints[%d];\n", index2);
    log("  jd.ratio = %.15f;\n", this.m_ratio);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}


export class b2MotorJointDef extends b2JointDef {
  public linearOffset: b2Vec2 = new b2Vec2(0, 0);

  public angularOffset: number = 0;

  public maxForce: number = 1;

  public maxTorque: number = 1;

  public correctionFactor: number = 0.3;

  constructor() {
    super(b2JointType.e_motorJoint);
  }

  public Initialize(bA: b2Body, bB: b2Body): void {
    this.bodyA = bA;
    this.bodyB = bB;
    // b2Vec2 xB = bodyB->GetPosition();
    // linearOffset = bodyA->GetLocalPoint(xB);
    this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);

    const angleA: number = this.bodyA.GetAngle();
    const angleB: number = this.bodyB.GetAngle();
    this.angularOffset = angleB - angleA;
  }
}

export class b2MotorJoint extends b2Joint {
  // Solver shared
  public m_linearOffset: b2Vec2 = new b2Vec2();
  public m_angularOffset: number = 0;
  public m_linearImpulse: b2Vec2 = new b2Vec2();
  public m_angularImpulse: number = 0;
  public m_maxForce: number = 0;
  public m_maxTorque: number = 0;
  public m_correctionFactor: number = 0.3;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_linearError: b2Vec2 = new b2Vec2();
  public m_angularError: number = 0;
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_linearMass: b2Mat22 = new b2Mat22();
  public m_angularMass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_K: b2Mat22 = new b2Mat22();

  constructor(def: b2MotorJointDef) {
    super(def);

    this.m_linearOffset.Copy(def.linearOffset);
    this.m_linearImpulse.SetZero();
    this.m_maxForce = def.maxForce;
    this.m_maxTorque = def.maxTorque;
    this.m_correctionFactor = def.correctionFactor;
  }

  public GetAnchorA() {
    return this.m_bodyA.GetPosition();
  }
  public GetAnchorB() {
    return this.m_bodyB.GetPosition();
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // return inv_dt * m_linearImpulse;
    return b2Vec2.MulSV(inv_dt, this.m_linearImpulse, out);
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_angularImpulse;
  }

  public SetLinearOffset(linearOffset: b2Vec2): void {
    if (!b2Vec2.IsEqualToV(linearOffset, this.m_linearOffset)) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_linearOffset.Copy(linearOffset);
    }
  }
  public GetLinearOffset() {
    return this.m_linearOffset;
  }

  public SetAngularOffset(angularOffset: number): void {
    if (angularOffset !== this.m_angularOffset) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_angularOffset = angularOffset;
    }
  }
  public GetAngularOffset() {
    return this.m_angularOffset;
  }

  public SetMaxForce(force: number): void {
    ///b2Assert(b2IsValid(force) && force >= 0);
    this.m_maxForce = force;
  }

  public GetMaxForce() {
    return this.m_maxForce;
  }

  public SetMaxTorque(torque: number): void {
    ///b2Assert(b2IsValid(torque) && torque >= 0);
    this.m_maxTorque = torque;
  }

  public GetMaxTorque() {
    return this.m_maxTorque;
  }

  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // Compute the effective mass matrix.
    // this.m_rA = b2Mul(qA, -this.m_localCenterA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, b2Vec2.NegV(this.m_localCenterA, b2Vec2.s_t0), this.m_rA);
    // this.m_rB = b2Mul(qB, -this.m_localCenterB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, b2Vec2.NegV(this.m_localCenterB, b2Vec2.s_t0), this.m_rB);

    // J = [-I -r1_skew I r2_skew]
    //     [ 0       -1 0       1]
    // r_skew = [-ry; rx]

    // Matlab
    // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
    //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
    //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const K: b2Mat22 = this.m_K;
    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
    K.ey.x = K.ex.y;
    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

    // this.m_linearMass = K.GetInverse();
    K.GetInverse(this.m_linearMass);

    this.m_angularMass = iA + iB;
    if (this.m_angularMass > 0) {
      this.m_angularMass = 1 / this.m_angularMass;
    }

    // this.m_linearError = cB + rB - cA - rA - b2Mul(qA, this.m_linearOffset);
    b2Vec2.SubVV(
      b2Vec2.SubVV(
        b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
        b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
        b2Vec2.s_t2),
      b2Rot.MulRV(qA, this.m_linearOffset, b2Vec2.s_t3),
      this.m_linearError);
    this.m_angularError = aB - aA - this.m_angularOffset;

    if (data.step.warmStarting) {
      // Scale impulses to support a variable time step.
      // this.m_linearImpulse *= data.step.dtRatio;
      this.m_linearImpulse.SelfMul(data.step.dtRatio);
      this.m_angularImpulse *= data.step.dtRatio;

      // b2Vec2 P(this.m_linearImpulse.x, this.m_linearImpulse.y);
      const P: b2Vec2 = this.m_linearImpulse;
      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * (b2Vec2.CrossVV(rA, P) + this.m_angularImpulse);
      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * (b2Vec2.CrossVV(rB, P) + this.m_angularImpulse);
    } else {
      this.m_linearImpulse.SetZero();
      this.m_angularImpulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA; // vA is a reference
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB; // vB is a reference
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_Cdot_v2 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse_v2 = new b2Vec2();
  private static SolveVelocityConstraints_s_oldImpulse_v2 = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const h: number = data.step.dt;
    const inv_h: number = data.step.inv_dt;

    // Solve angular friction
    {
      const Cdot: number = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
      let impulse: number = -this.m_angularMass * Cdot;

      const oldImpulse: number = this.m_angularImpulse;
      const maxImpulse: number = h * this.m_maxTorque;
      this.m_angularImpulse = b2Clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
      impulse = this.m_angularImpulse - oldImpulse;

      wA -= iA * impulse;
      wB += iB * impulse;
    }

    // Solve linear friction
    {
      const rA = this.m_rA;
      const rB = this.m_rB;

      // b2Vec2 Cdot = vB + b2Vec2.CrossSV(wB, rB) - vA - b2Vec2.CrossSV(wA, rA) + inv_h * this.m_correctionFactor * this.m_linearError;
      const Cdot_v2 =
        b2Vec2.AddVV(
          b2Vec2.SubVV(
            b2Vec2.AddVV(vB, b2Vec2.CrossSV(wB, rB, b2Vec2.s_t0), b2Vec2.s_t0),
            b2Vec2.AddVV(vA, b2Vec2.CrossSV(wA, rA, b2Vec2.s_t1), b2Vec2.s_t1), b2Vec2.s_t2),
          b2Vec2.MulSV(inv_h * this.m_correctionFactor, this.m_linearError, b2Vec2.s_t3),
          b2MotorJoint.SolveVelocityConstraints_s_Cdot_v2);

      // b2Vec2 impulse = -b2Mul(this.m_linearMass, Cdot);
      const impulse_v2: b2Vec2 = b2Mat22.MulMV(this.m_linearMass, Cdot_v2, b2MotorJoint.SolveVelocityConstraints_s_impulse_v2).SelfNeg();
      // b2Vec2 oldImpulse = this.m_linearImpulse;
      const oldImpulse_v2 = b2MotorJoint.SolveVelocityConstraints_s_oldImpulse_v2.Copy(this.m_linearImpulse);
      // this.m_linearImpulse += impulse;
      this.m_linearImpulse.SelfAdd(impulse_v2);

      const maxImpulse: number = h * this.m_maxForce;

      if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
        this.m_linearImpulse.Normalize();
        // this.m_linearImpulse *= maxImpulse;
        this.m_linearImpulse.SelfMul(maxImpulse);
      }

      // impulse = this.m_linearImpulse - oldImpulse;
      b2Vec2.SubVV(this.m_linearImpulse, oldImpulse_v2, impulse_v2);

      // vA -= mA * impulse;
      vA.SelfMulSub(mA, impulse_v2);
      // wA -= iA * b2Vec2.CrossVV(rA, impulse);
      wA -= iA * b2Vec2.CrossVV(rA, impulse_v2);

      // vB += mB * impulse;
      vB.SelfMulAdd(mB, impulse_v2);
      // wB += iB * b2Vec2.CrossVV(rB, impulse);
      wB += iB * b2Vec2.CrossVV(rB, impulse_v2);
    }

    // data.velocities[this.m_indexA].v = vA; // vA is a reference
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB; // vB is a reference
    data.velocities[this.m_indexB].w = wB;
  }

  public SolvePositionConstraints(data: b2SolverData): boolean {
    return true;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2MotorJointDef = new b2MotorJointDef();\n");

    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));

    log("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y);
    log("  jd.angularOffset = %.15f;\n", this.m_angularOffset);
    log("  jd.maxForce = %.15f;\n", this.m_maxForce);
    log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
    log("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/*
* Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Mouse joint definition. This requires a world target point,
/// tuning parameters, and the time step.
export class b2MouseJointDef extends b2JointDef {
  public target: b2Vec2 = new b2Vec2();

  public maxForce: number = 0;

  public frequencyHz: number = 5;

  public dampingRatio: number = 0.7;

  constructor() {
    super(b2JointType.e_mouseJoint);
  }
}

export class b2MouseJoint extends b2Joint {
  public m_localAnchorB: b2Vec2 = null;
  public m_targetA: b2Vec2 = null;
  public m_frequencyHz: number = 0;
  public m_dampingRatio: number = 0;
  public m_beta: number = 0;

  // Solver shared
  public m_impulse: b2Vec2 = null;
  public m_maxForce: number = 0;
  public m_gamma: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_rB: b2Vec2 = null;
  public m_localCenterB: b2Vec2 = null;
  public m_invMassB: number = 0;
  public m_invIB: number = 0;
  public m_mass: b2Mat22 = null;
  public m_C: b2Vec2 = null;
  public m_qB: b2Rot = null;
  public m_lalcB: b2Vec2 = null;
  public m_K: b2Mat22 = null;

  constructor(def: b2MouseJointDef) {
    super(def);

    this.m_localAnchorB = new b2Vec2();
    this.m_targetA = new b2Vec2();

    this.m_impulse = new b2Vec2();

    this.m_rB = new b2Vec2();
    this.m_localCenterB = new b2Vec2();
    this.m_mass = new b2Mat22();
    this.m_C = new b2Vec2();
    this.m_qB = new b2Rot();
    this.m_lalcB = new b2Vec2();
    this.m_K = new b2Mat22();

    ///b2Assert(def.target.IsValid());
    ///b2Assert(b2IsValid(def.maxForce) && def.maxForce >= 0);
    ///b2Assert(b2IsValid(def.frequencyHz) && def.frequencyHz >= 0);
    ///b2Assert(b2IsValid(def.dampingRatio) && def.dampingRatio >= 0);

    this.m_targetA.Copy(def.target);
    b2Transform.MulTXV(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB);

    this.m_maxForce = def.maxForce;
    this.m_impulse.SetZero();

    this.m_frequencyHz = def.frequencyHz;
    this.m_dampingRatio = def.dampingRatio;

    this.m_beta = 0;
    this.m_gamma = 0;
  }

  public SetTarget(target: b2Vec2): void {
    if (!this.m_bodyB.IsAwake()) {
      this.m_bodyB.SetAwake(true);
    }
    this.m_targetA.Copy(target);
  }

  public GetTarget() {
    return this.m_targetA;
  }

  public SetMaxForce(maxForce: number): void {
    this.m_maxForce = maxForce;
  }

  public GetMaxForce() {
    return this.m_maxForce;
  }

  public SetFrequency(hz: number): void {
    this.m_frequencyHz = hz;
  }

  public GetFrequency() {
    return this.m_frequencyHz;
  }

  public SetDampingRatio(ratio: number) {
    this.m_dampingRatio = ratio;
  }

  public GetDampingRatio() {
    return this.m_dampingRatio;
  }

  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIB = this.m_bodyB.m_invI;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qB = this.m_qB.SetAngle(aB);

    const mass: number = this.m_bodyB.GetMass();

    // Frequency
    const omega: number = 2 * b2_pi * this.m_frequencyHz;

    // Damping coefficient
    const d: number = 2 * mass * this.m_dampingRatio * omega;

    // Spring stiffness
    const k: number = mass * (omega * omega);

    // magic formulas
    // gamma has units of inverse mass.
    // beta has units of inverse time.
    const h: number = data.step.dt;
    ///b2Assert(d + h * k > b2_epsilon);
    this.m_gamma = h * (d + h * k);
    if (this.m_gamma !== 0) {
      this.m_gamma = 1 / this.m_gamma;
    }
    this.m_beta = h * k * this.m_gamma;

    // Compute the effective mass matrix.
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // K    = [(1/m1 + 1/m2) * eye(2) - skew(r1) * invI1 * skew(r1) - skew(r2) * invI2 * skew(r2)]
    //      = [1/m1+1/m2     0    ] + invI1 * [r1.y*r1.y -r1.x*r1.y] + invI2 * [r1.y*r1.y -r1.x*r1.y]
    //        [    0     1/m1+1/m2]           [-r1.x*r1.y r1.x*r1.x]           [-r1.x*r1.y r1.x*r1.x]
    const K = this.m_K;
    K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
    K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
    K.ey.x = K.ex.y;
    K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;

    K.GetInverse(this.m_mass);

    // m_C = cB + m_rB - m_targetA;
    this.m_C.x = cB.x + this.m_rB.x - this.m_targetA.x;
    this.m_C.y = cB.y + this.m_rB.y - this.m_targetA.y;
    // m_C *= m_beta;
    this.m_C.SelfMul(this.m_beta);

    // Cheat with some damping
    wB *= 0.98;

    if (data.step.warmStarting) {
      this.m_impulse.SelfMul(data.step.dtRatio);
      // vB += m_invMassB * m_impulse;
      vB.x += this.m_invMassB * this.m_impulse.x;
      vB.y += this.m_invMassB * this.m_impulse.y;
      wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, this.m_impulse);
    } else {
      this.m_impulse.SetZero();
    }

    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_Cdot = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse = new b2Vec2();
  private static SolveVelocityConstraints_s_oldImpulse = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // Cdot = v + cross(w, r)
    // b2Vec2 Cdot = vB + b2Cross(wB, m_rB);
    const Cdot: b2Vec2 = b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2MouseJoint.SolveVelocityConstraints_s_Cdot);
    //  b2Vec2 impulse = b2Mul(m_mass, -(Cdot + m_C + m_gamma * m_impulse));
    const impulse: b2Vec2 = b2Mat22.MulMV(
      this.m_mass,
      b2Vec2.AddVV(
        Cdot,
        b2Vec2.AddVV(this.m_C,
          b2Vec2.MulSV(this.m_gamma, this.m_impulse, b2Vec2.s_t0),
          b2Vec2.s_t0),
        b2Vec2.s_t0).SelfNeg(),
      b2MouseJoint.SolveVelocityConstraints_s_impulse);

    // b2Vec2 oldImpulse = m_impulse;
    const oldImpulse = b2MouseJoint.SolveVelocityConstraints_s_oldImpulse.Copy(this.m_impulse);
    // m_impulse += impulse;
    this.m_impulse.SelfAdd(impulse);
    const maxImpulse: number = data.step.dt * this.m_maxForce;
    if (this.m_impulse.LengthSquared() > maxImpulse * maxImpulse) {
      this.m_impulse.SelfMul(maxImpulse / this.m_impulse.Length());
    }
    // impulse = m_impulse - oldImpulse;
    b2Vec2.SubVV(this.m_impulse, oldImpulse, impulse);

    // vB += m_invMassB * impulse;
    vB.SelfMulAdd(this.m_invMassB, impulse);
    wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, impulse);

    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  public SolvePositionConstraints(data: b2SolverData): boolean {
    return true;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return out.Copy(this.m_targetA);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    return b2Vec2.MulSV(inv_dt, this.m_impulse, out);
  }

  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    log("Mouse joint dumping is not supported.\n");
  }

  public ShiftOrigin(newOrigin: b2Vec2) {
    this.m_targetA.SelfSub(newOrigin);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export const b2_minPulleyLength: number = 2;

/// Pulley joint definition. This requires two ground anchors,
/// two dynamic body anchor points, and a pulley ratio.
export class b2PulleyJointDef extends b2JointDef {
  public groundAnchorA: b2Vec2 = new b2Vec2(-1, 1);

  public groundAnchorB: b2Vec2 = new b2Vec2(1, 1);

  public localAnchorA: b2Vec2 = new b2Vec2(-1, 0);

  public localAnchorB: b2Vec2 = new b2Vec2(1, 0);

  public lengthA: number = 0;

  public lengthB: number = 0;

  public ratio: number = 1;

  constructor() {
    super(b2JointType.e_pulleyJoint);
    this.collideConnected = true;
  }

  public Initialize(bA: b2Body, bB: b2Body, groundA: b2Vec2, groundB: b2Vec2, anchorA: b2Vec2, anchorB: b2Vec2, r: number): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.groundAnchorA.Copy(groundA);
    this.groundAnchorB.Copy(groundB);
    this.bodyA.GetLocalPoint(anchorA, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchorB, this.localAnchorB);
    this.lengthA = b2Vec2.DistanceVV(anchorA, groundA);
    this.lengthB = b2Vec2.DistanceVV(anchorB, groundB);
    this.ratio = r;
    ///b2Assert(this.ratio > b2_epsilon);
  }
}

export class b2PulleyJoint extends b2Joint {
  public m_groundAnchorA: b2Vec2 = new b2Vec2();
  public m_groundAnchorB: b2Vec2 = new b2Vec2();

  public m_lengthA: number = 0;
  public m_lengthB: number = 0;

  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();

  public m_constant: number = 0;
  public m_ratio: number = 0;
  public m_impulse: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_uA: b2Vec2 = new b2Vec2();
  public m_uB: b2Vec2 = new b2Vec2();
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();

  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_mass: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();

  constructor(def: b2PulleyJointDef) {
    super(def);

    this.m_groundAnchorA.Copy(def.groundAnchorA);
    this.m_groundAnchorB.Copy(def.groundAnchorB);
    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);

    this.m_lengthA = def.lengthA;
    this.m_lengthB = def.lengthB;

    ///b2Assert(def.ratio !== 0);
    this.m_ratio = def.ratio;

    this.m_constant = def.lengthA + this.m_ratio * def.lengthB;

    this.m_impulse = 0;
  }

  private static InitVelocityConstraints_s_PA = new b2Vec2();
  private static InitVelocityConstraints_s_PB = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // b2Rot qA(aA), qB(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // Get the pulley axes.
    // m_uA = cA + m_rA - m_groundAnchorA;
    this.m_uA.Copy(cA).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA);
    // m_uB = cB + m_rB - m_groundAnchorB;
    this.m_uB.Copy(cB).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB);

    const lengthA: number = this.m_uA.Length();
    const lengthB: number = this.m_uB.Length();

    if (lengthA > 10 * b2_linearSlop) {
      this.m_uA.SelfMul(1 / lengthA);
    } else {
      this.m_uA.SetZero();
    }

    if (lengthB > 10 * b2_linearSlop) {
      this.m_uB.SelfMul(1 / lengthB);
    } else {
      this.m_uB.SetZero();
    }

    // Compute effective mass.
    const ruA: number = b2Vec2.CrossVV(this.m_rA, this.m_uA);
    const ruB: number = b2Vec2.CrossVV(this.m_rB, this.m_uB);

    const mA: number = this.m_invMassA + this.m_invIA * ruA * ruA;
    const mB: number = this.m_invMassB + this.m_invIB * ruB * ruB;

    this.m_mass = mA + this.m_ratio * this.m_ratio * mB;

    if (this.m_mass > 0) {
      this.m_mass = 1 / this.m_mass;
    }

    if (data.step.warmStarting) {
      // Scale impulses to support variable time steps.
      this.m_impulse *= data.step.dtRatio;

      // Warm starting.
      // b2Vec2 PA = -(m_impulse) * m_uA;
      const PA: b2Vec2 = b2Vec2.MulSV(-(this.m_impulse), this.m_uA, b2PulleyJoint.InitVelocityConstraints_s_PA);
      // b2Vec2 PB = (-m_ratio * m_impulse) * m_uB;
      const PB: b2Vec2 = b2Vec2.MulSV((-this.m_ratio * this.m_impulse), this.m_uB, b2PulleyJoint.InitVelocityConstraints_s_PB);

      // vA += m_invMassA * PA;
      vA.SelfMulAdd(this.m_invMassA, PA);
      wA += this.m_invIA * b2Vec2.CrossVV(this.m_rA, PA);
      // vB += m_invMassB * PB;
      vB.SelfMulAdd(this.m_invMassB, PB);
      wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, PB);
    } else {
      this.m_impulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_vpA = new b2Vec2();
  private static SolveVelocityConstraints_s_vpB = new b2Vec2();
  private static SolveVelocityConstraints_s_PA = new b2Vec2();
  private static SolveVelocityConstraints_s_PB = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // b2Vec2 vpA = vA + b2Cross(wA, m_rA);
    const vpA: b2Vec2 = b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2PulleyJoint.SolveVelocityConstraints_s_vpA);
    // b2Vec2 vpB = vB + b2Cross(wB, m_rB);
    const vpB: b2Vec2 = b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2PulleyJoint.SolveVelocityConstraints_s_vpB);

    const Cdot: number = -b2Vec2.DotVV(this.m_uA, vpA) - this.m_ratio * b2Vec2.DotVV(this.m_uB, vpB);
    const impulse: number = -this.m_mass * Cdot;
    this.m_impulse += impulse;

    // b2Vec2 PA = -impulse * m_uA;
    const PA: b2Vec2 = b2Vec2.MulSV(-impulse, this.m_uA, b2PulleyJoint.SolveVelocityConstraints_s_PA);
    // b2Vec2 PB = -m_ratio * impulse * m_uB;
    const PB: b2Vec2 = b2Vec2.MulSV(-this.m_ratio * impulse, this.m_uB, b2PulleyJoint.SolveVelocityConstraints_s_PB);
    // vA += m_invMassA * PA;
    vA.SelfMulAdd(this.m_invMassA, PA);
    wA += this.m_invIA * b2Vec2.CrossVV(this.m_rA, PA);
    // vB += m_invMassB * PB;
    vB.SelfMulAdd(this.m_invMassB, PB);
    wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, PB);

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_PA = new b2Vec2();
  private static SolvePositionConstraints_s_PB = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    // b2Rot qA(aA), qB(aB);
    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // Get the pulley axes.
    // b2Vec2 uA = cA + rA - m_groundAnchorA;
    const uA = this.m_uA.Copy(cA).SelfAdd(rA).SelfSub(this.m_groundAnchorA);
    // b2Vec2 uB = cB + rB - m_groundAnchorB;
    const uB = this.m_uB.Copy(cB).SelfAdd(rB).SelfSub(this.m_groundAnchorB);

    const lengthA: number = uA.Length();
    const lengthB: number = uB.Length();

    if (lengthA > 10 * b2_linearSlop) {
      uA.SelfMul(1 / lengthA);
    } else {
      uA.SetZero();
    }

    if (lengthB > 10 * b2_linearSlop) {
      uB.SelfMul(1 / lengthB);
    } else {
      uB.SetZero();
    }

    // Compute effective mass.
    const ruA: number = b2Vec2.CrossVV(rA, uA);
    const ruB: number = b2Vec2.CrossVV(rB, uB);

    const mA: number = this.m_invMassA + this.m_invIA * ruA * ruA;
    const mB: number = this.m_invMassB + this.m_invIB * ruB * ruB;

    let mass: number = mA + this.m_ratio * this.m_ratio * mB;

    if (mass > 0) {
      mass = 1 / mass;
    }

    const C: number = this.m_constant - lengthA - this.m_ratio * lengthB;
    const linearError: number = b2Abs(C);

    const impulse: number = -mass * C;

    // b2Vec2 PA = -impulse * uA;
    const PA: b2Vec2 = b2Vec2.MulSV(-impulse, uA, b2PulleyJoint.SolvePositionConstraints_s_PA);
    // b2Vec2 PB = -m_ratio * impulse * uB;
    const PB: b2Vec2 = b2Vec2.MulSV(-this.m_ratio * impulse, uB, b2PulleyJoint.SolvePositionConstraints_s_PB);

    // cA += m_invMassA * PA;
    cA.SelfMulAdd(this.m_invMassA, PA);
    aA += this.m_invIA * b2Vec2.CrossVV(rA, PA);
    // cB += m_invMassB * PB;
    cB.SelfMulAdd(this.m_invMassB, PB);
    aB += this.m_invIB * b2Vec2.CrossVV(rB, PB);

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return linearError < b2_linearSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // b2Vec2 P = m_impulse * m_uB;
    // return inv_dt * P;
    return out.Set(inv_dt * this.m_impulse * this.m_uB.x, inv_dt * this.m_impulse * this.m_uB.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  public GetGroundAnchorA() {
    return this.m_groundAnchorA;
  }

  public GetGroundAnchorB() {
    return this.m_groundAnchorB;
  }

  public GetLengthA() {
    return this.m_lengthA;
  }

  public GetLengthB() {
    return this.m_lengthB;
  }

  public GetRatio() {
    return this.m_ratio;
  }

  private static GetCurrentLengthA_s_p = new b2Vec2();
  public GetCurrentLengthA() {
    // b2Vec2 p = m_bodyA->GetWorldPoint(m_localAnchorA);
    // b2Vec2 s = m_groundAnchorA;
    // b2Vec2 d = p - s;
    // return d.Length();
    const p = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, b2PulleyJoint.GetCurrentLengthA_s_p);
    const s = this.m_groundAnchorA;
    return b2Vec2.DistanceVV(p, s);
  }

  private static GetCurrentLengthB_s_p = new b2Vec2();
  public GetCurrentLengthB() {
    // b2Vec2 p = m_bodyB->GetWorldPoint(m_localAnchorB);
    // b2Vec2 s = m_groundAnchorB;
    // b2Vec2 d = p - s;
    // return d.Length();
    const p = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, b2PulleyJoint.GetCurrentLengthB_s_p);
    const s = this.m_groundAnchorB;
    return b2Vec2.DistanceVV(p, s);
  }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2PulleyJointDef = new b2PulleyJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y);
    log("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y);
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.lengthA = %.15f;\n", this.m_lengthA);
    log("  jd.lengthB = %.15f;\n", this.m_lengthB);
    log("  jd.ratio = %.15f;\n", this.m_ratio);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }

  public ShiftOrigin(newOrigin: b2Vec2) {
    this.m_groundAnchorA.SelfSub(newOrigin);
    this.m_groundAnchorB.SelfSub(newOrigin);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Rope joint definition. This requires two body anchor points and
/// a maximum lengths.
/// Note: by default the connected objects will not collide.
/// see collideConnected in b2JointDef.
export class b2RopeJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2(-1, 0);

  public localAnchorB: b2Vec2 = new b2Vec2(1, 0);

  public maxLength: number = 0;

  constructor() {
    super(b2JointType.e_ropeJoint);
  }
}

export class b2RopeJoint extends b2Joint {
  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_maxLength: number = 0;
  public m_length: number = 0;
  public m_impulse: number = 0;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_u: b2Vec2 = new b2Vec2();
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_mass: number = 0;
  public m_state = b2LimitState.e_inactiveLimit;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();

  constructor(def: b2RopeJointDef) {
    super(def);

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_maxLength = def.maxLength;
  }

  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // this.m_rA = b2Mul(qA, this.m_localAnchorA - this.m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // this.m_rB = b2Mul(qB, this.m_localAnchorB - this.m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // this.m_u = cB + this.m_rB - cA - this.m_rA;
    this.m_u.Copy(cB).SelfAdd(this.m_rB).SelfSub(cA).SelfSub(this.m_rA);

    this.m_length = this.m_u.Length();

    const C: number = this.m_length - this.m_maxLength;
    if (C > 0) {
      this.m_state = b2LimitState.e_atUpperLimit;
    } else {
      this.m_state = b2LimitState.e_inactiveLimit;
    }

    if (this.m_length > b2_linearSlop) {
      this.m_u.SelfMul(1 / this.m_length);
    } else {
      this.m_u.SetZero();
      this.m_mass = 0;
      this.m_impulse = 0;
      return;
    }

    // Compute effective mass.
    const crA: number = b2Vec2.CrossVV(this.m_rA, this.m_u);
    const crB: number = b2Vec2.CrossVV(this.m_rB, this.m_u);
    const invMass: number = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;

    this.m_mass = invMass !== 0 ? 1 / invMass : 0;

    if (data.step.warmStarting) {
      // Scale the impulse to support a variable time step.
      this.m_impulse *= data.step.dtRatio;

      // b2Vec2 P = m_impulse * m_u;
      const P: b2Vec2 = b2Vec2.MulSV(this.m_impulse, this.m_u, b2RopeJoint.InitVelocityConstraints_s_P);
      // vA -= m_invMassA * P;
      vA.SelfMulSub(this.m_invMassA, P);
      wA -= this.m_invIA * b2Vec2.CrossVV(this.m_rA, P);
      // vB += m_invMassB * P;
      vB.SelfMulAdd(this.m_invMassB, P);
      wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, P);
    } else {
      this.m_impulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_vpA = new b2Vec2();
  private static SolveVelocityConstraints_s_vpB = new b2Vec2();
  private static SolveVelocityConstraints_s_P = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // Cdot = dot(u, v + cross(w, r))
    // b2Vec2 vpA = vA + b2Cross(wA, m_rA);
    const vpA: b2Vec2 = b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2RopeJoint.SolveVelocityConstraints_s_vpA);
    // b2Vec2 vpB = vB + b2Cross(wB, m_rB);
    const vpB: b2Vec2 = b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2RopeJoint.SolveVelocityConstraints_s_vpB);
    // float32 C = m_length - m_maxLength;
    const C: number = this.m_length - this.m_maxLength;
    // float32 Cdot = b2Dot(m_u, vpB - vpA);
    let Cdot: number = b2Vec2.DotVV(this.m_u, b2Vec2.SubVV(vpB, vpA, b2Vec2.s_t0));

    // Predictive constraint.
    if (C < 0) {
      Cdot += data.step.inv_dt * C;
    }

    let impulse: number = -this.m_mass * Cdot;
    const oldImpulse: number = this.m_impulse;
    this.m_impulse = b2Min(0, this.m_impulse + impulse);
    impulse = this.m_impulse - oldImpulse;

    // b2Vec2 P = impulse * m_u;
    const P: b2Vec2 = b2Vec2.MulSV(impulse, this.m_u, b2RopeJoint.SolveVelocityConstraints_s_P);
    // vA -= m_invMassA * P;
    vA.SelfMulSub(this.m_invMassA, P);
    wA -= this.m_invIA * b2Vec2.CrossVV(this.m_rA, P);
    // vB += m_invMassB * P;
    vB.SelfMulAdd(this.m_invMassB, P);
    wB += this.m_invIB * b2Vec2.CrossVV(this.m_rB, P);

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_P = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // b2Vec2 rA = b2Mul(qA, this.m_localAnchorA - this.m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, this.m_localAnchorB - this.m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // b2Vec2 u = cB + rB - cA - rA;
    const u: b2Vec2 = this.m_u.Copy(cB).SelfAdd(rB).SelfSub(cA).SelfSub(rA);

    const length: number = u.Normalize();
    let C: number = length - this.m_maxLength;

    C = b2Clamp(C, 0, b2_maxLinearCorrection);

    const impulse: number = -this.m_mass * C;
    // b2Vec2 P = impulse * u;
    const P: b2Vec2 = b2Vec2.MulSV(impulse, u, b2RopeJoint.SolvePositionConstraints_s_P);

    // cA -= m_invMassA * P;
    cA.SelfMulSub(this.m_invMassA, P);
    aA -= this.m_invIA * b2Vec2.CrossVV(rA, P);
    // cB += m_invMassB * P;
    cB.SelfMulAdd(this.m_invMassB, P);
    aB += this.m_invIB * b2Vec2.CrossVV(rB, P);

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return length - this.m_maxLength < b2_linearSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    const F: b2Vec2 = b2Vec2.MulSV((inv_dt * this.m_impulse), this.m_u, out);
    return F;
    // return out.Set(inv_dt * this.m_linearImpulse.x, inv_dt * this.m_linearImpulse.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return 0;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public SetMaxLength(length: number): void { this.m_maxLength = length; }
  public GetMaxLength(): number {
    return this.m_maxLength;
  }

  public GetLimitState(): b2LimitState {
    return this.m_state;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2RopeJointDef = new b2RopeJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.maxLength = %.15f;\n", this.m_maxLength);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Weld joint definition. You need to specify local anchor points
/// where they are attached and the relative body angle. The position
/// of the anchor points is important for computing the reaction torque.
export class b2WeldJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2();

  public localAnchorB: b2Vec2 = new b2Vec2();

  public referenceAngle: number = 0;

  public frequencyHz: number = 0;

  public dampingRatio: number = 0;

  constructor() {
    super(b2JointType.e_weldJoint);
  }

  public Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  }
}

export class b2WeldJoint extends b2Joint {
  public m_frequencyHz: number = 0;
  public m_dampingRatio: number = 0;
  public m_bias: number = 0;

  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_referenceAngle: number = 0;
  public m_gamma: number = 0;
  public m_impulse: b2Vec3 = new b2Vec3(0, 0, 0);

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;
  public m_mass: b2Mat33 = new b2Mat33();

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_K: b2Mat33 = new b2Mat33();

  constructor(def: b2WeldJointDef) {
    super(def);

    this.m_frequencyHz = def.frequencyHz;
    this.m_dampingRatio = def.dampingRatio;

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_referenceAngle = def.referenceAngle;
    this.m_impulse.SetZero();
  }

  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    // J = [-I -r1_skew I r2_skew]
    //     [ 0       -1 0       1]
    // r_skew = [-ry; rx]

    // Matlab
    // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
    //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
    //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const K: b2Mat33 = this.m_K;
    K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
    K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
    K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
    K.ex.y = K.ey.x;
    K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
    K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
    K.ex.z = K.ez.x;
    K.ey.z = K.ez.y;
    K.ez.z = iA + iB;

    if (this.m_frequencyHz > 0) {
      K.GetInverse22(this.m_mass);

      let invM: number = iA + iB;
      const m: number = invM > 0 ? 1 / invM : 0;

      const C: number = aB - aA - this.m_referenceAngle;

      // Frequency
      const omega: number = 2 * b2_pi * this.m_frequencyHz;

      // Damping coefficient
      const d: number = 2 * m * this.m_dampingRatio * omega;

      // Spring stiffness
      const k: number = m * omega * omega;

      // magic formulas
      const h: number = data.step.dt;
      this.m_gamma = h * (d + h * k);
      this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
      this.m_bias = C * h * k * this.m_gamma;

      invM += this.m_gamma;
      this.m_mass.ez.z = invM !== 0 ? 1 / invM : 0;
    } else {
      K.GetSymInverse33(this.m_mass);
      this.m_gamma = 0;
      this.m_bias = 0;
    }

    if (data.step.warmStarting) {
      // Scale impulses to support a variable time step.
      this.m_impulse.SelfMul(data.step.dtRatio);

      // b2Vec2 P(m_impulse.x, m_impulse.y);
      const P: b2Vec2 = b2WeldJoint.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y);

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + this.m_impulse.z);

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * (b2Vec2.CrossVV(this.m_rB, P) + this.m_impulse.z);
    } else {
      this.m_impulse.SetZero();
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_Cdot1 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse1 = new b2Vec2();
  private static SolveVelocityConstraints_s_impulse = new b2Vec3();
  private static SolveVelocityConstraints_s_P = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    if (this.m_frequencyHz > 0) {
      const Cdot2: number = wB - wA;

      const impulse2: number = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
      this.m_impulse.z += impulse2;

      wA -= iA * impulse2;
      wB += iB * impulse2;

      // b2Vec2 Cdot1 = vB + b2Vec2.CrossSV(wB, this.m_rB) - vA - b2Vec2.CrossSV(wA, this.m_rA);
      const Cdot1: b2Vec2 = b2Vec2.SubVV(
        b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Vec2.s_t0),
        b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Vec2.s_t1),
        b2WeldJoint.SolveVelocityConstraints_s_Cdot1);

      // b2Vec2 impulse1 = -b2Mul22(m_mass, Cdot1);
      const impulse1: b2Vec2 = b2Mat33.MulM33XY(this.m_mass, Cdot1.x, Cdot1.y, b2WeldJoint.SolveVelocityConstraints_s_impulse1).SelfNeg();
      this.m_impulse.x += impulse1.x;
      this.m_impulse.y += impulse1.y;

      // b2Vec2 P = impulse1;
      const P: b2Vec2 = impulse1;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      // wA -= iA * b2Cross(m_rA, P);
      wA -= iA * b2Vec2.CrossVV(this.m_rA, P);

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      // wB += iB * b2Cross(m_rB, P);
      wB += iB * b2Vec2.CrossVV(this.m_rB, P);
    } else {
      // b2Vec2 Cdot1 = vB + b2Cross(wB, this.m_rB) - vA - b2Cross(wA, this.m_rA);
      const Cdot1: b2Vec2 = b2Vec2.SubVV(
        b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Vec2.s_t0),
        b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Vec2.s_t1),
        b2WeldJoint.SolveVelocityConstraints_s_Cdot1);
      const Cdot2: number = wB - wA;
      // b2Vec3 const Cdot(Cdot1.x, Cdot1.y, Cdot2);

      // b2Vec3 impulse = -b2Mul(m_mass, Cdot);
      const impulse: b2Vec3 = b2Mat33.MulM33XYZ(this.m_mass, Cdot1.x, Cdot1.y, Cdot2, b2WeldJoint.SolveVelocityConstraints_s_impulse).SelfNeg();
      this.m_impulse.SelfAdd(impulse);

      // b2Vec2 P(impulse.x, impulse.y);
      const P: b2Vec2 = b2WeldJoint.SolveVelocityConstraints_s_P.Set(impulse.x, impulse.y);

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + impulse.z);

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * (b2Vec2.CrossVV(this.m_rB, P) + impulse.z);
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_C1 = new b2Vec2();
  private static SolvePositionConstraints_s_P = new b2Vec2();
  private static SolvePositionConstraints_s_impulse = new b2Vec3();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);

    let positionError: number, angularError: number;

    const K: b2Mat33 = this.m_K;
    K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
    K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
    K.ez.x = -rA.y * iA - rB.y * iB;
    K.ex.y = K.ey.x;
    K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
    K.ez.y = rA.x * iA + rB.x * iB;
    K.ex.z = K.ez.x;
    K.ey.z = K.ez.y;
    K.ez.z = iA + iB;

    if (this.m_frequencyHz > 0) {
      // b2Vec2 C1 =  cB + rB - cA - rA;
      const C1 =
        b2Vec2.SubVV(
          b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
          b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
          b2WeldJoint.SolvePositionConstraints_s_C1);
      positionError = C1.Length();
      angularError = 0;

      // b2Vec2 P = -K.Solve22(C1);
      const P: b2Vec2 = K.Solve22(C1.x, C1.y, b2WeldJoint.SolvePositionConstraints_s_P).SelfNeg();

      // cA -= mA * P;
      cA.SelfMulSub(mA, P);
      aA -= iA * b2Vec2.CrossVV(rA, P);

      // cB += mB * P;
      cB.SelfMulAdd(mB, P);
      aB += iB * b2Vec2.CrossVV(rB, P);
    } else {
      // b2Vec2 C1 =  cB + rB - cA - rA;
      const C1 =
        b2Vec2.SubVV(
          b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
          b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
          b2WeldJoint.SolvePositionConstraints_s_C1);
      const C2: number = aB - aA - this.m_referenceAngle;

      positionError = C1.Length();
      angularError = b2Abs(C2);

      // b2Vec3 C(C1.x, C1.y, C2);

      // b2Vec3 impulse = -K.Solve33(C);
      const impulse: b2Vec3 = K.Solve33(C1.x, C1.y, C2, b2WeldJoint.SolvePositionConstraints_s_impulse).SelfNeg();

      // b2Vec2 P(impulse.x, impulse.y);
      const P: b2Vec2 = b2WeldJoint.SolvePositionConstraints_s_P.Set(impulse.x, impulse.y);

      // cA -= mA * P;
      cA.SelfMulSub(mA, P);
      aA -= iA * (b2Vec2.CrossVV(this.m_rA, P) + impulse.z);

      // cB += mB * P;
      cB.SelfMulAdd(mB, P);
      aB += iB * (b2Vec2.CrossVV(this.m_rB, P) + impulse.z);
    }

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return positionError <= b2_linearSlop && angularError <= b2_angularSlop;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // b2Vec2 P(this.m_impulse.x, this.m_impulse.y);
    // return inv_dt * P;
    return out.Set(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_impulse.z;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public GetReferenceAngle(): number { return this.m_referenceAngle; }

  public SetFrequency(hz: number): void { this.m_frequencyHz = hz; }
  public GetFrequency(): number { return this.m_frequencyHz; }

  public SetDampingRatio(ratio: number) { this.m_dampingRatio = ratio; }
  public GetDampingRatio() { return this.m_dampingRatio; }

  public Dump(log: (format: string, ...args: any[]) => void) {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2WeldJointDef = new b2WeldJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/// Wheel joint definition. This requires defining a line of
/// motion using an axis and an anchor point. The definition uses local
/// anchor points and a local axis so that the initial configuration
/// can violate the constraint slightly. The joint translation is zero
/// when the local anchor points coincide in world space. Using local
/// anchors and a local axis helps when saving and loading a game.
export class b2WheelJointDef extends b2JointDef {
  public localAnchorA: b2Vec2 = new b2Vec2(0, 0);

  public localAnchorB: b2Vec2 = new b2Vec2(0, 0);

  public localAxisA: b2Vec2 = new b2Vec2(1, 0);

  public enableMotor = false;

  public maxMotorTorque: number = 0;

  public motorSpeed: number = 0;

  public frequencyHz: number = 2;

  public dampingRatio: number = 0.7;

  constructor() {
    super(b2JointType.e_wheelJoint);
  }

  public Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2, axis: b2Vec2): void {
    this.bodyA = bA;
    this.bodyB = bB;
    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
    this.bodyA.GetLocalVector(axis, this.localAxisA);
  }
}

export class b2WheelJoint extends b2Joint {
  public m_frequencyHz: number = 0;
  public m_dampingRatio: number = 0;

  // Solver shared
  public m_localAnchorA: b2Vec2 = new b2Vec2();
  public m_localAnchorB: b2Vec2 = new b2Vec2();
  public m_localXAxisA: b2Vec2 = new b2Vec2();
  public m_localYAxisA: b2Vec2 = new b2Vec2();

  public m_impulse: number = 0;
  public m_motorImpulse: number = 0;
  public m_springImpulse: number = 0;

  public m_maxMotorTorque: number = 0;
  public m_motorSpeed: number = 0;
  public m_enableMotor = false;

  // Solver temp
  public m_indexA: number = 0;
  public m_indexB: number = 0;
  public m_localCenterA: b2Vec2 = new b2Vec2();
  public m_localCenterB: b2Vec2 = new b2Vec2();
  public m_invMassA: number = 0;
  public m_invMassB: number = 0;
  public m_invIA: number = 0;
  public m_invIB: number = 0;

  public m_ax: b2Vec2 = new b2Vec2();
  public m_ay: b2Vec2 = new b2Vec2();
  public m_sAx: number = 0;
  public m_sBx: number = 0;
  public m_sAy: number = 0;
  public m_sBy: number = 0;

  public m_mass: number = 0;
  public m_motorMass: number = 0;
  public m_springMass: number = 0;

  public m_bias: number = 0;
  public m_gamma: number = 0;

  public m_qA: b2Rot = new b2Rot();
  public m_qB: b2Rot = new b2Rot();
  public m_lalcA: b2Vec2 = new b2Vec2();
  public m_lalcB: b2Vec2 = new b2Vec2();
  public m_rA: b2Vec2 = new b2Vec2();
  public m_rB: b2Vec2 = new b2Vec2();

  constructor(def: b2WheelJointDef) {
    super(def);

    this.m_frequencyHz = def.frequencyHz;
    this.m_dampingRatio = def.dampingRatio;

    this.m_localAnchorA.Copy(def.localAnchorA);
    this.m_localAnchorB.Copy(def.localAnchorB);
    this.m_localXAxisA.Copy(def.localAxisA);
    b2Vec2.CrossOneV(this.m_localXAxisA, this.m_localYAxisA);

    this.m_maxMotorTorque = def.maxMotorTorque;
    this.m_motorSpeed = def.motorSpeed;
    this.m_enableMotor = def.enableMotor;

    this.m_ax.SetZero();
    this.m_ay.SetZero();
  }

  public GetMotorSpeed(): number {
    return this.m_motorSpeed;
  }

  public GetMaxMotorTorque(): number {
    return this.m_maxMotorTorque;
  }

  public SetSpringFrequencyHz(hz: number): void {
    this.m_frequencyHz = hz;
  }

  public GetSpringFrequencyHz(): number {
    return this.m_frequencyHz;
  }

  public SetSpringDampingRatio(ratio: number): void {
    this.m_dampingRatio = ratio;
  }

  public GetSpringDampingRatio(): number {
    return this.m_dampingRatio;
  }

  private static InitVelocityConstraints_s_d = new b2Vec2();
  private static InitVelocityConstraints_s_P = new b2Vec2();
  public InitVelocityConstraints(data: b2SolverData): void {
    this.m_indexA = this.m_bodyA.m_islandIndex;
    this.m_indexB = this.m_bodyB.m_islandIndex;
    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
    this.m_invMassA = this.m_bodyA.m_invMass;
    this.m_invMassB = this.m_bodyB.m_invMass;
    this.m_invIA = this.m_bodyA.m_invI;
    this.m_invIB = this.m_bodyB.m_invI;

    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    const aA: number = data.positions[this.m_indexA].a;
    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;

    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    const aB: number = data.positions[this.m_indexB].a;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // Compute the effective masses.
    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // b2Vec2 d = cB + rB - cA - rA;
    const d: b2Vec2 = b2Vec2.SubVV(
      b2Vec2.AddVV(cB, rB, b2Vec2.s_t0),
      b2Vec2.AddVV(cA, rA, b2Vec2.s_t1),
      b2WheelJoint.InitVelocityConstraints_s_d);

    // Point to line constraint
    {
      // m_ay = b2Mul(qA, m_localYAxisA);
      b2Rot.MulRV(qA, this.m_localYAxisA, this.m_ay);
      // m_sAy = b2Cross(d + rA, m_ay);
      this.m_sAy = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), this.m_ay);
      // m_sBy = b2Cross(rB, m_ay);
      this.m_sBy = b2Vec2.CrossVV(rB, this.m_ay);

      this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;

      if (this.m_mass > 0) {
        this.m_mass = 1 / this.m_mass;
      }
    }

    // Spring constraint
    this.m_springMass = 0;
    this.m_bias = 0;
    this.m_gamma = 0;
    if (this.m_frequencyHz > 0) {
      // m_ax = b2Mul(qA, m_localXAxisA);
      b2Rot.MulRV(qA, this.m_localXAxisA, this.m_ax);
      // m_sAx = b2Cross(d + rA, m_ax);
      this.m_sAx = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), this.m_ax);
      // m_sBx = b2Cross(rB, m_ax);
      this.m_sBx = b2Vec2.CrossVV(rB, this.m_ax);

      const invMass: number = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;

      if (invMass > 0) {
        this.m_springMass = 1 / invMass;

        const C: number = b2Vec2.DotVV(d, this.m_ax);

        // Frequency
        const omega: number = 2 * b2_pi * this.m_frequencyHz;

        // Damping coefficient
        const dc: number = 2 * this.m_springMass * this.m_dampingRatio * omega;

        // Spring stiffness
        const k: number = this.m_springMass * omega * omega;

        // magic formulas
        const h: number = data.step.dt;
        this.m_gamma = h * (dc + h * k);
        if (this.m_gamma > 0) {
          this.m_gamma = 1 / this.m_gamma;
        }

        this.m_bias = C * h * k * this.m_gamma;

        this.m_springMass = invMass + this.m_gamma;
        if (this.m_springMass > 0) {
          this.m_springMass = 1 / this.m_springMass;
        }
      }
    } else {
      this.m_springImpulse = 0;
    }

    // Rotational motor
    if (this.m_enableMotor) {
      this.m_motorMass = iA + iB;
      if (this.m_motorMass > 0) {
        this.m_motorMass = 1 / this.m_motorMass;
      }
    } else {
      this.m_motorMass = 0;
      this.m_motorImpulse = 0;
    }

    if (data.step.warmStarting) {
      // Account for variable time step.
      this.m_impulse *= data.step.dtRatio;
      this.m_springImpulse *= data.step.dtRatio;
      this.m_motorImpulse *= data.step.dtRatio;

      // b2Vec2 P = m_impulse * m_ay + m_springImpulse * m_ax;
      const P: b2Vec2 = b2Vec2.AddVV(
        b2Vec2.MulSV(this.m_impulse, this.m_ay, b2Vec2.s_t0),
        b2Vec2.MulSV(this.m_springImpulse, this.m_ax, b2Vec2.s_t1),
        b2WheelJoint.InitVelocityConstraints_s_P);
      // float32 LA = m_impulse * m_sAy + m_springImpulse * m_sAx + m_motorImpulse;
      const LA: number = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;
      // float32 LB = m_impulse * m_sBy + m_springImpulse * m_sBx + m_motorImpulse;
      const LB: number = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;

      // vA -= m_invMassA * P;
      vA.SelfMulSub(this.m_invMassA, P);
      wA -= this.m_invIA * LA;

      // vB += m_invMassB * P;
      vB.SelfMulAdd(this.m_invMassB, P);
      wB += this.m_invIB * LB;
    } else {
      this.m_impulse = 0;
      this.m_springImpulse = 0;
      this.m_motorImpulse = 0;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolveVelocityConstraints_s_P = new b2Vec2();
  public SolveVelocityConstraints(data: b2SolverData): void {
    const mA: number = this.m_invMassA, mB: number = this.m_invMassB;
    const iA: number = this.m_invIA, iB: number = this.m_invIB;

    const vA: b2Vec2 = data.velocities[this.m_indexA].v;
    let wA: number = data.velocities[this.m_indexA].w;
    const vB: b2Vec2 = data.velocities[this.m_indexB].v;
    let wB: number = data.velocities[this.m_indexB].w;

    // Solve spring constraint
    {
      const Cdot: number = b2Vec2.DotVV(this.m_ax, b2Vec2.SubVV(vB, vA, b2Vec2.s_t0)) + this.m_sBx * wB - this.m_sAx * wA;
      const impulse: number = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
      this.m_springImpulse += impulse;

      // b2Vec2 P = impulse * m_ax;
      const P: b2Vec2 = b2Vec2.MulSV(impulse, this.m_ax, b2WheelJoint.SolveVelocityConstraints_s_P);
      const LA: number = impulse * this.m_sAx;
      const LB: number = impulse * this.m_sBx;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    }

    // Solve rotational motor constraint
    {
      const Cdot: number = wB - wA - this.m_motorSpeed;
      let impulse: number = -this.m_motorMass * Cdot;

      const oldImpulse: number = this.m_motorImpulse;
      const maxImpulse: number = data.step.dt * this.m_maxMotorTorque;
      this.m_motorImpulse = b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
      impulse = this.m_motorImpulse - oldImpulse;

      wA -= iA * impulse;
      wB += iB * impulse;
    }

    // Solve point to line constraint
    {
      const Cdot: number = b2Vec2.DotVV(this.m_ay, b2Vec2.SubVV(vB, vA, b2Vec2.s_t0)) + this.m_sBy * wB - this.m_sAy * wA;
      const impulse: number = -this.m_mass * Cdot;
      this.m_impulse += impulse;

      // b2Vec2 P = impulse * m_ay;
      const P: b2Vec2 = b2Vec2.MulSV(impulse, this.m_ay, b2WheelJoint.SolveVelocityConstraints_s_P);
      const LA: number = impulse * this.m_sAy;
      const LB: number = impulse * this.m_sBy;

      // vA -= mA * P;
      vA.SelfMulSub(mA, P);
      wA -= iA * LA;

      // vB += mB * P;
      vB.SelfMulAdd(mB, P);
      wB += iB * LB;
    }

    // data.velocities[this.m_indexA].v = vA;
    data.velocities[this.m_indexA].w = wA;
    // data.velocities[this.m_indexB].v = vB;
    data.velocities[this.m_indexB].w = wB;
  }

  private static SolvePositionConstraints_s_d = new b2Vec2();
  private static SolvePositionConstraints_s_P = new b2Vec2();
  public SolvePositionConstraints(data: b2SolverData): boolean {
    const cA: b2Vec2 = data.positions[this.m_indexA].c;
    let aA: number = data.positions[this.m_indexA].a;
    const cB: b2Vec2 = data.positions[this.m_indexB].c;
    let aB: number = data.positions[this.m_indexB].a;

    const qA: b2Rot = this.m_qA.SetAngle(aA), qB: b2Rot = this.m_qB.SetAngle(aB);

    // b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
    b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
    const rA: b2Vec2 = b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
    b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
    const rB: b2Vec2 = b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
    // b2Vec2 d = (cB - cA) + rB - rA;
    const d: b2Vec2 = b2Vec2.AddVV(
      b2Vec2.SubVV(cB, cA, b2Vec2.s_t0),
      b2Vec2.SubVV(rB, rA, b2Vec2.s_t1),
      b2WheelJoint.SolvePositionConstraints_s_d);

    // b2Vec2 ay = b2Mul(qA, m_localYAxisA);
    const ay: b2Vec2 = b2Rot.MulRV(qA, this.m_localYAxisA, this.m_ay);

    // float32 sAy = b2Cross(d + rA, ay);
    const sAy = b2Vec2.CrossVV(b2Vec2.AddVV(d, rA, b2Vec2.s_t0), ay);
    // float32 sBy = b2Cross(rB, ay);
    const sBy = b2Vec2.CrossVV(rB, ay);

    // float32 C = b2Dot(d, ay);
    const C: number = b2Vec2.DotVV(d, this.m_ay);

    const k: number = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;

    let impulse: number;
    if (k !== 0) {
      impulse = - C / k;
    } else {
      impulse = 0;
    }

    // b2Vec2 P = impulse * ay;
    const P: b2Vec2 = b2Vec2.MulSV(impulse, ay, b2WheelJoint.SolvePositionConstraints_s_P);
    const LA: number = impulse * sAy;
    const LB: number = impulse * sBy;

    // cA -= m_invMassA * P;
    cA.SelfMulSub(this.m_invMassA, P);
    aA -= this.m_invIA * LA;
    // cB += m_invMassB * P;
    cB.SelfMulAdd(this.m_invMassB, P);
    aB += this.m_invIB * LB;

    // data.positions[this.m_indexA].c = cA;
    data.positions[this.m_indexA].a = aA;
    // data.positions[this.m_indexB].c = cB;
    data.positions[this.m_indexB].a = aB;

    return b2Abs(C) <= b2_linearSlop;
  }

  public GetDefinition(def: b2WheelJointDef): b2WheelJointDef {
    ///b2Assert(false); // TODO
    return def;
  }

  public GetAnchorA(out: b2Vec2): b2Vec2 {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
  }

  public GetAnchorB(out: b2Vec2): b2Vec2 {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
  }

  public GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2 {
    // return inv_dt * (m_impulse * m_ay + m_springImpulse * m_ax);
    out.x = inv_dt * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x);
    out.y = inv_dt * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y);
    return out;
  }

  public GetReactionTorque(inv_dt: number): number {
    return inv_dt * this.m_motorImpulse;
  }

  public GetLocalAnchorA(): b2Vec2 { return this.m_localAnchorA; }

  public GetLocalAnchorB(): b2Vec2 { return this.m_localAnchorB; }

  public GetLocalAxisA(): b2Vec2 { return this.m_localXAxisA; }

  public GetJointTranslation(): number {
    return this.GetPrismaticJointTranslation();
  }

  public GetJointSpeed(): number {
    return this.GetRevoluteJointSpeed();
  }

  public GetPrismaticJointTranslation(): number {
    const bA: b2Body = this.m_bodyA;
    const bB: b2Body = this.m_bodyB;

    const pA: b2Vec2 = bA.GetWorldPoint(this.m_localAnchorA, new b2Vec2());
    const pB: b2Vec2 = bB.GetWorldPoint(this.m_localAnchorB, new b2Vec2());
    const d: b2Vec2 = b2Vec2.SubVV(pB, pA, new b2Vec2());
    const axis: b2Vec2 = bA.GetWorldVector(this.m_localXAxisA, new b2Vec2());

    const translation: number = b2Vec2.DotVV(d, axis);
    return translation;
  }

  public GetPrismaticJointSpeed(): number {
    const bA: b2Body = this.m_bodyA;
    const bB: b2Body = this.m_bodyB;

    // b2Vec2 rA = b2Mul(bA->m_xf.q, m_localAnchorA - bA->m_sweep.localCenter);
    b2Vec2.SubVV(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
    const rA = b2Rot.MulRV(bA.m_xf.q, this.m_lalcA, this.m_rA);
    // b2Vec2 rB = b2Mul(bB->m_xf.q, m_localAnchorB - bB->m_sweep.localCenter);
    b2Vec2.SubVV(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
    const rB = b2Rot.MulRV(bB.m_xf.q, this.m_lalcB, this.m_rB);
    // b2Vec2 pA = bA->m_sweep.c + rA;
    const pA = b2Vec2.AddVV(bA.m_sweep.c, rA, b2Vec2.s_t0); // pA uses s_t0
    // b2Vec2 pB = bB->m_sweep.c + rB;
    const pB = b2Vec2.AddVV(bB.m_sweep.c, rB, b2Vec2.s_t1); // pB uses s_t1
    // b2Vec2 d = pB - pA;
    const d = b2Vec2.SubVV(pB, pA, b2Vec2.s_t2); // d uses s_t2
    // b2Vec2 axis = b2Mul(bA.m_xf.q, m_localXAxisA);
    const axis = bA.GetWorldVector(this.m_localXAxisA, new b2Vec2());

    const vA = bA.m_linearVelocity;
    const vB = bB.m_linearVelocity;
    const wA = bA.m_angularVelocity;
    const wB = bB.m_angularVelocity;

    // float32 speed = b2Dot(d, b2Cross(wA, axis)) + b2Dot(axis, vB + b2Cross(wB, rB) - vA - b2Cross(wA, rA));
    const speed =
      b2Vec2.DotVV(d, b2Vec2.CrossSV(wA, axis, b2Vec2.s_t0)) +
      b2Vec2.DotVV(
        axis,
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, rA, b2Vec2.s_t1),
          b2Vec2.s_t0));
    return speed;
  }

  public GetRevoluteJointAngle(): number {
    // b2Body* bA = this.m_bodyA;
    // b2Body* bB = this.m_bodyB;
    // return bB->this.m_sweep.a - bA->this.m_sweep.a;
    return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
  }

  public GetRevoluteJointSpeed(): number {
    const wA: number = this.m_bodyA.m_angularVelocity;
    const wB: number = this.m_bodyB.m_angularVelocity;
    return wB - wA;
  }

  public IsMotorEnabled(): boolean {
    return this.m_enableMotor;
  }

  public EnableMotor(flag: boolean): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_enableMotor = flag;
  }

  public SetMotorSpeed(speed: number): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_motorSpeed = speed;
  }

  public SetMaxMotorTorque(force: number): void {
    this.m_bodyA.SetAwake(true);
    this.m_bodyB.SetAwake(true);
    this.m_maxMotorTorque = force;
  }

  public GetMotorTorque(inv_dt: number): number {
    return inv_dt * this.m_motorImpulse;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    const indexA = this.m_bodyA.m_islandIndex;
    const indexB = this.m_bodyB.m_islandIndex;

    log("  const jd: b2WheelJointDef = new b2WheelJointDef();\n");
    log("  jd.bodyA = bodies[%d];\n", indexA);
    log("  jd.bodyB = bodies[%d];\n", indexB);
    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
    log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
    log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
  }
}

export class b2JointFactory {
  public static Create(def: b2JointDef, allocator: any): b2Joint {
    let joint: b2Joint = null;

    switch (def.type) {
    case b2JointType.e_distanceJoint:
      joint = new b2DistanceJoint(<b2DistanceJointDef> def);
      break;

    case b2JointType.e_mouseJoint:
      joint = new b2MouseJoint(<b2MouseJointDef> def);
      break;

    case b2JointType.e_prismaticJoint:
      joint = new b2PrismaticJoint(<b2PrismaticJointDef> def);
      break;

    case b2JointType.e_revoluteJoint:
      joint = new b2RevoluteJoint(<b2RevoluteJointDef> def);
      break;

    case b2JointType.e_pulleyJoint:
      joint = new b2PulleyJoint(<b2PulleyJointDef> def);
      break;

    case b2JointType.e_gearJoint:
      joint = new b2GearJoint(<b2GearJointDef> def);
      break;

    case b2JointType.e_wheelJoint:
      joint = new b2WheelJoint(<b2WheelJointDef> def);
      break;

    case b2JointType.e_weldJoint:
      joint = new b2WeldJoint(<b2WeldJointDef> def);
      break;

    case b2JointType.e_frictionJoint:
      joint = new b2FrictionJoint(<b2FrictionJointDef> def);
      break;

    case b2JointType.e_ropeJoint:
      joint = new b2RopeJoint(<b2RopeJointDef> def);
      break;

    case b2JointType.e_motorJoint:
      joint = new b2MotorJoint(<b2MotorJointDef> def);
      break;

    case b2JointType.e_areaJoint:
      joint = new b2AreaJoint(<b2AreaJointDef> def);
      break;

    default:
      ///b2Assert(false);
      break;
    }

    return joint;
  }

  public static Destroy(joint: b2Joint, allocator: any): void {
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export class b2VelocityConstraintPoint {
  public rA: b2Vec2 = new b2Vec2();
  public rB: b2Vec2 = new b2Vec2();
  public normalImpulse: number = 0;
  public tangentImpulse: number = 0;
  public normalMass: number = 0;
  public tangentMass: number = 0;
  public velocityBias: number = 0;

  public static MakeArray(length: number): b2VelocityConstraintPoint[] {
    return b2MakeArray(length, function (i) { return new b2VelocityConstraintPoint(); });
  }
}

export class b2ContactVelocityConstraint {
  public points: b2VelocityConstraintPoint[] = b2VelocityConstraintPoint.MakeArray(b2_maxManifoldPoints);
  public normal: b2Vec2 = new b2Vec2();
  public tangent: b2Vec2 = new b2Vec2();
  public normalMass: b2Mat22 = new b2Mat22();
  public K: b2Mat22 = new b2Mat22();
  public indexA: number = 0;
  public indexB: number = 0;
  public invMassA: number = 0;
  public invMassB: number = 0;
  public invIA: number = 0;
  public invIB: number = 0;
  public friction: number = 0;
  public restitution: number = 0;
  public tangentSpeed: number = 0;
  public pointCount: number = 0;
  public contactIndex: number = 0;

  public static MakeArray(length: number): b2ContactVelocityConstraint[] {
    return b2MakeArray(length, function (i) { return new b2ContactVelocityConstraint(); } );
  }
}

export class b2ContactPositionConstraint {
  public localPoints: b2Vec2[] = b2Vec2.MakeArray(b2_maxManifoldPoints);
  public localNormal: b2Vec2 = new b2Vec2();
  public localPoint: b2Vec2 = new b2Vec2();
  public indexA: number = 0;
  public indexB: number = 0;
  public invMassA: number = 0;
  public invMassB: number = 0;
  public localCenterA: b2Vec2 = new b2Vec2();
  public localCenterB: b2Vec2 = new b2Vec2();
  public invIA: number = 0;
  public invIB: number = 0;
  public type: b2ManifoldType = b2ManifoldType.e_unknown;
  public radiusA: number = 0;
  public radiusB: number = 0;
  public pointCount: number = 0;

  public static MakeArray(length: number): b2ContactPositionConstraint[] {
    return b2MakeArray(length, function (i) { return new b2ContactPositionConstraint(); } );
  }
}

export class b2ContactSolverDef {
  public step: b2TimeStep = new b2TimeStep();
  public contacts: b2Contact[] = null;
  public count: number = 0;
  public positions: b2Position[] = null;
  public velocities: b2Velocity[] = null;
  public allocator: any = null;
}

export class b2PositionSolverManifold {
  public normal: b2Vec2 = new b2Vec2();
  public point: b2Vec2 = new b2Vec2();
  public separation: number = 0;

  private static Initialize_s_pointA = new b2Vec2();
  private static Initialize_s_pointB = new b2Vec2();
  private static Initialize_s_planePoint = new b2Vec2();
  private static Initialize_s_clipPoint = new b2Vec2();
  public Initialize(pc: b2ContactPositionConstraint, xfA: b2Transform, xfB: b2Transform, index: number): void {
    const pointA: b2Vec2 = b2PositionSolverManifold.Initialize_s_pointA;
    const pointB: b2Vec2 = b2PositionSolverManifold.Initialize_s_pointB;
    const planePoint: b2Vec2 = b2PositionSolverManifold.Initialize_s_planePoint;
    const clipPoint: b2Vec2 = b2PositionSolverManifold.Initialize_s_clipPoint;

    ///b2Assert(pc.pointCount > 0);

    switch (pc.type) {
    case b2ManifoldType.e_circles: {
        // b2Vec2 pointA = b2Mul(xfA, pc->localPoint);
        b2Transform.MulXV(xfA, pc.localPoint, pointA);
        // b2Vec2 pointB = b2Mul(xfB, pc->localPoints[0]);
        b2Transform.MulXV(xfB, pc.localPoints[0], pointB);
        // normal = pointB - pointA;
        // normal.Normalize();
        b2Vec2.SubVV(pointB, pointA, this.normal).SelfNormalize();
        // point = 0.5f * (pointA + pointB);
        b2Vec2.MidVV(pointA, pointB, this.point);
        // separation = b2Dot(pointB - pointA, normal) - pc->radius;
        this.separation = b2Vec2.DotVV(b2Vec2.SubVV(pointB, pointA, b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
      }
      break;

    case b2ManifoldType.e_faceA: {
        // normal = b2Mul(xfA.q, pc->localNormal);
        b2Rot.MulRV(xfA.q, pc.localNormal, this.normal);
        // b2Vec2 planePoint = b2Mul(xfA, pc->localPoint);
        b2Transform.MulXV(xfA, pc.localPoint, planePoint);

        // b2Vec2 clipPoint = b2Mul(xfB, pc->localPoints[index]);
        b2Transform.MulXV(xfB, pc.localPoints[index], clipPoint);
        // separation = b2Dot(clipPoint - planePoint, normal) - pc->radius;
        this.separation = b2Vec2.DotVV(b2Vec2.SubVV(clipPoint, planePoint, b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
        // point = clipPoint;
        this.point.Copy(clipPoint);
      }
      break;

    case b2ManifoldType.e_faceB: {
        // normal = b2Mul(xfB.q, pc->localNormal);
        b2Rot.MulRV(xfB.q, pc.localNormal, this.normal);
        // b2Vec2 planePoint = b2Mul(xfB, pc->localPoint);
        b2Transform.MulXV(xfB, pc.localPoint, planePoint);

        // b2Vec2 clipPoint = b2Mul(xfA, pc->localPoints[index]);
        b2Transform.MulXV(xfA, pc.localPoints[index], clipPoint);
        // separation = b2Dot(clipPoint - planePoint, normal) - pc->radius;
        this.separation = b2Vec2.DotVV(b2Vec2.SubVV(clipPoint, planePoint, b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
        // point = clipPoint;
        this.point.Copy(clipPoint);

        // Ensure normal points from A to B
        // normal = -normal;
        this.normal.SelfNeg();
      }
      break;
    }
  }
}

export class b2ContactSolver {
  public m_step: b2TimeStep = new b2TimeStep();
  public m_positions: b2Position[] = null;
  public m_velocities: b2Velocity[] = null;
  public m_allocator: any = null;
  public m_positionConstraints: b2ContactPositionConstraint[] = b2ContactPositionConstraint.MakeArray(1024); // TODO: b2Settings
  public m_velocityConstraints: b2ContactVelocityConstraint[] = b2ContactVelocityConstraint.MakeArray(1024); // TODO: b2Settings
  public m_contacts: b2Contact[] = null;
  public m_count: number = 0;

  public Initialize(def: b2ContactSolverDef): b2ContactSolver {
    this.m_step.Copy(def.step);
    this.m_allocator = def.allocator;
    this.m_count = def.count;
    // TODO:
    if (this.m_positionConstraints.length < this.m_count) {
      const new_length: number = b2Max(this.m_positionConstraints.length * 2, this.m_count);
      while (this.m_positionConstraints.length < new_length) {
        this.m_positionConstraints[this.m_positionConstraints.length] = new b2ContactPositionConstraint();
      }
    }
    // TODO:
    if (this.m_velocityConstraints.length < this.m_count) {
      const new_length: number = b2Max(this.m_velocityConstraints.length * 2, this.m_count);
      while (this.m_velocityConstraints.length < new_length) {
        this.m_velocityConstraints[this.m_velocityConstraints.length] = new b2ContactVelocityConstraint();
      }
    }
    this.m_positions = def.positions;
    this.m_velocities = def.velocities;
    this.m_contacts = def.contacts;

    // Initialize position independent portions of the constraints.
    for (let i: number = 0; i < this.m_count; ++i) {
      const contact: b2Contact = this.m_contacts[i];

      const fixtureA: b2Fixture = contact.m_fixtureA;
      const fixtureB: b2Fixture = contact.m_fixtureB;
      const shapeA: b2Shape = fixtureA.GetShape();
      const shapeB: b2Shape = fixtureB.GetShape();
      const radiusA: number = shapeA.m_radius;
      const radiusB: number = shapeB.m_radius;
      const bodyA: b2Body = fixtureA.GetBody();
      const bodyB: b2Body = fixtureB.GetBody();
      const manifold: b2Manifold = contact.GetManifold();

      const pointCount: number = manifold.pointCount;
      ///b2Assert(pointCount > 0);

      const vc: b2ContactVelocityConstraint = this.m_velocityConstraints[i];
      vc.friction = contact.m_friction;
      vc.restitution = contact.m_restitution;
      vc.tangentSpeed = contact.m_tangentSpeed;
      vc.indexA = bodyA.m_islandIndex;
      vc.indexB = bodyB.m_islandIndex;
      vc.invMassA = bodyA.m_invMass;
      vc.invMassB = bodyB.m_invMass;
      vc.invIA = bodyA.m_invI;
      vc.invIB = bodyB.m_invI;
      vc.contactIndex = i;
      vc.pointCount = pointCount;
      vc.K.SetZero();
      vc.normalMass.SetZero();

      const pc: b2ContactPositionConstraint = this.m_positionConstraints[i];
      pc.indexA = bodyA.m_islandIndex;
      pc.indexB = bodyB.m_islandIndex;
      pc.invMassA = bodyA.m_invMass;
      pc.invMassB = bodyB.m_invMass;
      pc.localCenterA.Copy(bodyA.m_sweep.localCenter);
      pc.localCenterB.Copy(bodyB.m_sweep.localCenter);
      pc.invIA = bodyA.m_invI;
      pc.invIB = bodyB.m_invI;
      pc.localNormal.Copy(manifold.localNormal);
      pc.localPoint.Copy(manifold.localPoint);
      pc.pointCount = pointCount;
      pc.radiusA = radiusA;
      pc.radiusB = radiusB;
      pc.type = manifold.type;

      for (let j: number = 0; j < pointCount; ++j) {
        const cp: b2ManifoldPoint = manifold.points[j];
        const vcp: b2VelocityConstraintPoint = vc.points[j];

        if (this.m_step.warmStarting) {
          vcp.normalImpulse = this.m_step.dtRatio * cp.normalImpulse;
          vcp.tangentImpulse = this.m_step.dtRatio * cp.tangentImpulse;
        } else {
          vcp.normalImpulse = 0;
          vcp.tangentImpulse = 0;
        }

        vcp.rA.SetZero();
        vcp.rB.SetZero();
        vcp.normalMass = 0;
        vcp.tangentMass = 0;
        vcp.velocityBias = 0;

        pc.localPoints[j].Copy(cp.localPoint);
      }
    }

    return this;
  }

  private static InitializeVelocityConstraints_s_xfA = new b2Transform();
  private static InitializeVelocityConstraints_s_xfB = new b2Transform();
  private static InitializeVelocityConstraints_s_worldManifold = new b2WorldManifold();
  public InitializeVelocityConstraints(): void {
    const xfA: b2Transform = b2ContactSolver.InitializeVelocityConstraints_s_xfA;
    const xfB: b2Transform = b2ContactSolver.InitializeVelocityConstraints_s_xfB;
    const worldManifold: b2WorldManifold = b2ContactSolver.InitializeVelocityConstraints_s_worldManifold;

    const k_maxConditionNumber: number = 1000;

    for (let i: number = 0; i < this.m_count; ++i) {
      const vc: b2ContactVelocityConstraint = this.m_velocityConstraints[i];
      const pc: b2ContactPositionConstraint = this.m_positionConstraints[i];

      const radiusA: number = pc.radiusA;
      const radiusB: number = pc.radiusB;
      const manifold: b2Manifold = this.m_contacts[vc.contactIndex].GetManifold();

      const indexA: number = vc.indexA;
      const indexB: number = vc.indexB;

      const mA: number = vc.invMassA;
      const mB: number = vc.invMassB;
      const iA: number = vc.invIA;
      const iB: number = vc.invIB;
      const localCenterA: b2Vec2 = pc.localCenterA;
      const localCenterB: b2Vec2 = pc.localCenterB;

      const cA: b2Vec2 = this.m_positions[indexA].c;
      const aA: number = this.m_positions[indexA].a;
      const vA: b2Vec2 = this.m_velocities[indexA].v;
      const wA: number = this.m_velocities[indexA].w;

      const cB: b2Vec2 = this.m_positions[indexB].c;
      const aB: number = this.m_positions[indexB].a;
      const vB: b2Vec2 = this.m_velocities[indexB].v;
      const wB: number = this.m_velocities[indexB].w;

      ///b2Assert(manifold.pointCount > 0);

      xfA.q.SetAngle(aA);
      xfB.q.SetAngle(aB);
      b2Vec2.SubVV(cA, b2Rot.MulRV(xfA.q, localCenterA, b2Vec2.s_t0), xfA.p);
      b2Vec2.SubVV(cB, b2Rot.MulRV(xfB.q, localCenterB, b2Vec2.s_t0), xfB.p);

      worldManifold.Initialize(manifold, xfA, radiusA, xfB, radiusB);

      vc.normal.Copy(worldManifold.normal);
      b2Vec2.CrossVOne(vc.normal, vc.tangent); // compute from normal

      const pointCount: number = vc.pointCount;
      for (let j: number = 0; j < pointCount; ++j) {
        const vcp: b2VelocityConstraintPoint = vc.points[j];

        // vcp->rA = worldManifold.points[j] - cA;
        b2Vec2.SubVV(worldManifold.points[j], cA, vcp.rA);
        // vcp->rB = worldManifold.points[j] - cB;
        b2Vec2.SubVV(worldManifold.points[j], cB, vcp.rB);

        const rnA: number = b2Vec2.CrossVV(vcp.rA, vc.normal);
        const rnB: number = b2Vec2.CrossVV(vcp.rB, vc.normal);

        const kNormal: number = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

        vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;

        // b2Vec2 tangent = b2Cross(vc->normal, 1.0f);
        const tangent: b2Vec2 = vc.tangent; // precomputed from normal

        const rtA: number = b2Vec2.CrossVV(vcp.rA, tangent);
        const rtB: number = b2Vec2.CrossVV(vcp.rB, tangent);

        const kTangent: number = mA + mB + iA * rtA * rtA + iB * rtB * rtB;

        vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;

        // Setup a velocity bias for restitution.
        vcp.velocityBias = 0;
        // float32 vRel = b2Dot(vc->normal, vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA));
        const vRel: number = b2Vec2.DotVV(
          vc.normal,
          b2Vec2.SubVV(
            b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Vec2.s_t0),
            b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Vec2.s_t1),
            b2Vec2.s_t0));
        if (vRel < (-b2_velocityThreshold)) {
          vcp.velocityBias += (-vc.restitution * vRel);
        }
      }

      // If we have two points, then prepare the block solver.
      if (vc.pointCount === 2) {
        const vcp1: b2VelocityConstraintPoint = vc.points[0];
        const vcp2: b2VelocityConstraintPoint = vc.points[1];

        const rn1A: number = b2Vec2.CrossVV(vcp1.rA, vc.normal);
        const rn1B: number = b2Vec2.CrossVV(vcp1.rB, vc.normal);
        const rn2A: number = b2Vec2.CrossVV(vcp2.rA, vc.normal);
        const rn2B: number = b2Vec2.CrossVV(vcp2.rB, vc.normal);

        const k11: number = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
        const k22: number = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
        const k12: number = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;

        // Ensure a reasonable condition number.
        // float32 k_maxConditionNumber = 1000.0f;
        if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
          // K is safe to invert.
          vc.K.ex.Set(k11, k12);
          vc.K.ey.Set(k12, k22);
          vc.K.GetInverse(vc.normalMass);
        } else {
          // The constraints are redundant, just use one.
          // TODO_ERIN use deepest?
          vc.pointCount = 1;
        }
      }
    }
  }

  private static WarmStart_s_P = new b2Vec2();
  public WarmStart(): void {
    const P: b2Vec2 = b2ContactSolver.WarmStart_s_P;

    // Warm start.
    for (let i: number = 0; i < this.m_count; ++i) {
      const vc: b2ContactVelocityConstraint = this.m_velocityConstraints[i];

      const indexA: number = vc.indexA;
      const indexB: number = vc.indexB;
      const mA: number = vc.invMassA;
      const iA: number = vc.invIA;
      const mB: number = vc.invMassB;
      const iB: number = vc.invIB;
      const pointCount: number = vc.pointCount;

      const vA: b2Vec2 = this.m_velocities[indexA].v;
      let wA: number = this.m_velocities[indexA].w;
      const vB: b2Vec2 = this.m_velocities[indexB].v;
      let wB: number = this.m_velocities[indexB].w;

      const normal: b2Vec2 = vc.normal;
      // b2Vec2 tangent = b2Cross(normal, 1.0f);
      const tangent: b2Vec2 = vc.tangent; // precomputed from normal

      for (let j: number = 0; j < pointCount; ++j) {
        const vcp: b2VelocityConstraintPoint = vc.points[j];
        // b2Vec2 P = vcp->normalImpulse * normal + vcp->tangentImpulse * tangent;
        b2Vec2.AddVV(
          b2Vec2.MulSV(vcp.normalImpulse, normal, b2Vec2.s_t0),
          b2Vec2.MulSV(vcp.tangentImpulse, tangent, b2Vec2.s_t1),
          P);
        // wA -= iA * b2Cross(vcp->rA, P);
        wA -= iA * b2Vec2.CrossVV(vcp.rA, P);
        // vA -= mA * P;
        vA.SelfMulSub(mA, P);
        // wB += iB * b2Cross(vcp->rB, P);
        wB += iB * b2Vec2.CrossVV(vcp.rB, P);
        // vB += mB * P;
        vB.SelfMulAdd(mB, P);
      }

      // this.m_velocities[indexA].v = vA;
      this.m_velocities[indexA].w = wA;
      // this.m_velocities[indexB].v = vB;
      this.m_velocities[indexB].w = wB;
    }
  }

  private static SolveVelocityConstraints_s_dv = new b2Vec2();
  private static SolveVelocityConstraints_s_dv1 = new b2Vec2();
  private static SolveVelocityConstraints_s_dv2 = new b2Vec2();
  private static SolveVelocityConstraints_s_P = new b2Vec2();
  private static SolveVelocityConstraints_s_a = new b2Vec2();
  private static SolveVelocityConstraints_s_b = new b2Vec2();
  private static SolveVelocityConstraints_s_x = new b2Vec2();
  private static SolveVelocityConstraints_s_d = new b2Vec2();
  private static SolveVelocityConstraints_s_P1 = new b2Vec2();
  private static SolveVelocityConstraints_s_P2 = new b2Vec2();
  private static SolveVelocityConstraints_s_P1P2 = new b2Vec2();
  public SolveVelocityConstraints(): void {
    const dv: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_dv;
    const dv1: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_dv1;
    const dv2: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_dv2;
    const P: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_P;
    const a: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_a;
    const b: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_b;
    const x: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_x;
    const d: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_d;
    const P1: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_P1;
    const P2: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_P2;
    const P1P2: b2Vec2 = b2ContactSolver.SolveVelocityConstraints_s_P1P2;

    for (let i: number = 0; i < this.m_count; ++i) {
      const vc: b2ContactVelocityConstraint = this.m_velocityConstraints[i];

      const indexA: number = vc.indexA;
      const indexB: number = vc.indexB;
      const mA: number = vc.invMassA;
      const iA: number = vc.invIA;
      const mB: number = vc.invMassB;
      const iB: number = vc.invIB;
      const pointCount: number = vc.pointCount;

      const vA: b2Vec2 = this.m_velocities[indexA].v;
      let wA: number = this.m_velocities[indexA].w;
      const vB: b2Vec2 = this.m_velocities[indexB].v;
      let wB: number = this.m_velocities[indexB].w;

      // b2Vec2 normal = vc->normal;
      const normal: b2Vec2 = vc.normal;
      // b2Vec2 tangent = b2Cross(normal, 1.0f);
      const tangent: b2Vec2 = vc.tangent; // precomputed from normal
      const friction: number = vc.friction;

      ///b2Assert(pointCount === 1 || pointCount === 2);

      // Solve tangent constraints first because non-penetration is more important
      // than friction.
      for (let j: number = 0; j < pointCount; ++j) {
        const vcp: b2VelocityConstraintPoint = vc.points[j];

        // Relative velocity at contact
        // b2Vec2 dv = vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA);
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Vec2.s_t1),
          dv);

        // Compute tangent force
        // float32 vt = b2Dot(dv, tangent) - vc->tangentSpeed;
        const vt: number = b2Vec2.DotVV(dv, tangent) - vc.tangentSpeed;
        let lambda: number = vcp.tangentMass * (-vt);

        // b2Clamp the accumulated force
        const maxFriction: number = friction * vcp.normalImpulse;
        const newImpulse: number = b2Clamp(vcp.tangentImpulse + lambda, (-maxFriction), maxFriction);
        lambda = newImpulse - vcp.tangentImpulse;
        vcp.tangentImpulse = newImpulse;

        // Apply contact impulse
        // b2Vec2 P = lambda * tangent;
        b2Vec2.MulSV(lambda, tangent, P);

        // vA -= mA * P;
        vA.SelfMulSub(mA, P);
        // wA -= iA * b2Cross(vcp->rA, P);
        wA -= iA * b2Vec2.CrossVV(vcp.rA, P);

        // vB += mB * P;
        vB.SelfMulAdd(mB, P);
        // wB += iB * b2Cross(vcp->rB, P);
        wB += iB * b2Vec2.CrossVV(vcp.rB, P);
      }

      // Solve normal constraints
      if (vc.pointCount === 1) {
        const vcp: b2VelocityConstraintPoint = vc.points[0];

        // Relative velocity at contact
        // b2Vec2 dv = vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA);
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Vec2.s_t1),
          dv);

        // Compute normal impulse
        // float32 vn = b2Dot(dv, normal);
        const vn: number = b2Vec2.DotVV(dv, normal);
        let lambda: number = (-vcp.normalMass * (vn - vcp.velocityBias));

        // b2Clamp the accumulated impulse
        // float32 newImpulse = b2Max(vcp->normalImpulse + lambda, 0.0f);
        const newImpulse: number = b2Max(vcp.normalImpulse + lambda, 0);
        lambda = newImpulse - vcp.normalImpulse;
        vcp.normalImpulse = newImpulse;

        // Apply contact impulse
        // b2Vec2 P = lambda * normal;
        b2Vec2.MulSV(lambda, normal, P);
        // vA -= mA * P;
        vA.SelfMulSub(mA, P);
        // wA -= iA * b2Cross(vcp->rA, P);
        wA -= iA * b2Vec2.CrossVV(vcp.rA, P);

        // vB += mB * P;
        vB.SelfMulAdd(mB, P);
        // wB += iB * b2Cross(vcp->rB, P);
        wB += iB * b2Vec2.CrossVV(vcp.rB, P);
      } else {
        // Block solver developed in collaboration with Dirk Gregorius (back in 01/07 on Box2D_Lite).
        // Build the mini LCP for this contact patch
        //
        // vn = A * x + b, vn >= 0, , vn >= 0, x >= 0 and vn_i * x_i = 0 with i = 1..2
        //
        // A = J * W * JT and J = ( -n, -r1 x n, n, r2 x n )
        // b = vn0 - velocityBias
        //
        // The system is solved using the "Total enumeration method" (s. Murty). The complementary constraint vn_i * x_i
        // implies that we must have in any solution either vn_i = 0 or x_i = 0. So for the 2D contact problem the cases
        // vn1 = 0 and vn2 = 0, x1 = 0 and x2 = 0, x1 = 0 and vn2 = 0, x2 = 0 and vn1 = 0 need to be tested. The first valid
        // solution that satisfies the problem is chosen.
        //
        // In order to account of the accumulated impulse 'a' (because of the iterative nature of the solver which only requires
        // that the accumulated impulse is clamped and not the incremental impulse) we change the impulse variable (x_i).
        //
        // Substitute:
        //
        // x = a + d
        //
        // a := old total impulse
        // x := new total impulse
        // d := incremental impulse
        //
        // For the current iteration we extend the formula for the incremental impulse
        // to compute the new total impulse:
        //
        // vn = A * d + b
        //    = A * (x - a) + b
        //    = A * x + b - A * a
        //    = A * x + b'
        // b' = b - A * a;

        const cp1: b2VelocityConstraintPoint = vc.points[0];
        const cp2: b2VelocityConstraintPoint = vc.points[1];

        // b2Vec2 a(cp1->normalImpulse, cp2->normalImpulse);
        a.Set(cp1.normalImpulse, cp2.normalImpulse);
        ///b2Assert(a.x >= 0 && a.y >= 0);

        // Relative velocity at contact
        // b2Vec2 dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, cp1.rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, cp1.rA, b2Vec2.s_t1),
          dv1);
        // b2Vec2 dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);
        b2Vec2.SubVV(
          b2Vec2.AddVCrossSV(vB, wB, cp2.rB, b2Vec2.s_t0),
          b2Vec2.AddVCrossSV(vA, wA, cp2.rA, b2Vec2.s_t1),
          dv2);

        // Compute normal velocity
        // float32 vn1 = b2Dot(dv1, normal);
        let vn1: number = b2Vec2.DotVV(dv1, normal);
        // float32 vn2 = b2Dot(dv2, normal);
        let vn2: number = b2Vec2.DotVV(dv2, normal);

        // b2Vec2 b;
        b.x = vn1 - cp1.velocityBias;
        b.y = vn2 - cp2.velocityBias;

        // Compute b'
        // b -= b2Mul(vc->K, a);
        b.SelfSub(b2Mat22.MulMV(vc.K, a, b2Vec2.s_t0));

        /*
        #if B2_DEBUG_SOLVER === 1
        const k_errorTol: number = 0.001;
        #endif
        */

        for (; ; ) {
          //
          // Case 1: vn = 0
          //
          // 0 = A * x + b'
          //
          // Solve for x:
          //
          // x = - inv(A) * b'
          //
          // b2Vec2 x = - b2Mul(vc->normalMass, b);
          b2Mat22.MulMV(vc.normalMass, b, x).SelfNeg();

          if (x.x >= 0 && x.y >= 0) {
            // Get the incremental impulse
            // b2Vec2 d = x - a;
            b2Vec2.SubVV(x, a, d);

            // Apply incremental impulse
            // b2Vec2 P1 = d.x * normal;
            b2Vec2.MulSV(d.x, normal, P1);
            // b2Vec2 P2 = d.y * normal;
            b2Vec2.MulSV(d.y, normal, P2);
            b2Vec2.AddVV(P1, P2, P1P2);
            // vA -= mA * (P1 + P2);
            vA.SelfMulSub(mA, P1P2);
            // wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
            wA -= iA * (b2Vec2.CrossVV(cp1.rA, P1) + b2Vec2.CrossVV(cp2.rA, P2));

            // vB += mB * (P1 + P2);
            vB.SelfMulAdd(mB, P1P2);
            // wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
            wB += iB * (b2Vec2.CrossVV(cp1.rB, P1) + b2Vec2.CrossVV(cp2.rB, P2));

            // Accumulate
            cp1.normalImpulse = x.x;
            cp2.normalImpulse = x.y;

            /*
            #if B2_DEBUG_SOLVER === 1
            // Postconditions
            dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);
            dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);

            // Compute normal velocity
            vn1 = b2Dot(dv1, normal);
            vn2 = b2Dot(dv2, normal);

            ///b2Assert(b2Abs(vn1 - cp1->velocityBias) < k_errorTol);
            ///b2Assert(b2Abs(vn2 - cp2->velocityBias) < k_errorTol);
            #endif
            */
            break;
          }

          //
          // Case 2: vn1 = 0 and x2 = 0
          //
          //   0 = a11 * x1 + a12 * 0 + b1'
          // vn2 = a21 * x1 + a22 * 0 + b2'
          //
          x.x = (-cp1.normalMass * b.x);
          x.y = 0;
          vn1 = 0;
          vn2 = vc.K.ex.y * x.x + b.y;

          if (x.x >= 0 && vn2 >= 0) {
            // Get the incremental impulse
            // b2Vec2 d = x - a;
            b2Vec2.SubVV(x, a, d);

            // Apply incremental impulse
            // b2Vec2 P1 = d.x * normal;
            b2Vec2.MulSV(d.x, normal, P1);
            // b2Vec2 P2 = d.y * normal;
            b2Vec2.MulSV(d.y, normal, P2);
            b2Vec2.AddVV(P1, P2, P1P2);
            // vA -= mA * (P1 + P2);
            vA.SelfMulSub(mA, P1P2);
            // wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
            wA -= iA * (b2Vec2.CrossVV(cp1.rA, P1) + b2Vec2.CrossVV(cp2.rA, P2));

            // vB += mB * (P1 + P2);
            vB.SelfMulAdd(mB, P1P2);
            // wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
            wB += iB * (b2Vec2.CrossVV(cp1.rB, P1) + b2Vec2.CrossVV(cp2.rB, P2));

            // Accumulate
            cp1.normalImpulse = x.x;
            cp2.normalImpulse = x.y;

            /*
            #if B2_DEBUG_SOLVER === 1
            // Postconditions
            dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);

            // Compute normal velocity
            vn1 = b2Dot(dv1, normal);

            ///b2Assert(b2Abs(vn1 - cp1->velocityBias) < k_errorTol);
            #endif
            */
            break;
          }


          //
          // Case 3: vn2 = 0 and x1 = 0
          //
          // vn1 = a11 * 0 + a12 * x2 + b1'
          //   0 = a21 * 0 + a22 * x2 + b2'
          //
          x.x = 0;
          x.y = (-cp2.normalMass * b.y);
          vn1 = vc.K.ey.x * x.y + b.x;
          vn2 = 0;

          if (x.y >= 0 && vn1 >= 0) {
            // Resubstitute for the incremental impulse
            // b2Vec2 d = x - a;
            b2Vec2.SubVV(x, a, d);

            // Apply incremental impulse
            // b2Vec2 P1 = d.x * normal;
            b2Vec2.MulSV(d.x, normal, P1);
            // b2Vec2 P2 = d.y * normal;
            b2Vec2.MulSV(d.y, normal, P2);
            b2Vec2.AddVV(P1, P2, P1P2);
            // vA -= mA * (P1 + P2);
            vA.SelfMulSub(mA, P1P2);
            // wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
            wA -= iA * (b2Vec2.CrossVV(cp1.rA, P1) + b2Vec2.CrossVV(cp2.rA, P2));

            // vB += mB * (P1 + P2);
            vB.SelfMulAdd(mB, P1P2);
            // wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
            wB += iB * (b2Vec2.CrossVV(cp1.rB, P1) + b2Vec2.CrossVV(cp2.rB, P2));

            // Accumulate
            cp1.normalImpulse = x.x;
            cp2.normalImpulse = x.y;

            /*
            #if B2_DEBUG_SOLVER === 1
            // Postconditions
            dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);

            // Compute normal velocity
            vn2 = b2Dot(dv2, normal);

            ///b2Assert(b2Abs(vn2 - cp2->velocityBias) < k_errorTol);
            #endif
            */
            break;
          }

          //
          // Case 4: x1 = 0 and x2 = 0
          //
          // vn1 = b1
          // vn2 = b2;
          x.x = 0;
          x.y = 0;
          vn1 = b.x;
          vn2 = b.y;

          if (vn1 >= 0 && vn2 >= 0) {
            // Resubstitute for the incremental impulse
            // b2Vec2 d = x - a;
            b2Vec2.SubVV(x, a, d);

            // Apply incremental impulse
            // b2Vec2 P1 = d.x * normal;
            b2Vec2.MulSV(d.x, normal, P1);
            // b2Vec2 P2 = d.y * normal;
            b2Vec2.MulSV(d.y, normal, P2);
            b2Vec2.AddVV(P1, P2, P1P2);
            // vA -= mA * (P1 + P2);
            vA.SelfMulSub(mA, P1P2);
            // wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
            wA -= iA * (b2Vec2.CrossVV(cp1.rA, P1) + b2Vec2.CrossVV(cp2.rA, P2));

            // vB += mB * (P1 + P2);
            vB.SelfMulAdd(mB, P1P2);
            // wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
            wB += iB * (b2Vec2.CrossVV(cp1.rB, P1) + b2Vec2.CrossVV(cp2.rB, P2));

            // Accumulate
            cp1.normalImpulse = x.x;
            cp2.normalImpulse = x.y;

            break;
          }

          // No solution, give up. This is hit sometimes, but it doesn't seem to matter.
          break;
        }
      }

      // this.m_velocities[indexA].v = vA;
      this.m_velocities[indexA].w = wA;
      // this.m_velocities[indexB].v = vB;
      this.m_velocities[indexB].w = wB;
    }
  }

  public StoreImpulses(): void {
    for (let i: number = 0; i < this.m_count; ++i) {
      let vc: b2ContactVelocityConstraint = this.m_velocityConstraints[i];
      let manifold: b2Manifold = this.m_contacts[vc.contactIndex].GetManifold();

      for (let j: number = 0; j < vc.pointCount; ++j) {
        manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
        manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
      }
    }
  }

  private static SolvePositionConstraints_s_xfA = new b2Transform();
  private static SolvePositionConstraints_s_xfB = new b2Transform();
  private static SolvePositionConstraints_s_psm = new b2PositionSolverManifold();
  private static SolvePositionConstraints_s_rA = new b2Vec2();
  private static SolvePositionConstraints_s_rB = new b2Vec2();
  private static SolvePositionConstraints_s_P = new b2Vec2();
  public SolvePositionConstraints(): boolean {
    const xfA: b2Transform = b2ContactSolver.SolvePositionConstraints_s_xfA;
    const xfB: b2Transform = b2ContactSolver.SolvePositionConstraints_s_xfB;
    const psm: b2PositionSolverManifold = b2ContactSolver.SolvePositionConstraints_s_psm;
    const rA: b2Vec2 = b2ContactSolver.SolvePositionConstraints_s_rA;
    const rB: b2Vec2 = b2ContactSolver.SolvePositionConstraints_s_rB;
    const P: b2Vec2 = b2ContactSolver.SolvePositionConstraints_s_P;

    let minSeparation: number = 0;

    for (let i: number = 0; i < this.m_count; ++i) {
      const pc: b2ContactPositionConstraint = this.m_positionConstraints[i];

      const indexA: number = pc.indexA;
      const indexB: number = pc.indexB;
      const localCenterA: b2Vec2 = pc.localCenterA;
      const mA: number = pc.invMassA;
      const iA: number = pc.invIA;
      const localCenterB: b2Vec2 = pc.localCenterB;
      const mB: number = pc.invMassB;
      const iB: number = pc.invIB;
      const pointCount: number = pc.pointCount;

      const cA: b2Vec2 = this.m_positions[indexA].c;
      let aA: number = this.m_positions[indexA].a;

      const cB: b2Vec2 = this.m_positions[indexB].c;
      let aB: number = this.m_positions[indexB].a;

      // Solve normal constraints
      for (let j: number = 0; j < pointCount; ++j) {
        xfA.q.SetAngle(aA);
        xfB.q.SetAngle(aB);
        b2Vec2.SubVV(cA, b2Rot.MulRV(xfA.q, localCenterA, b2Vec2.s_t0), xfA.p);
        b2Vec2.SubVV(cB, b2Rot.MulRV(xfB.q, localCenterB, b2Vec2.s_t0), xfB.p);

        psm.Initialize(pc, xfA, xfB, j);
        const normal: b2Vec2 = psm.normal;

        const point: b2Vec2 = psm.point;
        const separation: number = psm.separation;

        // b2Vec2 rA = point - cA;
        b2Vec2.SubVV(point, cA, rA);
        // b2Vec2 rB = point - cB;
        b2Vec2.SubVV(point, cB, rB);

        // Track max constraint error.
        minSeparation = b2Min(minSeparation, separation);

        // Prevent large corrections and allow slop.
        const C: number = b2Clamp(b2_baumgarte * (separation + b2_linearSlop), (-b2_maxLinearCorrection), 0);

        // Compute the effective mass.
        // float32 rnA = b2Cross(rA, normal);
        const rnA: number = b2Vec2.CrossVV(rA, normal);
        // float32 rnB = b2Cross(rB, normal);
        const rnB: number = b2Vec2.CrossVV(rB, normal);
        // float32 K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        const K: number = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

        // Compute normal impulse
        const impulse: number = K > 0 ? - C / K : 0;

        // b2Vec2 P = impulse * normal;
        b2Vec2.MulSV(impulse, normal, P);

        // cA -= mA * P;
        cA.SelfMulSub(mA, P);
        // aA -= iA * b2Cross(rA, P);
        aA -= iA * b2Vec2.CrossVV(rA, P);

        // cB += mB * P;
        cB.SelfMulAdd(mB, P);
        // aB += iB * b2Cross(rB, P);
        aB += iB * b2Vec2.CrossVV(rB, P);
      }

      // this.m_positions[indexA].c = cA;
      this.m_positions[indexA].a = aA;

      // this.m_positions[indexB].c = cB;
      this.m_positions[indexB].a = aB;
    }

    // We can't expect minSpeparation >= -b2_linearSlop because we don't
    // push the separation above -b2_linearSlop.
    return minSeparation > (-3 * b2_linearSlop);
  }

  private static SolveTOIPositionConstraints_s_xfA = new b2Transform();
  private static SolveTOIPositionConstraints_s_xfB = new b2Transform();
  private static SolveTOIPositionConstraints_s_psm = new b2PositionSolverManifold();
  private static SolveTOIPositionConstraints_s_rA = new b2Vec2();
  private static SolveTOIPositionConstraints_s_rB = new b2Vec2();
  private static SolveTOIPositionConstraints_s_P = new b2Vec2();
  public SolveTOIPositionConstraints(toiIndexA: number, toiIndexB: number): boolean {
    const xfA: b2Transform = b2ContactSolver.SolveTOIPositionConstraints_s_xfA;
    const xfB: b2Transform = b2ContactSolver.SolveTOIPositionConstraints_s_xfB;
    const psm: b2PositionSolverManifold = b2ContactSolver.SolveTOIPositionConstraints_s_psm;
    const rA: b2Vec2 = b2ContactSolver.SolveTOIPositionConstraints_s_rA;
    const rB: b2Vec2 = b2ContactSolver.SolveTOIPositionConstraints_s_rB;
    const P: b2Vec2 = b2ContactSolver.SolveTOIPositionConstraints_s_P;

    let minSeparation: number = 0;

    for (let i: number = 0; i < this.m_count; ++i) {
      const pc: b2ContactPositionConstraint = this.m_positionConstraints[i];

      const indexA: number = pc.indexA;
      const indexB: number = pc.indexB;
      const localCenterA: b2Vec2 = pc.localCenterA;
      const localCenterB: b2Vec2 = pc.localCenterB;
      const pointCount: number = pc.pointCount;

      let mA: number = 0;
      let iA: number = 0;
      if (indexA === toiIndexA || indexA === toiIndexB) {
        mA = pc.invMassA;
        iA = pc.invIA;
      }

      let mB: number = 0;
      let iB: number = 0;
      if (indexB === toiIndexA || indexB === toiIndexB) {
        mB = pc.invMassB;
        iB = pc.invIB;
      }

      const cA: b2Vec2 = this.m_positions[indexA].c;
      let aA: number = this.m_positions[indexA].a;

      const cB: b2Vec2 = this.m_positions[indexB].c;
      let aB: number = this.m_positions[indexB].a;

      // Solve normal constraints
      for (let j: number = 0; j < pointCount; ++j) {
        xfA.q.SetAngle(aA);
        xfB.q.SetAngle(aB);
        b2Vec2.SubVV(cA, b2Rot.MulRV(xfA.q, localCenterA, b2Vec2.s_t0), xfA.p);
        b2Vec2.SubVV(cB, b2Rot.MulRV(xfB.q, localCenterB, b2Vec2.s_t0), xfB.p);

        psm.Initialize(pc, xfA, xfB, j);
        const normal: b2Vec2 = psm.normal;

        const point: b2Vec2 = psm.point;
        const separation: number = psm.separation;

        // b2Vec2 rA = point - cA;
        b2Vec2.SubVV(point, cA, rA);
        // b2Vec2 rB = point - cB;
        b2Vec2.SubVV(point, cB, rB);

        // Track max constraint error.
        minSeparation = b2Min(minSeparation, separation);

        // Prevent large corrections and allow slop.
        const C: number = b2Clamp(b2_toiBaumgarte * (separation + b2_linearSlop), (-b2_maxLinearCorrection), 0);

        // Compute the effective mass.
        // float32 rnA = b2Cross(rA, normal);
        const rnA: number = b2Vec2.CrossVV(rA, normal);
        // float32 rnB = b2Cross(rB, normal);
        const rnB: number = b2Vec2.CrossVV(rB, normal);
        // float32 K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        const K: number = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

        // Compute normal impulse
        const impulse: number = K > 0 ? - C / K : 0;

        // b2Vec2 P = impulse * normal;
        b2Vec2.MulSV(impulse, normal, P);

        // cA -= mA * P;
        cA.SelfMulSub(mA, P);
        // aA -= iA * b2Cross(rA, P);
        aA -= iA * b2Vec2.CrossVV(rA, P);

        // cB += mB * P;
        cB.SelfMulAdd(mB, P);
        // aB += iB * b2Cross(rB, P);
        aB += iB * b2Vec2.CrossVV(rB, P);
      }

      // this.m_positions[indexA].c = cA;
      this.m_positions[indexA].a = aA;

      // this.m_positions[indexB].c = cB;
      this.m_positions[indexB].a = aB;
    }

    // We can't expect minSpeparation >= -b2_linearSlop because we don't
    // push the separation above -b2_linearSlop.
    return minSeparation >= -1.5 * b2_linearSlop;
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

///#if B2_ENABLE_PARTICLE

/*
 * Copyright (c) 2013 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

///#if B2_ENABLE_PARTICLE


/*
 * Copyright (c) 2013 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

///#if B2_ENABLE_PARTICLE


/**
 * The particle type. Can be combined with the | operator.
 */
export const enum b2ParticleFlag {
  /// Water particle.
  b2_waterParticle = 0,
  /// Removed after next simulation step.
  b2_zombieParticle = 1 << 1,
  /// Zero velocity.
  b2_wallParticle = 1 << 2,
  /// With restitution from stretching.
  b2_springParticle = 1 << 3,
  /// With restitution from deformation.
  b2_elasticParticle = 1 << 4,
  /// With viscosity.
  b2_viscousParticle = 1 << 5,
  /// Without isotropic pressure.
  b2_powderParticle = 1 << 6,
  /// With surface tension.
  b2_tensileParticle = 1 << 7,
  /// Mix color between contacting particles.
  b2_colorMixingParticle = 1 << 8,
  /// Call b2DestructionListener on destruction.
  b2_destructionListenerParticle = 1 << 9,
  /// Prevents other particles from leaking.
  b2_barrierParticle = 1 << 10,
  /// Less compressibility.
  b2_staticPressureParticle = 1 << 11,
  /// Makes pairs or triads with other particles.
  b2_reactiveParticle = 1 << 12,
  /// With high repulsive force.
  b2_repulsiveParticle = 1 << 13,
  /// Call b2ContactListener when this particle is about to interact with
  /// a rigid body or stops interacting with a rigid body.
  /// This results in an expensive operation compared to using
  /// b2_fixtureContactFilterParticle to detect collisions between
  /// particles.
  b2_fixtureContactListenerParticle = 1 << 14,
  /// Call b2ContactListener when this particle is about to interact with
  /// another particle or stops interacting with another particle.
  /// This results in an expensive operation compared to using
  /// b2_particleContactFilterParticle to detect collisions between
  /// particles.
  b2_particleContactListenerParticle = 1 << 15,
  /// Call b2ContactFilter when this particle interacts with rigid bodies.
  b2_fixtureContactFilterParticle = 1 << 16,
  /// Call b2ContactFilter when this particle interacts with other
  /// particles.
  b2_particleContactFilterParticle = 1 << 17
}

export class b2ParticleDef {
  flags: b2ParticleFlag = 0;
  position: b2Vec2 = new b2Vec2();
  velocity: b2Vec2 = new b2Vec2();
  color: b2Color = new b2Color();
  lifetime: number = 0.0;
  userData: any = null;
  group: b2ParticleGroup = null;
}

export function b2CalculateParticleIterations(gravity: number, radius: number, timeStep: number): number {
  // In some situations you may want more particle iterations than this,
  // but to avoid excessive cycle cost, don't recommend more than this.
  const B2_MAX_RECOMMENDED_PARTICLE_ITERATIONS = 8;
  const B2_RADIUS_THRESHOLD = 0.01;
  const iterations = Math.ceil(Math.sqrt(gravity / (B2_RADIUS_THRESHOLD * radius)) * timeStep);
  return b2Clamp(iterations, 1, B2_MAX_RECOMMENDED_PARTICLE_ITERATIONS);
}

export class b2ParticleHandle {
  public m_index: number = b2_invalidParticleIndex;
  public GetIndex(): number { return this.m_index; }
  public SetIndex(index: number): void { this.m_index = index; }
}

///#endif

/*
 * Copyright (c) 2013 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

///#if B2_ENABLE_PARTICLE


/*
 * Copyright (c) 2013 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

///#if B2_ENABLE_PARTICLE


/*
 * Copyright (c) 2013 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

///#if B2_ENABLE_PARTICLE



export class b2StackQueue<T> {
  m_buffer: T[];
  m_front: number = 0;
  m_back: number = 0;
  m_capacity: number = 0;
  constructor(capacity: number) {
    this.m_buffer = b2MakeArray(capacity, function(index) { return null; });
    ///this.m_end = capacity; // TODO: this was wrong!
    this.m_capacity = capacity;
  }
  Push(item: T): void {
    if (this.m_back >= this.m_capacity) {
      for (let i = this.m_front; i < this.m_back; i++) {
        this.m_buffer[i - this.m_front] = this.m_buffer[i];
      }
      this.m_back -= this.m_front;
      this.m_front = 0;
      if (this.m_back >= this.m_capacity) {
        if (this.m_capacity > 0) {
          this.m_buffer.concat(b2MakeArray(this.m_capacity, function(index) { return null; }));
          this.m_capacity *= 2;
        } else {
          this.m_buffer.concat(b2MakeArray(1, function(index) { return null; }));
          this.m_capacity = 1;
        }
        ///m_buffer = (T*) m_allocator->Reallocate(m_buffer, sizeof(T) * m_capacity);
      }
    }
    this.m_buffer[this.m_back] = item;
    this.m_back++;
  }
  Pop(): void {
    b2Assert(this.m_front < this.m_back);
    delete this.m_buffer[this.m_front];
    this.m_front++;
  }
  Empty(): boolean {
    b2Assert(this.m_front <= this.m_back);
    return this.m_front === this.m_back;
  }
  Front(): T {
    return this.m_buffer[this.m_front];
  }
}

///#endif


/**
 * A field representing the nearest generator from each point.
 */
export class b2VoronoiDiagram {
  m_generatorBuffer: b2VoronoiDiagram.Generator[] = null;
  m_generatorCapacity = 0;
  m_generatorCount = 0;
  m_countX = 0;
  m_countY = 0;
  m_diagram: b2VoronoiDiagram.Generator[] = null;

  constructor(generatorCapacity: number) {
    this.m_generatorBuffer = b2MakeArray(generatorCapacity, function(index) {
      return new b2VoronoiDiagram.Generator();
    });
    this.m_generatorCapacity = generatorCapacity;
  }

  /**
   * Add a generator.
   *
   * @param center the position of the generator.
   * @param tag a tag used to identify the generator in callback functions.
   * @param necessary whether to callback for nodes associated with the generator.
   */
  AddGenerator(center: b2Vec2, tag: number, necessary: boolean): void {
    b2Assert(this.m_generatorCount < this.m_generatorCapacity);
    let g = this.m_generatorBuffer[this.m_generatorCount++];
    g.center.Copy(center);
    g.tag = tag;
    g.necessary = necessary;
  }

  /**
   * Generate the Voronoi diagram. It is rasterized with a given
   * interval in the same range as the necessary generators exist.
   *
   * @param radius the interval of the diagram.
   * @param margin margin for which the range of the diagram is extended.
   */
  Generate(radius: number, margin: number): void {
    b2Assert(this.m_diagram === null);
    let inverseRadius = 1 / radius;
    let lower = new b2Vec2(+b2_maxFloat, +b2_maxFloat);
    let upper = new b2Vec2(-b2_maxFloat, -b2_maxFloat);
    let necessary_count = 0;
    for (let k = 0; k < this.m_generatorCount; k++) {
      let g = this.m_generatorBuffer[k];
      if (g.necessary) {
        b2Vec2.MinV(lower, g.center, lower);
        b2Vec2.MaxV(upper, g.center, upper);
        ++necessary_count;
      }
    }
    if (necessary_count === 0) {
      ///debugger;
      this.m_countX = 0;
      this.m_countY = 0;
      return;
    }
    lower.x -= margin;
    lower.y -= margin;
    upper.x += margin;
    upper.y += margin;
    this.m_countX = 1 + Math.floor(inverseRadius * (upper.x - lower.x));
    this.m_countY = 1 + Math.floor(inverseRadius * (upper.y - lower.y));
    ///  m_diagram = (Generator**) m_allocator->Allocate(sizeof(Generator*) * m_countX * m_countY);
    ///  for (int32 i = 0; i < m_countX * m_countY; i++)
    ///  {
    ///    m_diagram[i] = NULL;
    ///  }
    this.m_diagram = b2MakeArray(this.m_countX * this.m_countY, function(index) { return null; });

    // (4 * m_countX * m_countY) is the queue capacity that is experimentally
    // known to be necessary and sufficient for general particle distributions.
    let queue = new b2StackQueue<b2VoronoiDiagram.Task>(4 * this.m_countX * this.m_countY);
    for (let k = 0; k < this.m_generatorCount; k++) {
      let g = this.m_generatorBuffer[k];
      ///  g.center = inverseRadius * (g.center - lower);
      g.center.SelfSub(lower).SelfMul(inverseRadius);
      let x = Math.floor(g.center.x);
      let y = Math.floor(g.center.y);
      if (x >= 0 && y >= 0 && x < this.m_countX && y < this.m_countY) {
        queue.Push(new b2VoronoiDiagram.Task(x, y, x + y * this.m_countX, g));
      }
    }
    while (!queue.Empty()) {
      let task = queue.Front();
      let x = task.m_x;
      let y = task.m_y;
      let i = task.m_i;
      let g = task.m_generator;
      queue.Pop();
      if (!this.m_diagram[i]) {
        this.m_diagram[i] = g;
        if (x > 0) {
          queue.Push(new b2VoronoiDiagram.Task(x - 1, y, i - 1, g));
        }
        if (y > 0) {
          queue.Push(new b2VoronoiDiagram.Task(x, y - 1, i - this.m_countX, g));
        }
        if (x < this.m_countX - 1) {
          queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, g));
        }
        if (y < this.m_countY - 1) {
          queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, g));
        }
      }
    }
    for (let y = 0; y < this.m_countY; y++) {
      for (let x = 0; x < this.m_countX - 1; x++) {
        let i = x + y * this.m_countX;
        let a = this.m_diagram[i];
        let b = this.m_diagram[i + 1];
        if (a !== b) {
          queue.Push(new b2VoronoiDiagram.Task(x, y, i, b));
          queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, a));
        }
      }
    }
    for (let y = 0; y < this.m_countY - 1; y++) {
      for (let x = 0; x < this.m_countX; x++) {
        let i = x + y * this.m_countX;
        let a = this.m_diagram[i];
        let b = this.m_diagram[i + this.m_countX];
        if (a !== b) {
          queue.Push(new b2VoronoiDiagram.Task(x, y, i, b));
          queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, a));
        }
      }
    }
    while (!queue.Empty()) {
      let task = queue.Front();
      let x = task.m_x;
      let y = task.m_y;
      let i = task.m_i;
      let k = task.m_generator;
      queue.Pop();
      let a = this.m_diagram[i];
      let b = k;
      if (a !== b) {
        let ax = a.center.x - x;
        let ay = a.center.y - y;
        let bx = b.center.x - x;
        let by = b.center.y - y;
        let a2 = ax * ax + ay * ay;
        let b2 = bx * bx + by * by;
        if (a2 > b2) {
          this.m_diagram[i] = b;
          if (x > 0) {
            queue.Push(new b2VoronoiDiagram.Task(x - 1, y, i - 1, b));
          }
          if (y > 0) {
            queue.Push(new b2VoronoiDiagram.Task(x, y - 1, i - this.m_countX, b));
          }
          if (x < this.m_countX - 1) {
            queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, b));
          }
          if (y < this.m_countY - 1) {
            queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, b));
          }
        }
      }
    }
  }

  /**
   * Enumerate all nodes that contain at least one necessary
   * generator.
   */
  GetNodes(callback: b2VoronoiDiagram.NodeCallback): void {
    for (let y = 0; y < this.m_countY - 1; y++) {
      for (let x = 0; x < this.m_countX - 1; x++) {
        let i = x + y * this.m_countX;
        let a = this.m_diagram[i];
        let b = this.m_diagram[i + 1];
        let c = this.m_diagram[i + this.m_countX];
        let d = this.m_diagram[i + 1 + this.m_countX];
        if (b !== c) {
          if (a !== b && a !== c &&
            (a.necessary || b.necessary || c.necessary)) {
            callback(a.tag, b.tag, c.tag);
          }
          if (d !== b && d !== c &&
            (a.necessary || b.necessary || c.necessary)) {
            callback(b.tag, d.tag, c.tag);
          }
        }
      }
    }
  }
}

export namespace b2VoronoiDiagram {

/**
 * Callback used by GetNodes().
 *
 * Receive tags for generators associated with a node.
 */
export type NodeCallback = (a: number, b: number, c: number) => void;

export class Generator {
  center: b2Vec2 = new b2Vec2();
  tag: number = 0;
  necessary: boolean = false;
}

export class Task {
  m_x: number = 0;
  m_y: number = 0;
  m_i: number = 0;
  m_generator: b2VoronoiDiagram.Generator = null;
  constructor(x: number, y: number, i: number, g: b2VoronoiDiagram.Generator) {
    this.m_x = x;
    this.m_y = y;
    this.m_i = i;
    this.m_generator = g;
  }
}

} // namespace b2VoronoiDiagram

///#endif


function std_iter_swap(array: any[], a: number, b: number): void {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

function default_compare(a: number, b: number): boolean { return a < b; }

function std_sort(array: any[], first: number = 0, len: number = array.length - first, cmp: (a: any, b: any) => boolean = default_compare): any[] {
  let left = first;
  let stack: any[] = [];
  let pos = 0;

  for (; ; ) { /* outer loop */
    for (; left + 1 < len; len++) { /* sort left to len-1 */
      let pivot = array[left + Math.floor(Math.random() * (len - left))]; /* pick random pivot */
      stack[pos++] = len; /* sort right part later */
      for (let right = left - 1; ; ) { /* inner loop: partitioning */
        while (cmp(array[++right], pivot)) {} /* look for greater element */
        while (cmp(pivot, array[--len])) {} /* look for smaller element */
        if (right >= len)
          break; /* partition point found? */
        std_iter_swap(array, right, len); /* the only swap */
      } /* partitioned, continue left part */
    }
    if (pos === 0)
      break; /* stack empty? */
    left = len; /* left to right is sorted */
    len = stack[--pos]; /* get next range to sort */
  }

  return array;
};

function std_stable_sort(array: any[], first: number = 0, len: number = array.length - first, cmp: (a: any, b: any) => boolean = default_compare): any[] {
  return std_sort(array, first, len, cmp);
};

function std_remove_if(array: any[], predicate: (value: any) => boolean, length: number = array.length) {
  let l = 0;

  for (let c = 0; c < length; ++c) {
    // if we can be collapsed, keep l where it is.
    if (predicate(array[c]))
      continue;

    // this node can't be collapsed; push it back as far as we can.
    if (c === l) {
      ++l;
      continue; // quick exit if we're already in the right spot
    }

    // array[l++] = array[c];
    std_iter_swap(array, l++, c);
  }

  return l;
};

function std_lower_bound(array: any[], first: number, last: number, val: any, cmp: (a: any, b: any) => boolean = default_compare): number {
  let count = last - first;
  while (count > 0) {
    let step = Math.floor(count / 2);
    let it = first + step;

    if (cmp(array[it], val)) {
      first = ++it;
      count -= step + 1;
    } else
      count = step;
  }
  return first;
};

function std_upper_bound(array: any[], first: number, last: number, val: any, cmp: (a: any, b: any) => boolean = default_compare): number {
  let count = last - first;
  while (count > 0) {
    let step = Math.floor(count / 2);
    let it = first + step;

    if (!cmp(val, array[it])) {
      first = ++it;
      count -= step + 1;
    } else
      count = step;
  }
  return first;
};

function std_rotate(array: any[], first: number, n_first: number, last: number): void {
  let next = n_first;
  while (first !== next) {
    std_iter_swap(array, first++, next++);
    if (next === last)
      next = n_first;
    else if (first === n_first)
      n_first = next;
  }
}

function std_unique(array: any[], first: number, last: number, cmp: (a: any, b: any) => boolean): number {
  if (first === last) {
    return last;
  }
  let result = first;
  while (++first !== last) {
    if (!cmp(array[result], array[first])) {
      ///array[++result] = array[first];
      std_iter_swap(array, ++result, first);
    }
  }
  return ++result;
}

export class b2GrowableBuffer<T> {
  data: T[] = [];
  count: number = 0;
  capacity: number = 0;
  allocator: () => T;

  constructor(allocator: () => T) {
    this.allocator = allocator;
  }

  Append(): number {
    if (this.count >= this.capacity) {
      this.Grow();
    }
    return this.count++;
  }

  Reserve(newCapacity: number): void {
    if (this.capacity >= newCapacity)
      return;

    b2Assert(this.capacity === this.data.length);
    for (let i = this.capacity; i < newCapacity; ++i) {
      this.data[i] = this.allocator();
    }
    this.capacity = newCapacity;
  }

  Grow(): void {
    // Double the capacity.
    let newCapacity = this.capacity ? 2 * this.capacity : b2_minParticleSystemBufferCapacity;
    b2Assert(newCapacity > this.capacity);
    this.Reserve(newCapacity);
  }

  Free(): void {
    if (this.data.length === 0) {
      return;
    }

    this.data = [];
    this.capacity = 0;
    this.count = 0;
  }

  Shorten(newEnd: number): void {
    b2Assert(false);
  }

  Data(): T[] {
    return this.data;
  }

  GetCount(): number {
    return this.count;
  }

  SetCount(newCount: number): void {
    ///b2Assert(0 <= newCount && newCount <= this.capacity);
    this.count = newCount;
  }

  GetCapacity(): number {
    return this.capacity;
  }

  RemoveIf(pred: (t: T) => boolean): void {
    let count = 0;
    for (let i = 0; i < this.count; ++i) {
      if (!pred(this.data[i])) {
        count++;
      }
    }

    this.count = std_remove_if(this.data, pred, this.count);

    b2Assert(count === this.count);
  }

  Unique(pred: (a: T, b: T) => boolean): void {
    this.count = std_unique(this.data, 0, this.count, pred);
  }
}

export type b2ParticleIndex = number;
/// Callback class for AABB queries.
/// See b2World::Query
export class b2QueryCallback {
  /// Called for each fixture found in the query AABB.
  /// @return false to terminate the query.
  public ReportFixture(fixture: b2Fixture): boolean {
    return true;
  }

  ///#if B2_ENABLE_PARTICLE
  public ReportParticle(system: b2ParticleSystem, index: number): boolean {
    return false;
  }
  public ShouldQueryParticleSystem(system: b2ParticleSystem): boolean {
    return true;
  }
  ///#endif
}
export class b2FixtureParticleQueryCallback extends b2QueryCallback {
  m_system: b2ParticleSystem;
  constructor(system: b2ParticleSystem) {
    super();
    this.m_system = system;
  }
  ShouldQueryParticleSystem(system: b2ParticleSystem): boolean {
    // Skip reporting particles.
    return false;
  }
  ReportFixture(fixture: b2Fixture): boolean {
    if (fixture.IsSensor()) {
      return true;
    }
    const shape = fixture.GetShape();
    const childCount = shape.GetChildCount();
    for (let childIndex = 0; childIndex < childCount; childIndex++) {
      const aabb = fixture.GetAABB(childIndex);
      const enumerator = this.m_system.GetInsideBoundsEnumerator(aabb);
      let index: number;
      while ((index = enumerator.GetNext()) >= 0) {
        this.ReportFixtureAndParticle(fixture, childIndex, index);
      }
    }
    return true;
  }
  ReportParticle(system: b2ParticleSystem, index: number): boolean {
    return false;
  }
  ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, index: number): void {
    b2Assert(false); // pure virtual
  }
}

export class b2ParticleContact {
  indexA: number = 0;
  indexB: number = 0;
  weight: number = 0;
  normal: b2Vec2 = new b2Vec2();
  flags: b2ParticleFlag = 0;

  SetIndices(a: number, b: number): void {
    b2Assert(a <= b2_maxParticleIndex && b <= b2_maxParticleIndex);
    this.indexA = a;
    this.indexB = b;
  }

  SetWeight(w: number): void {
    this.weight = w;
  }

  SetNormal(n: b2Vec2): void {
    this.normal.Copy(n);
  }

  SetFlags(f: b2ParticleFlag): void {
    this.flags = f;
  }

  GetIndexA(): number {
    return this.indexA;
  }

  GetIndexB(): number {
    return this.indexB;
  }

  GetWeight(): number {
    return this.weight;
  }

  GetNormal(): b2Vec2 {
    return this.normal;
  }

  GetFlags(): b2ParticleFlag {
    return this.flags;
  }

  IsEqual(rhs: b2ParticleContact): boolean {
    return this.indexA === rhs.indexA && this.indexB === rhs.indexB && this.flags === rhs.flags && this.weight === rhs.weight && this.normal.x === rhs.normal.x && this.normal.y === rhs.normal.y;
  }

  IsNotEqual(rhs: b2ParticleContact): boolean {
    return !this.IsEqual(rhs);
  }

  ApproximatelyEqual(rhs: b2ParticleContact): boolean {
    const MAX_WEIGHT_DIFF = 0.01; // Weight 0 ~ 1, so about 1%
    const MAX_NORMAL_DIFF_SQ = 0.01 * 0.01; // Normal length = 1, so 1%
    return this.indexA === rhs.indexA && this.indexB === rhs.indexB && this.flags === rhs.flags && b2Abs(this.weight - rhs.weight) < MAX_WEIGHT_DIFF && b2Vec2.DistanceSquaredVV(this.normal, rhs.normal) < MAX_NORMAL_DIFF_SQ;
  }
}

export class b2ParticleBodyContact {
  index: number = 0; // Index of the particle making contact.
  body: b2Body = null; // The body making contact.
  fixture: b2Fixture = null; // The specific fixture making contact
  weight: number = 0.0; // Weight of the contact. A value between 0.0f and 1.0f.
  normal: b2Vec2 = new b2Vec2(); // The normalized direction from the particle to the body.
  mass: number = 0.0; // The effective mass used in calculating force.
}

export class b2ParticlePair {
  indexA: number = 0; // Indices of the respective particles making pair.
  indexB: number = 0;
  flags: b2ParticleFlag = 0; // The logical sum of the particle flags. See the b2ParticleFlag enum.
  strength: number = 0.0; // The strength of cohesion among the particles.
  distance: number = 0.0; // The initial distance of the particles.
}

export class b2ParticleTriad {
  indexA: number = 0; // Indices of the respective particles making triad.
  indexB: number = 0;
  indexC: number = 0;
  flags: b2ParticleFlag = 0; // The logical sum of the particle flags. See the b2ParticleFlag enum.
  strength: number = 0.0; // The strength of cohesion among the particles.
  pa: b2Vec2 = new b2Vec2(0.0, 0.0); // Values used for calculation.
  pb: b2Vec2 = new b2Vec2(0.0, 0.0);
  pc: b2Vec2 = new b2Vec2(0.0, 0.0);
  ka: number = 0.0;
  kb: number = 0.0;
  kc: number = 0.0;
  s: number = 0.0;
}

export class b2ParticleSystemDef {
  // Initialize physical coefficients to the maximum values that
  // maintain numerical stability.

  /**
   * Enable strict Particle/Body contact check.
   * See SetStrictContactCheck for details.
   */
  strictContactCheck: boolean = false;

  /**
   * Set the particle density.
   * See SetDensity for details.
   */
  density: number = 1.0;

  /**
   * Change the particle gravity scale. Adjusts the effect of the
   * global gravity vector on particles. Default value is 1.0f.
   */
  gravityScale: number = 1.0;

  /**
   * Particles behave as circles with this radius. In Box2D units.
   */
  radius: number = 1.0;

  /**
   * Set the maximum number of particles.
   * By default, there is no maximum. The particle buffers can
   * continue to grow while b2World's block allocator still has
   * memory.
   * See SetMaxParticleCount for details.
   */
  maxCount: number = 0;

  /**
   * Increases pressure in response to compression
   * Smaller values allow more compression
   */
  pressureStrength: number = 0.005;

  /**
   * Reduces velocity along the collision normal
   * Smaller value reduces less
   */
  dampingStrength: number = 1.0;

  /**
   * Restores shape of elastic particle groups
   * Larger values increase elastic particle velocity
   */
  elasticStrength: number = 0.25;

  /**
   * Restores length of spring particle groups
   * Larger values increase spring particle velocity
   */
  springStrength: number = 0.25;

  /**
   * Reduces relative velocity of viscous particles
   * Larger values slow down viscous particles more
   */
  viscousStrength: number = 0.25;

  /**
   * Produces pressure on tensile particles
   * 0~0.2. Larger values increase the amount of surface tension.
   */
  surfaceTensionPressureStrength: number = 0.2;

  /**
   * Smoothes outline of tensile particles
   * 0~0.2. Larger values result in rounder, smoother,
   * water-drop-like clusters of particles.
   */
  surfaceTensionNormalStrength: number = 0.2;

  /**
   * Produces additional pressure on repulsive particles
   * Larger values repulse more
   * Negative values mean attraction. The range where particles
   * behave stably is about -0.2 to 2.0.
   */
  repulsiveStrength: number = 1.0;

  /**
   * Produces repulsion between powder particles
   * Larger values repulse more
   */
  powderStrength: number = 0.5;

  /**
   * Pushes particles out of solid particle group
   * Larger values repulse more
   */
  ejectionStrength: number = 0.5;

  /**
   * Produces static pressure
   * Larger values increase the pressure on neighboring partilces
   * For a description of static pressure, see
   * http://en.wikipedia.org/wiki/Static_pressure#Static_pressure_in_fluid_dynamics
   */
  staticPressureStrength: number = 0.2;

  /**
   * Reduces instability in static pressure calculation
   * Larger values make stabilize static pressure with fewer
   * iterations
   */
  staticPressureRelaxation: number = 0.2;

  /**
   * Computes static pressure more precisely
   * See SetStaticPressureIterations for details
   */
  staticPressureIterations: number = 8;

  /**
   * Determines how fast colors are mixed
   * 1.0f ==> mixed immediately
   * 0.5f ==> mixed half way each simulation step (see
   * b2World::Step())
   */
  colorMixingStrength: number = 0.5;

  /**
   * Whether to destroy particles by age when no more particles
   * can be created.  See #b2ParticleSystem::SetDestructionByAge()
   * for more information.
   */
  destroyByAge: boolean = true;

  /**
   * Granularity of particle lifetimes in seconds.  By default
   * this is set to (1.0f / 60.0f) seconds.  b2ParticleSystem uses
   * a 32-bit signed value to track particle lifetimes so the
   * maximum lifetime of a particle is (2^32 - 1) / (1.0f /
   * lifetimeGranularity) seconds. With the value set to 1/60 the
   * maximum lifetime or age of a particle is 2.27 years.
   */
  lifetimeGranularity: number = 1.0 / 60.0;

  Copy(def: b2ParticleSystemDef): b2ParticleSystemDef {
    this.strictContactCheck = def.strictContactCheck;
    this.density = def.density;
    this.gravityScale = def.gravityScale;
    this.radius = def.radius;
    this.maxCount = def.maxCount;
    this.pressureStrength = def.pressureStrength;
    this.dampingStrength = def.dampingStrength;
    this.elasticStrength = def.elasticStrength;
    this.springStrength = def.springStrength;
    this.viscousStrength = def.viscousStrength;
    this.surfaceTensionPressureStrength = def.surfaceTensionPressureStrength;
    this.surfaceTensionNormalStrength = def.surfaceTensionNormalStrength;
    this.repulsiveStrength = def.repulsiveStrength;
    this.powderStrength = def.powderStrength;
    this.ejectionStrength = def.ejectionStrength;
    this.staticPressureStrength = def.staticPressureStrength;
    this.staticPressureRelaxation = def.staticPressureRelaxation;
    this.staticPressureIterations = def.staticPressureIterations;
    this.colorMixingStrength = def.colorMixingStrength;
    this.destroyByAge = def.destroyByAge;
    this.lifetimeGranularity = def.lifetimeGranularity;
    return this;
  }

  Clone(): b2ParticleSystemDef {
    return new b2ParticleSystemDef().Copy(this);
  }
}

export class b2ParticleSystem {
  m_paused: boolean = false;
  m_timestamp: number = 0;
  m_allParticleFlags: b2ParticleFlag = 0;
  m_needsUpdateAllParticleFlags: boolean = false;
  m_allGroupFlags: b2ParticleGroupFlag = 0;
  m_needsUpdateAllGroupFlags: boolean = false;
  m_hasForce: boolean = false;
  m_iterationIndex: number = 0;
  m_inverseDensity: number = 0.0;
  m_particleDiameter: number = 0.0;
  m_inverseDiameter: number = 0.0;
  m_squaredDiameter: number = 0.0;
  m_count: number = 0;
  m_internalAllocatedCapacity: number = 0;
  /**
   * Allocator for b2ParticleHandle instances.
   */
  ///m_handleAllocator: any = null;
  /**
   * Maps particle indicies to handles.
   */
  m_handleIndexBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleHandle> = new b2ParticleSystem.UserOverridableBuffer<b2ParticleHandle>();
  m_flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag> = new b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>();
  m_positionBuffer: b2ParticleSystem.UserOverridableBuffer<b2Vec2> = new b2ParticleSystem.UserOverridableBuffer<b2Vec2>();
  m_velocityBuffer: b2ParticleSystem.UserOverridableBuffer<b2Vec2> = new b2ParticleSystem.UserOverridableBuffer<b2Vec2>();
  m_forceBuffer: b2Vec2[] = [];
  /**
   * this.m_weightBuffer is populated in ComputeWeight and used in
   * ComputeDepth(), SolveStaticPressure() and SolvePressure().
   */
  m_weightBuffer: number[] = [];
  /**
   * When any particles have the flag b2_staticPressureParticle,
   * this.m_staticPressureBuffer is first allocated and used in
   * SolveStaticPressure() and SolvePressure().  It will be
   * reallocated on subsequent CreateParticle() calls.
   */
  m_staticPressureBuffer: number[] = [];
  /**
   * this.m_accumulationBuffer is used in many functions as a temporary
   * buffer for scalar values.
   */
  m_accumulationBuffer: number[] = [];
  /**
   * When any particles have the flag b2_tensileParticle,
   * this.m_accumulation2Buffer is first allocated and used in
   * SolveTensile() as a temporary buffer for vector values.  It
   * will be reallocated on subsequent CreateParticle() calls.
   */
  m_accumulation2Buffer: b2Vec2[] = [];
  /**
   * When any particle groups have the flag b2_solidParticleGroup,
   * this.m_depthBuffer is first allocated and populated in
   * ComputeDepth() and used in SolveSolid(). It will be
   * reallocated on subsequent CreateParticle() calls.
   */
  m_depthBuffer: number[] = [];
  m_colorBuffer: b2ParticleSystem.UserOverridableBuffer<b2Color> = new b2ParticleSystem.UserOverridableBuffer<b2Color>();
  m_groupBuffer: b2ParticleGroup[] = [];
  m_userDataBuffer: b2ParticleSystem.UserOverridableBuffer<any> = new b2ParticleSystem.UserOverridableBuffer();
  /**
   * Stuck particle detection parameters and record keeping
   */
  m_stuckThreshold: number = 0;
  m_lastBodyContactStepBuffer: b2ParticleSystem.UserOverridableBuffer<number> = new b2ParticleSystem.UserOverridableBuffer<number>();
  m_bodyContactCountBuffer: b2ParticleSystem.UserOverridableBuffer<number> = new b2ParticleSystem.UserOverridableBuffer<number>();
  m_consecutiveContactStepsBuffer: b2ParticleSystem.UserOverridableBuffer<number> = new b2ParticleSystem.UserOverridableBuffer<number>();
  m_stuckParticleBuffer: b2GrowableBuffer<number> = new b2GrowableBuffer<number>(function() { return 0; });
  m_proxyBuffer: b2GrowableBuffer<b2ParticleSystem.Proxy> = new b2GrowableBuffer<b2ParticleSystem.Proxy>(function() { return new b2ParticleSystem.Proxy(); });
  m_contactBuffer: b2GrowableBuffer<b2ParticleContact> = new b2GrowableBuffer<b2ParticleContact>(function() { return new b2ParticleContact(); });
  m_bodyContactBuffer: b2GrowableBuffer<b2ParticleBodyContact> = new b2GrowableBuffer<b2ParticleBodyContact>(function() { return new b2ParticleBodyContact(); });
  m_pairBuffer: b2GrowableBuffer<b2ParticlePair> = new b2GrowableBuffer<b2ParticlePair>(function() { return new b2ParticlePair(); });
  m_triadBuffer: b2GrowableBuffer<b2ParticleTriad> = new b2GrowableBuffer<b2ParticleTriad>(function() { return new b2ParticleTriad(); });
  /**
   * Time each particle should be destroyed relative to the last
   * time this.m_timeElapsed was initialized.  Each unit of time
   * corresponds to b2ParticleSystemDef::lifetimeGranularity
   * seconds.
   */
  m_expirationTimeBuffer: b2ParticleSystem.UserOverridableBuffer<number> = new b2ParticleSystem.UserOverridableBuffer<number>();
  /**
   * List of particle indices sorted by expiration time.
   */
  m_indexByExpirationTimeBuffer: b2ParticleSystem.UserOverridableBuffer<number> = new b2ParticleSystem.UserOverridableBuffer<number>();
  /**
   * Time elapsed in 32:32 fixed point.  Each non-fractional unit
   * of time corresponds to
   * b2ParticleSystemDef::lifetimeGranularity seconds.
   */
  m_timeElapsed: number = 0;
  /**
   * Whether the expiration time buffer has been modified and
   * needs to be resorted.
   */
  m_expirationTimeBufferRequiresSorting: boolean = false;
  m_groupCount: number = 0;
  m_groupList: b2ParticleGroup = null;
  m_def: b2ParticleSystemDef = new b2ParticleSystemDef();
  m_world: b2World = null;
  m_prev: b2ParticleSystem = null;
  m_next: b2ParticleSystem = null;

  static xTruncBits: number = 12;
  static yTruncBits: number = 12;
  static tagBits: number = 8 * 4; // 8u * sizeof(uint32);
  static yOffset: number = 1 << (b2ParticleSystem.yTruncBits - 1);
  static yShift: number = b2ParticleSystem.tagBits - b2ParticleSystem.yTruncBits;
  static xShift: number = b2ParticleSystem.tagBits - b2ParticleSystem.yTruncBits - b2ParticleSystem.xTruncBits;
  static xScale: number = 1 << b2ParticleSystem.xShift;
  static xOffset: number = b2ParticleSystem.xScale * (1 << (b2ParticleSystem.xTruncBits - 1));
  static yMask: number = ((1 << b2ParticleSystem.yTruncBits) - 1) << b2ParticleSystem.yShift;
  static xMask: number = ~b2ParticleSystem.yMask;

  static computeTag(x: number, y: number): number {
    ///return ((uint32)(y + yOffset) << yShift) + (uint32)(xScale * x + xOffset);
    return ((((y + b2ParticleSystem.yOffset) >>> 0) << b2ParticleSystem.yShift) + ((b2ParticleSystem.xScale * x + b2ParticleSystem.xOffset) >>> 0)) >>> 0;
  }

  static computeRelativeTag(tag: number, x: number, y: number): number {
    ///return tag + (y << yShift) + (x << xShift);
    return (tag + (y << b2ParticleSystem.yShift) + (x << b2ParticleSystem.xShift)) >>> 0;
  }

  constructor(def: b2ParticleSystemDef, world: b2World) {
    this.SetStrictContactCheck(def.strictContactCheck);
    this.SetDensity(def.density);
    this.SetGravityScale(def.gravityScale);
    this.SetRadius(def.radius);
    this.SetMaxParticleCount(def.maxCount);
    b2Assert(def.lifetimeGranularity > 0.0);
    this.m_def = def.Clone();
    this.m_world = world;
    this.SetDestructionByAge(this.m_def.destroyByAge);
  }

  Drop(): void {
    while (this.m_groupList) {
      this.DestroyParticleGroup(this.m_groupList);
    }

    this.FreeUserOverridableBuffer(this.m_handleIndexBuffer);
    this.FreeUserOverridableBuffer(this.m_flagsBuffer);
    this.FreeUserOverridableBuffer(this.m_lastBodyContactStepBuffer);
    this.FreeUserOverridableBuffer(this.m_bodyContactCountBuffer);
    this.FreeUserOverridableBuffer(this.m_consecutiveContactStepsBuffer);
    this.FreeUserOverridableBuffer(this.m_positionBuffer);
    this.FreeUserOverridableBuffer(this.m_velocityBuffer);
    this.FreeUserOverridableBuffer(this.m_colorBuffer);
    this.FreeUserOverridableBuffer(this.m_userDataBuffer);
    this.FreeUserOverridableBuffer(this.m_expirationTimeBuffer);
    this.FreeUserOverridableBuffer(this.m_indexByExpirationTimeBuffer);
    this.FreeBuffer(this.m_forceBuffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_weightBuffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_staticPressureBuffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_accumulationBuffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_accumulation2Buffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_depthBuffer, this.m_internalAllocatedCapacity);
    this.FreeBuffer(this.m_groupBuffer, this.m_internalAllocatedCapacity);
  }

  /**
   * Create a particle whose properties have been defined.
   *
   * No reference to the definition is retained.
   *
   * A simulation step must occur before it's possible to interact
   * with a newly created particle.  For example,
   * DestroyParticleInShape() will not destroy a particle until
   * b2World::Step() has been called.
   *
   * warning: This function is locked during callbacks.
   */
  CreateParticle(def: b2ParticleDef): number {
    b2Assert(this.m_world.IsLocked() === false);
    if (this.m_world.IsLocked()) {
      return 0;
    }

    if (this.m_count >= this.m_internalAllocatedCapacity) {
      // Double the particle capacity.
      let capacity = this.m_count ? 2 * this.m_count : b2_minParticleSystemBufferCapacity;
      this.ReallocateInternalAllocatedBuffers(capacity);
    }
    if (this.m_count >= this.m_internalAllocatedCapacity) {
      // If the oldest particle should be destroyed...
      if (this.m_def.destroyByAge) {
        this.DestroyOldestParticle(0, false);
        // Need to destroy this particle *now* so that it's possible to
        // create a new particle.
        this.SolveZombie();
      } else {
        return b2_invalidParticleIndex;
      }
    }
    let index = this.m_count++;
    this.m_flagsBuffer.data[index] = 0;
    if (this.m_lastBodyContactStepBuffer.data) {
      this.m_lastBodyContactStepBuffer.data[index] = 0;
    }
    if (this.m_bodyContactCountBuffer.data) {
      this.m_bodyContactCountBuffer.data[index] = 0;
    }
    if (this.m_consecutiveContactStepsBuffer.data) {
      this.m_consecutiveContactStepsBuffer.data[index] = 0;
    }
    this.m_positionBuffer.data[index] = (this.m_positionBuffer.data[index] || new b2Vec2()).Copy(def.position);
    this.m_velocityBuffer.data[index] = (this.m_velocityBuffer.data[index] || new b2Vec2()).Copy(def.velocity);
    this.m_weightBuffer[index] = 0;
    this.m_forceBuffer[index] = (this.m_forceBuffer[index] || new b2Vec2()).SetZero();
    if (this.m_staticPressureBuffer) {
      this.m_staticPressureBuffer[index] = 0;
    }
    if (this.m_depthBuffer) {
      this.m_depthBuffer[index] = 0;
    }
    if (this.m_colorBuffer.data || !def.color.IsZero()) {
      this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
      this.m_colorBuffer.data[index] = (this.m_colorBuffer.data[index] || new b2Color()).Copy(def.color);
    }
    if (this.m_userDataBuffer.data || def.userData) {
      this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data);
      this.m_userDataBuffer.data[index] = def.userData;
    }
    if (this.m_handleIndexBuffer.data) {
      this.m_handleIndexBuffer.data[index] = null;
    }
    ///Proxy& proxy = m_proxyBuffer.Append();
    let proxy = this.m_proxyBuffer.data[this.m_proxyBuffer.Append()];

    // If particle lifetimes are enabled or the lifetime is set in the particle
    // definition, initialize the lifetime.
    let finiteLifetime = def.lifetime > 0.0;
    if (this.m_expirationTimeBuffer.data || finiteLifetime) {
      this.SetParticleLifetime(index, finiteLifetime ? def.lifetime :
        this.ExpirationTimeToLifetime(-this.GetQuantizedTimeElapsed()));
      // Add a reference to the newly added particle to the end of the
      // queue.
      this.m_indexByExpirationTimeBuffer.data[index] = index;
    }

    proxy.index = index;
    let group = def.group;
    this.m_groupBuffer[index] = group;
    if (group) {
      if (group.m_firstIndex < group.m_lastIndex) {
        // Move particles in the group just before the new particle.
        this.RotateBuffer(group.m_firstIndex, group.m_lastIndex, index);
        b2Assert(group.m_lastIndex === index);
        // Update the index range of the group to contain the new particle.
        group.m_lastIndex = index + 1;
      } else {
        // If the group is empty, reset the index range to contain only the
        // new particle.
        group.m_firstIndex = index;
        group.m_lastIndex = index + 1;
      }
    }
    this.SetParticleFlags(index, def.flags);
    return index;
  }

  /**
   * Retrieve a handle to the particle at the specified index.
   *
   * Please see #b2ParticleHandle for why you might want a handle.
   */
  GetParticleHandleFromIndex(index: number): b2ParticleHandle {
    b2Assert(index >= 0 && index < this.GetParticleCount() && index !== b2_invalidParticleIndex);
    this.m_handleIndexBuffer.data = this.RequestBuffer(this.m_handleIndexBuffer.data);
    let handle = this.m_handleIndexBuffer.data[index];
    if (handle) {
      return handle;
    }
    // Create a handle.
    ///handle = m_handleAllocator.Allocate();
    handle = new b2ParticleHandle();
    b2Assert(handle !== null);
    handle.SetIndex(index);
    this.m_handleIndexBuffer.data[index] = handle;
    return handle;
  }

  /**
   * Destroy a particle.
   *
   * The particle is removed after the next simulation step (see
   * b2World::Step()).
   *
   * @param index Index of the particle to destroy.
   * @param callDestructionListener Whether to call the
   *      destruction listener just before the particle is
   *      destroyed.
   */
  DestroyParticle(index: number, callDestructionListener: boolean = false): void {
    let flags = b2ParticleFlag.b2_zombieParticle;
    if (callDestructionListener) {
      flags |= b2ParticleFlag.b2_destructionListenerParticle;
    }
    this.SetParticleFlags(index, this.m_flagsBuffer.data[index] | flags);
  }

  /**
   * Destroy the Nth oldest particle in the system.
   *
   * The particle is removed after the next b2World::Step().
   *
   * @param index Index of the Nth oldest particle to
   *      destroy, 0 will destroy the oldest particle in the
   *      system, 1 will destroy the next oldest particle etc.
   * @param callDestructionListener Whether to call the
   *      destruction listener just before the particle is
   *      destroyed.
   */
  DestroyOldestParticle(index: number, callDestructionListener: boolean = false): void {
    const particleCount = this.GetParticleCount();
    b2Assert(index >= 0 && index < particleCount);
    // Make sure particle lifetime tracking is enabled.
    b2Assert(this.m_indexByExpirationTimeBuffer.data !== null);
    // Destroy the oldest particle (preferring to destroy finite
    // lifetime particles first) to free a slot in the buffer.
    const oldestFiniteLifetimeParticle =
      this.m_indexByExpirationTimeBuffer.data[particleCount - (index + 1)];
    const oldestInfiniteLifetimeParticle =
      this.m_indexByExpirationTimeBuffer.data[index];
    this.DestroyParticle(
      this.m_expirationTimeBuffer.data[oldestFiniteLifetimeParticle] > 0.0 ?
      oldestFiniteLifetimeParticle : oldestInfiniteLifetimeParticle,
      callDestructionListener);
  }

  /**
   * Destroy particles inside a shape.
   *
   * warning: This function is locked during callbacks.
   *
   * In addition, this function immediately destroys particles in
   * the shape in constrast to DestroyParticle() which defers the
   * destruction until the next simulation step.
   *
   * @return Number of particles destroyed.
   * @param shape Shape which encloses particles
   *      that should be destroyed.
   * @param xf Transform applied to the shape.
   * @param callDestructionListener Whether to call the
   *      world b2DestructionListener for each particle
   *      destroyed.
   */
  DestroyParticlesInShape(shape: b2Shape, xf: b2Transform, callDestructionListener: boolean = false): number {
    const s_aabb = b2ParticleSystem.DestroyParticlesInShape_s_aabb;
    b2Assert(this.m_world.IsLocked() === false);
    if (this.m_world.IsLocked()) {
      return 0;
    }

    const callback = new b2ParticleSystem.DestroyParticlesInShapeCallback(this, shape, xf, callDestructionListener);

    const aabb = s_aabb;
    shape.ComputeAABB(aabb, xf, 0);
    this.m_world.QueryAABB(callback, aabb);
    return callback.Destroyed();
  }
  static DestroyParticlesInShape_s_aabb = new b2AABB();

  /**
   * Create a particle group whose properties have been defined.
   *
   * No reference to the definition is retained.
   *
   * warning: This function is locked during callbacks.
   */
  CreateParticleGroup(groupDef: b2ParticleGroupDef): b2ParticleGroup {
    let s_transform = b2ParticleSystem.CreateParticleGroup_s_transform;

    b2Assert(this.m_world.IsLocked() === false);
    if (this.m_world.IsLocked()) {
      return null;
    }

    let transform = s_transform;
    transform.SetPositionAngle(groupDef.position, groupDef.angle);
    let firstIndex = this.m_count;
    if (groupDef.shape) {
      this.CreateParticlesWithShapeForGroup(groupDef.shape, groupDef, transform);
    }
    if (groupDef.shapes) {
      this.CreateParticlesWithShapesForGroup(groupDef.shapes, groupDef.shapeCount, groupDef, transform);
    }
    if (groupDef.particleCount) {
      b2Assert(groupDef.positionData !== null);
      for (let i = 0; i < groupDef.particleCount; i++) {
        let p = groupDef.positionData[i];
        this.CreateParticleForGroup(groupDef, transform, p);
      }
    }
    let lastIndex = this.m_count;

    let group = new b2ParticleGroup();
    group.m_system = this;
    group.m_firstIndex = firstIndex;
    group.m_lastIndex = lastIndex;
    group.m_strength = groupDef.strength;
    group.m_userData = groupDef.userData;
    group.m_transform.Copy(transform);
    group.m_prev = null;
    group.m_next = this.m_groupList;
    if (this.m_groupList) {
      this.m_groupList.m_prev = group;
    }
    this.m_groupList = group;
    ++this.m_groupCount;
    for (let i = firstIndex; i < lastIndex; i++) {
      this.m_groupBuffer[i] = group;
    }
    this.SetGroupFlags(group, groupDef.groupFlags);

    // Create pairs and triads between particles in the group.
    let filter = new b2ParticleSystem.ConnectionFilter();
    this.UpdateContacts(true);
    this.UpdatePairsAndTriads(firstIndex, lastIndex, filter);

    if (groupDef.group) {
      this.JoinParticleGroups(groupDef.group, group);
      group = groupDef.group;
    }

    return group;
  }
  static CreateParticleGroup_s_transform = new b2Transform();

  /**
   * Join two particle groups.
   *
   * warning: This function is locked during callbacks.
   *
   * @param groupA the first group. Expands to encompass the second group.
   * @param groupB the second group. It is destroyed.
   */
  JoinParticleGroups(groupA: b2ParticleGroup, groupB: b2ParticleGroup): void {
    b2Assert(this.m_world.IsLocked() === false);
    if (this.m_world.IsLocked()) {
      return;
    }

    b2Assert(groupA !== groupB);
    this.RotateBuffer(groupB.m_firstIndex, groupB.m_lastIndex, this.m_count);
    b2Assert(groupB.m_lastIndex === this.m_count);
    this.RotateBuffer(groupA.m_firstIndex, groupA.m_lastIndex, groupB.m_firstIndex);
    b2Assert(groupA.m_lastIndex === groupB.m_firstIndex);

    // Create pairs and triads connecting groupA and groupB.
    let filter = new b2ParticleSystem.JoinParticleGroupsFilter(groupB.m_firstIndex);
    this.UpdateContacts(true);
    this.UpdatePairsAndTriads(groupA.m_firstIndex, groupB.m_lastIndex, filter);

    for (let i = groupB.m_firstIndex; i < groupB.m_lastIndex; i++) {
      this.m_groupBuffer[i] = groupA;
    }
    let groupFlags = groupA.m_groupFlags | groupB.m_groupFlags;
    this.SetGroupFlags(groupA, groupFlags);
    groupA.m_lastIndex = groupB.m_lastIndex;
    groupB.m_firstIndex = groupB.m_lastIndex;
    this.DestroyParticleGroup(groupB);
  }

  /**
   * Split particle group into multiple disconnected groups.
   *
   * warning: This function is locked during callbacks.
   *
   * @param group the group to be split.
   */
  SplitParticleGroup(group: b2ParticleGroup): void {
    this.UpdateContacts(true);
    let particleCount = group.GetParticleCount();
    // We create several linked lists. Each list represents a set of connected particles.
    ///ParticleListNode* nodeBuffer = (ParticleListNode*) m_world.m_stackAllocator.Allocate(sizeof(ParticleListNode) * particleCount);
    let nodeBuffer = b2MakeArray(particleCount, function(index) {
      return new b2ParticleSystem.ParticleListNode();
    });
    b2ParticleSystem.InitializeParticleLists(group, nodeBuffer);
    this.MergeParticleListsInContact(group, nodeBuffer);
    let survivingList = b2ParticleSystem.FindLongestParticleList(group, nodeBuffer);
    this.MergeZombieParticleListNodes(group, nodeBuffer, survivingList);
    this.CreateParticleGroupsFromParticleList(group, nodeBuffer, survivingList);
    this.UpdatePairsAndTriadsWithParticleList(group, nodeBuffer);
    ///this.m_world.m_stackAllocator.Free(nodeBuffer);
  }

  /**
   * Get the world particle group list. With the returned group,
   * use b2ParticleGroup::GetNext to get the next group in the
   * world list.
   *
   * A null group indicates the end of the list.
   *
   * @return the head of the world particle group list.
   */
  GetParticleGroupList(): b2ParticleGroup {
    return this.m_groupList;
  }

  /**
   * Get the number of particle groups.
   */
  GetParticleGroupCount(): number {
    return this.m_groupCount;
  }

  /**
   * Get the number of particles.
   */
  GetParticleCount(): number {
    return this.m_count;
  }

  /**
   * Get the maximum number of particles.
   */
  GetMaxParticleCount(): number {
    return this.m_def.maxCount;
  }

  /**
   * Set the maximum number of particles.
   *
   * A value of 0 means there is no maximum. The particle buffers
   * can continue to grow while b2World's block allocator still
   * has memory.
   *
   * Note: If you try to CreateParticle() with more than this
   * count, b2_invalidParticleIndex is returned unless
   * SetDestructionByAge() is used to enable the destruction of
   * the oldest particles in the system.
   */
  SetMaxParticleCount(count: number): void {
    b2Assert(this.m_count <= count);
    this.m_def.maxCount = count;
  }

  /**
   * Get all existing particle flags.
   */
  GetAllParticleFlags(): b2ParticleFlag {
    return this.m_allParticleFlags;
  }

  /**
   * Get all existing particle group flags.
   */
  GetAllGroupFlags(): b2ParticleGroupFlag {
    return this.m_allGroupFlags;
  }

  /**
   * Pause or unpause the particle system. When paused,
   * b2World::Step() skips over this particle system. All
   * b2ParticleSystem function calls still work.
   *
   * @param paused paused is true to pause, false to un-pause.
   */
  SetPaused(paused: boolean): void {
    this.m_paused = paused;
  }

  /**
   * Initially, true, then, the last value passed into
   * SetPaused().
   *
   * @return true if the particle system is being updated in b2World::Step().
   */
  GetPaused(): boolean {
    return this.m_paused;
  }

  /**
   * Change the particle density.
   *
   * Particle density affects the mass of the particles, which in
   * turn affects how the particles interact with b2Bodies. Note
   * that the density does not affect how the particles interact
   * with each other.
   */
  SetDensity(density: number): void {
    this.m_def.density = density;
    this.m_inverseDensity = 1 / this.m_def.density;
  }

  /**
   * Get the particle density.
   */
  GetDensity(): number {
    return this.m_def.density;
  }

  /**
   * Change the particle gravity scale. Adjusts the effect of the
   * global gravity vector on particles.
   */
  SetGravityScale(gravityScale: number): void {
    this.m_def.gravityScale = gravityScale;
  }


  /**
   * Get the particle gravity scale.
   */
  GetGravityScale(): number {
    return this.m_def.gravityScale;
  }

  /**
   * Damping is used to reduce the velocity of particles. The
   * damping parameter can be larger than 1.0f but the damping
   * effect becomes sensitive to the time step when the damping
   * parameter is large.
   */
  SetDamping(damping: number): void {
    this.m_def.dampingStrength = damping;
  }

  /**
   * Get damping for particles
   */
  GetDamping(): number {
    return this.m_def.dampingStrength;
  }

  /**
   * Change the number of iterations when calculating the static
   * pressure of particles. By default, 8 iterations. You can
   * reduce the number of iterations down to 1 in some situations,
   * but this may cause instabilities when many particles come
   * together. If you see particles popping away from each other
   * like popcorn, you may have to increase the number of
   * iterations.
   *
   * For a description of static pressure, see
   * http://en.wikipedia.org/wiki/Static_pressure#Static_pressure_in_fluid_dynamics
   */
  SetStaticPressureIterations(iterations: number): void {
    this.m_def.staticPressureIterations = iterations;
  }

  /**
   * Get the number of iterations for static pressure of
   * particles.
   */
  GetStaticPressureIterations(): number {
    return this.m_def.staticPressureIterations;
  }

  /**
   * Change the particle radius.
   *
   * You should set this only once, on world start.
   * If you change the radius during execution, existing particles
   * may explode, shrink, or behave unexpectedly.
   */
  SetRadius(radius: number): void {
    this.m_particleDiameter = 2 * radius;
    this.m_squaredDiameter = this.m_particleDiameter * this.m_particleDiameter;
    this.m_inverseDiameter = 1 / this.m_particleDiameter;
  }

  /**
   * Get the particle radius.
   */
  GetRadius(): number {
    return this.m_particleDiameter / 2;
  }

  /**
   * Get the position of each particle
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle positions array.
   */
  GetPositionBuffer(): b2Vec2[] {
    return this.m_positionBuffer.data;
  }

  /**
   * Get the velocity of each particle
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle velocities array.
   */
  GetVelocityBuffer(): b2Vec2[] {
    return this.m_velocityBuffer.data;
  }

  /**
   * Get the color of each particle
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle colors array.
   */
  GetColorBuffer(): b2Color[] {
    this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
    return this.m_colorBuffer.data;
  }

  /**
   * Get the particle-group of each particle.
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle group array.
   */
  GetGroupBuffer(): b2ParticleGroup[] {
    return this.m_groupBuffer;
  }

  /**
   * Get the weight of each particle
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle positions array.
   */
  GetWeightBuffer(): number[] {
    return this.m_weightBuffer;
  }

  /**
   * Get the user-specified data of each particle.
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle user-data array.
   */
  GetUserDataBuffer(): any[] {
    this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data);
    return this.m_userDataBuffer.data;
  }

  /**
   * Get the flags for each particle. See the b2ParticleFlag enum.
   *
   * Array is length GetParticleCount()
   *
   * @return the pointer to the head of the particle-flags array.
   */
  GetFlagsBuffer(): b2ParticleFlag[] {
    return this.m_flagsBuffer.data;
  }

  /**
   * Set flags for a particle. See the b2ParticleFlag enum.
   */
  SetParticleFlags(index: number, newFlags: b2ParticleFlag): void {
    let oldFlags = this.m_flagsBuffer.data[index];
    if (oldFlags & ~newFlags) {
      // If any flags might be removed
      this.m_needsUpdateAllParticleFlags = true;
    }
    if (~this.m_allParticleFlags & newFlags) {
      // If any flags were added
      if (newFlags & b2ParticleFlag.b2_tensileParticle) {
        this.m_accumulation2Buffer = this.RequestBuffer(this.m_accumulation2Buffer);
      }
      if (newFlags & b2ParticleFlag.b2_colorMixingParticle) {
        this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
      }
      this.m_allParticleFlags |= newFlags;
    }
    this.m_flagsBuffer.data[index] = newFlags;
  }

  /**
   * Get flags for a particle. See the b2ParticleFlag enum.
   */
  GetParticleFlags(index: number): b2ParticleFlag {
    return this.m_flagsBuffer.data[index];
  }

  /**
   * Set an external buffer for particle data.
   *
   * Normally, the b2World's block allocator is used for particle
   * data. However, sometimes you may have an OpenGL or Java
   * buffer for particle data. To avoid data duplication, you may
   * supply this external buffer.
   *
   * Note that, when b2World's block allocator is used, the
   * particle data buffers can grow as required. However, when
   * external buffers are used, the maximum number of particles is
   * clamped to the size of the smallest external buffer.
   *
   * @param buffer a pointer to a block of memory.
   * @param capacity the number of values in the block.
   */
  SetFlagsBuffer(buffer: b2ParticleFlag[], capacity: number): void {
    this.SetUserOverridableBuffer(this.m_flagsBuffer, buffer, capacity);
  }

  SetPositionBuffer(buffer: b2Vec2[], capacity: number): void {
    ///if (buffer instanceof Float32Array) {
    ///let array = [];
    ///for (let i = 0; i < capacity; ++i) {
    ///  array[i] = new b2Vec2(buffer.subarray(i * 2, i * 2 + 2));
    ///}
    ///this.SetUserOverridableBuffer(this.m_positionBuffer, array, capacity);
    ///} else {
      this.SetUserOverridableBuffer(this.m_positionBuffer, buffer, capacity);
    ///}
  }

  SetVelocityBuffer(buffer: b2Vec2[], capacity: number): void {
    ///if (buffer instanceof Float32Array) {
    ///let array = [];
    ///for (let i = 0; i < capacity; ++i) {
    ///  array[i] = new b2Vec2(buffer.subarray(i * 2, i * 2 + 2));
    ///}
    ///this.SetUserOverridableBuffer(this.m_velocityBuffer, array, capacity);
    ///} else {
      this.SetUserOverridableBuffer(this.m_velocityBuffer, buffer, capacity);
    ///}
  }

  SetColorBuffer(buffer: b2Color[], capacity: number): void {
    ///if (buffer instanceof Uint8Array) {
    ///let array: b2Color[] = [];
    ///for (let i = 0; i < capacity; ++i) {
    ///  array[i] = new b2Color(buffer.subarray(i * 4, i * 4 + 4));
    ///}
    ///this.SetUserOverridableBuffer(this.m_colorBuffer, array, capacity);
    ///} else {
      this.SetUserOverridableBuffer(this.m_colorBuffer, buffer, capacity);
    ///}
  }

  SetUserDataBuffer(buffer: any[], capacity: number): void {
    this.SetUserOverridableBuffer(this.m_userDataBuffer, buffer, capacity);
  }

  /**
   * Get contacts between particles
   * Contact data can be used for many reasons, for example to
   * trigger rendering or audio effects.
   */
  GetContacts(): b2ParticleContact[] {
    return this.m_contactBuffer.data;
  }

  GetContactCount(): number {
    return this.m_contactBuffer.count;
  }

  /**
   * Get contacts between particles and bodies
   *
   * Contact data can be used for many reasons, for example to
   * trigger rendering or audio effects.
   */
  GetBodyContacts(): b2ParticleBodyContact[] {
    return this.m_bodyContactBuffer.data;
  }

  GetBodyContactCount(): number {
    return this.m_bodyContactBuffer.count;
  }

  /**
   * Get array of particle pairs. The particles in a pair:
   *   (1) are contacting,
   *   (2) are in the same particle group,
   *   (3) are part of a rigid particle group, or are spring, elastic,
   *       or wall particles.
   *   (4) have at least one particle that is a spring or barrier
   *       particle (i.e. one of the types in k_pairFlags),
   *   (5) have at least one particle that returns true for
   *       ConnectionFilter::IsNecessary,
   *   (6) are not zombie particles.
   *
   * Essentially, this is an array of spring or barrier particles
   * that are interacting. The array is sorted by b2ParticlePair's
   * indexA, and then indexB. There are no duplicate entries.
   */
  GetPairs(): b2ParticlePair[] {
    return this.m_pairBuffer.data;
  }

  GetPairCount(): number {
    return this.m_pairBuffer.count;
  }

  /**
   * Get array of particle triads. The particles in a triad:
   *   (1) are in the same particle group,
   *   (2) are in a Voronoi triangle together,
   *   (3) are within b2_maxTriadDistance particle diameters of each
   *       other,
   *   (4) return true for ConnectionFilter::ShouldCreateTriad
   *   (5) have at least one particle of type elastic (i.e. one of the
   *       types in k_triadFlags),
   *   (6) are part of a rigid particle group, or are spring, elastic,
   *       or wall particles.
   *   (7) are not zombie particles.
   *
   * Essentially, this is an array of elastic particles that are
   * interacting. The array is sorted by b2ParticleTriad's indexA,
   * then indexB, then indexC. There are no duplicate entries.
   */
  GetTriads(): b2ParticleTriad[] {
    return this.m_triadBuffer.data;
  }

  GetTriadCount(): number {
    return this.m_triadBuffer.count;
  }

  /**
   * Set an optional threshold for the maximum number of
   * consecutive particle iterations that a particle may contact
   * multiple bodies before it is considered a candidate for being
   * "stuck". Setting to zero or less disables.
   */
  SetStuckThreshold(steps: number): void {
    this.m_stuckThreshold = steps;

    if (steps > 0) {
      this.m_lastBodyContactStepBuffer.data = this.RequestBuffer(this.m_lastBodyContactStepBuffer.data);
      this.m_bodyContactCountBuffer.data = this.RequestBuffer(this.m_bodyContactCountBuffer.data);
      this.m_consecutiveContactStepsBuffer.data = this.RequestBuffer(this.m_consecutiveContactStepsBuffer.data);
    }
  }

  /**
   * Get potentially stuck particles from the last step; the user
   * must decide if they are stuck or not, and if so, delete or
   * move them
   */
  GetStuckCandidates(): number[] {
    ///return m_stuckParticleBuffer.Data();
    return this.m_stuckParticleBuffer.Data();
  }

  /**
   * Get the number of stuck particle candidates from the last
   * step.
   */
  GetStuckCandidateCount(): number {
    ///return m_stuckParticleBuffer.GetCount();
    return this.m_stuckParticleBuffer.GetCount();
  }

  /**
   * Compute the kinetic energy that can be lost by damping force
   */
  ComputeCollisionEnergy(): number {
    let s_v = b2ParticleSystem.ComputeCollisionEnergy_s_v;
    let vel_data = this.m_velocityBuffer.data;
    let sum_v2 = 0;
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let n = contact.normal;
      ///b2Vec2 v = m_velocityBuffer.data[b] - m_velocityBuffer.data[a];
      let v = b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
      let vn = b2Vec2.DotVV(v, n);
      if (vn < 0) {
        sum_v2 += vn * vn;
      }
    }
    return 0.5 * this.GetParticleMass() * sum_v2;
  }
  static ComputeCollisionEnergy_s_v = new b2Vec2();

  /**
   * Set strict Particle/Body contact check.
   *
   * This is an option that will help ensure correct behavior if
   * there are corners in the world model where Particle/Body
   * contact is ambiguous. This option scales at n*log(n) of the
   * number of Particle/Body contacts, so it is best to only
   * enable if it is necessary for your geometry. Enable if you
   * see strange particle behavior around b2Body intersections.
   */
  SetStrictContactCheck(enabled: boolean): void {
    this.m_def.strictContactCheck = enabled;
  }

  /**
   * Get the status of the strict contact check.
   */
  GetStrictContactCheck(): boolean {
    return this.m_def.strictContactCheck;
  }

  /**
   * Set the lifetime (in seconds) of a particle relative to the
   * current time.  A lifetime of less than or equal to 0.0f
   * results in the particle living forever until it's manually
   * destroyed by the application.
   */
  SetParticleLifetime(index: number, lifetime: number): void {
    b2Assert(this.ValidateParticleIndex(index));
    let initializeExpirationTimes = this.m_indexByExpirationTimeBuffer.data === null;
    this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data);
    this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data);

    // Initialize the inverse mapping buffer.
    if (initializeExpirationTimes) {
      let particleCount = this.GetParticleCount();
      for (let i = 0; i < particleCount; ++i) {
        this.m_indexByExpirationTimeBuffer.data[i] = i;
      }
    }
    ///const int32 quantizedLifetime = (int32)(lifetime / m_def.lifetimeGranularity);
    let quantizedLifetime = lifetime / this.m_def.lifetimeGranularity;
    // Use a negative lifetime so that it's possible to track which
    // of the infinite lifetime particles are older.
    let newExpirationTime = quantizedLifetime > 0.0 ? this.GetQuantizedTimeElapsed() + quantizedLifetime : quantizedLifetime;
    if (newExpirationTime !== this.m_expirationTimeBuffer.data[index]) {
      this.m_expirationTimeBuffer.data[index] = newExpirationTime;
      this.m_expirationTimeBufferRequiresSorting = true;
    }
  }

  /**
   * Get the lifetime (in seconds) of a particle relative to the
   * current time.  A value > 0.0f is returned if the particle is
   * scheduled to be destroyed in the future, values <= 0.0f
   * indicate the particle has an infinite lifetime.
   */
  GetParticleLifetime(index: number): number {
    b2Assert(this.ValidateParticleIndex(index));
    return this.ExpirationTimeToLifetime(this.GetExpirationTimeBuffer()[index]);
  }

  /**
   * Enable / disable destruction of particles in CreateParticle()
   * when no more particles can be created due to a prior call to
   * SetMaxParticleCount().  When this is enabled, the oldest
   * particle is destroyed in CreateParticle() favoring the
   * destruction of particles with a finite lifetime over
   * particles with infinite lifetimes. This feature is enabled by
   * default when particle lifetimes are tracked.  Explicitly
   * enabling this feature using this function enables particle
   * lifetime tracking.
   */
  SetDestructionByAge(enable: boolean): void {
    if (enable) {
      this.GetExpirationTimeBuffer();
    }
    this.m_def.destroyByAge = enable;
  }

  /**
   * Get whether the oldest particle will be destroyed in
   * CreateParticle() when the maximum number of particles are
   * present in the system.
   */
  GetDestructionByAge(): boolean {
    return this.m_def.destroyByAge;
  }

  /**
   * Get the array of particle expiration times indexed by
   * particle index.
   *
   * GetParticleCount() items are in the returned array.
   */
  GetExpirationTimeBuffer(): number[] {
    this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data);
    return this.m_expirationTimeBuffer.data;
  }

  /**
   * Convert a expiration time value in returned by
   * GetExpirationTimeBuffer() to a time in seconds relative to
   * the current simulation time.
   */
  ExpirationTimeToLifetime(expirationTime: number): number {
    return (expirationTime > 0 ?
      expirationTime - this.GetQuantizedTimeElapsed() :
      expirationTime) * this.m_def.lifetimeGranularity;
  }

  /**
   * Get the array of particle indices ordered by reverse
   * lifetime. The oldest particle indexes are at the end of the
   * array with the newest at the start.  Particles with infinite
   * lifetimes (i.e expiration times less than or equal to 0) are
   * placed at the start of the array.
   * ExpirationTimeToLifetime(GetExpirationTimeBuffer()[index]) is
   * equivalent to GetParticleLifetime(index).
   *
   * GetParticleCount() items are in the returned array.
   */
  GetIndexByExpirationTimeBuffer(): number[] {
    // If particles are present, initialize / reinitialize the lifetime buffer.
    if (this.GetParticleCount()) {
      this.SetParticleLifetime(0, this.GetParticleLifetime(0));
    } else {
      this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data);
    }
    return this.m_indexByExpirationTimeBuffer.data;
  }

  /**
   * Apply an impulse to one particle. This immediately modifies
   * the velocity. Similar to b2Body::ApplyLinearImpulse.
   *
   * @param index the particle that will be modified.
   * @param impulse impulse the world impulse vector, usually in N-seconds or kg-m/s.
   */
  ParticleApplyLinearImpulse(index: number, impulse: b2Vec2): void {
    this.ApplyLinearImpulse(index, index + 1, impulse);
  }

  /**
   * Apply an impulse to all particles between 'firstIndex' and
   * 'lastIndex'. This immediately modifies the velocity. Note
   * that the impulse is applied to the total mass of all
   * particles. So, calling ParticleApplyLinearImpulse(0, impulse)
   * and ParticleApplyLinearImpulse(1, impulse) will impart twice
   * as much velocity as calling just ApplyLinearImpulse(0, 1,
   * impulse).
   *
   * @param firstIndex the first particle to be modified.
   * @param lastIndex the last particle to be modified.
   * @param impulse the world impulse vector, usually in N-seconds or kg-m/s.
   */
  ApplyLinearImpulse(firstIndex: number, lastIndex: number, impulse: b2Vec2): void {
    let vel_data = this.m_velocityBuffer.data;
    let numParticles = (lastIndex - firstIndex);
    let totalMass = numParticles * this.GetParticleMass();
    ///const b2Vec2 velocityDelta = impulse / totalMass;
    let velocityDelta = impulse.Clone().SelfMul(1 / totalMass);
    for (let i = firstIndex; i < lastIndex; i++) {
      ///m_velocityBuffer.data[i] += velocityDelta;
      vel_data[i].SelfAdd(velocityDelta);
    }
  }

  static IsSignificantForce(force: b2Vec2): boolean {
    return force.x !== 0 || force.y !== 0;
  }

  /**
   * Apply a force to the center of a particle.
   *
   * @param index the particle that will be modified.
   * @param force the world force vector, usually in Newtons (N).
   */
  ParticleApplyForce(index: number, force: b2Vec2): void {
    if (b2ParticleSystem.IsSignificantForce(force) &&
      this.ForceCanBeApplied(this.m_flagsBuffer.data[index])) {
      this.PrepareForceBuffer();
      ///m_forceBuffer[index] += force;
      this.m_forceBuffer[index].SelfAdd(force);
    }
  }

  /**
   * Distribute a force across several particles. The particles
   * must not be wall particles. Note that the force is
   * distributed across all the particles, so calling this
   * function for indices 0..N is not the same as calling
   * ParticleApplyForce(i, force) for i in 0..N.
   *
   * @param firstIndex the first particle to be modified.
   * @param lastIndex the last particle to be modified.
   * @param force the world force vector, usually in Newtons (N).
   */
  ApplyForce(firstIndex: number, lastIndex: number, force: b2Vec2): void {
    // Ensure we're not trying to apply force to particles that can't move,
    // such as wall particles.
    ///#if B2_ASSERT_ENABLED
    ///let flags = 0;
    ///for (let i = firstIndex; i < lastIndex; i++) {
    ///flags |= this.m_flagsBuffer.data[i];
    ///}
    ///b2Assert(this.ForceCanBeApplied(flags));
    ///#endif

    // Early out if force does nothing (optimization).
    ///const b2Vec2 distributedForce = force / (float32)(lastIndex - firstIndex);
    let distributedForce = force.Clone().SelfMul(1 / (lastIndex - firstIndex));
    if (b2ParticleSystem.IsSignificantForce(distributedForce)) {
      this.PrepareForceBuffer();

      // Distribute the force over all the particles.
      for (let i = firstIndex; i < lastIndex; i++) {
        ///m_forceBuffer[i] += distributedForce;
        this.m_forceBuffer[i].SelfAdd(distributedForce);
      }
    }
  }

  /**
   * Get the next particle-system in the world's particle-system
   * list.
   */
  GetNext(): b2ParticleSystem {
    return this.m_next;
  }

  /**
   * Query the particle system for all particles that potentially
   * overlap the provided AABB.
   * b2QueryCallback::ShouldQueryParticleSystem is ignored.
   *
   * @param callback a user implemented callback class.
   * @param aabb the query box.
   */
  QueryAABB(callback: b2QueryCallback, aabb: b2AABB): void {
    if (this.m_proxyBuffer.count === 0) {
      return;
    }
    let beginProxy = 0;
    let endProxy = this.m_proxyBuffer.count;
    let firstProxy = std_lower_bound(this.m_proxyBuffer.data, beginProxy, endProxy,
      b2ParticleSystem.computeTag(
        this.m_inverseDiameter * aabb.lowerBound.x,
        this.m_inverseDiameter * aabb.lowerBound.y),
      b2ParticleSystem.Proxy.CompareProxyTag);
    let lastProxy = std_upper_bound(this.m_proxyBuffer.data, firstProxy, endProxy,
      b2ParticleSystem.computeTag(
        this.m_inverseDiameter * aabb.upperBound.x,
        this.m_inverseDiameter * aabb.upperBound.y),
      b2ParticleSystem.Proxy.CompareTagProxy);
    let pos_data = this.m_positionBuffer.data;
    for (let k = firstProxy; k < lastProxy; ++k) {
      let proxy = this.m_proxyBuffer.data[k];
      let i = proxy.index;
      let p = pos_data[i];
      if (aabb.lowerBound.x < p.x && p.x < aabb.upperBound.x &&
        aabb.lowerBound.y < p.y && p.y < aabb.upperBound.y) {
        if (!callback.ReportParticle(this, i)) {
          break;
        }
      }
    }
  }

  /**
   * Query the particle system for all particles that potentially
   * overlap the provided shape's AABB. Calls QueryAABB
   * internally. b2QueryCallback::ShouldQueryParticleSystem is
   * ignored.
   *
   * @param callback a user implemented callback class.
   * @param shape the query shape
   * @param xf the transform of the AABB
   * @param childIndex
   */
  QueryShapeAABB(callback: b2QueryCallback, shape: b2Shape, xf: b2Transform, childIndex: number = 0): void {
    let s_aabb = b2ParticleSystem.QueryShapeAABB_s_aabb;
    let aabb = s_aabb;
    shape.ComputeAABB(aabb, xf, childIndex);
    this.QueryAABB(callback, aabb);
  }
  static QueryShapeAABB_s_aabb = new b2AABB();

  QueryPointAABB(callback: b2QueryCallback, point: b2Vec2, slop: number = b2_linearSlop): void {
    let s_aabb = b2ParticleSystem.QueryPointAABB_s_aabb;
    let aabb = s_aabb;
    aabb.lowerBound.Set(point.x - slop, point.y - slop);
    aabb.upperBound.Set(point.x + slop, point.y + slop);
    this.QueryAABB(callback, aabb);
  }
  static QueryPointAABB_s_aabb = new b2AABB();

  /**
   * Ray-cast the particle system for all particles in the path of
   * the ray. Your callback controls whether you get the closest
   * point, any point, or n-points. The ray-cast ignores particles
   * that contain the starting point.
   * b2RayCastCallback::ShouldQueryParticleSystem is ignored.
   *
   * @export
   * @return {void}
   * @param {b2RayCastCallback} callback a user implemented
   *      callback class.
   * @param {b2Vec2} point1 the ray starting point
   * @param {b2Vec2} point2 the ray ending point
   */
  RayCast(callback: b2RayCastCallback, point1: b2Vec2, point2: b2Vec2): void {
    let s_aabb = b2ParticleSystem.RayCast_s_aabb;
    let s_p = b2ParticleSystem.RayCast_s_p;
    let s_v = b2ParticleSystem.RayCast_s_v;
    let s_n = b2ParticleSystem.RayCast_s_n;
    let s_point = b2ParticleSystem.RayCast_s_point;
    if (this.m_proxyBuffer.count === 0) {
      return;
    }
    let pos_data = this.m_positionBuffer.data;
    let aabb = s_aabb;
    b2Vec2.MinV(point1, point2, aabb.lowerBound);
    b2Vec2.MaxV(point1, point2, aabb.upperBound);
    let fraction = 1;
    // solving the following equation:
    // ((1-t)*point1+t*point2-position)^2=diameter^2
    // where t is a potential fraction
    ///b2Vec2 v = point2 - point1;
    let v = b2Vec2.SubVV(point2, point1, s_v);
    let v2 = b2Vec2.DotVV(v, v);
    let enumerator = this.GetInsideBoundsEnumerator(aabb);

    let i: number;
    while ((i = enumerator.GetNext()) >= 0) {
      ///b2Vec2 p = point1 - m_positionBuffer.data[i];
      let p = b2Vec2.SubVV(point1, pos_data[i], s_p);
      let pv = b2Vec2.DotVV(p, v);
      let p2 = b2Vec2.DotVV(p, p);
      let determinant = pv * pv - v2 * (p2 - this.m_squaredDiameter);
      if (determinant >= 0) {
        let sqrtDeterminant = b2Sqrt(determinant);
        // find a solution between 0 and fraction
        let t = (-pv - sqrtDeterminant) / v2;
        if (t > fraction) {
          continue;
        }
        if (t < 0) {
          t = (-pv + sqrtDeterminant) / v2;
          if (t < 0 || t > fraction) {
            continue;
          }
        }
        ///b2Vec2 n = p + t * v;
        let n = b2Vec2.AddVMulSV(p, t, v, s_n);
        n.Normalize();
        ///float32 f = callback.ReportParticle(this, i, point1 + t * v, n, t);
        let f = callback.ReportParticle(this, i, b2Vec2.AddVMulSV(point1, t, v, s_point), n, t);
        fraction = b2Min(fraction, f);
        if (fraction <= 0) {
          break;
        }
      }
    }
  }
  static RayCast_s_aabb = new b2AABB();
  static RayCast_s_p = new b2Vec2();
  static RayCast_s_v = new b2Vec2();
  static RayCast_s_n = new b2Vec2();
  static RayCast_s_point = new b2Vec2();

  /**
   * Compute the axis-aligned bounding box for all particles
   * contained within this particle system.
   *
   * @export
   * @return {void}
   * @param {b2AABB} aabb Returns the axis-aligned bounding
   *      box of the system.
   */
  ComputeAABB(aabb: b2AABB): void {
    let particleCount = this.GetParticleCount();
    b2Assert(aabb !== null);
    aabb.lowerBound.x = +b2_maxFloat;
    aabb.lowerBound.y = +b2_maxFloat;
    aabb.upperBound.x = -b2_maxFloat;
    aabb.upperBound.y = -b2_maxFloat;

    let pos_data = this.m_positionBuffer.data;
    for (let i = 0; i < particleCount; i++) {
      let p = pos_data[i];
      b2Vec2.MinV(aabb.lowerBound, p, aabb.lowerBound);
      b2Vec2.MaxV(aabb.upperBound, p, aabb.upperBound);
    }
    aabb.lowerBound.x -= this.m_particleDiameter;
    aabb.lowerBound.y -= this.m_particleDiameter;
    aabb.upperBound.x += this.m_particleDiameter;
    aabb.upperBound.y += this.m_particleDiameter;
  }

  /**
   * All particle types that require creating pairs
   */
  static k_pairFlags: number = b2ParticleFlag.b2_springParticle;

  /**
   * All particle types that require creating triads
   *
   * @type {number}
   */
  static k_triadFlags = b2ParticleFlag.b2_elasticParticle;

  /**
   * All particle types that do not produce dynamic pressure
   *
   * @type {number}
   */
  static k_noPressureFlags = b2ParticleFlag.b2_powderParticle | b2ParticleFlag.b2_tensileParticle;

  /**
   * All particle types that apply extra damping force with bodies
   *
   * @type {number}
   */
  static k_extraDampingFlags = b2ParticleFlag.b2_staticPressureParticle;

  /**
   * @type {number}
   */
  static k_barrierWallFlags = b2ParticleFlag.b2_barrierParticle | b2ParticleFlag.b2_wallParticle;

  FreeBuffer(b: any, capacity: number): void {
    if (b === null) {
      return;
    }
    b.length = 0;
  }

  FreeUserOverridableBuffer(b: b2ParticleSystem.UserOverridableBuffer<any>): void {
    if (b.userSuppliedCapacity === 0) {
      this.FreeBuffer(b.data, this.m_internalAllocatedCapacity);
    }
  }

  /**
   * Reallocate a buffer
   */
  ReallocateBuffer3(oldBuffer: any[], oldCapacity: number, newCapacity: number): any[] {
    b2Assert(newCapacity > oldCapacity);
    let newBuffer = (oldBuffer) ? oldBuffer.slice() : [];
    newBuffer.length = newCapacity;
    return newBuffer;
  }

  /**
   * Reallocate a buffer
   */
  ReallocateBuffer5(buffer: any[], userSuppliedCapacity: number, oldCapacity: number, newCapacity: number, deferred: boolean): any[] {
    b2Assert(newCapacity > oldCapacity);
    // A 'deferred' buffer is reallocated only if it is not NULL.
    // If 'userSuppliedCapacity' is not zero, buffer is user supplied and must
    // be kept.
    b2Assert(!userSuppliedCapacity || newCapacity <= userSuppliedCapacity);
    if ((!deferred || buffer) && !userSuppliedCapacity) {
      buffer = this.ReallocateBuffer3(buffer, oldCapacity, newCapacity);
    }
    return buffer;
  }

  /**
   * Reallocate a buffer
   */
  ReallocateBuffer4(buffer: b2ParticleSystem.UserOverridableBuffer<any>, oldCapacity: number, newCapacity: number, deferred: boolean): any[] {
    b2Assert(newCapacity > oldCapacity);
    return this.ReallocateBuffer5(buffer.data, buffer.userSuppliedCapacity, oldCapacity, newCapacity, deferred);
  }

  RequestBuffer(buffer: any[]): any[] {
    if (!buffer) {
      if (this.m_internalAllocatedCapacity === 0) {
        this.ReallocateInternalAllocatedBuffers(b2_minParticleSystemBufferCapacity);
      }

      buffer = [];
      buffer.length = this.m_internalAllocatedCapacity;
    }
    return buffer;
  }

  /**
   * Reallocate the handle / index map and schedule the allocation
   * of a new pool for handle allocation.
   */
  ReallocateHandleBuffers(newCapacity: number): void {
    b2Assert(newCapacity > this.m_internalAllocatedCapacity);
    // Reallocate a new handle / index map buffer, copying old handle pointers
    // is fine since they're kept around.
    this.m_handleIndexBuffer.data = this.ReallocateBuffer4(this.m_handleIndexBuffer, this.m_internalAllocatedCapacity, newCapacity, true);
    // Set the size of the next handle allocation.
    ///this.m_handleAllocator.SetItemsPerSlab(newCapacity - this.m_internalAllocatedCapacity);
  }

  ReallocateInternalAllocatedBuffers(capacity: number): void {
    function LimitCapacity(capacity: number, maxCount: number): number {
      return maxCount && capacity > maxCount ? maxCount : capacity;
    }

    // Don't increase capacity beyond the smallest user-supplied buffer size.
    capacity = LimitCapacity(capacity, this.m_def.maxCount);
    capacity = LimitCapacity(capacity, this.m_flagsBuffer.userSuppliedCapacity);
    capacity = LimitCapacity(capacity, this.m_positionBuffer.userSuppliedCapacity);
    capacity = LimitCapacity(capacity, this.m_velocityBuffer.userSuppliedCapacity);
    capacity = LimitCapacity(capacity, this.m_colorBuffer.userSuppliedCapacity);
    capacity = LimitCapacity(capacity, this.m_userDataBuffer.userSuppliedCapacity);
    if (this.m_internalAllocatedCapacity < capacity) {
      this.ReallocateHandleBuffers(capacity);
      this.m_flagsBuffer.data = this.ReallocateBuffer4(this.m_flagsBuffer, this.m_internalAllocatedCapacity, capacity, false);

      // Conditionally defer these as they are optional if the feature is
      // not enabled.
      let stuck = this.m_stuckThreshold > 0;
      this.m_lastBodyContactStepBuffer.data = this.ReallocateBuffer4(this.m_lastBodyContactStepBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
      this.m_bodyContactCountBuffer.data = this.ReallocateBuffer4(this.m_bodyContactCountBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
      this.m_consecutiveContactStepsBuffer.data = this.ReallocateBuffer4(this.m_consecutiveContactStepsBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
      this.m_positionBuffer.data = this.ReallocateBuffer4(this.m_positionBuffer, this.m_internalAllocatedCapacity, capacity, false);
      this.m_velocityBuffer.data = this.ReallocateBuffer4(this.m_velocityBuffer, this.m_internalAllocatedCapacity, capacity, false);
      this.m_forceBuffer = this.ReallocateBuffer5(this.m_forceBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
      this.m_weightBuffer = this.ReallocateBuffer5(this.m_weightBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
      this.m_staticPressureBuffer = this.ReallocateBuffer5(this.m_staticPressureBuffer, 0, this.m_internalAllocatedCapacity, capacity, true);
      this.m_accumulationBuffer = this.ReallocateBuffer5(this.m_accumulationBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
      this.m_accumulation2Buffer = this.ReallocateBuffer5(this.m_accumulation2Buffer, 0, this.m_internalAllocatedCapacity, capacity, true);
      this.m_depthBuffer = this.ReallocateBuffer5(this.m_depthBuffer, 0, this.m_internalAllocatedCapacity, capacity, true);
      this.m_colorBuffer.data = this.ReallocateBuffer4(this.m_colorBuffer, this.m_internalAllocatedCapacity, capacity, true);
      this.m_groupBuffer = this.ReallocateBuffer5(this.m_groupBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
      this.m_userDataBuffer.data = this.ReallocateBuffer4(this.m_userDataBuffer, this.m_internalAllocatedCapacity, capacity, true);
      this.m_expirationTimeBuffer.data = this.ReallocateBuffer4(this.m_expirationTimeBuffer, this.m_internalAllocatedCapacity, capacity, true);
      this.m_indexByExpirationTimeBuffer.data = this.ReallocateBuffer4(this.m_indexByExpirationTimeBuffer, this.m_internalAllocatedCapacity, capacity, false);
      this.m_internalAllocatedCapacity = capacity;
    }
  }

  CreateParticleForGroup(groupDef: b2ParticleGroupDef, xf: b2Transform, p: b2Vec2): void {
    let particleDef = new b2ParticleDef();
    particleDef.flags = groupDef.flags;
    ///particleDef.position = b2Mul(xf, p);
    b2Transform.MulXV(xf, p, particleDef.position);
    ///particleDef.velocity =
    ///  groupDef.linearVelocity +
    ///  b2Cross(groupDef.angularVelocity,
    ///      particleDef.position - groupDef.position);
    b2Vec2.AddVV(
      groupDef.linearVelocity,
      b2Vec2.CrossSV(
        groupDef.angularVelocity,
        b2Vec2.SubVV(
          particleDef.position,
          groupDef.position,
          b2Vec2.s_t0
        ),
        b2Vec2.s_t0
      ),
      particleDef.velocity
    );
    particleDef.color.Copy(groupDef.color);
    particleDef.lifetime = groupDef.lifetime;
    particleDef.userData = groupDef.userData;
    this.CreateParticle(particleDef);
  }

  CreateParticlesStrokeShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void {
    let s_edge = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_edge;
    let s_d = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_d;
    let s_p = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_p;
    let stride = groupDef.stride;
    if (stride === 0) {
      stride = this.GetParticleStride();
    }
    let positionOnEdge = 0;
    let childCount = shape.GetChildCount();
    for (let childIndex = 0; childIndex < childCount; childIndex++) {
      let edge: b2EdgeShape = null;
      if (shape.GetType() === b2ShapeType.e_edgeShape) {
        edge = <b2EdgeShape> shape;
      } else {
        b2Assert(shape.GetType() === b2ShapeType.e_chainShape);
        edge = s_edge;
        (shape as b2ChainShape).GetChildEdge(edge, childIndex);
      }
      let d = b2Vec2.SubVV(edge.m_vertex2, edge.m_vertex1, s_d);
      let edgeLength = d.Length();

      while (positionOnEdge < edgeLength) {
        ///b2Vec2 p = edge.m_vertex1 + positionOnEdge / edgeLength * d;
        let p = b2Vec2.AddVMulSV(edge.m_vertex1, positionOnEdge / edgeLength, d, s_p);
        this.CreateParticleForGroup(groupDef, xf, p);
        positionOnEdge += stride;
      }
      positionOnEdge -= edgeLength;
    }
  }
  static CreateParticlesStrokeShapeForGroup_s_edge = new b2EdgeShape();
  static CreateParticlesStrokeShapeForGroup_s_d = new b2Vec2();
  static CreateParticlesStrokeShapeForGroup_s_p = new b2Vec2();

  CreateParticlesFillShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void {
    let s_aabb = b2ParticleSystem.CreateParticlesFillShapeForGroup_s_aabb;
    let s_p = b2ParticleSystem.CreateParticlesFillShapeForGroup_s_p;
    let stride = groupDef.stride;
    if (stride === 0) {
      stride = this.GetParticleStride();
    }
    ///b2Transform identity;
    /// identity.SetIdentity();
    let identity = b2Transform.IDENTITY;
    let aabb = s_aabb;
    b2Assert(shape.GetChildCount() === 1);
    shape.ComputeAABB(aabb, identity, 0);
    for (let y = Math.floor(aabb.lowerBound.y / stride) * stride; y < aabb.upperBound.y; y += stride) {
      for (let x = Math.floor(aabb.lowerBound.x / stride) * stride; x < aabb.upperBound.x; x += stride) {
        let p = s_p.Set(x, y);
        if (shape.TestPoint(identity, p)) {
          this.CreateParticleForGroup(groupDef, xf, p);
        }
      }
    }
  }
  static CreateParticlesFillShapeForGroup_s_aabb = new b2AABB();
  static CreateParticlesFillShapeForGroup_s_p = new b2Vec2();

  CreateParticlesWithShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void {
    switch (shape.GetType()) {
      case b2ShapeType.e_edgeShape:
      case b2ShapeType.e_chainShape:
        this.CreateParticlesStrokeShapeForGroup(shape, groupDef, xf);
        break;
      case b2ShapeType.e_polygonShape:
      case b2ShapeType.e_circleShape:
        this.CreateParticlesFillShapeForGroup(shape, groupDef, xf);
        break;
      default:
        b2Assert(false);
        break;
    }
  }

  CreateParticlesWithShapesForGroup(shapes: b2Shape[], shapeCount: number, groupDef: b2ParticleGroupDef, xf: b2Transform): void {
    let compositeShape = new b2ParticleSystem.CompositeShape(shapes, shapeCount);
    this.CreateParticlesFillShapeForGroup(compositeShape, groupDef, xf);
  }

  CloneParticle(oldIndex: number, group: b2ParticleGroup): number {
    let def = new b2ParticleDef();
    def.flags = this.m_flagsBuffer.data[oldIndex];
    def.position.Copy(this.m_positionBuffer.data[oldIndex]);
    def.velocity.Copy(this.m_velocityBuffer.data[oldIndex]);
    if (this.m_colorBuffer.data) {
      def.color.Copy(this.m_colorBuffer.data[oldIndex]);
    }
    if (this.m_userDataBuffer.data) {
      def.userData = this.m_userDataBuffer.data[oldIndex];
    }
    def.group = group;
    let newIndex = this.CreateParticle(def);
    if (this.m_handleIndexBuffer.data) {
      let handle = this.m_handleIndexBuffer.data[oldIndex];
      if (handle) handle.SetIndex(newIndex);
      this.m_handleIndexBuffer.data[newIndex] = handle;
      this.m_handleIndexBuffer.data[oldIndex] = null;
    }
    if (this.m_lastBodyContactStepBuffer.data) {
      this.m_lastBodyContactStepBuffer.data[newIndex] =
        this.m_lastBodyContactStepBuffer.data[oldIndex];
    }
    if (this.m_bodyContactCountBuffer.data) {
      this.m_bodyContactCountBuffer.data[newIndex] =
        this.m_bodyContactCountBuffer.data[oldIndex];
    }
    if (this.m_consecutiveContactStepsBuffer.data) {
      this.m_consecutiveContactStepsBuffer.data[newIndex] =
        this.m_consecutiveContactStepsBuffer.data[oldIndex];
    }
    if (this.m_hasForce) {
      this.m_forceBuffer[newIndex].Copy(this.m_forceBuffer[oldIndex]);
    }
    if (this.m_staticPressureBuffer) {
      this.m_staticPressureBuffer[newIndex] = this.m_staticPressureBuffer[oldIndex];
    }
    if (this.m_depthBuffer) {
      this.m_depthBuffer[newIndex] = this.m_depthBuffer[oldIndex];
    }
    if (this.m_expirationTimeBuffer.data) {
      this.m_expirationTimeBuffer.data[newIndex] =
        this.m_expirationTimeBuffer.data[oldIndex];
    }
    return newIndex;
  }

  DestroyParticlesInGroup(group: b2ParticleGroup, callDestructionListener: boolean = false): void {
    for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
      this.DestroyParticle(i, callDestructionListener);
    }
  }

  DestroyParticleGroup(group: b2ParticleGroup): void {
    b2Assert(this.m_groupCount > 0);
    b2Assert(group !== null);

    if (this.m_world.m_destructionListener) {
      this.m_world.m_destructionListener.SayGoodbyeParticleGroup(group);
    }

    this.SetGroupFlags(group, 0);
    for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
      this.m_groupBuffer[i] = null;
    }

    if (group.m_prev) {
      group.m_prev.m_next = group.m_next;
    }
    if (group.m_next) {
      group.m_next.m_prev = group.m_prev;
    }
    if (group === this.m_groupList) {
      this.m_groupList = group.m_next;
    }

    --this.m_groupCount;
  }

  static ParticleCanBeConnected(flags: b2ParticleFlag, group: b2ParticleGroup): boolean {
    return ((flags & (b2ParticleFlag.b2_wallParticle | b2ParticleFlag.b2_springParticle | b2ParticleFlag.b2_elasticParticle)) !== 0) ||
      ((group !== null) && ((group.GetGroupFlags() & b2ParticleGroupFlag.b2_rigidParticleGroup) !== 0));
  }

  UpdatePairsAndTriads(firstIndex: number, lastIndex: number, filter: b2ParticleSystem.ConnectionFilter): void {
    let s_dab = b2ParticleSystem.UpdatePairsAndTriads_s_dab;
    let s_dbc = b2ParticleSystem.UpdatePairsAndTriads_s_dbc;
    let s_dca = b2ParticleSystem.UpdatePairsAndTriads_s_dca;
    let pos_data = this.m_positionBuffer.data;
    // Create pairs or triads.
    // All particles in each pair/triad should satisfy the following:
    // * firstIndex <= index < lastIndex
    // * don't have b2_zombieParticle
    // * ParticleCanBeConnected returns true
    // * ShouldCreatePair/ShouldCreateTriad returns true
    // Any particles in each pair/triad should satisfy the following:
    // * filter.IsNeeded returns true
    // * have one of k_pairFlags/k_triadsFlags
    b2Assert(firstIndex <= lastIndex);
    let particleFlags = 0;
    for (let i = firstIndex; i < lastIndex; i++) {
      particleFlags |= this.m_flagsBuffer.data[i];
    }
    if (particleFlags & b2ParticleSystem.k_pairFlags) {
      for (let k = 0; k < this.m_contactBuffer.count; k++) {
        let contact = this.m_contactBuffer.data[k];
        let a = contact.indexA;
        let b = contact.indexB;
        let af = this.m_flagsBuffer.data[a];
        let bf = this.m_flagsBuffer.data[b];
        let groupA = this.m_groupBuffer[a];
        let groupB = this.m_groupBuffer[b];
        if (a >= firstIndex && a < lastIndex &&
          b >= firstIndex && b < lastIndex &&
          !((af | bf) & b2ParticleFlag.b2_zombieParticle) &&
          ((af | bf) & b2ParticleSystem.k_pairFlags) &&
          (filter.IsNecessary(a) || filter.IsNecessary(b)) &&
          b2ParticleSystem.ParticleCanBeConnected(af, groupA) &&
          b2ParticleSystem.ParticleCanBeConnected(bf, groupB) &&
          filter.ShouldCreatePair(a, b)) {
          ///b2ParticlePair& pair = m_pairBuffer.Append();
          let pair = this.m_pairBuffer.data[this.m_pairBuffer.Append()];
          pair.indexA = a;
          pair.indexB = b;
          pair.flags = contact.flags;
          pair.strength = b2Min(
            groupA ? groupA.m_strength : 1,
            groupB ? groupB.m_strength : 1);
          ///pair.distance = b2Distance(pos_data[a], pos_data[b]); // TODO: this was wrong!
          pair.distance = b2Vec2.DistanceVV(pos_data[a], pos_data[b]);
        }
        ///std::stable_sort(m_pairBuffer.Begin(), m_pairBuffer.End(), ComparePairIndices);
        std_stable_sort(this.m_pairBuffer.data, 0, this.m_pairBuffer.count, b2ParticleSystem.ComparePairIndices);
        ///m_pairBuffer.Unique(MatchPairIndices);
        this.m_pairBuffer.Unique(b2ParticleSystem.MatchPairIndices);
      }
    }
    if (particleFlags & b2ParticleSystem.k_triadFlags) {
      let diagram = new b2VoronoiDiagram(lastIndex - firstIndex);
      ///let necessary_count = 0;
      for (let i = firstIndex; i < lastIndex; i++) {
        let flags = this.m_flagsBuffer.data[i];
        let group = this.m_groupBuffer[i];
        if (!(flags & b2ParticleFlag.b2_zombieParticle) &&
          b2ParticleSystem.ParticleCanBeConnected(flags, group)) {
          ///if (filter.IsNecessary(i)) {
          ///++necessary_count;
          ///}
          diagram.AddGenerator(pos_data[i], i, filter.IsNecessary(i));
        }
      }
      ///if (necessary_count === 0) {
      /////debugger;
      ///for (let i = firstIndex; i < lastIndex; i++) {
      ///  filter.IsNecessary(i);
      ///}
      ///}
      let stride = this.GetParticleStride();
      diagram.Generate(stride / 2, stride * 2);
      let system = this;
      let callback = function UpdateTriadsCallback(a: number, b: number, c: number): void {
        let af = system.m_flagsBuffer.data[a];
        let bf = system.m_flagsBuffer.data[b];
        let cf = system.m_flagsBuffer.data[c];
        if (((af | bf | cf) & b2ParticleSystem.k_triadFlags) &&
          filter.ShouldCreateTriad(a, b, c)) {
          let pa = pos_data[a];
          let pb = pos_data[b];
          let pc = pos_data[c];
          let dab = b2Vec2.SubVV(pa, pb, s_dab);
          let dbc = b2Vec2.SubVV(pb, pc, s_dbc);
          let dca = b2Vec2.SubVV(pc, pa, s_dca);
          let maxDistanceSquared = b2_maxTriadDistanceSquared * system.m_squaredDiameter;
          if (b2Vec2.DotVV(dab, dab) > maxDistanceSquared ||
            b2Vec2.DotVV(dbc, dbc) > maxDistanceSquared ||
            b2Vec2.DotVV(dca, dca) > maxDistanceSquared) {
            return;
          }
          let groupA = system.m_groupBuffer[a];
          let groupB = system.m_groupBuffer[b];
          let groupC = system.m_groupBuffer[c];
          ///b2ParticleTriad& triad = m_system.m_triadBuffer.Append();
          let triad = system.m_triadBuffer.data[system.m_triadBuffer.Append()];
          triad.indexA = a;
          triad.indexB = b;
          triad.indexC = c;
          triad.flags = af | bf | cf;
          triad.strength = b2Min(b2Min(
              groupA ? groupA.m_strength : 1,
              groupB ? groupB.m_strength : 1),
            groupC ? groupC.m_strength : 1);
          ///let midPoint = b2Vec2.MulSV(1.0 / 3.0, b2Vec2.AddVV(pa, b2Vec2.AddVV(pb, pc, new b2Vec2()), new b2Vec2()), new b2Vec2());
          let midPoint_x = (pa.x + pb.x + pc.x) / 3.0;
          let midPoint_y = (pa.y + pb.y + pc.y) / 3.0;
          ///triad.pa = b2Vec2.SubVV(pa, midPoint, new b2Vec2());
          triad.pa.x = pa.x - midPoint_x;
          triad.pa.y = pa.y - midPoint_y;
          ///triad.pb = b2Vec2.SubVV(pb, midPoint, new b2Vec2());
          triad.pb.x = pb.x - midPoint_x;
          triad.pb.y = pb.y - midPoint_y;
          ///triad.pc = b2Vec2.SubVV(pc, midPoint, new b2Vec2());
          triad.pc.x = pc.x - midPoint_x;
          triad.pc.y = pc.y - midPoint_y;
          triad.ka = -b2Vec2.DotVV(dca, dab);
          triad.kb = -b2Vec2.DotVV(dab, dbc);
          triad.kc = -b2Vec2.DotVV(dbc, dca);
          triad.s = b2Vec2.CrossVV(pa, pb) + b2Vec2.CrossVV(pb, pc) + b2Vec2.CrossVV(pc, pa);
        }
      };
      diagram.GetNodes(callback);
      ///std::stable_sort(m_triadBuffer.Begin(), m_triadBuffer.End(), CompareTriadIndices);
      std_stable_sort(this.m_triadBuffer.data, 0, this.m_triadBuffer.count, b2ParticleSystem.CompareTriadIndices);
      ///m_triadBuffer.Unique(MatchTriadIndices);
      this.m_triadBuffer.Unique(b2ParticleSystem.MatchTriadIndices);
    }
  }
  private static UpdatePairsAndTriads_s_dab = new b2Vec2();
  private static UpdatePairsAndTriads_s_dbc = new b2Vec2();
  private static UpdatePairsAndTriads_s_dca = new b2Vec2();

  UpdatePairsAndTriadsWithReactiveParticles(): void {
    let filter = new b2ParticleSystem.ReactiveFilter(this.m_flagsBuffer);
    this.UpdatePairsAndTriads(0, this.m_count, filter);

    for (let i = 0; i < this.m_count; i++) {
      this.m_flagsBuffer.data[i] &= ~b2ParticleFlag.b2_reactiveParticle;
    }
    this.m_allParticleFlags &= ~b2ParticleFlag.b2_reactiveParticle;
  }

  static ComparePairIndices(a: b2ParticlePair, b: b2ParticlePair): boolean {
    let diffA = a.indexA - b.indexA;
    if (diffA !== 0) return diffA < 0;
    return a.indexB < b.indexB;
  }

  static MatchPairIndices(a: b2ParticlePair, b: b2ParticlePair): boolean {
    return a.indexA === b.indexA && a.indexB === b.indexB;
  }

  static CompareTriadIndices(a: b2ParticleTriad, b: b2ParticleTriad): boolean {
    let diffA = a.indexA - b.indexA;
    if (diffA !== 0) return diffA < 0;
    let diffB = a.indexB - b.indexB;
    if (diffB !== 0) return diffB < 0;
    return a.indexC < b.indexC;
  }

  static MatchTriadIndices(a: b2ParticleTriad, b: b2ParticleTriad): boolean {
    return a.indexA === b.indexA && a.indexB === b.indexB && a.indexC === b.indexC;
  }

  static InitializeParticleLists(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void {
    let bufferIndex = group.GetBufferIndex();
    let particleCount = group.GetParticleCount();
    for (let i = 0; i < particleCount; i++) {
      /*ParticleListNode**/
      let node = nodeBuffer[i];
      node.list = node;
      node.next = null;
      node.count = 1;
      node.index = i + bufferIndex;
    }
  }

  MergeParticleListsInContact(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void {
    let bufferIndex = group.GetBufferIndex();
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      /*const b2ParticleContact&*/
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      if (!group.ContainsParticle(a) || !group.ContainsParticle(b)) {
        continue;
      }
      /*ParticleListNode**/
      let listA = nodeBuffer[a - bufferIndex].list;
      /*ParticleListNode**/
      let listB = nodeBuffer[b - bufferIndex].list;
      if (listA === listB) {
        continue;
      }
      // To minimize the cost of insertion, make sure listA is longer than
      // listB.
      if (listA.count < listB.count) {
        let _tmp = listA;
        listA = listB;
        listB = _tmp; ///b2Swap(listA, listB);
      }
      b2Assert(listA.count >= listB.count);
      b2ParticleSystem.MergeParticleLists(listA, listB);
    }
  }

  static MergeParticleLists(listA: b2ParticleSystem.ParticleListNode, listB: b2ParticleSystem.ParticleListNode): void {
    // Insert listB between index 0 and 1 of listA
    // Example:
    //     listA => a1 => a2 => a3 => null
    //     listB => b1 => b2 => null
    // to
    //     listA => listB => b1 => b2 => a1 => a2 => a3 => null
    b2Assert(listA !== listB);
    for ( /*ParticleListNode**/ let b = listB; ; ) {
      b.list = listA;
      /*ParticleListNode**/
      let nextB = b.next;
      if (nextB) {
        b = nextB;
      } else {
        b.next = listA.next;
        break;
      }
    }
    listA.next = listB;
    listA.count += listB.count;
    listB.count = 0;
  }

  static FindLongestParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): b2ParticleSystem.ParticleListNode {
    let particleCount = group.GetParticleCount();
    /*ParticleListNode**/
    let result = nodeBuffer[0];
    for (let i = 0; i < particleCount; i++) {
      /*ParticleListNode**/
      let node = nodeBuffer[i];
      if (result.count < node.count) {
        result = node;
      }
    }
    return result;
  }

  MergeZombieParticleListNodes(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[], survivingList: b2ParticleSystem.ParticleListNode): void {
    let particleCount = group.GetParticleCount();
    for (let i = 0; i < particleCount; i++) {
      /*ParticleListNode**/
      let node = nodeBuffer[i];
      if (node !== survivingList &&
        (this.m_flagsBuffer.data[node.index] & b2ParticleFlag.b2_zombieParticle)) {
        b2ParticleSystem.MergeParticleListAndNode(survivingList, node);
      }
    }
  }

  static MergeParticleListAndNode(list: b2ParticleSystem.ParticleListNode, node: b2ParticleSystem.ParticleListNode): void {
    // Insert node between index 0 and 1 of list
    // Example:
    //     list => a1 => a2 => a3 => null
    //     node => null
    // to
    //     list => node => a1 => a2 => a3 => null
    b2Assert(node !== list);
    b2Assert(node.list === node);
    b2Assert(node.count === 1);
    node.list = list;
    node.next = list.next;
    list.next = node;
    list.count++;
    node.count = 0;
  }

  CreateParticleGroupsFromParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[], survivingList: b2ParticleSystem.ParticleListNode): void {
    let particleCount = group.GetParticleCount();
    let def = new b2ParticleGroupDef();
    def.groupFlags = group.GetGroupFlags();
    def.userData = group.GetUserData();
    for (let i = 0; i < particleCount; i++) {
      /*ParticleListNode**/
      let list = nodeBuffer[i];
      if (!list.count || list === survivingList) {
        continue;
      }
      b2Assert(list.list === list);
      /*b2ParticleGroup**/
      let newGroup = this.CreateParticleGroup(def);
      for ( /*ParticleListNode**/ let node = list; node; node = node.next) {
        let oldIndex = node.index;
        let flags = this.m_flagsBuffer.data[oldIndex];
        b2Assert(!(flags & b2ParticleFlag.b2_zombieParticle));
        let newIndex = this.CloneParticle(oldIndex, newGroup);
        this.m_flagsBuffer.data[oldIndex] |= b2ParticleFlag.b2_zombieParticle;
        node.index = newIndex;
      }
    }
  }

  UpdatePairsAndTriadsWithParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void {
    let bufferIndex = group.GetBufferIndex();
    // Update indices in pairs and triads. If an index belongs to the group,
    // replace it with the corresponding value in nodeBuffer.
    // Note that nodeBuffer is allocated only for the group and the index should
    // be shifted by bufferIndex.
    for (let k = 0; k < this.m_pairBuffer.count; k++) {
      let pair = this.m_pairBuffer.data[k];
      let a = pair.indexA;
      let b = pair.indexB;
      if (group.ContainsParticle(a)) {
        pair.indexA = nodeBuffer[a - bufferIndex].index;
      }
      if (group.ContainsParticle(b)) {
        pair.indexB = nodeBuffer[b - bufferIndex].index;
      }
    }
    for (let k = 0; k < this.m_triadBuffer.count; k++) {
      let triad = this.m_triadBuffer.data[k];
      let a = triad.indexA;
      let b = triad.indexB;
      let c = triad.indexC;
      if (group.ContainsParticle(a)) {
        triad.indexA = nodeBuffer[a - bufferIndex].index;
      }
      if (group.ContainsParticle(b)) {
        triad.indexB = nodeBuffer[b - bufferIndex].index;
      }
      if (group.ContainsParticle(c)) {
        triad.indexC = nodeBuffer[c - bufferIndex].index;
      }
    }
  }

  ComputeDepth(): void {
    ///b2ParticleContact* contactGroups = (b2ParticleContact*) this.m_world.m_stackAllocator.Allocate(sizeof(b2ParticleContact) * this.m_contactBuffer.GetCount());
    let contactGroups: b2ParticleContact[] = []; // TODO: static
    let contactGroupsCount = 0;
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let groupA = this.m_groupBuffer[a];
      let groupB = this.m_groupBuffer[b];
      if (groupA && groupA === groupB &&
        (groupA.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth)) {
        contactGroups[contactGroupsCount++] = contact;
      }
    }
    ///b2ParticleGroup** groupsToUpdate = (b2ParticleGroup**) this.m_world.m_stackAllocator.Allocate(sizeof(b2ParticleGroup*) * this.m_groupCount);
    let groupsToUpdate: b2ParticleGroup[] = []; // TODO: static
    let groupsToUpdateCount = 0;
    for (let group = this.m_groupList; group; group = group.GetNext()) {
      if (group.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth) {
        groupsToUpdate[groupsToUpdateCount++] = group;
        this.SetGroupFlags(group,
          group.m_groupFlags &
          ~b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth);
        for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
          this.m_accumulationBuffer[i] = 0;
        }
      }
    }
    // Compute sum of weight of contacts except between different groups.
    for (let k = 0; k < contactGroupsCount; k++) {
      let contact = contactGroups[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let w = contact.weight;
      this.m_accumulationBuffer[a] += w;
      this.m_accumulationBuffer[b] += w;
    }

    b2Assert(this.m_depthBuffer !== null);
    for (let i = 0; i < groupsToUpdateCount; i++) {
      let group = groupsToUpdate[i];
      for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
        let w = this.m_accumulationBuffer[i];
        this.m_depthBuffer[i] = w < 0.8 ? 0 : b2_maxFloat;
      }
    }
    // The number of iterations is equal to particle number from the deepest
    // particle to the nearest surface particle, and in general it is smaller
    // than sqrt of total particle number.
    ///int32 iterationCount = (int32)b2Sqrt((float)m_count);
    let iterationCount = b2Sqrt(this.m_count) >> 0;
    for (let t = 0; t < iterationCount; t++) {
      let updated = false;
      for (let k = 0; k < contactGroupsCount; k++) {
        let contact = contactGroups[k];
        let a = contact.indexA;
        let b = contact.indexB;
        let r = 1 - contact.weight;
        ///float32& ap0 = m_depthBuffer[a];
        let ap0 = this.m_depthBuffer[a];
        ///float32& bp0 = m_depthBuffer[b];
        let bp0 = this.m_depthBuffer[b];
        let ap1 = bp0 + r;
        let bp1 = ap0 + r;
        if (ap0 > ap1) {
          ///ap0 = ap1;
          this.m_depthBuffer[a] = ap1;
          updated = true;
        }
        if (bp0 > bp1) {
          ///bp0 = bp1;
          this.m_depthBuffer[b] = bp1;
          updated = true;
        }
      }
      if (!updated) {
        break;
      }
    }
    for (let i = 0; i < groupsToUpdateCount; i++) {
      let group = groupsToUpdate[i];
      for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
        if (this.m_depthBuffer[i] < b2_maxFloat) {
          this.m_depthBuffer[i] *= this.m_particleDiameter;
        } else {
          this.m_depthBuffer[i] = 0;
        }
      }
    }
    ///this.m_world.m_stackAllocator.Free(groupsToUpdate);
    ///this.m_world.m_stackAllocator.Free(contactGroups);
  }

  GetInsideBoundsEnumerator(aabb: b2AABB): b2ParticleSystem.InsideBoundsEnumerator {
    let lowerTag = b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.lowerBound.x - 1,
      this.m_inverseDiameter * aabb.lowerBound.y - 1);
    let upperTag = b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.upperBound.x + 1,
      this.m_inverseDiameter * aabb.upperBound.y + 1);
    ///const Proxy* beginProxy = m_proxyBuffer.Begin();
    let beginProxy = 0;
    ///const Proxy* endProxy = m_proxyBuffer.End();
    let endProxy = this.m_proxyBuffer.count;
    ///const Proxy* firstProxy = std::lower_bound(beginProxy, endProxy, lowerTag);
    let firstProxy = std_lower_bound(this.m_proxyBuffer.data, beginProxy, endProxy, lowerTag, b2ParticleSystem.Proxy.CompareProxyTag);
    ///const Proxy* lastProxy = std::upper_bound(firstProxy, endProxy, upperTag);
    let lastProxy = std_upper_bound(this.m_proxyBuffer.data, beginProxy, endProxy, upperTag, b2ParticleSystem.Proxy.CompareTagProxy);

    b2Assert(beginProxy <= firstProxy);
    b2Assert(firstProxy <= lastProxy);
    b2Assert(lastProxy <= endProxy);

    return new b2ParticleSystem.InsideBoundsEnumerator(this, lowerTag, upperTag, firstProxy, lastProxy);
  }

  UpdateAllParticleFlags(): void {
    this.m_allParticleFlags = 0;
    for (let i = 0; i < this.m_count; i++) {
      this.m_allParticleFlags |= this.m_flagsBuffer.data[i];
    }
    this.m_needsUpdateAllParticleFlags = false;
  }

  UpdateAllGroupFlags(): void {
    this.m_allGroupFlags = 0;
    for (let group = this.m_groupList; group; group = group.GetNext()) {
      this.m_allGroupFlags |= group.m_groupFlags;
    }
    this.m_needsUpdateAllGroupFlags = false;
  }

  AddContact(a: number, b: number, contacts: b2GrowableBuffer<b2ParticleContact>): void {
    let s_d = b2ParticleSystem.AddContact_s_d;
    let pos_data = this.m_positionBuffer.data;
    b2Assert(contacts === this.m_contactBuffer);
    ///b2Vec2 d = m_positionBuffer.data[b] - m_positionBuffer.data[a];
    let d = b2Vec2.SubVV(pos_data[b], pos_data[a], s_d);
    let distBtParticlesSq = b2Vec2.DotVV(d, d);
    if (distBtParticlesSq < this.m_squaredDiameter) {
      let invD = b2InvSqrt(distBtParticlesSq);
      if (!isFinite(invD)) {
        invD = 1.98177537e+019;
      }
      ///b2ParticleContact& contact = contacts.Append();
      let contact = this.m_contactBuffer.data[this.m_contactBuffer.Append()];
      contact.indexA = a;
      contact.indexB = b;
      contact.flags = this.m_flagsBuffer.data[a] | this.m_flagsBuffer.data[b];
      contact.weight = 1 - distBtParticlesSq * invD * this.m_inverseDiameter;
      ///contact.SetNormal(invD * d);
      b2Vec2.MulSV(invD, d, contact.normal);
    }
  }
  static AddContact_s_d = new b2Vec2();

  FindContacts_Reference(contacts: b2GrowableBuffer<b2ParticleContact>): void {
    b2Assert(contacts === this.m_contactBuffer);
    let beginProxy = 0;
    let endProxy = this.m_proxyBuffer.count;

    this.m_contactBuffer.count = 0;
    for (let a = beginProxy, c = beginProxy; a < endProxy; a++) {
      let rightTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, 1, 0);
      for (let b = a + 1; b < endProxy; b++) {
        if (rightTag < this.m_proxyBuffer.data[b].tag) break;
        this.AddContact(this.m_proxyBuffer.data[a].index, this.m_proxyBuffer.data[b].index, this.m_contactBuffer);
      }
      let bottomLeftTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, -1, 1);
      for (; c < endProxy; c++) {
        if (bottomLeftTag <= this.m_proxyBuffer.data[c].tag) break;
      }
      let bottomRightTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, 1, 1);
      for (let b = c; b < endProxy; b++) {
        if (bottomRightTag < this.m_proxyBuffer.data[b].tag) break;
        this.AddContact(this.m_proxyBuffer.data[a].index, this.m_proxyBuffer.data[b].index, this.m_contactBuffer);
      }
    }
  }

  ///void ReorderForFindContact(FindContactInput* reordered, int alignedCount) const;
  ///void GatherChecksOneParticle(const uint32 bound, const int startIndex, const int particleIndex, int* nextUncheckedIndex, b2GrowableBuffer<FindContactCheck>& checks) const;
  ///void GatherChecks(b2GrowableBuffer<FindContactCheck>& checks) const;
  ///void FindContacts_Simd(b2GrowableBuffer<b2ParticleContact>& contacts) const;

  FindContacts(contacts: b2GrowableBuffer<b2ParticleContact>): void {
    this.FindContacts_Reference(contacts);
  }

  ///static void UpdateProxyTags(const uint32* const tags, b2GrowableBuffer<Proxy>& proxies);
  ///static bool ProxyBufferHasIndex(int32 index, const Proxy* const a, int count);
  ///static int NumProxiesWithSameTag(const Proxy* const a, const Proxy* const b, int count);
  ///static bool AreProxyBuffersTheSame(const b2GrowableBuffer<Proxy>& a, const b2GrowableBuffer<Proxy>& b);

  UpdateProxies_Reference(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void {
    b2Assert(proxies === this.m_proxyBuffer);
    let pos_data = this.m_positionBuffer.data;
    let inv_diam = this.m_inverseDiameter;
    for (let k = 0; k < this.m_proxyBuffer.count; ++k) {
      let proxy = this.m_proxyBuffer.data[k];
      let i = proxy.index;
      let p = pos_data[i];
      proxy.tag = b2ParticleSystem.computeTag(inv_diam * p.x, inv_diam * p.y);
    }
  }

  ///void UpdateProxies_Simd(b2GrowableBuffer<Proxy>& proxies) const;

  UpdateProxies(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void {
    this.UpdateProxies_Reference(proxies);
  }

  SortProxies(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void {
    b2Assert(proxies === this.m_proxyBuffer);

    ///std::sort(proxies.Begin(), proxies.End());
    std_sort(this.m_proxyBuffer.data, 0, this.m_proxyBuffer.count, b2ParticleSystem.Proxy.CompareProxyProxy);
  }

  FilterContacts(contacts: b2GrowableBuffer<b2ParticleContact>): void {
    // Optionally filter the contact.
    let contactFilter = this.GetParticleContactFilter();
    if (contactFilter === null)
      return;

    /// contacts.RemoveIf(b2ParticleContactRemovePredicate(this, contactFilter));
    b2Assert(contacts === this.m_contactBuffer);
    let system = this;
    let predicate = function(contact: b2ParticleContact): boolean {
      return (contact.flags & b2ParticleFlag.b2_particleContactFilterParticle) && !contactFilter.ShouldCollideParticleParticle(system, contact.indexA, contact.indexB);
    };
    this.m_contactBuffer.RemoveIf(predicate);
  }

  NotifyContactListenerPreContact(particlePairs: b2ParticleSystem.b2ParticlePairSet): void {
    let contactListener = this.GetParticleContactListener();
    if (contactListener === null)
      return;

    ///particlePairs.Initialize(m_contactBuffer.Begin(), m_contactBuffer.GetCount(), GetFlagsBuffer());
    particlePairs.Initialize(this.m_contactBuffer, this.m_flagsBuffer);

    throw new Error(); // TODO: notify
  }

  NotifyContactListenerPostContact(particlePairs: b2ParticleSystem.b2ParticlePairSet): void {
    let contactListener = this.GetParticleContactListener();
    if (contactListener === null)
      return;

    // Loop through all new contacts, reporting any new ones, and
    // "invalidating" the ones that still exist.
    ///const b2ParticleContact* const endContact = m_contactBuffer.End();
    ///for (b2ParticleContact* contact = m_contactBuffer.Begin(); contact < endContact; ++contact)
    for (let k = 0; k < this.m_contactBuffer.count; ++k) {
      let contact = this.m_contactBuffer.data[k];
      ///ParticlePair pair;
      ///pair.first = contact.GetIndexA();
      ///pair.second = contact.GetIndexB();
      ///const int32 itemIndex = particlePairs.Find(pair);
      let itemIndex = -1; // TODO
      if (itemIndex >= 0) {
        // Already touching, ignore this contact.
        particlePairs.Invalidate(itemIndex);
      } else {
        // Just started touching, inform the listener.
        contactListener.BeginContactParticleParticle(this, contact);
      }
    }

    // Report particles that are no longer touching.
    // That is, any pairs that were not invalidated above.
    ///const int32 pairCount = particlePairs.GetCount();
    ///const ParticlePair* const pairs = particlePairs.GetBuffer();
    ///const int8* const valid = particlePairs.GetValidBuffer();
    ///for (int32 i = 0; i < pairCount; ++i)
    ///{
    ///  if (valid[i])
    ///  {
    ///    contactListener.EndContactParticleParticle(this, pairs[i].first, pairs[i].second);
    ///  }
    ///}

    throw new Error(); // TODO: notify
  }

  static b2ParticleContactIsZombie(contact: b2ParticleContact): boolean {
    return (contact.flags & b2ParticleFlag.b2_zombieParticle) === b2ParticleFlag.b2_zombieParticle;
  }

  UpdateContacts(exceptZombie: boolean): void {
    this.UpdateProxies(this.m_proxyBuffer);
    this.SortProxies(this.m_proxyBuffer);

    ///b2ParticlePairSet particlePairs(&this.m_world.m_stackAllocator);
    let particlePairs = new b2ParticleSystem.b2ParticlePairSet(); // TODO: static
    this.NotifyContactListenerPreContact(particlePairs);

    this.FindContacts(this.m_contactBuffer);
    this.FilterContacts(this.m_contactBuffer);

    this.NotifyContactListenerPostContact(particlePairs);

    if (exceptZombie) {
      this.m_contactBuffer.RemoveIf(b2ParticleSystem.b2ParticleContactIsZombie);
    }
  }

  NotifyBodyContactListenerPreContact(fixtureSet: b2ParticleSystem.FixtureParticleSet): void {
    let contactListener = this.GetFixtureContactListener();
    if (contactListener === null)
      return;

    ///fixtureSet.Initialize(m_bodyContactBuffer.Begin(), m_bodyContactBuffer.GetCount(), GetFlagsBuffer());
    fixtureSet.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer);

    throw new Error(); // TODO: notify
  }

  NotifyBodyContactListenerPostContact(fixtureSet: b2ParticleSystem.FixtureParticleSet): void {
    let contactListener = this.GetFixtureContactListener();
    if (contactListener === null)
      return;

    // Loop through all new contacts, reporting any new ones, and
    // "invalidating" the ones that still exist.
    ///for (b2ParticleBodyContact* contact = m_bodyContactBuffer.Begin(); contact !== m_bodyContactBuffer.End(); ++contact)
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      b2Assert(contact !== null);
      ///FixtureParticle fixtureParticleToFind;
      ///fixtureParticleToFind.first = contact.fixture;
      ///fixtureParticleToFind.second = contact.index;
      ///const int32 index = fixtureSet.Find(fixtureParticleToFind);
      let index = -1; // TODO
      if (index >= 0) {
        // Already touching remove this from the set.
        fixtureSet.Invalidate(index);
      } else {
        // Just started touching, report it!
        contactListener.BeginContactFixtureParticle(this, contact);
      }
    }

    // If the contact listener is enabled, report all fixtures that are no
    // longer in contact with particles.
    ///const FixtureParticle* const fixtureParticles = fixtureSet.GetBuffer();
    ///const int8* const fixtureParticlesValid = fixtureSet.GetValidBuffer();
    ///const int32 fixtureParticleCount = fixtureSet.GetCount();
    ///for (int32 i = 0; i < fixtureParticleCount; ++i)
    ///{
    ///  if (fixtureParticlesValid[i])
    ///  {
    ///    const FixtureParticle* const fixtureParticle = &fixtureParticles[i];
    ///    contactListener.EndContactFixtureParticle(fixtureParticle.first, this, fixtureParticle.second);
    ///  }
    ///}

    throw new Error(); // TODO: notify
  }

  UpdateBodyContacts(): void {
    let s_aabb = b2ParticleSystem.UpdateBodyContacts_s_aabb;

    // If the particle contact listener is enabled, generate a set of
    // fixture / particle contacts.
    ///FixtureParticleSet fixtureSet(&m_world.m_stackAllocator);
    let fixtureSet = new b2ParticleSystem.FixtureParticleSet(); // TODO: static
    this.NotifyBodyContactListenerPreContact(fixtureSet);

    if (this.m_stuckThreshold > 0) {
      let particleCount = this.GetParticleCount();
      for (let i = 0; i < particleCount; i++) {
        // Detect stuck particles, see comment in
        // b2ParticleSystem::DetectStuckParticle()
        this.m_bodyContactCountBuffer.data[i] = 0;
        if (this.m_timestamp > (this.m_lastBodyContactStepBuffer.data[i] + 1)) {
          this.m_consecutiveContactStepsBuffer.data[i] = 0;
        }
      }
    }
    this.m_bodyContactBuffer.SetCount(0);
    this.m_stuckParticleBuffer.SetCount(0);

    let aabb = s_aabb;
    this.ComputeAABB(aabb);

    let callback = new b2ParticleSystem.UpdateBodyContactsCallback(this, this.GetFixtureContactFilter());
    this.m_world.QueryAABB(callback, aabb);

    if (this.m_def.strictContactCheck) {
      this.RemoveSpuriousBodyContacts();
    }

    this.NotifyBodyContactListenerPostContact(fixtureSet);
  }
  static UpdateBodyContacts_s_aabb = new b2AABB();

  Solve(step: b2TimeStep): void {
    let s_subStep = b2ParticleSystem.Solve_s_subStep;
    if (this.m_count === 0) {
      return;
    }
    // If particle lifetimes are enabled, destroy particles that are too old.
    if (this.m_expirationTimeBuffer.data) {
      this.SolveLifetimes(step);
    }
    if (this.m_allParticleFlags & b2ParticleFlag.b2_zombieParticle) {
      this.SolveZombie();
    }
    if (this.m_needsUpdateAllParticleFlags) {
      this.UpdateAllParticleFlags();
    }
    if (this.m_needsUpdateAllGroupFlags) {
      this.UpdateAllGroupFlags();
    }
    if (this.m_paused) {
      return;
    }
    for (this.m_iterationIndex = 0; this.m_iterationIndex < step.particleIterations; this.m_iterationIndex++) {
      ++this.m_timestamp;
      let subStep = s_subStep.Copy(step);
      subStep.dt /= step.particleIterations;
      subStep.inv_dt *= step.particleIterations;
      this.UpdateContacts(false);
      this.UpdateBodyContacts();
      this.ComputeWeight();
      if (this.m_allGroupFlags & b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth) {
        this.ComputeDepth();
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_reactiveParticle) {
        this.UpdatePairsAndTriadsWithReactiveParticles();
      }
      if (this.m_hasForce) {
        this.SolveForce(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_viscousParticle) {
        this.SolveViscous();
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_repulsiveParticle) {
        this.SolveRepulsive(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_powderParticle) {
        this.SolvePowder(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_tensileParticle) {
        this.SolveTensile(subStep);
      }
      if (this.m_allGroupFlags & b2ParticleGroupFlag.b2_solidParticleGroup) {
        this.SolveSolid(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_colorMixingParticle) {
        this.SolveColorMixing();
      }
      this.SolveGravity(subStep);
      if (this.m_allParticleFlags & b2ParticleFlag.b2_staticPressureParticle) {
        this.SolveStaticPressure(subStep);
      }
      this.SolvePressure(subStep);
      this.SolveDamping(subStep);
      if (this.m_allParticleFlags & b2ParticleSystem.k_extraDampingFlags) {
        this.SolveExtraDamping();
      }
      // SolveElastic and SolveSpring refer the current velocities for
      // numerical stability, they should be called as late as possible.
      if (this.m_allParticleFlags & b2ParticleFlag.b2_elasticParticle) {
        this.SolveElastic(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_springParticle) {
        this.SolveSpring(subStep);
      }
      this.LimitVelocity(subStep);
      if (this.m_allGroupFlags & b2ParticleGroupFlag.b2_rigidParticleGroup) {
        this.SolveRigidDamping();
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_barrierParticle) {
        this.SolveBarrier(subStep);
      }
      // SolveCollision, SolveRigid and SolveWall should be called after
      // other force functions because they may require particles to have
      // specific velocities.
      this.SolveCollision(subStep);
      if (this.m_allGroupFlags & b2ParticleGroupFlag.b2_rigidParticleGroup) {
        this.SolveRigid(subStep);
      }
      if (this.m_allParticleFlags & b2ParticleFlag.b2_wallParticle) {
        this.SolveWall();
      }
      // The particle positions can be updated only at the end of substep.
      for (let i = 0; i < this.m_count; i++) {
        ///m_positionBuffer.data[i] += subStep.dt * m_velocityBuffer.data[i];
        this.m_positionBuffer.data[i].SelfMulAdd(subStep.dt, this.m_velocityBuffer.data[i]);
      }
    }
  }
  static Solve_s_subStep = new b2TimeStep();

  SolveCollision(step: b2TimeStep): void {
    let s_aabb = b2ParticleSystem.SolveCollision_s_aabb;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;

    // This function detects particles which are crossing boundary of bodies
    // and modifies velocities of them so that they will move just in front of
    // boundary. This function function also applies the reaction force to
    // bodies as precisely as the numerical stability is kept.
    let aabb = s_aabb;
    aabb.lowerBound.x = +b2_maxFloat;
    aabb.lowerBound.y = +b2_maxFloat;
    aabb.upperBound.x = -b2_maxFloat;
    aabb.upperBound.y = -b2_maxFloat;
    for (let i = 0; i < this.m_count; i++) {
      let v = vel_data[i];
      let p1 = pos_data[i];
      ///let p2 = p1 + step.dt * v;
      let p2_x = p1.x + step.dt * v.x;
      let p2_y = p1.y + step.dt * v.y;
      ///aabb.lowerBound = b2Min(aabb.lowerBound, b2Min(p1, p2));
      aabb.lowerBound.x = b2Min(aabb.lowerBound.x, b2Min(p1.x, p2_x));
      aabb.lowerBound.y = b2Min(aabb.lowerBound.y, b2Min(p1.y, p2_y));
      ///aabb.upperBound = b2Max(aabb.upperBound, b2Max(p1, p2));
      aabb.upperBound.x = b2Max(aabb.upperBound.x, b2Max(p1.x, p2_x));
      aabb.upperBound.y = b2Max(aabb.upperBound.y, b2Max(p1.y, p2_y));
    }
    let callback = new b2ParticleSystem.SolveCollisionCallback(this, step);
    this.m_world.QueryAABB(callback, aabb);
  }
  static SolveCollision_s_aabb = new b2AABB();

  LimitVelocity(step: b2TimeStep): void {
    let vel_data = this.m_velocityBuffer.data;
    let criticalVelocitySquared = this.GetCriticalVelocitySquared(step);
    for (let i = 0; i < this.m_count; i++) {
      let v = vel_data[i];
      let v2 = b2Vec2.DotVV(v, v);
      if (v2 > criticalVelocitySquared) {
        ///v *= b2Sqrt(criticalVelocitySquared / v2);
        v.SelfMul(b2Sqrt(criticalVelocitySquared / v2));
      }
    }
  }

  SolveGravity(step: b2TimeStep): void {
    let s_gravity = b2ParticleSystem.SolveGravity_s_gravity;
    let vel_data = this.m_velocityBuffer.data;
    ///b2Vec2 gravity = step.dt * m_def.gravityScale * m_world.GetGravity();
    let gravity = b2Vec2.MulSV(step.dt * this.m_def.gravityScale, this.m_world.GetGravity(), s_gravity);
    for (let i = 0; i < this.m_count; i++) {
      vel_data[i].SelfAdd(gravity);
    }
  }
  static SolveGravity_s_gravity = new b2Vec2();

  SolveBarrier(step: b2TimeStep): void {
    let s_aabb = b2ParticleSystem.SolveBarrier_s_aabb;
    let s_va = b2ParticleSystem.SolveBarrier_s_va;
    let s_vb = b2ParticleSystem.SolveBarrier_s_vb;
    let s_pba = b2ParticleSystem.SolveBarrier_s_pba;
    let s_vba = b2ParticleSystem.SolveBarrier_s_vba;
    let s_vc = b2ParticleSystem.SolveBarrier_s_vc;
    let s_pca = b2ParticleSystem.SolveBarrier_s_pca;
    let s_vca = b2ParticleSystem.SolveBarrier_s_vca;
    let s_qba = b2ParticleSystem.SolveBarrier_s_qba;
    let s_qca = b2ParticleSystem.SolveBarrier_s_qca;
    let s_dv = b2ParticleSystem.SolveBarrier_s_dv;
    let s_f = b2ParticleSystem.SolveBarrier_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    // If a particle is passing between paired barrier particles,
    // its velocity will be decelerated to avoid passing.
    for (let i = 0; i < this.m_count; i++) {
      let flags = this.m_flagsBuffer.data[i];
      ///if ((flags & b2ParticleSystem.k_barrierWallFlags) === b2ParticleSystem.k_barrierWallFlags)
      if ((flags & b2ParticleSystem.k_barrierWallFlags) !== 0) {
        vel_data[i].SetZero();
      }
    }
    let tmax = b2_barrierCollisionTime * step.dt;
    let mass = this.GetParticleMass();
    for (let k = 0; k < this.m_pairBuffer.count; k++) {
      let pair = this.m_pairBuffer.data[k];
      if (pair.flags & b2ParticleFlag.b2_barrierParticle) {
        let a = pair.indexA;
        let b = pair.indexB;
        let pa = pos_data[a];
        let pb = pos_data[b];
        /// b2AABB aabb;
        let aabb = s_aabb;
        ///aabb.lowerBound = b2Min(pa, pb);
        b2Vec2.MinV(pa, pb, aabb.lowerBound);
        ///aabb.upperBound = b2Max(pa, pb);
        b2Vec2.MaxV(pa, pb, aabb.upperBound);
        let aGroup = this.m_groupBuffer[a];
        let bGroup = this.m_groupBuffer[b];
        ///b2Vec2 va = GetLinearVelocity(aGroup, a, pa);
        let va = this.GetLinearVelocity(aGroup, a, pa, s_va);
        ///b2Vec2 vb = GetLinearVelocity(bGroup, b, pb);
        let vb = this.GetLinearVelocity(bGroup, b, pb, s_vb);
        ///b2Vec2 pba = pb - pa;
        let pba = b2Vec2.SubVV(pb, pa, s_pba);
        ///b2Vec2 vba = vb - va;
        let vba = b2Vec2.SubVV(vb, va, s_vba);
        ///InsideBoundsEnumerator enumerator = GetInsideBoundsEnumerator(aabb);
        let enumerator = this.GetInsideBoundsEnumerator(aabb);
        let c: number;
        while ((c = enumerator.GetNext()) >= 0) {
          let pc = pos_data[c];
          let cGroup = this.m_groupBuffer[c];
          if (aGroup !== cGroup && bGroup !== cGroup) {
            ///b2Vec2 vc = GetLinearVelocity(cGroup, c, pc);
            let vc = this.GetLinearVelocity(cGroup, c, pc, s_vc);
            // Solve the equation below:
            //   (1-s)*(pa+t*va)+s*(pb+t*vb) = pc+t*vc
            // which expresses that the particle c will pass a line
            // connecting the particles a and b at the time of t.
            // if s is between 0 and 1, c will pass between a and b.
            ///b2Vec2 pca = pc - pa;
            let pca = b2Vec2.SubVV(pc, pa, s_pca);
            ///b2Vec2 vca = vc - va;
            let vca = b2Vec2.SubVV(vc, va, s_vca);
            let e2 = b2Vec2.CrossVV(vba, vca);
            let e1 = b2Vec2.CrossVV(pba, vca) - b2Vec2.CrossVV(pca, vba);
            let e0 = b2Vec2.CrossVV(pba, pca);
            let s: number, t: number;
            ///b2Vec2 qba, qca;
            let qba = s_qba,
              qca = s_qca;
            if (e2 === 0) {
              if (e1 === 0) continue;
              t = -e0 / e1;
              if (!(t >= 0 && t < tmax)) continue;
              ///qba = pba + t * vba;
              b2Vec2.AddVMulSV(pba, t, vba, qba);
              ///qca = pca + t * vca;
              b2Vec2.AddVMulSV(pca, t, vca, qca);
              s = b2Vec2.DotVV(qba, qca) / b2Vec2.DotVV(qba, qba);
              if (!(s >= 0 && s <= 1)) continue;
            } else {
              let det = e1 * e1 - 4 * e0 * e2;
              if (det < 0) continue;
              let sqrtDet = b2Sqrt(det);
              let t1 = (-e1 - sqrtDet) / (2 * e2);
              let t2 = (-e1 + sqrtDet) / (2 * e2);
              ///if (t1 > t2) b2Swap(t1, t2);
              if (t1 > t2) {
                let tmp = t1;
                t1 = t2;
                t2 = tmp;
              }
              t = t1;
              ///qba = pba + t * vba;
              b2Vec2.AddVMulSV(pba, t, vba, qba);
              ///qca = pca + t * vca;
              b2Vec2.AddVMulSV(pca, t, vca, qca);
              ///s = b2Dot(qba, qca) / b2Dot(qba, qba);
              s = b2Vec2.DotVV(qba, qca) / b2Vec2.DotVV(qba, qba);
              if (!(t >= 0 && t < tmax && s >= 0 && s <= 1)) {
                t = t2;
                if (!(t >= 0 && t < tmax)) continue;
                ///qba = pba + t * vba;
                b2Vec2.AddVMulSV(pba, t, vba, qba);
                ///qca = pca + t * vca;
                b2Vec2.AddVMulSV(pca, t, vca, qca);
                ///s = b2Dot(qba, qca) / b2Dot(qba, qba);
                s = b2Vec2.DotVV(qba, qca) / b2Vec2.DotVV(qba, qba);
                if (!(s >= 0 && s <= 1)) continue;
              }
            }
            // Apply a force to particle c so that it will have the
            // interpolated velocity at the collision point on line ab.
            ///b2Vec2 dv = va + s * vba - vc;
            let dv = s_dv;
            dv.x = va.x + s * vba.x - vc.x;
            dv.y = va.y + s * vba.y - vc.y;
            ///b2Vec2 f = GetParticleMass() * dv;
            let f = b2Vec2.MulSV(mass, dv, s_f);
            if (this.IsRigidGroup(cGroup)) {
              // If c belongs to a rigid group, the force will be
              // distributed in the group.
              let mass = cGroup.GetMass();
              let inertia = cGroup.GetInertia();
              if (mass > 0) {
                ///cGroup.m_linearVelocity += 1 / mass * f;
                cGroup.m_linearVelocity.SelfMulAdd(1 / mass, f);
              }
              if (inertia > 0) {
                ///cGroup.m_angularVelocity += b2Cross(pc - cGroup.GetCenter(), f) / inertia;
                cGroup.m_angularVelocity += b2Vec2.CrossVV(
                  b2Vec2.SubVV(pc, cGroup.GetCenter(), b2Vec2.s_t0),
                  f) / inertia;
              }
            } else {
              ///m_velocityBuffer.data[c] += dv;
              vel_data[c].SelfAdd(dv);
            }
            // Apply a reversed force to particle c after particle
            // movement so that momentum will be preserved.
            ///ParticleApplyForce(c, -step.inv_dt * f);
            this.ParticleApplyForce(c, f.SelfMul(-step.inv_dt));
          }
        }
      }
    }
  }
  static SolveBarrier_s_aabb = new b2AABB();
  static SolveBarrier_s_va = new b2Vec2();
  static SolveBarrier_s_vb = new b2Vec2();
  static SolveBarrier_s_pba = new b2Vec2();
  static SolveBarrier_s_vba = new b2Vec2();
  static SolveBarrier_s_vc = new b2Vec2();
  static SolveBarrier_s_pca = new b2Vec2();
  static SolveBarrier_s_vca = new b2Vec2();
  static SolveBarrier_s_qba = new b2Vec2();
  static SolveBarrier_s_qca = new b2Vec2();
  static SolveBarrier_s_dv = new b2Vec2();
  static SolveBarrier_s_f = new b2Vec2();

  SolveStaticPressure(step: b2TimeStep): void {
    this.m_staticPressureBuffer = this.RequestBuffer(this.m_staticPressureBuffer);
    let criticalPressure = this.GetCriticalPressure(step);
    let pressurePerWeight = this.m_def.staticPressureStrength * criticalPressure;
    let maxPressure = b2_maxParticlePressure * criticalPressure;
    let relaxation = this.m_def.staticPressureRelaxation;
    /// Compute pressure satisfying the modified Poisson equation:
    ///   Sum_for_j((p_i - p_j) * w_ij) + relaxation * p_i =
    ///   pressurePerWeight * (w_i - b2_minParticleWeight)
    /// by iterating the calculation:
    ///   p_i = (Sum_for_j(p_j * w_ij) + pressurePerWeight *
    ///         (w_i - b2_minParticleWeight)) / (w_i + relaxation)
    /// where
    ///   p_i and p_j are static pressure of particle i and j
    ///   w_ij is contact weight between particle i and j
    ///   w_i is sum of contact weight of particle i
    for (let t = 0; t < this.m_def.staticPressureIterations; t++) {
      ///memset(m_accumulationBuffer, 0, sizeof(*m_accumulationBuffer) * m_count);
      for (let i = 0; i < this.m_count; i++) {
        this.m_accumulationBuffer[i] = 0;
      }
      for (let k = 0; k < this.m_contactBuffer.count; k++) {
        let contact = this.m_contactBuffer.data[k];
        if (contact.flags & b2ParticleFlag.b2_staticPressureParticle) {
          let a = contact.indexA;
          let b = contact.indexB;
          let w = contact.weight;
          this.m_accumulationBuffer[a] += w * this.m_staticPressureBuffer[b]; // a <- b
          this.m_accumulationBuffer[b] += w * this.m_staticPressureBuffer[a]; // b <- a
        }
      }
      for (let i = 0; i < this.m_count; i++) {
        let w = this.m_weightBuffer[i];
        if (this.m_flagsBuffer.data[i] & b2ParticleFlag.b2_staticPressureParticle) {
          let wh = this.m_accumulationBuffer[i];
          let h =
            (wh + pressurePerWeight * (w - b2_minParticleWeight)) /
            (w + relaxation);
          this.m_staticPressureBuffer[i] = b2Clamp(h, 0.0, maxPressure);
        } else {
          this.m_staticPressureBuffer[i] = 0;
        }
      }
    }
  }

  ComputeWeight(): void {
    // calculates the sum of contact-weights for each particle
    // that means dimensionless density
    ///memset(m_weightBuffer, 0, sizeof(*m_weightBuffer) * m_count);
    for (let k = 0; k < this.m_count; k++) {
      this.m_weightBuffer[k] = 0;
    }
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      let w = contact.weight;
      this.m_weightBuffer[a] += w;
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let w = contact.weight;
      this.m_weightBuffer[a] += w;
      this.m_weightBuffer[b] += w;
    }
  }

  SolvePressure(step: b2TimeStep): void {
    let s_f = b2ParticleSystem.SolvePressure_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    // calculates pressure as a linear function of density
    let criticalPressure = this.GetCriticalPressure(step);
    let pressurePerWeight = this.m_def.pressureStrength * criticalPressure;
    let maxPressure = b2_maxParticlePressure * criticalPressure;
    for (let i = 0; i < this.m_count; i++) {
      let w = this.m_weightBuffer[i];
      let h = pressurePerWeight * b2Max(0.0, w - b2_minParticleWeight);
      this.m_accumulationBuffer[i] = b2Min(h, maxPressure);
    }
    // ignores particles which have their own repulsive force
    if (this.m_allParticleFlags & b2ParticleSystem.k_noPressureFlags) {
      for (let i = 0; i < this.m_count; i++) {
        if (this.m_flagsBuffer.data[i] & b2ParticleSystem.k_noPressureFlags) {
          this.m_accumulationBuffer[i] = 0;
        }
      }
    }
    // static pressure
    if (this.m_allParticleFlags & b2ParticleFlag.b2_staticPressureParticle) {
      b2Assert(this.m_staticPressureBuffer !== null);
      for (let i = 0; i < this.m_count; i++) {
        if (this.m_flagsBuffer.data[i] & b2ParticleFlag.b2_staticPressureParticle) {
          this.m_accumulationBuffer[i] += this.m_staticPressureBuffer[i];
        }
      }
    }
    // applies pressure between each particles in contact
    let velocityPerPressure = step.dt / (this.m_def.density * this.m_particleDiameter);
    let inv_mass = this.GetParticleInvMass();
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      let b = contact.body;
      let w = contact.weight;
      let m = contact.mass;
      let n = contact.normal;
      let p = pos_data[a];
      let h = this.m_accumulationBuffer[a] + pressurePerWeight * w;
      ///b2Vec2 f = velocityPerPressure * w * m * h * n;
      let f = b2Vec2.MulSV(velocityPerPressure * w * m * h, n, s_f);
      ///m_velocityBuffer.data[a] -= GetParticleInvMass() * f;
      vel_data[a].SelfMulSub(inv_mass, f);
      b.ApplyLinearImpulse(f, p, true);
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let w = contact.weight;
      let n = contact.normal;
      let h = this.m_accumulationBuffer[a] + this.m_accumulationBuffer[b];
      ///b2Vec2 f = velocityPerPressure * w * h * n;
      let f = b2Vec2.MulSV(velocityPerPressure * w * h, n, s_f);
      ///m_velocityBuffer.data[a] -= f;
      vel_data[a].SelfSub(f);
      ///m_velocityBuffer.data[b] += f;
      vel_data[b].SelfAdd(f);
    }
  }
  static SolvePressure_s_f = new b2Vec2();

  SolveDamping(step: b2TimeStep): void {
    let s_v = b2ParticleSystem.SolveDamping_s_v;
    let s_f = b2ParticleSystem.SolveDamping_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    // reduces normal velocity of each contact
    let linearDamping = this.m_def.dampingStrength;
    let quadraticDamping = 1 / this.GetCriticalVelocity(step);
    let inv_mass = this.GetParticleInvMass();
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      let b = contact.body;
      let w = contact.weight;
      let m = contact.mass;
      let n = contact.normal;
      let p = pos_data[a];
      ///b2Vec2 v = b.GetLinearVelocityFromWorldPoint(p) - m_velocityBuffer.data[a];
      let v = b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Vec2.s_t0), vel_data[a], s_v);
      let vn = b2Vec2.DotVV(v, n);
      if (vn < 0) {
        let damping = b2Max(linearDamping * w, b2Min(-quadraticDamping * vn, 0.5));
        ///b2Vec2 f = damping * m * vn * n;
        let f = b2Vec2.MulSV(damping * m * vn, n, s_f);
        ///m_velocityBuffer.data[a] += GetParticleInvMass() * f;
        vel_data[a].SelfMulAdd(inv_mass, f);
        ///b.ApplyLinearImpulse(-f, p, true);
        b.ApplyLinearImpulse(f.SelfNeg(), p, true);
      }
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let w = contact.weight;
      let n = contact.normal;
      ///b2Vec2 v = m_velocityBuffer.data[b] - m_velocityBuffer.data[a];
      let v = b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
      let vn = b2Vec2.DotVV(v, n);
      if (vn < 0) {
        ///float32 damping = b2Max(linearDamping * w, b2Min(- quadraticDamping * vn, 0.5f));
        let damping = b2Max(linearDamping * w, b2Min(-quadraticDamping * vn, 0.5));
        ///b2Vec2 f = damping * vn * n;
        let f = b2Vec2.MulSV(damping * vn, n, s_f);
        ///this.m_velocityBuffer.data[a] += f;
        vel_data[a].SelfAdd(f);
        ///this.m_velocityBuffer.data[b] -= f;
        vel_data[b].SelfSub(f);
      }
    }
  }
  static SolveDamping_s_v = new b2Vec2();
  static SolveDamping_s_f = new b2Vec2();

  SolveRigidDamping(): void {
    let s_t0 = b2ParticleSystem.SolveRigidDamping_s_t0;
    let s_t1 = b2ParticleSystem.SolveRigidDamping_s_t1;
    let s_p = b2ParticleSystem.SolveRigidDamping_s_p;
    let s_v = b2ParticleSystem.SolveRigidDamping_s_v;
    let invMassA = [0.0],
      invInertiaA = [0.0],
      tangentDistanceA = [0.0]; // TODO: static
    let invMassB = [0.0],
      invInertiaB = [0.0],
      tangentDistanceB = [0.0]; // TODO: static
    // Apply impulse to rigid particle groups colliding with other objects
    // to reduce relative velocity at the colliding point.
    let pos_data = this.m_positionBuffer.data;
    let damping = this.m_def.dampingStrength;
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      let aGroup = this.m_groupBuffer[a];
      if (this.IsRigidGroup(aGroup)) {
        let b = contact.body;
        let n = contact.normal;
        let w = contact.weight;
        let p = pos_data[a];
        ///b2Vec2 v = b.GetLinearVelocityFromWorldPoint(p) - aGroup.GetLinearVelocityFromWorldPoint(p);
        let v = b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, s_t0), aGroup.GetLinearVelocityFromWorldPoint(p, s_t1), s_v);
        let vn = b2Vec2.DotVV(v, n);
        if (vn < 0) {
          // The group's average velocity at particle position 'p' is pushing
          // the particle into the body.
          ///this.InitDampingParameterWithRigidGroupOrParticle(&invMassA, &invInertiaA, &tangentDistanceA, true, aGroup, a, p, n);
          this.InitDampingParameterWithRigidGroupOrParticle(invMassA, invInertiaA, tangentDistanceA, true, aGroup, a, p, n);
          // Calculate b.m_I from public functions of b2Body.
          ///this.InitDampingParameter(&invMassB, &invInertiaB, &tangentDistanceB, b.GetMass(), b.GetInertia() - b.GetMass() * b.GetLocalCenter().LengthSquared(), b.GetWorldCenter(), p, n);
          this.InitDampingParameter(invMassB, invInertiaB, tangentDistanceB, b.GetMass(), b.GetInertia() - b.GetMass() * b.GetLocalCenter().LengthSquared(), b.GetWorldCenter(), p, n);
          ///float32 f = damping * b2Min(w, 1.0) * this.ComputeDampingImpulse(invMassA, invInertiaA, tangentDistanceA, invMassB, invInertiaB, tangentDistanceB, vn);
          let f = damping * b2Min(w, 1.0) * this.ComputeDampingImpulse(invMassA[0], invInertiaA[0], tangentDistanceA[0], invMassB[0], invInertiaB[0], tangentDistanceB[0], vn);
          ///this.ApplyDamping(invMassA, invInertiaA, tangentDistanceA, true, aGroup, a, f, n);
          this.ApplyDamping(invMassA[0], invInertiaA[0], tangentDistanceA[0], true, aGroup, a, f, n);
          ///b.ApplyLinearImpulse(-f * n, p, true);
          b.ApplyLinearImpulse(b2Vec2.MulSV(-f, n, b2Vec2.s_t0), p, true);
        }
      }
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      let n = contact.normal;
      let w = contact.weight;
      let aGroup = this.m_groupBuffer[a];
      let bGroup = this.m_groupBuffer[b];
      let aRigid = this.IsRigidGroup(aGroup);
      let bRigid = this.IsRigidGroup(bGroup);
      if (aGroup !== bGroup && (aRigid || bRigid)) {
        ///b2Vec2 p = 0.5f * (this.m_positionBuffer.data[a] + this.m_positionBuffer.data[b]);
        let p = b2Vec2.MidVV(pos_data[a], pos_data[b], s_p);
        ///b2Vec2 v = GetLinearVelocity(bGroup, b, p) - GetLinearVelocity(aGroup, a, p);
        let v = b2Vec2.SubVV(this.GetLinearVelocity(bGroup, b, p, s_t0), this.GetLinearVelocity(aGroup, a, p, s_t1), s_v);
        let vn = b2Vec2.DotVV(v, n);
        if (vn < 0) {
          ///this.InitDampingParameterWithRigidGroupOrParticle(&invMassA, &invInertiaA, &tangentDistanceA, aRigid, aGroup, a, p, n);
          this.InitDampingParameterWithRigidGroupOrParticle(invMassA, invInertiaA, tangentDistanceA, aRigid, aGroup, a, p, n);
          ///this.InitDampingParameterWithRigidGroupOrParticle(&invMassB, &invInertiaB, &tangentDistanceB, bRigid, bGroup, b, p, n);
          this.InitDampingParameterWithRigidGroupOrParticle(invMassB, invInertiaB, tangentDistanceB, bRigid, bGroup, b, p, n);
          ///float32 f = damping * w * this.ComputeDampingImpulse(invMassA, invInertiaA, tangentDistanceA, invMassB, invInertiaB, tangentDistanceB, vn);
          let f = damping * w * this.ComputeDampingImpulse(invMassA[0], invInertiaA[0], tangentDistanceA[0], invMassB[0], invInertiaB[0], tangentDistanceB[0], vn);
          ///this.ApplyDamping(invMassA, invInertiaA, tangentDistanceA, aRigid, aGroup, a, f, n);
          this.ApplyDamping(invMassA[0], invInertiaA[0], tangentDistanceA[0], aRigid, aGroup, a, f, n);
          ///this.ApplyDamping(invMassB, invInertiaB, tangentDistanceB, bRigid, bGroup, b, -f, n);
          this.ApplyDamping(invMassB[0], invInertiaB[0], tangentDistanceB[0], bRigid, bGroup, b, -f, n);
        }
      }
    }
  }
  static SolveRigidDamping_s_t0 = new b2Vec2();
  static SolveRigidDamping_s_t1 = new b2Vec2();
  static SolveRigidDamping_s_p = new b2Vec2();
  static SolveRigidDamping_s_v = new b2Vec2();

  SolveExtraDamping(): void {
    let s_v = b2ParticleSystem.SolveExtraDamping_s_v;
    let s_f = b2ParticleSystem.SolveExtraDamping_s_f;
    let vel_data = this.m_velocityBuffer.data;
    // Applies additional damping force between bodies and particles which can
    // produce strong repulsive force. Applying damping force multiple times
    // is effective in suppressing vibration.
    let pos_data = this.m_positionBuffer.data;
    let inv_mass = this.GetParticleInvMass();
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      if (this.m_flagsBuffer.data[a] & b2ParticleSystem.k_extraDampingFlags) {
        let b = contact.body;
        let m = contact.mass;
        let n = contact.normal;
        let p = pos_data[a];
        ///b2Vec2 v = b.GetLinearVelocityFromWorldPoint(p) - m_velocityBuffer.data[a];
        let v = b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Vec2.s_t0), vel_data[a], s_v);
        ///float32 vn = b2Dot(v, n);
        let vn = b2Vec2.DotVV(v, n);
        if (vn < 0) {
          ///b2Vec2 f = 0.5f * m * vn * n;
          let f = b2Vec2.MulSV(0.5 * m * vn, n, s_f);
          ///m_velocityBuffer.data[a] += GetParticleInvMass() * f;
          vel_data[a].SelfMulAdd(inv_mass, f);
          ///b.ApplyLinearImpulse(-f, p, true);
          b.ApplyLinearImpulse(f.SelfNeg(), p, true);
        }
      }
    }
  }
  static SolveExtraDamping_s_v = new b2Vec2();
  static SolveExtraDamping_s_f = new b2Vec2();

  SolveWall(): void {
    let vel_data = this.m_velocityBuffer.data;
    for (let i = 0; i < this.m_count; i++) {
      if (this.m_flagsBuffer.data[i] & b2ParticleFlag.b2_wallParticle) {
        vel_data[i].SetZero();
      }
    }
  }

  SolveRigid(step: b2TimeStep): void {
    let s_position = b2ParticleSystem.SolveRigid_s_position;
    let s_rotation = b2ParticleSystem.SolveRigid_s_rotation;
    let s_transform = b2ParticleSystem.SolveRigid_s_transform;
    let s_velocityTransform = b2ParticleSystem.SolveRigid_s_velocityTransform;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    for (let group = this.m_groupList; group; group = group.GetNext()) {
      if (group.m_groupFlags & b2ParticleGroupFlag.b2_rigidParticleGroup) {
        group.UpdateStatistics();
        ///b2Rot rotation(step.dt * group.m_angularVelocity);
        let rotation = s_rotation;
        rotation.SetAngle(step.dt * group.m_angularVelocity);
        ///b2Transform transform(group.m_center + step.dt * group.m_linearVelocity - b2Mul(rotation, group.m_center), rotation);
        let position = b2Vec2.AddVV(
          group.m_center,
          b2Vec2.SubVV(
            b2Vec2.MulSV(step.dt, group.m_linearVelocity, b2Vec2.s_t0),
            b2Rot.MulRV(rotation, group.m_center, b2Vec2.s_t1),
            b2Vec2.s_t0),
          s_position);
        let transform = s_transform;
        transform.SetPositionRotation(position, rotation);
        ///group.m_transform = b2Mul(transform, group.m_transform);
        b2Transform.MulXX(transform, group.m_transform, group.m_transform);
        let velocityTransform = s_velocityTransform;
        velocityTransform.p.x = step.inv_dt * transform.p.x;
        velocityTransform.p.y = step.inv_dt * transform.p.y;
        velocityTransform.q.s = step.inv_dt * transform.q.s;
        velocityTransform.q.c = step.inv_dt * (transform.q.c - 1);
        for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
          ///m_velocityBuffer.data[i] = b2Mul(velocityTransform, m_positionBuffer.data[i]);
          b2Transform.MulXV(velocityTransform, pos_data[i], vel_data[i]);
        }
      }
    }
  }
  static SolveRigid_s_position = new b2Vec2();
  static SolveRigid_s_rotation = new b2Rot();
  static SolveRigid_s_transform = new b2Transform();
  static SolveRigid_s_velocityTransform = new b2Transform();

  SolveElastic(step: b2TimeStep): void {
    let s_pa = b2ParticleSystem.SolveElastic_s_pa;
    let s_pb = b2ParticleSystem.SolveElastic_s_pb;
    let s_pc = b2ParticleSystem.SolveElastic_s_pc;
    let s_r = b2ParticleSystem.SolveElastic_s_r;
    let s_t0 = b2ParticleSystem.SolveElastic_s_t0;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    let elasticStrength = step.inv_dt * this.m_def.elasticStrength;
    for (let k = 0; k < this.m_triadBuffer.count; k++) {
      let triad = this.m_triadBuffer.data[k];
      if (triad.flags & b2ParticleFlag.b2_elasticParticle) {
        let a = triad.indexA;
        let b = triad.indexB;
        let c = triad.indexC;
        let oa = triad.pa;
        let ob = triad.pb;
        let oc = triad.pc;
        ///b2Vec2 pa = m_positionBuffer.data[a];
        let pa = s_pa.Copy(pos_data[a]);
        ///b2Vec2 pb = m_positionBuffer.data[b];
        let pb = s_pb.Copy(pos_data[b]);
        ///b2Vec2 pc = m_positionBuffer.data[c];
        let pc = s_pc.Copy(pos_data[c]);
        let va = vel_data[a];
        let vb = vel_data[b];
        let vc = vel_data[c];
        ///pa += step.dt * va;
        pa.SelfMulAdd(step.dt, va);
        ///pb += step.dt * vb;
        pb.SelfMulAdd(step.dt, vb);
        ///pc += step.dt * vc;
        pc.SelfMulAdd(step.dt, vc);
        ///b2Vec2 midPoint = (float32) 1 / 3 * (pa + pb + pc);
        let midPoint_x = (pa.x + pb.x + pc.x) / 3.0;
        let midPoint_y = (pa.y + pb.y + pc.y) / 3.0;
        ///pa -= midPoint;
        pa.x -= midPoint_x;
        pa.y -= midPoint_y;
        ///pb -= midPoint;
        pb.x -= midPoint_x;
        pb.y -= midPoint_y;
        ///pc -= midPoint;
        pc.x -= midPoint_x;
        pc.y -= midPoint_y;
        ///b2Rot r;
        let r = s_r;
        r.s = b2Vec2.CrossVV(oa, pa) + b2Vec2.CrossVV(ob, pb) + b2Vec2.CrossVV(oc, pc);
        r.c = b2Vec2.DotVV(oa, pa) + b2Vec2.DotVV(ob, pb) + b2Vec2.DotVV(oc, pc);
        let r2 = r.s * r.s + r.c * r.c;
        let invR = b2InvSqrt(r2);
        if (!isFinite(invR)) {
          invR = 1.98177537e+019;
        }
        r.s *= invR;
        r.c *= invR;
        ///r.angle = Math.atan2(r.s, r.c); // TODO: optimize
        let strength = elasticStrength * triad.strength;
        ///va += strength * (b2Mul(r, oa) - pa);
        b2Rot.MulRV(r, oa, s_t0);
        b2Vec2.SubVV(s_t0, pa, s_t0);
        b2Vec2.MulSV(strength, s_t0, s_t0);
        va.SelfAdd(s_t0);
        ///vb += strength * (b2Mul(r, ob) - pb);
        b2Rot.MulRV(r, ob, s_t0);
        b2Vec2.SubVV(s_t0, pb, s_t0);
        b2Vec2.MulSV(strength, s_t0, s_t0);
        vb.SelfAdd(s_t0);
        ///vc += strength * (b2Mul(r, oc) - pc);
        b2Rot.MulRV(r, oc, s_t0);
        b2Vec2.SubVV(s_t0, pc, s_t0);
        b2Vec2.MulSV(strength, s_t0, s_t0);
        vc.SelfAdd(s_t0);
      }
    }
  }
  static SolveElastic_s_pa = new b2Vec2();
  static SolveElastic_s_pb = new b2Vec2();
  static SolveElastic_s_pc = new b2Vec2();
  static SolveElastic_s_r = new b2Rot();
  static SolveElastic_s_t0 = new b2Vec2();

  SolveSpring(step: b2TimeStep): void {
    let s_pa = b2ParticleSystem.SolveSpring_s_pa;
    let s_pb = b2ParticleSystem.SolveSpring_s_pb;
    let s_d = b2ParticleSystem.SolveSpring_s_d;
    let s_f = b2ParticleSystem.SolveSpring_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    let springStrength = step.inv_dt * this.m_def.springStrength;
    for (let k = 0; k < this.m_pairBuffer.count; k++) {
      let pair = this.m_pairBuffer.data[k];
      if (pair.flags & b2ParticleFlag.b2_springParticle) {
        ///int32 a = pair.indexA;
        let a = pair.indexA;
        ///int32 b = pair.indexB;
        let b = pair.indexB;
        ///b2Vec2 pa = m_positionBuffer.data[a];
        let pa = s_pa.Copy(pos_data[a]);
        ///b2Vec2 pb = m_positionBuffer.data[b];
        let pb = s_pb.Copy(pos_data[b]);
        ///b2Vec2& va = m_velocityBuffer.data[a];
        let va = vel_data[a];
        ///b2Vec2& vb = m_velocityBuffer.data[b];
        let vb = vel_data[b];
        ///pa += step.dt * va;
        pa.SelfMulAdd(step.dt, va);
        ///pb += step.dt * vb;
        pb.SelfMulAdd(step.dt, vb);
        ///b2Vec2 d = pb - pa;
        let d = b2Vec2.SubVV(pb, pa, s_d);
        ///float32 r0 = pair.distance;
        let r0 = pair.distance;
        ///float32 r1 = d.Length();
        let r1 = d.Length();
        ///float32 strength = springStrength * pair.strength;
        let strength = springStrength * pair.strength;
        ///b2Vec2 f = strength * (r0 - r1) / r1 * d;
        let f = b2Vec2.MulSV(strength * (r0 - r1) / r1, d, s_f);
        ///va -= f;
        va.SelfSub(f);
        ///vb += f;
        vb.SelfAdd(f);
      }
    }
  }
  static SolveSpring_s_pa = new b2Vec2();
  static SolveSpring_s_pb = new b2Vec2();
  static SolveSpring_s_d = new b2Vec2();
  static SolveSpring_s_f = new b2Vec2();

  SolveTensile(step: b2TimeStep): void {
    let s_weightedNormal = b2ParticleSystem.SolveTensile_s_weightedNormal;
    let s_s = b2ParticleSystem.SolveTensile_s_s;
    let s_f = b2ParticleSystem.SolveTensile_s_f;
    let vel_data = this.m_velocityBuffer.data;
    b2Assert(this.m_accumulation2Buffer !== null);
    for (let i = 0; i < this.m_count; i++) {
      this.m_accumulation2Buffer[i] = new b2Vec2();
      this.m_accumulation2Buffer[i].SetZero();
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      if (contact.flags & b2ParticleFlag.b2_tensileParticle) {
        let a = contact.indexA;
        let b = contact.indexB;
        let w = contact.weight;
        let n = contact.normal;
        ///b2Vec2 weightedNormal = (1 - w) * w * n;
        let weightedNormal = b2Vec2.MulSV((1 - w) * w, n, s_weightedNormal);
        ///m_accumulation2Buffer[a] -= weightedNormal;
        this.m_accumulation2Buffer[a].SelfSub(weightedNormal);
        ///m_accumulation2Buffer[b] += weightedNormal;
        this.m_accumulation2Buffer[b].SelfAdd(weightedNormal);
      }
    }
    let criticalVelocity = this.GetCriticalVelocity(step);
    let pressureStrength = this.m_def.surfaceTensionPressureStrength * criticalVelocity;
    let normalStrength = this.m_def.surfaceTensionNormalStrength * criticalVelocity;
    let maxVelocityVariation = b2_maxParticleForce * criticalVelocity;
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      if (contact.flags & b2ParticleFlag.b2_tensileParticle) {
        let a = contact.indexA;
        let b = contact.indexB;
        let w = contact.weight;
        let n = contact.normal;
        let h = this.m_weightBuffer[a] + this.m_weightBuffer[b];
        ///b2Vec2 s = m_accumulation2Buffer[b] - m_accumulation2Buffer[a];
        let s = b2Vec2.SubVV(this.m_accumulation2Buffer[b], this.m_accumulation2Buffer[a], s_s);
        let fn = b2Min(
          pressureStrength * (h - 2) + normalStrength * b2Vec2.DotVV(s, n),
          maxVelocityVariation) * w;
        ///b2Vec2 f = fn * n;
        let f = b2Vec2.MulSV(fn, n, s_f);
        ///m_velocityBuffer.data[a] -= f;
        vel_data[a].SelfSub(f);
        ///m_velocityBuffer.data[b] += f;
        vel_data[b].SelfAdd(f);
      }
    }
  }
  static SolveTensile_s_weightedNormal = new b2Vec2();
  static SolveTensile_s_s = new b2Vec2();
  static SolveTensile_s_f = new b2Vec2();

  SolveViscous(): void {
    let s_v = b2ParticleSystem.SolveViscous_s_v;
    let s_f = b2ParticleSystem.SolveViscous_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    let viscousStrength = this.m_def.viscousStrength;
    let inv_mass = this.GetParticleInvMass();
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      if (this.m_flagsBuffer.data[a] & b2ParticleFlag.b2_viscousParticle) {
        let b = contact.body;
        let w = contact.weight;
        let m = contact.mass;
        let p = pos_data[a];
        ///b2Vec2 v = b.GetLinearVelocityFromWorldPoint(p) - m_velocityBuffer.data[a];
        let v = b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Vec2.s_t0), vel_data[a], s_v);
        ///b2Vec2 f = viscousStrength * m * w * v;
        let f = b2Vec2.MulSV(viscousStrength * m * w, v, s_f);
        ///m_velocityBuffer.data[a] += GetParticleInvMass() * f;
        vel_data[a].SelfMulAdd(inv_mass, f);
        ///b.ApplyLinearImpulse(-f, p, true);
        b.ApplyLinearImpulse(f.SelfNeg(), p, true);
      }
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      if (contact.flags & b2ParticleFlag.b2_viscousParticle) {
        let a = contact.indexA;
        let b = contact.indexB;
        let w = contact.weight;
        ///b2Vec2 v = m_velocityBuffer.data[b] - m_velocityBuffer.data[a];
        let v = b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
        ///b2Vec2 f = viscousStrength * w * v;
        let f = b2Vec2.MulSV(viscousStrength * w, v, s_f);
        ///m_velocityBuffer.data[a] += f;
        vel_data[a].SelfAdd(f);
        ///m_velocityBuffer.data[b] -= f;
        vel_data[b].SelfSub(f);
      }
    }
  }
  static SolveViscous_s_v = new b2Vec2();
  static SolveViscous_s_f = new b2Vec2();

  SolveRepulsive(step: b2TimeStep): void {
    let s_f = b2ParticleSystem.SolveRepulsive_s_f;
    let vel_data = this.m_velocityBuffer.data;
    let repulsiveStrength = this.m_def.repulsiveStrength * this.GetCriticalVelocity(step);
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      if (contact.flags & b2ParticleFlag.b2_repulsiveParticle) {
        let a = contact.indexA;
        let b = contact.indexB;
        if (this.m_groupBuffer[a] !== this.m_groupBuffer[b]) {
          let w = contact.weight;
          let n = contact.normal;
          ///b2Vec2 f = repulsiveStrength * w * n;
          let f = b2Vec2.MulSV(repulsiveStrength * w, n, s_f);
          ///m_velocityBuffer.data[a] -= f;
          vel_data[a].SelfSub(f);
          ///m_velocityBuffer.data[b] += f;
          vel_data[b].SelfAdd(f);
        }
      }
    }
  }
  static SolveRepulsive_s_f = new b2Vec2();

  SolvePowder(step: b2TimeStep): void {
    let s_f = b2ParticleSystem.SolvePowder_s_f;
    let pos_data = this.m_positionBuffer.data;
    let vel_data = this.m_velocityBuffer.data;
    let powderStrength = this.m_def.powderStrength * this.GetCriticalVelocity(step);
    let minWeight = 1.0 - b2_particleStride;
    let inv_mass = this.GetParticleInvMass();
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      let a = contact.index;
      if (this.m_flagsBuffer.data[a] & b2ParticleFlag.b2_powderParticle) {
        let w = contact.weight;
        if (w > minWeight) {
          let b = contact.body;
          let m = contact.mass;
          let p = pos_data[a];
          let n = contact.normal;
          let f = b2Vec2.MulSV(powderStrength * m * (w - minWeight), n, s_f);
          vel_data[a].SelfMulSub(inv_mass, f);
          b.ApplyLinearImpulse(f, p, true);
        }
      }
    }
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      if (contact.flags & b2ParticleFlag.b2_powderParticle) {
        let w = contact.weight;
        if (w > minWeight) {
          let a = contact.indexA;
          let b = contact.indexB;
          let n = contact.normal;
          let f = b2Vec2.MulSV(powderStrength * (w - minWeight), n, s_f);
          vel_data[a].SelfSub(f);
          vel_data[b].SelfAdd(f);
        }
      }
    }
  }
  static SolvePowder_s_f = new b2Vec2();

  SolveSolid(step: b2TimeStep): void {
    let s_f = b2ParticleSystem.SolveSolid_s_f;
    let vel_data = this.m_velocityBuffer.data;
    // applies extra repulsive force from solid particle groups
    this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer);
    let ejectionStrength = step.inv_dt * this.m_def.ejectionStrength;
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      let a = contact.indexA;
      let b = contact.indexB;
      if (this.m_groupBuffer[a] !== this.m_groupBuffer[b]) {
        let w = contact.weight;
        let n = contact.normal;
        let h = this.m_depthBuffer[a] + this.m_depthBuffer[b];
        let f = b2Vec2.MulSV(ejectionStrength * h * w, n, s_f);
        vel_data[a].SelfSub(f);
        vel_data[b].SelfAdd(f);
      }
    }
  }
  static SolveSolid_s_f = new b2Vec2();

  SolveForce(step: b2TimeStep): void {
    let vel_data = this.m_velocityBuffer.data;
    let velocityPerForce = step.dt * this.GetParticleInvMass();
    for (let i = 0; i < this.m_count; i++) {
      ///m_velocityBuffer.data[i] += velocityPerForce * m_forceBuffer[i];
      vel_data[i].SelfMulAdd(velocityPerForce, this.m_forceBuffer[i]);
    }
    this.m_hasForce = false;
  }

  SolveColorMixing(): void {
    // mixes color between contacting particles
    b2Assert(this.m_colorBuffer.data !== null);
    const colorMixing = 0.5 * this.m_def.colorMixingStrength;
    if (colorMixing) {
      for (let k = 0; k < this.m_contactBuffer.count; k++) {
        let contact = this.m_contactBuffer.data[k];
        let a = contact.indexA;
        let b = contact.indexB;
        if (this.m_flagsBuffer.data[a] & this.m_flagsBuffer.data[b] &
          b2ParticleFlag.b2_colorMixingParticle) {
          let colorA = this.m_colorBuffer.data[a];
          let colorB = this.m_colorBuffer.data[b];
          // Use the static method to ensure certain compilers inline
          // this correctly.
          b2Color.MixColors(colorA, colorB, colorMixing);
        }
      }
    }
  }

  SolveZombie(): void {
    // removes particles with zombie flag
    let newCount = 0;
    ///int32* newIndices = (int32*) this.m_world.m_stackAllocator.Allocate(sizeof(int32) * this.m_count);
    let newIndices: number[] = []; // TODO: static
    for (let i = 0; i < this.m_count; i++) {
      newIndices[i] = b2_invalidParticleIndex;
    }
    b2Assert(newIndices.length === this.m_count);
    let allParticleFlags = 0;
    for (let i = 0; i < this.m_count; i++) {
      let flags = this.m_flagsBuffer.data[i];
      if (flags & b2ParticleFlag.b2_zombieParticle) {
        let destructionListener = this.m_world.m_destructionListener;
        if ((flags & b2ParticleFlag.b2_destructionListenerParticle) && destructionListener) {
          destructionListener.SayGoodbyeParticle(this, i);
        }
        // Destroy particle handle.
        if (this.m_handleIndexBuffer.data) {
          let handle = this.m_handleIndexBuffer.data[i];
          if (handle) {
            handle.SetIndex(b2_invalidParticleIndex);
            this.m_handleIndexBuffer.data[i] = null;
            ///m_handleAllocator.Free(handle);
          }
        }
        newIndices[i] = b2_invalidParticleIndex;
      } else {
        newIndices[i] = newCount;
        if (i !== newCount) {
          // Update handle to reference new particle index.
          if (this.m_handleIndexBuffer.data) {
            let handle = this.m_handleIndexBuffer.data[i];
            if (handle) handle.SetIndex(newCount);
            this.m_handleIndexBuffer.data[newCount] = handle;
          }
          this.m_flagsBuffer.data[newCount] = this.m_flagsBuffer.data[i];
          if (this.m_lastBodyContactStepBuffer.data) {
            this.m_lastBodyContactStepBuffer.data[newCount] = this.m_lastBodyContactStepBuffer.data[i];
          }
          if (this.m_bodyContactCountBuffer.data) {
            this.m_bodyContactCountBuffer.data[newCount] = this.m_bodyContactCountBuffer.data[i];
          }
          if (this.m_consecutiveContactStepsBuffer.data) {
            this.m_consecutiveContactStepsBuffer.data[newCount] = this.m_consecutiveContactStepsBuffer.data[i];
          }
          this.m_positionBuffer.data[newCount].Copy(this.m_positionBuffer.data[i]);
          this.m_velocityBuffer.data[newCount].Copy(this.m_velocityBuffer.data[i]);
          this.m_groupBuffer[newCount] = this.m_groupBuffer[i];
          if (this.m_hasForce) {
            this.m_forceBuffer[newCount].Copy(this.m_forceBuffer[i]);
          }
          if (this.m_staticPressureBuffer) {
            this.m_staticPressureBuffer[newCount] = this.m_staticPressureBuffer[i];
          }
          if (this.m_depthBuffer) {
            this.m_depthBuffer[newCount] = this.m_depthBuffer[i];
          }
          if (this.m_colorBuffer.data) {
            this.m_colorBuffer.data[newCount].Copy(this.m_colorBuffer.data[i]);
          }
          if (this.m_userDataBuffer.data) {
            this.m_userDataBuffer.data[newCount] = this.m_userDataBuffer.data[i];
          }
          if (this.m_expirationTimeBuffer.data) {
            this.m_expirationTimeBuffer.data[newCount] = this.m_expirationTimeBuffer.data[i];
          }
        }
        newCount++;
        allParticleFlags |= flags;
      }
    }

    // predicate functions
    let Test = {
      ///static bool IsProxyInvalid(const Proxy& proxy)
      IsProxyInvalid: function(proxy: b2ParticleSystem.Proxy) {
        return proxy.index < 0;
      },
      ///static bool IsContactInvalid(const b2ParticleContact& contact)
      IsContactInvalid: function(contact: b2ParticleContact) {
        return contact.indexA < 0 || contact.indexB < 0;
      },
      ///static bool IsBodyContactInvalid(const b2ParticleBodyContact& contact)
      IsBodyContactInvalid: function(contact: b2ParticleBodyContact) {
        return contact.index < 0;
      },
      ///static bool IsPairInvalid(const b2ParticlePair& pair)
      IsPairInvalid: function(pair: b2ParticlePair) {
        return pair.indexA < 0 || pair.indexB < 0;
      },
      ///static bool IsTriadInvalid(const b2ParticleTriad& triad)
      IsTriadInvalid: function(triad: b2ParticleTriad) {
        return triad.indexA < 0 || triad.indexB < 0 || triad.indexC < 0;
      }
    };

    // update proxies
    for (let k = 0; k < this.m_proxyBuffer.count; k++) {
      let proxy = this.m_proxyBuffer.data[k];
      proxy.index = newIndices[proxy.index];
    }
    this.m_proxyBuffer.RemoveIf(Test.IsProxyInvalid);

    // update contacts
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      contact.indexA = newIndices[contact.indexA];
      contact.indexB = newIndices[contact.indexB];
    }
    this.m_contactBuffer.RemoveIf(Test.IsContactInvalid);

    // update particle-body contacts
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      contact.index = newIndices[contact.index];
    }
    this.m_bodyContactBuffer.RemoveIf(Test.IsBodyContactInvalid);

    // update pairs
    for (let k = 0; k < this.m_pairBuffer.count; k++) {
      let pair = this.m_pairBuffer.data[k];
      pair.indexA = newIndices[pair.indexA];
      pair.indexB = newIndices[pair.indexB];
    }
    this.m_pairBuffer.RemoveIf(Test.IsPairInvalid);

    // update triads
    for (let k = 0; k < this.m_triadBuffer.count; k++) {
      let triad = this.m_triadBuffer.data[k];
      triad.indexA = newIndices[triad.indexA];
      triad.indexB = newIndices[triad.indexB];
      triad.indexC = newIndices[triad.indexC];
    }
    this.m_triadBuffer.RemoveIf(Test.IsTriadInvalid);

    // Update lifetime indices.
    if (this.m_indexByExpirationTimeBuffer.data) {
      let writeOffset = 0;
      for (let readOffset = 0; readOffset < this.m_count; readOffset++) {
        let newIndex = newIndices[this.m_indexByExpirationTimeBuffer.data[readOffset]];
        if (newIndex !== b2_invalidParticleIndex) {
          this.m_indexByExpirationTimeBuffer.data[writeOffset++] = newIndex;
        }
      }
    }

    // update groups
    for (let group = this.m_groupList; group; group = group.GetNext()) {
      let firstIndex = newCount;
      let lastIndex = 0;
      let modified = false;
      for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
        let j = newIndices[i];
        if (j >= 0) {
          firstIndex = b2Min(firstIndex, j);
          lastIndex = b2Max(lastIndex, j + 1);
        } else {
          modified = true;
        }
      }
      if (firstIndex < lastIndex) {
        group.m_firstIndex = firstIndex;
        group.m_lastIndex = lastIndex;
        if (modified) {
          if (group.m_groupFlags & b2ParticleGroupFlag.b2_solidParticleGroup) {
            this.SetGroupFlags(group, group.m_groupFlags | b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth);
          }
        }
      } else {
        group.m_firstIndex = 0;
        group.m_lastIndex = 0;
        if (!(group.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupCanBeEmpty)) {
          this.SetGroupFlags(group, group.m_groupFlags | b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed);
        }
      }
    }

    // update particle count
    this.m_count = newCount;
    ///m_world.m_stackAllocator.Free(newIndices);
    this.m_allParticleFlags = allParticleFlags;
    this.m_needsUpdateAllParticleFlags = false;

    // destroy bodies with no particles
    for (let group = this.m_groupList; group; ) {
      let next = group.GetNext();
      if (group.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed) {
        this.DestroyParticleGroup(group);
      }
      group = next;
    }
  }

  /**
   * Destroy all particles which have outlived their lifetimes set
   * by SetParticleLifetime().
   */
  SolveLifetimes(step: b2TimeStep): void {
    b2Assert(this.m_expirationTimeBuffer.data !== null);
    b2Assert(this.m_indexByExpirationTimeBuffer.data !== null);
    // Update the time elapsed.
    this.m_timeElapsed = this.LifetimeToExpirationTime(step.dt);
    // Get the floor (non-fractional component) of the elapsed time.
    let quantizedTimeElapsed = this.GetQuantizedTimeElapsed();

    let expirationTimes = this.m_expirationTimeBuffer.data;
    let expirationTimeIndices = this.m_indexByExpirationTimeBuffer.data;
    let particleCount = this.GetParticleCount();
    // Sort the lifetime buffer if it's required.
    if (this.m_expirationTimeBufferRequiresSorting) {
      ///const ExpirationTimeComparator expirationTimeComparator(expirationTimes);
      ///std::sort(expirationTimeIndices, expirationTimeIndices + particleCount, expirationTimeComparator);

      /**
       * Compare the lifetime of particleIndexA and particleIndexB
       * returning true if the lifetime of A is greater than B for
       * particles that will expire.  If either particle's lifetime is
       * infinite (<= 0.0f) this function return true if the lifetime
       * of A is lesser than B. When used with std::sort() this
       * results in an array of particle indicies sorted in reverse
       * order by particle lifetime.
       *
       * For example, the set of lifetimes
       * (1.0, 0.7, 0.3, 0.0, -1.0, 2.0)
       * would be sorted as
       * (0.0, 1.0, -2.0, 1.0, 0.7, 0.3)
       */
      let ExpirationTimeComparator = function(particleIndexA: number, particleIndexB: number): boolean {
        let expirationTimeA = expirationTimes[particleIndexA];
        let expirationTimeB = expirationTimes[particleIndexB];
        let infiniteExpirationTimeA = expirationTimeA <= 0.0;
        let infiniteExpirationTimeB = expirationTimeB <= 0.0;
        return infiniteExpirationTimeA === infiniteExpirationTimeB ?
          expirationTimeA > expirationTimeB : infiniteExpirationTimeA;
      };

      std_sort(expirationTimeIndices, 0, particleCount, ExpirationTimeComparator);

      this.m_expirationTimeBufferRequiresSorting = false;
    }

    // Destroy particles which have expired.
    for (let i = particleCount - 1; i >= 0; --i) {
      let particleIndex = expirationTimeIndices[i];
      let expirationTime = expirationTimes[particleIndex];
      // If no particles need to be destroyed, skip this.
      if (quantizedTimeElapsed < expirationTime || expirationTime <= 0) {
        break;
      }
      // Destroy this particle.
      this.DestroyParticle(particleIndex);
    }
  }

  RotateBuffer(start: number, mid: number, end: number): void {
    // move the particles assigned to the given group toward the end of array
    if (start === mid || mid === end) {
      return;
    }
    b2Assert(mid >= start && mid <= end);

    function newIndices(i: number): number {
      if (i < start) {
        return i;
      } else if (i < mid) {
        return i + end - mid;
      } else if (i < end) {
        return i + start - mid;
      } else {
        return i;
      }
    }

    ///std::rotate(m_flagsBuffer.data + start, m_flagsBuffer.data + mid, m_flagsBuffer.data + end);
    std_rotate(this.m_flagsBuffer.data, start, mid, end);
    if (this.m_lastBodyContactStepBuffer.data) {
      ///std::rotate(m_lastBodyContactStepBuffer.data + start, m_lastBodyContactStepBuffer.data + mid, m_lastBodyContactStepBuffer.data + end);
      std_rotate(this.m_lastBodyContactStepBuffer.data, start, mid, end);
    }
    if (this.m_bodyContactCountBuffer.data) {
      ///std::rotate(m_bodyContactCountBuffer.data + start, m_bodyContactCountBuffer.data + mid, m_bodyContactCountBuffer.data + end);
      std_rotate(this.m_bodyContactCountBuffer.data, start, mid, end);
    }
    if (this.m_consecutiveContactStepsBuffer.data) {
      ///std::rotate(m_consecutiveContactStepsBuffer.data + start, m_consecutiveContactStepsBuffer.data + mid, m_consecutiveContactStepsBuffer.data + end);
      std_rotate(this.m_consecutiveContactStepsBuffer.data, start, mid, end);
    }
    ///std::rotate(m_positionBuffer.data + start, m_positionBuffer.data + mid, m_positionBuffer.data + end);
    std_rotate(this.m_positionBuffer.data, start, mid, end);
    ///std::rotate(m_velocityBuffer.data + start, m_velocityBuffer.data + mid, m_velocityBuffer.data + end);
    std_rotate(this.m_velocityBuffer.data, start, mid, end);
    ///std::rotate(m_groupBuffer + start, m_groupBuffer + mid, m_groupBuffer + end);
    std_rotate(this.m_groupBuffer, start, mid, end);
    if (this.m_hasForce) {
      ///std::rotate(m_forceBuffer + start, m_forceBuffer + mid, m_forceBuffer + end);
      std_rotate(this.m_forceBuffer, start, mid, end);
    }
    if (this.m_staticPressureBuffer) {
      ///std::rotate(m_staticPressureBuffer + start, m_staticPressureBuffer + mid, m_staticPressureBuffer + end);
      std_rotate(this.m_staticPressureBuffer, start, mid, end);
    }
    if (this.m_depthBuffer) {
      ///std::rotate(m_depthBuffer + start, m_depthBuffer + mid, m_depthBuffer + end);
      std_rotate(this.m_depthBuffer, start, mid, end);
    }
    if (this.m_colorBuffer.data) {
      ///std::rotate(m_colorBuffer.data + start, m_colorBuffer.data + mid, m_colorBuffer.data + end);
      std_rotate(this.m_colorBuffer.data, start, mid, end);
    }
    if (this.m_userDataBuffer.data) {
      ///std::rotate(m_userDataBuffer.data + start, m_userDataBuffer.data + mid, m_userDataBuffer.data + end);
      std_rotate(this.m_userDataBuffer.data, start, mid, end);
    }

    // Update handle indices.
    if (this.m_handleIndexBuffer.data) {
      ///std::rotate(m_handleIndexBuffer.data + start, m_handleIndexBuffer.data + mid, m_handleIndexBuffer.data + end);
      std_rotate(this.m_handleIndexBuffer.data, start, mid, end);
      for (let i = start; i < end; ++i) {
        let handle = this.m_handleIndexBuffer.data[i];
        if (handle) handle.SetIndex(newIndices(handle.GetIndex()));
      }
    }

    if (this.m_expirationTimeBuffer.data) {
      ///std::rotate(m_expirationTimeBuffer.data + start, m_expirationTimeBuffer.data + mid, m_expirationTimeBuffer.data + end);
      std_rotate(this.m_expirationTimeBuffer.data, start, mid, end);
      // Update expiration time buffer indices.
      let particleCount = this.GetParticleCount();
      let indexByExpirationTime = this.m_indexByExpirationTimeBuffer.data;
      for (let i = 0; i < particleCount; ++i) {
        indexByExpirationTime[i] = newIndices(indexByExpirationTime[i]);
      }
    }

    // update proxies
    for (let k = 0; k < this.m_proxyBuffer.count; k++) {
      let proxy = this.m_proxyBuffer.data[k];
      proxy.index = newIndices(proxy.index);
    }

    // update contacts
    for (let k = 0; k < this.m_contactBuffer.count; k++) {
      let contact = this.m_contactBuffer.data[k];
      contact.indexA = newIndices(contact.indexA);
      contact.indexB = newIndices(contact.indexB);
    }

    // update particle-body contacts
    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
      let contact = this.m_bodyContactBuffer.data[k];
      contact.index = newIndices(contact.index);
    }

    // update pairs
    for (let k = 0; k < this.m_pairBuffer.count; k++) {
      let pair = this.m_pairBuffer.data[k];
      pair.indexA = newIndices(pair.indexA);
      pair.indexB = newIndices(pair.indexB);
    }

    // update triads
    for (let k = 0; k < this.m_triadBuffer.count; k++) {
      let triad = this.m_triadBuffer.data[k];
      triad.indexA = newIndices(triad.indexA);
      triad.indexB = newIndices(triad.indexB);
      triad.indexC = newIndices(triad.indexC);
    }

    // update groups
    for (let group = this.m_groupList; group; group = group.GetNext()) {
      group.m_firstIndex = newIndices(group.m_firstIndex);
      group.m_lastIndex = newIndices(group.m_lastIndex - 1) + 1;
    }
  }

  GetCriticalVelocity(step: b2TimeStep): number {
    return this.m_particleDiameter * step.inv_dt;
  }

  GetCriticalVelocitySquared(step: b2TimeStep): number {
    let velocity = this.GetCriticalVelocity(step);
    return velocity * velocity;
  }

  GetCriticalPressure(step: b2TimeStep): number {
    return this.m_def.density * this.GetCriticalVelocitySquared(step);
  }

  GetParticleStride(): number {
    return b2_particleStride * this.m_particleDiameter;
  }

  GetParticleMass(): number {
    let stride = this.GetParticleStride();
    return this.m_def.density * stride * stride;
  }

  GetParticleInvMass(): number {
    ///return 1.777777 * this.m_inverseDensity * this.m_inverseDiameter * this.m_inverseDiameter;
    // mass = density * stride^2, so we take the inverse of this.
    let inverseStride = this.m_inverseDiameter * (1.0 / b2_particleStride);
    return this.m_inverseDensity * inverseStride * inverseStride;
  }

  /**
   * Get the world's contact filter if any particles with the
   * b2_contactFilterParticle flag are present in the system.
   */
  GetFixtureContactFilter(): b2ContactFilter {
    return (this.m_allParticleFlags & b2ParticleFlag.b2_fixtureContactFilterParticle) ?
      this.m_world.m_contactManager.m_contactFilter : null;
  }

  /**
   * Get the world's contact filter if any particles with the
   * b2_particleContactFilterParticle flag are present in the
   * system.
   */
  GetParticleContactFilter(): b2ContactFilter {
    return (this.m_allParticleFlags & b2ParticleFlag.b2_particleContactFilterParticle) ?
      this.m_world.m_contactManager.m_contactFilter : null;
  }

  /**
   * Get the world's contact listener if any particles with the
   * b2_fixtureContactListenerParticle flag are present in the
   * system.
   */
  GetFixtureContactListener(): b2ContactListener {
    return (this.m_allParticleFlags & b2ParticleFlag.b2_fixtureContactListenerParticle) ?
      this.m_world.m_contactManager.m_contactListener : null;
  }

  /**
   * Get the world's contact listener if any particles with the
   * b2_particleContactListenerParticle flag are present in the
   * system.
   */
  GetParticleContactListener(): b2ContactListener {
    return (this.m_allParticleFlags & b2ParticleFlag.b2_particleContactListenerParticle) ?
      this.m_world.m_contactManager.m_contactListener : null;
  }

  SetUserOverridableBuffer(buffer: b2ParticleSystem.UserOverridableBuffer<any>, newData: any[], newCapacity: number): void {
    b2Assert(((newData !== null) && (newCapacity > 0)) || ((newData === null) && (newCapacity === 0)));
    ///if (!buffer.userSuppliedCapacity)
    ///{
    ///this.m_world.m_blockAllocator.Free(buffer.data, sizeof(T) * m_internalAllocatedCapacity);
    ///}
    buffer.data = newData;
    buffer.userSuppliedCapacity = newCapacity;
  }

  SetGroupFlags(group: b2ParticleGroup, newFlags: b2ParticleGroupFlag): void {
    let oldFlags = group.m_groupFlags;
    if ((oldFlags ^ newFlags) & b2ParticleGroupFlag.b2_solidParticleGroup) {
      // If the b2_solidParticleGroup flag changed schedule depth update.
      newFlags |= b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth;
    }
    if (oldFlags & ~newFlags) {
      // If any flags might be removed
      this.m_needsUpdateAllGroupFlags = true;
    }
    if (~this.m_allGroupFlags & newFlags) {
      // If any flags were added
      if (newFlags & b2ParticleGroupFlag.b2_solidParticleGroup) {
        this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer);
      }
      this.m_allGroupFlags |= newFlags;
    }
    group.m_groupFlags = newFlags;
  }

  static BodyContactCompare(lhs: b2ParticleBodyContact, rhs: b2ParticleBodyContact): boolean {
    if (lhs.index === rhs.index) {
      // Subsort by weight, decreasing.
      return lhs.weight > rhs.weight;
    }
    return lhs.index < rhs.index;
  }

  RemoveSpuriousBodyContacts(): void {
    // At this point we have a list of contact candidates based on AABB
    // overlap.The AABB query that  generated this returns all collidable
    // fixtures overlapping particle bounding boxes.  This breaks down around
    // vertices where two shapes intersect, such as a "ground" surface made
    // of multiple b2PolygonShapes; it potentially applies a lot of spurious
    // impulses from normals that should not actually contribute.  See the
    // Ramp example in Testbed.
    //
    // To correct for this, we apply this algorithm:
    //   * sort contacts by particle and subsort by weight (nearest to farthest)
    //   * for each contact per particle:
    //      - project a point at the contact distance along the inverse of the
    //        contact normal
    //      - if this intersects the fixture that generated the contact, apply
    //         it, otherwise discard as impossible
    //      - repeat for up to n nearest contacts, currently we get good results
    //        from n=3.
    ///std::sort(m_bodyContactBuffer.Begin(), m_bodyContactBuffer.End(), b2ParticleSystem::BodyContactCompare);
    std_sort(this.m_bodyContactBuffer.data, 0, this.m_bodyContactBuffer.count, b2ParticleSystem.BodyContactCompare);

    ///int32 discarded = 0;
    ///std::remove_if(m_bodyContactBuffer.Begin(), m_bodyContactBuffer.End(), b2ParticleBodyContactRemovePredicate(this, &discarded));
    ///
    ///m_bodyContactBuffer.SetCount(m_bodyContactBuffer.GetCount() - discarded);

    let s_n = b2ParticleSystem.RemoveSpuriousBodyContacts_s_n;
    let s_pos = b2ParticleSystem.RemoveSpuriousBodyContacts_s_pos;
    let s_normal = b2ParticleSystem.RemoveSpuriousBodyContacts_s_normal;

    // Max number of contacts processed per particle, from nearest to farthest.
    // This must be at least 2 for correctness with concave shapes; 3 was
    // experimentally arrived at as looking reasonable.
    let k_maxContactsPerPoint = 3;
    let system = this;
    // Index of last particle processed.
    let lastIndex = -1;
    // Number of contacts processed for the current particle.
    let currentContacts = 0;
    // Output the number of discarded contacts.
    let discarded = 0;
    let b2ParticleBodyContactRemovePredicate = function(contact: b2ParticleBodyContact): boolean {
      // This implements the selection criteria described in
      // RemoveSpuriousBodyContacts().
      // This functor is iterating through a list of Body contacts per
      // Particle, ordered from near to far.  For up to the maximum number of
      // contacts we allow per point per step, we verify that the contact
      // normal of the Body that genenerated the contact makes physical sense
      // by projecting a point back along that normal and seeing if it
      // intersects the fixture generating the contact.

      if (contact.index !== lastIndex) {
        currentContacts = 0;
        lastIndex = contact.index;
      }

      if (currentContacts++ > k_maxContactsPerPoint) {
        ++discarded;
        return true;
      }

      // Project along inverse normal (as returned in the contact) to get the
      // point to check.
      ///b2Vec2 n = contact.normal;
      let n = s_n.Copy(contact.normal);
      // weight is 1-(inv(diameter) * distance)
      ///n *= system.m_particleDiameter * (1 - contact.weight);
      n.SelfMul(system.m_particleDiameter * (1 - contact.weight));
      ///b2Vec2 pos = system.m_positionBuffer.data[contact.index] + n;
      let pos = b2Vec2.AddVV(system.m_positionBuffer.data[contact.index], n, s_pos);

      // pos is now a point projected back along the contact normal to the
      // contact distance. If the surface makes sense for a contact, pos will
      // now lie on or in the fixture generating
      if (!contact.fixture.TestPoint(pos)) {
        let childCount = contact.fixture.GetShape().GetChildCount();
        for (let childIndex = 0; childIndex < childCount; childIndex++) {
          let normal = s_normal;
          let distance = contact.fixture.ComputeDistance(pos, normal, childIndex);
          if (distance < b2_linearSlop) {
            return false;
          }
        }
        ++discarded;
        return true;
      }

      return false;
    };
    this.m_bodyContactBuffer.count = std_remove_if(this.m_bodyContactBuffer.data, b2ParticleBodyContactRemovePredicate, this.m_bodyContactBuffer.count);
  }
  private static RemoveSpuriousBodyContacts_s_n = new b2Vec2();
  private static RemoveSpuriousBodyContacts_s_pos = new b2Vec2();
  private static RemoveSpuriousBodyContacts_s_normal = new b2Vec2();

  DetectStuckParticle(particle: number): void {
    // Detect stuck particles
    //
    // The basic algorithm is to allow the user to specify an optional
    // threshold where we detect whenever a particle is contacting
    // more than one fixture for more than threshold consecutive
    // steps. This is considered to be "stuck", and these are put
    // in a list the user can query per step, if enabled, to deal with
    // such particles.

    if (this.m_stuckThreshold <= 0) {
      return;
    }

    // Get the state variables for this particle.
    ///int32 * const consecutiveCount = &m_consecutiveContactStepsBuffer.data[particle];
    ///int32 * const lastStep = &m_lastBodyContactStepBuffer.data[particle];
    ///int32 * const bodyCount = &m_bodyContactCountBuffer.data[particle];

    // This is only called when there is a body contact for this particle.
    ///++(*bodyCount);
    ++this.m_bodyContactCountBuffer.data[particle];

    // We want to only trigger detection once per step, the first time we
    // contact more than one fixture in a step for a given particle.
    ///if (*bodyCount === 2)
    if (this.m_bodyContactCountBuffer.data[particle] === 2) {
      ///++(*consecutiveCount);
      ++this.m_consecutiveContactStepsBuffer.data[particle];
      ///if (*consecutiveCount > m_stuckThreshold)
      if (this.m_consecutiveContactStepsBuffer.data[particle] > this.m_stuckThreshold) {
        ///int32& newStuckParticle = m_stuckParticleBuffer.Append();
        ///newStuckParticle = particle;
        this.m_stuckParticleBuffer.data[this.m_stuckParticleBuffer.Append()] = particle;
      }
    }
    ///*lastStep = m_timestamp;
    this.m_lastBodyContactStepBuffer.data[particle] = this.m_timestamp;
  }

  /**
   * Determine whether a particle index is valid.
   */
  ValidateParticleIndex(index: number): boolean {
    return index >= 0 && index < this.GetParticleCount() &&
      index !== b2_invalidParticleIndex;
  }

  /**
   * Get the time elapsed in
   * b2ParticleSystemDef::lifetimeGranularity.
   */
  GetQuantizedTimeElapsed(): number {
    ///return (int32)(m_timeElapsed >> 32);
    return Math.floor(this.m_timeElapsed / 0x100000000);
  }

  /**
   * Convert a lifetime in seconds to an expiration time.
   */
  LifetimeToExpirationTime(lifetime: number): number {
    ///return m_timeElapsed + (int64)((lifetime / m_def.lifetimeGranularity) * (float32)(1LL << 32));
    return this.m_timeElapsed + Math.floor(((lifetime / this.m_def.lifetimeGranularity) * 0x100000000));
  }

  ForceCanBeApplied(flags: b2ParticleFlag): boolean {
    return !(flags & b2ParticleFlag.b2_wallParticle);
  }

  PrepareForceBuffer(): void {
    if (!this.m_hasForce) {
      ///memset(m_forceBuffer, 0, sizeof(*m_forceBuffer) * m_count);
      for (let i = 0; i < this.m_count; i++) {
        this.m_forceBuffer[i].SetZero();
      }
      this.m_hasForce = true;
    }
  }

  IsRigidGroup(group: b2ParticleGroup): boolean {
    return (group !== null) && ((group.m_groupFlags & b2ParticleGroupFlag.b2_rigidParticleGroup) !== 0);
  }

  GetLinearVelocity(group: b2ParticleGroup, particleIndex: number, point: b2Vec2, out: b2Vec2): b2Vec2 {
    if (this.IsRigidGroup(group)) {
      return group.GetLinearVelocityFromWorldPoint(point, out);
    } else {
      ///return m_velocityBuffer.data[particleIndex];
      return out.Copy(this.m_velocityBuffer.data[particleIndex]);
    }
  }

  InitDampingParameter(invMass: number[], invInertia: number[], tangentDistance: number[], mass: number, inertia: number, center: b2Vec2, point: b2Vec2, normal: b2Vec2): void {
    ///*invMass = mass > 0 ? 1 / mass : 0;
    invMass[0] = mass > 0 ? 1 / mass : 0;
    ///*invInertia = inertia > 0 ? 1 / inertia : 0;
    invInertia[0] = inertia > 0 ? 1 / inertia : 0;
    ///*tangentDistance = b2Cross(point - center, normal);
    tangentDistance[0] = b2Vec2.CrossVV(b2Vec2.SubVV(point, center, b2Vec2.s_t0), normal);
  }

  InitDampingParameterWithRigidGroupOrParticle(invMass: number[], invInertia: number[], tangentDistance: number[], isRigidGroup: boolean, group: b2ParticleGroup, particleIndex: number, point: b2Vec2, normal: b2Vec2): void {
    if (isRigidGroup) {
      this.InitDampingParameter(invMass, invInertia, tangentDistance, group.GetMass(), group.GetInertia(), group.GetCenter(), point, normal);
    } else {
      let flags = this.m_flagsBuffer.data[particleIndex];
      this.InitDampingParameter(invMass, invInertia, tangentDistance, flags & b2ParticleFlag.b2_wallParticle ? 0 : this.GetParticleMass(), 0, point, point, normal);
    }
  }

  ComputeDampingImpulse(invMassA: number, invInertiaA: number, tangentDistanceA: number, invMassB: number, invInertiaB: number, tangentDistanceB: number, normalVelocity: number): number {
    let invMass =
      invMassA + invInertiaA * tangentDistanceA * tangentDistanceA +
      invMassB + invInertiaB * tangentDistanceB * tangentDistanceB;
    return invMass > 0 ? normalVelocity / invMass : 0;
  }

  ApplyDamping(invMass: number, invInertia: number, tangentDistance: number, isRigidGroup: boolean, group: b2ParticleGroup, particleIndex: number, impulse: number, normal: b2Vec2): void {
    if (isRigidGroup) {
      ///group.m_linearVelocity += impulse * invMass * normal;
      group.m_linearVelocity.SelfMulAdd(impulse * invMass, normal);
      ///group.m_angularVelocity += impulse * tangentDistance * invInertia;
      group.m_angularVelocity += impulse * tangentDistance * invInertia;
    } else {
      ///m_velocityBuffer.data[particleIndex] += impulse * invMass * normal;
      this.m_velocityBuffer.data[particleIndex].SelfMulAdd(impulse * invMass, normal);
    }
  }
}

export namespace b2ParticleSystem {

export class UserOverridableBuffer<T> {
  data: T[] = null;
  userSuppliedCapacity: number = 0;
}

export class Proxy {
  index: number = b2_invalidParticleIndex;
  tag: number = 0;
  static CompareProxyProxy(a: Proxy, b: Proxy): boolean {
    return a.tag < b.tag;
  }
  static CompareTagProxy(a: number, b: Proxy): boolean {
    return a < b.tag;
  }
  static CompareProxyTag(a: Proxy, b: number): boolean {
    return a.tag < b;
  }
}

export class InsideBoundsEnumerator {
  m_system: b2ParticleSystem;
  m_xLower: number;
  m_xUpper: number;
  m_yLower: number;
  m_yUpper: number;
  m_first: number;
  m_last: number;
  /**
   * InsideBoundsEnumerator enumerates all particles inside the
   * given bounds.
   *
   * Construct an enumerator with bounds of tags and a range of
   * proxies.
   */
  constructor(system: b2ParticleSystem, lower: number, upper: number, first: number, last: number) {
    this.m_system = system;
    this.m_xLower = (lower & b2ParticleSystem.xMask) >>> 0;
    this.m_xUpper = (upper & b2ParticleSystem.xMask) >>> 0;
    this.m_yLower = (lower & b2ParticleSystem.yMask) >>> 0;
    this.m_yUpper = (upper & b2ParticleSystem.yMask) >>> 0;
    this.m_first = first;
    this.m_last = last;
    b2Assert(this.m_first <= this.m_last);
  }

  /**
   * Get index of the next particle. Returns
   * b2_invalidParticleIndex if there are no more particles.
   */
  GetNext(): number {
    while (this.m_first < this.m_last) {
      let xTag = (this.m_system.m_proxyBuffer.data[this.m_first].tag & b2ParticleSystem.xMask) >>> 0;
      ///#if B2_ASSERT_ENABLED
      ///let yTag = (this.m_system.m_proxyBuffer.data[this.m_first].tag & b2ParticleSystem.yMask) >>> 0;
      ///b2Assert(yTag >= this.m_yLower);
      ///b2Assert(yTag <= this.m_yUpper);
      ///#endif
      if (xTag >= this.m_xLower && xTag <= this.m_xUpper) {
        return (this.m_system.m_proxyBuffer.data[this.m_first++]).index;
      }
      this.m_first++;
    }
    return b2_invalidParticleIndex;
  }
}

export class ParticleListNode {
  /**
   * The head of the list.
   */
  list: b2ParticleSystem.ParticleListNode = null;
  /**
   * The next node in the list.
   */
  next: b2ParticleSystem.ParticleListNode = null;
  /**
   * Number of entries in the list. Valid only for the node at the
   * head of the list.
   */
  count: number = 0;
  /**
   * Particle index.
   */
  index: number = 0;
}

/**
 * @constructor
 */
export class FixedSetAllocator {
  Allocate(itemSize: number, count: number): number {
    // TODO
    return count;
  }

  Clear(): void {
    // TODO
  }

  GetCount(): number {
    // TODO
    return 0;
  }

  Invalidate(itemIndex: number): void {
    // TODO
  }

  GetValidBuffer(): boolean[] {
    // TODO
    return [];
  }

  GetBuffer(): any[] {
    // TODO
    return [];
  }

  SetCount(count: number): void {
    // TODO
  }
}

export class FixtureParticle {
  first: b2Fixture = null;
  second: number = b2_invalidParticleIndex;
  constructor(fixture: b2Fixture, particle: number) {
    this.first = fixture;
    this.second = particle;
  }
}

export class FixtureParticleSet extends b2ParticleSystem.FixedSetAllocator {
  Initialize(bodyContactBuffer: b2GrowableBuffer<b2ParticleBodyContact>, flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>): void {
    // TODO
  }
  Find(pair: b2ParticleSystem.FixtureParticle): number {
    // TODO
    return b2_invalidParticleIndex;
  }
}

export class ParticlePair {
  first: number = b2_invalidParticleIndex;
  second: number = b2_invalidParticleIndex;
  constructor(particleA: number, particleB: number) {
    this.first = particleA;
    this.second = particleB;
  }
}

export class b2ParticlePairSet extends b2ParticleSystem.FixedSetAllocator {
  Initialize(contactBuffer: b2GrowableBuffer<b2ParticleContact>, flagsBuffer: UserOverridableBuffer<b2ParticleFlag>): void {
    // TODO
  }

  /**
   * @return {number}
   * @param {b2ParticleSystem.ParticlePair} pair
   */
  Find(pair: b2ParticleSystem.ParticlePair): number {
    // TODO
    return b2_invalidParticleIndex;
  }
}

export class ConnectionFilter {
  /**
   * Is the particle necessary for connection?
   * A pair or a triad should contain at least one 'necessary'
   * particle.
   */
  IsNecessary(index: number): boolean {
    return true;
  }

  /**
   * An additional condition for creating a pair.
   */
  ShouldCreatePair(a: number, b: number): boolean {
    return true;
  }

  /**
   * An additional condition for creating a triad.
   */
  ShouldCreateTriad(a: number, b: number, c: number): boolean {
    return true;
  }
}

export class DestroyParticlesInShapeCallback extends b2QueryCallback {
  m_system: b2ParticleSystem = null;
  m_shape: b2Shape = null;
  m_xf: b2Transform = null;
  m_callDestructionListener: boolean = false;
  m_destroyed: number = 0;

  constructor(system: b2ParticleSystem, shape: b2Shape, xf: b2Transform, callDestructionListener: boolean) {
    super();
    this.m_system = system;
    this.m_shape = shape;
    this.m_xf = xf;
    this.m_callDestructionListener = callDestructionListener;
    this.m_destroyed = 0;
  }

  ReportFixture(fixture: b2Fixture): boolean {
    return false;
  }

  ReportParticle(particleSystem: b2ParticleSystem, index: number): boolean {
    if (particleSystem !== this.m_system)
      return false;
    b2Assert(index >= 0 && index < this.m_system.m_count);
    if (this.m_shape.TestPoint(this.m_xf, this.m_system.m_positionBuffer.data[index])) {
      this.m_system.DestroyParticle(index, this.m_callDestructionListener);
      this.m_destroyed++;
    }
    return true;
  }

  Destroyed(): number {
    return this.m_destroyed;
  }
}

export class JoinParticleGroupsFilter extends b2ParticleSystem.ConnectionFilter {
  m_threshold: number = 0;

  constructor(threshold: number) {
    super();
    this.m_threshold = threshold;
  }

  /**
   * An additional condition for creating a pair.
   */
  ShouldCreatePair(a: number, b: number): boolean {
    return (a < this.m_threshold && this.m_threshold <= b) ||
      (b < this.m_threshold && this.m_threshold <= a);
  }

  /**
   * An additional condition for creating a triad.
   */
  ShouldCreateTriad(a: number, b: number, c: number): boolean {
    return (a < this.m_threshold || b < this.m_threshold || c < this.m_threshold) &&
      (this.m_threshold <= a || this.m_threshold <= b || this.m_threshold <= c);
  }
}

export class CompositeShape extends b2Shape {
  constructor(shapes: b2Shape[], shapeCount: number) {
    super(b2ShapeType.e_unknown, 0);
    this.m_shapes = shapes;
    this.m_shapeCount = shapeCount;
  }

  m_shapes: b2Shape[] = null;
  m_shapeCount: number = 0;

  Clone(): b2Shape {
    b2Assert(false);
    return null;
  }

  GetChildCount(): number {
    return 1;
  }

  /**
   * @see b2Shape::TestPoint
   */
  TestPoint(xf: b2Transform, p: b2Vec2): boolean {
    for (let i = 0; i < this.m_shapeCount; i++) {
      if (this.m_shapes[i].TestPoint(xf, p)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @see b2Shape::ComputeDistance
   */
  ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number {
    b2Assert(false);
    return 0;
  }

  /**
   * Implement b2Shape.
   */
  RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean {
    b2Assert(false);
    return false;
  }

  /**
   * @see b2Shape::ComputeAABB
   */
  ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void {
    let s_subaabb = new b2AABB();
    aabb.lowerBound.x = +b2_maxFloat;
    aabb.lowerBound.y = +b2_maxFloat;
    aabb.upperBound.x = -b2_maxFloat;
    aabb.upperBound.y = -b2_maxFloat;
    b2Assert(childIndex === 0);
    for (let i = 0; i < this.m_shapeCount; i++) {
      let childCount = this.m_shapes[i].GetChildCount();
      for (let j = 0; j < childCount; j++) {
        let subaabb = s_subaabb;
        this.m_shapes[i].ComputeAABB(subaabb, xf, j);
        aabb.Combine1(subaabb);
      }
    }
  }

  /**
   * @see b2Shape::ComputeMass
   */
  ComputeMass(massData: b2MassData, density: number): void {
    b2Assert(false);
  }

  public SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void {
    b2Assert(false);
  }

  public ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number {
    b2Assert(false);
    return 0;
  }

  public Dump(log: (format: string, ...args: any[]) => void): void {
    b2Assert(false);
  }
}

export class ReactiveFilter extends b2ParticleSystem.ConnectionFilter {
  m_flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag> = null;
  constructor(flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>) {
    super();
    this.m_flagsBuffer = flagsBuffer;
  }
  IsNecessary(index: number): boolean {
    return (this.m_flagsBuffer.data[index] & b2ParticleFlag.b2_reactiveParticle) !== 0;
  }
}

export class UpdateBodyContactsCallback extends b2FixtureParticleQueryCallback {
  m_contactFilter: b2ContactFilter;
  constructor(system: b2ParticleSystem, contactFilter: b2ContactFilter) {
    super(system); // base class constructor
    this.m_contactFilter = contactFilter;
  }

  ShouldCollideFixtureParticle(fixture: b2Fixture, particleSystem: b2ParticleSystem, particleIndex: number): boolean {
    // Call the contact filter if it's set, to determine whether to
    // filter this contact.  Returns true if contact calculations should
    // be performed, false otherwise.
    if (this.m_contactFilter) {
      let flags = this.m_system.GetFlagsBuffer();
      if (flags[particleIndex] & b2ParticleFlag.b2_fixtureContactFilterParticle) {
        return this.m_contactFilter.ShouldCollideFixtureParticle(fixture, this.m_system, particleIndex);
      }
    }
    return true;
  }

  ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void {
    let s_n = b2ParticleSystem.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_n;
    let s_rp = b2ParticleSystem.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_rp;
    let ap = this.m_system.m_positionBuffer.data[a];
    let n = s_n;
    let d = fixture.ComputeDistance(ap, n, childIndex);
    if (d < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(fixture, this.m_system, a)) {
      let b = fixture.GetBody();
      let bp = b.GetWorldCenter();
      let bm = b.GetMass();
      let bI = b.GetInertia() - bm * b.GetLocalCenter().LengthSquared();
      let invBm = bm > 0 ? 1 / bm : 0;
      let invBI = bI > 0 ? 1 / bI : 0;
      let invAm =
        this.m_system.m_flagsBuffer.data[a] &
        b2ParticleFlag.b2_wallParticle ? 0 : this.m_system.GetParticleInvMass();
      ///b2Vec2 rp = ap - bp;
      let rp = b2Vec2.SubVV(ap, bp, s_rp);
      let rpn = b2Vec2.CrossVV(rp, n);
      let invM = invAm + invBm + invBI * rpn * rpn;

      ///b2ParticleBodyContact& contact = m_system.m_bodyContactBuffer.Append();
      let contact = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()];
      contact.index = a;
      contact.body = b;
      contact.fixture = fixture;
      contact.weight = 1 - d * this.m_system.m_inverseDiameter;
      ///contact.normal = -n;
      contact.normal.Copy(n.SelfNeg());
      contact.mass = invM > 0 ? 1 / invM : 0;
      this.m_system.DetectStuckParticle(a);
    }
  }
  static ReportFixtureAndParticle_s_n = new b2Vec2();
  static ReportFixtureAndParticle_s_rp = new b2Vec2();
}

export class SolveCollisionCallback extends b2FixtureParticleQueryCallback {
  m_step: b2TimeStep;
  constructor(system: b2ParticleSystem, step: b2TimeStep) {
    super(system); // base class constructor
    this.m_step = step;
  }

  ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void {
    let s_p1 = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_p1;
    let s_output = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_output;
    let s_input = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_input;
    let s_p = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_p;
    let s_v = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_v;
    let s_f = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_f;

    let body = fixture.GetBody();
    let ap = this.m_system.m_positionBuffer.data[a];
    let av = this.m_system.m_velocityBuffer.data[a];
    let output = s_output;
    let input = s_input;
    if (this.m_system.m_iterationIndex === 0) {
      // Put 'ap' in the local space of the previous frame
      ///b2Vec2 p1 = b2MulT(body.m_xf0, ap);
      let p1 = b2Transform.MulTXV(body.m_xf0, ap, s_p1);
      if (fixture.GetShape().GetType() === b2ShapeType.e_circleShape) {
        // Make relative to the center of the circle
        ///p1 -= body.GetLocalCenter();
        p1.SelfSub(body.GetLocalCenter());
        // Re-apply rotation about the center of the circle
        ///p1 = b2Mul(body.m_xf0.q, p1);
        b2Rot.MulRV(body.m_xf0.q, p1, p1);
        // Subtract rotation of the current frame
        ///p1 = b2MulT(body.m_xf.q, p1);
        b2Rot.MulTRV(body.m_xf.q, p1, p1);
        // Return to local space
        ///p1 += body.GetLocalCenter();
        p1.SelfAdd(body.GetLocalCenter());
      }
      // Return to global space and apply rotation of current frame
      ///input.p1 = b2Mul(body.m_xf, p1);
      b2Transform.MulXV(body.m_xf, p1, input.p1);
    } else {
      ///input.p1 = ap;
      input.p1.Copy(ap);
    }
    ///input.p2 = ap + m_step.dt * av;
    b2Vec2.AddVMulSV(ap, this.m_step.dt, av, input.p2);
    input.maxFraction = 1;
    if (fixture.RayCast(output, input, childIndex)) {
      let n = output.normal;
      ///b2Vec2 p = (1 - output.fraction) * input.p1 + output.fraction * input.p2 + b2_linearSlop * n;
      let p = s_p;
      p.x = (1 - output.fraction) * input.p1.x + output.fraction * input.p2.x + b2_linearSlop * n.x;
      p.y = (1 - output.fraction) * input.p1.y + output.fraction * input.p2.y + b2_linearSlop * n.y;
      ///b2Vec2 v = m_step.inv_dt * (p - ap);
      let v = s_v;
      v.x = this.m_step.inv_dt * (p.x - ap.x);
      v.y = this.m_step.inv_dt * (p.y - ap.y);
      ///m_system.m_velocityBuffer.data[a] = v;
      this.m_system.m_velocityBuffer.data[a].Copy(v);
      ///b2Vec2 f = m_step.inv_dt * m_system.GetParticleMass() * (av - v);
      let f = s_f;
      f.x = this.m_step.inv_dt * this.m_system.GetParticleMass() * (av.x - v.x);
      f.y = this.m_step.inv_dt * this.m_system.GetParticleMass() * (av.y - v.y);
      this.m_system.ParticleApplyForce(a, f);
    }
  }
  static ReportFixtureAndParticle_s_p1 = new b2Vec2();
  static ReportFixtureAndParticle_s_output = new b2RayCastOutput();
  static ReportFixtureAndParticle_s_input = new b2RayCastInput();
  static ReportFixtureAndParticle_s_p = new b2Vec2();
  static ReportFixtureAndParticle_s_v = new b2Vec2();
  static ReportFixtureAndParticle_s_f = new b2Vec2();

  /**
   * @export
   * @return {boolean}
   * @param {b2ParticleSystem} system
   * @param {number} index
   */
  ReportParticle(system: b2ParticleSystem, index: number): boolean {
    return false;
  }
}

}

///#endif

export const enum b2ParticleGroupFlag {
  /// Prevents overlapping or leaking.
  b2_solidParticleGroup = 1 << 0,
  /// Keeps its shape.
  b2_rigidParticleGroup = 1 << 1,
  /// Won't be destroyed if it gets empty.
  b2_particleGroupCanBeEmpty = 1 << 2,
  /// Will be destroyed on next simulation step.
  b2_particleGroupWillBeDestroyed = 1 << 3,
  /// Updates depth data on next simulation step.
  b2_particleGroupNeedsUpdateDepth = 1 << 4,

  b2_particleGroupInternalMask = b2_particleGroupWillBeDestroyed | b2_particleGroupNeedsUpdateDepth
}

export class b2ParticleGroupDef {
  flags: b2ParticleFlag = 0;
  groupFlags: b2ParticleGroupFlag = 0;
  position: b2Vec2 = new b2Vec2();
  angle: number = 0.0;
  linearVelocity: b2Vec2 = new b2Vec2();
  angularVelocity: number = 0.0;
  color: b2Color = new b2Color();
  strength: number = 1.0;
  shape: b2Shape = null;
  shapes: b2Shape[] = null;
  shapeCount: number = 0;
  stride: number = 0;
  particleCount: number = 0;
  positionData: b2Vec2[] = null;
  lifetime: number = 0;
  userData: any = null;
  group: b2ParticleGroup = null;
}

export class b2ParticleGroup {

  m_system: b2ParticleSystem = null;
  m_firstIndex: number = 0;
  m_lastIndex: number = 0;
  m_groupFlags: b2ParticleGroupFlag = 0;
  m_strength: number = 1.0;
  m_prev: b2ParticleGroup = null;
  m_next: b2ParticleGroup = null;
  m_timestamp: number = -1;
  m_mass: number = 0.0;
  m_inertia: number = 0.0;
  m_center: b2Vec2 = new b2Vec2();
  m_linearVelocity: b2Vec2 = new b2Vec2();
  m_angularVelocity: number = 0.0;
  m_transform: b2Transform = new b2Transform();
  ///m_transform.SetIdentity();
  m_userData: any = null;

  GetNext(): b2ParticleGroup {
    return this.m_next;
  }

  GetParticleSystem(): b2ParticleSystem {
    return this.m_system;
  }

  GetParticleCount(): number {
    return this.m_lastIndex - this.m_firstIndex;
  }

  GetBufferIndex(): number {
    return this.m_firstIndex;
  }

  ContainsParticle(index: number): boolean {
    return this.m_firstIndex <= index && index < this.m_lastIndex;
  }

  GetAllParticleFlags(): b2ParticleFlag {
    let flags = 0;
    for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
      flags |= this.m_system.m_flagsBuffer.data[i];
    }
    return flags;
  }

  GetGroupFlags(): b2ParticleGroupFlag {
    return this.m_groupFlags;
  }

  SetGroupFlags(flags: number): void {
    ///b2Assert((flags & b2ParticleGroupFlag.b2_particleGroupInternalMask) === 0);
    flags |= this.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupInternalMask;
    this.m_system.SetGroupFlags(this, flags);
  }

  GetMass(): number {
    this.UpdateStatistics();
    return this.m_mass;
  }

  GetInertia(): number {
    this.UpdateStatistics();
    return this.m_inertia;
  }

  GetCenter(): b2Vec2 {
    this.UpdateStatistics();
    return this.m_center;
  }

  GetLinearVelocity(): b2Vec2 {
    this.UpdateStatistics();
    return this.m_linearVelocity;
  }

  GetAngularVelocity(): number {
    this.UpdateStatistics();
    return this.m_angularVelocity;
  }

  GetTransform(): b2Transform {
    return this.m_transform;
  }

  GetPosition(): b2Vec2 {
    return this.m_transform.p;
  }

  GetAngle(): number {
    return this.m_transform.q.GetAngle();
  }

  GetLinearVelocityFromWorldPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2 {
    const s_t0 = b2ParticleGroup.GetLinearVelocityFromWorldPoint_s_t0;
    this.UpdateStatistics();
    ///  return m_linearVelocity + b2Cross(m_angularVelocity, worldPoint - m_center);
    return b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Vec2.SubVV(worldPoint, this.m_center, s_t0), out);
  }
  static GetLinearVelocityFromWorldPoint_s_t0 = new b2Vec2();

  GetUserData(): void {
    return this.m_userData;
  }

  SetUserData(data: any): void {
    this.m_userData = data;
  }

  ApplyForce(force: b2Vec2): void {
    this.m_system.ApplyForce(this.m_firstIndex, this.m_lastIndex, force);
  }

  ApplyLinearImpulse(impulse: b2Vec2): void {
    this.m_system.ApplyLinearImpulse(this.m_firstIndex, this.m_lastIndex, impulse);
  }

  DestroyParticles(callDestructionListener: boolean): void {
    ///b2Assert(this.m_system.m_world.IsLocked() === false);
    if (this.m_system.m_world.IsLocked()) {
      return;
    }

    for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
      this.m_system.DestroyParticle(i, callDestructionListener);
    }
  }

  UpdateStatistics(): void {
    const p = new b2Vec2();
    const v = new b2Vec2();
    if (this.m_timestamp !== this.m_system.m_timestamp) {
      const m = this.m_system.GetParticleMass();
      ///  this.m_mass = 0;
      this.m_mass = m * (this.m_lastIndex - this.m_firstIndex);
      this.m_center.SetZero();
      this.m_linearVelocity.SetZero();
      for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
        ///  this.m_mass += m;
        ///  this.m_center += m * this.m_system.m_positionBuffer.data[i];
        this.m_center.SelfMulAdd(m, this.m_system.m_positionBuffer.data[i]);
        ///  this.m_linearVelocity += m * this.m_system.m_velocityBuffer.data[i];
        this.m_linearVelocity.SelfMulAdd(m, this.m_system.m_velocityBuffer.data[i]);
      }
      if (this.m_mass > 0) {
        const inv_mass = 1 / this.m_mass;
        ///this.m_center *= 1 / this.m_mass;
        this.m_center.SelfMul(inv_mass);
        ///this.m_linearVelocity *= 1 / this.m_mass;
        this.m_linearVelocity.SelfMul(inv_mass);
      }
      this.m_inertia = 0;
      this.m_angularVelocity = 0;
      for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
        ///b2Vec2 p = this.m_system.m_positionBuffer.data[i] - this.m_center;
        b2Vec2.SubVV(this.m_system.m_positionBuffer.data[i], this.m_center, p);
        ///b2Vec2 v = this.m_system.m_velocityBuffer.data[i] - this.m_linearVelocity;
        b2Vec2.SubVV(this.m_system.m_velocityBuffer.data[i], this.m_linearVelocity, v);
        this.m_inertia += m * b2Vec2.DotVV(p, p);
        this.m_angularVelocity += m * b2Vec2.CrossVV(p, v);
      }
      if (this.m_inertia > 0) {
        this.m_angularVelocity *= 1 / this.m_inertia;
      }
      this.m_timestamp = this.m_system.m_timestamp;
    }
  }
}

///#endif
///#endif

/// Joints and fixtures are destroyed when their associated
/// body is destroyed. Implement this listener so that you
/// may nullify references to these joints and shapes.
export class b2DestructionListener {
  /// Called when any joint is about to be destroyed due
  /// to the destruction of one of its attached bodies.
  public SayGoodbyeJoint(joint: b2Joint): void {}

  /// Called when any fixture is about to be destroyed due
  /// to the destruction of its parent body.
  public SayGoodbyeFixture(fixture: b2Fixture): void {}

  ///#if B2_ENABLE_PARTICLE
  /// Called when any particle group is about to be destroyed.
  public SayGoodbyeParticleGroup(group: b2ParticleGroup): void {}

  /// Called when a particle is about to be destroyed.
  /// The index can be used in conjunction with
  /// b2ParticleSystem::GetUserDataBuffer() or
  /// b2ParticleSystem::GetParticleHandleFromIndex() to determine which
  /// particle has been destroyed.
  public SayGoodbyeParticle(system: b2ParticleSystem, index: number): void {}
  ///#endif
}

/// Implement this class to provide collision filtering. In other words, you can implement
/// this class if you want finer control over contact creation.
export class b2ContactFilter {
  /// Return true if contact calculations should be performed between these two shapes.
  /// @warning for performance reasons this is only called when the AABBs begin to overlap.
  public ShouldCollide(fixtureA: b2Fixture, fixtureB: b2Fixture): boolean {
    const bodyA: b2Body = fixtureA.GetBody();
    const bodyB: b2Body = fixtureB.GetBody();

    // At least one body should be dynamic or kinematic.
    if (bodyB.GetType() === b2BodyType.b2_staticBody && bodyA.GetType() === b2BodyType.b2_staticBody) {
      return false;
    }

    // Does a joint prevent collision?
    if (!bodyB.ShouldCollideConnected(bodyA)) {
      return false;
    }

    const filter1: b2Filter = fixtureA.GetFilterData();
    const filter2: b2Filter = fixtureB.GetFilterData();

    if (filter1.groupIndex === filter2.groupIndex && filter1.groupIndex !== 0) {
      return (filter1.groupIndex > 0);
    }

    const collide: boolean = (((filter1.maskBits & filter2.categoryBits) !== 0) && ((filter1.categoryBits & filter2.maskBits) !== 0));
    return collide;
  }

  ///#if B2_ENABLE_PARTICLE
  public ShouldCollideFixtureParticle(fixture: b2Fixture, system: b2ParticleSystem, index: number): boolean {
    return true;
  }

  public ShouldCollideParticleParticle(system: b2ParticleSystem, indexA: number, indexB: number): boolean {
    return true;
  }
  ///#endif

  public static b2_defaultFilter: b2ContactFilter = new b2ContactFilter();
}


/// Contact impulses for reporting. Impulses are used instead of forces because
/// sub-step forces may approach infinity for rigid body collisions. These
/// match up one-to-one with the contact points in b2Manifold.
export class b2ContactImpulse {
  public normalImpulses: number[] = b2MakeNumberArray(b2_maxManifoldPoints);
  public tangentImpulses: number[] = b2MakeNumberArray(b2_maxManifoldPoints);
  public count: number = 0;
}


/// Implement this class to get contact information. You can use these results for
/// things like sounds and game logic. You can also get contact results by
/// traversing the contact lists after the time step. However, you might miss
/// some contacts because continuous physics leads to sub-stepping.
/// Additionally you may receive multiple callbacks for the same contact in a
/// single time step.
/// You should strive to make your callbacks efficient because there may be
/// many callbacks per time step.
/// @warning You cannot create/destroy Box2D entities inside these callbacks.
export class b2ContactListener {
  /// Called when two fixtures begin to touch.
  public BeginContact(contact: b2Contact): void {}

  /// Called when two fixtures cease to touch.
  public EndContact(contact: b2Contact): void {}

  ///#if B2_ENABLE_PARTICLE
  public BeginContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void {}
  public EndContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void {}
  public BeginContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void {}
  public EndContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void {}
  ///#endif

  /// This is called after a contact is updated. This allows you to inspect a
  /// contact before it goes to the solver. If you are careful, you can modify the
  /// contact manifold (e.g. disable contact).
  /// A copy of the old manifold is provided so that you can detect changes.
  /// Note: this is called only for awake bodies.
  /// Note: this is called even when the number of contact points is zero.
  /// Note: this is not called for sensors.
  /// Note: if you set the number of contact points to zero, you will not
  /// get an EndContact callback. However, you may get a BeginContact callback
  /// the next step.
  public PreSolve(contact: b2Contact, oldManifold: b2Manifold): void {}

  /// This lets you inspect a contact after the solver is finished. This is useful
  /// for inspecting impulses.
  /// Note: the contact manifold does not include time of impact impulses, which can be
  /// arbitrarily large if the sub-step is small. Hence the impulse is provided explicitly
  /// in a separate data structure.
  /// Note: this is only called for contacts that are touching, solid, and awake.
  public PostSolve(contact: b2Contact, impulse: b2ContactImpulse): void {}

  public static b2_defaultListener: b2ContactListener = new b2ContactListener();
}



export type b2QueryCallbackFunction = { (fixture: b2Fixture): boolean };

/// Callback class for ray casts.
/// See b2World::RayCast
export class b2RayCastCallback {
  /// Called for each fixture found in the query. You control how the ray cast
  /// proceeds by returning a float:
  /// return -1: ignore this fixture and continue
  /// return 0: terminate the ray cast
  /// return fraction: clip the ray to this point
  /// return 1: don't clip the ray and continue
  /// @param fixture the fixture hit by the ray
  /// @param point the point of initial intersection
  /// @param normal the normal vector at the point of intersection
  /// @return -1 to filter, 0 to terminate, fraction to clip the ray for
  /// closest hit, 1 to continue
  public ReportFixture(fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number {
    return fraction;
  }

  ///#if B2_ENABLE_PARTICLE
  public ReportParticle(system: b2ParticleSystem, index: number, point: b2Vec2, normal: b2Vec2, fraction: number): number {
    return 0;
  }
  public ShouldQueryParticleSystem(system: b2ParticleSystem): boolean {
    return true;
  }
  ///#endif
}

export type b2RayCastCallbackFunction = { (fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number };

/*
Position Correction Notes
=========================
I tried the several algorithms for position correction of the 2D revolute joint.
I looked at these systems:
- simple pendulum (1m diameter sphere on massless 5m stick) with initial angular velocity of 100 rad/s.
- suspension bridge with 30 1m long planks of length 1m.
- multi-link chain with 30 1m long links.

Here are the algorithms:

Baumgarte - A fraction of the position error is added to the velocity error. There is no
separate position solver.

Pseudo Velocities - After the velocity solver and position integration,
the position error, Jacobian, and effective mass are recomputed. Then
the velocity constraints are solved with pseudo velocities and a fraction
of the position error is added to the pseudo velocity error. The pseudo
velocities are initialized to zero and there is no warm-starting. After
the position solver, the pseudo velocities are added to the positions.
This is also called the First Order World method or the Position LCP method.

Modified Nonlinear Gauss-Seidel (NGS) - Like Pseudo Velocities except the
position error is re-computed for each constraint and the positions are updated
after the constraint is solved. The radius vectors (aka Jacobians) are
re-computed too (otherwise the algorithm has horrible instability). The pseudo
velocity states are not needed because they are effectively zero at the beginning
of each iteration. Since we have the current position error, we allow the
iterations to terminate early if the error becomes smaller than b2_linearSlop.

Full NGS or just NGS - Like Modified NGS except the effective mass are re-computed
each time a constraint is solved.

Here are the results:
Baumgarte - this is the cheapest algorithm but it has some stability problems,
especially with the bridge. The chain links separate easily close to the root
and they jitter as they struggle to pull together. This is one of the most common
methods in the field. The big drawback is that the position correction artificially
affects the momentum, thus leading to instabilities and false bounce. I used a
bias factor of 0.2. A larger bias factor makes the bridge less stable, a smaller
factor makes joints and contacts more spongy.

Pseudo Velocities - the is more stable than the Baumgarte method. The bridge is
stable. However, joints still separate with large angular velocities. Drag the
simple pendulum in a circle quickly and the joint will separate. The chain separates
easily and does not recover. I used a bias factor of 0.2. A larger value lead to
the bridge collapsing when a heavy cube drops on it.

Modified NGS - this algorithm is better in some ways than Baumgarte and Pseudo
Velocities, but in other ways it is worse. The bridge and chain are much more
stable, but the simple pendulum goes unstable at high angular velocities.

Full NGS - stable in all tests. The joints display good stiffness. The bridge
still sags, but this is better than infinite forces.

Recommendations
Pseudo Velocities are not really worthwhile because the bridge and chain cannot
recover from joint separation. In other cases the benefit over Baumgarte is small.

Modified NGS is not a robust method for the revolute joint due to the violent
instability seen in the simple pendulum. Perhaps it is viable with other constraint
types, especially scalar constraints where the effective mass is a scalar.

This leaves Baumgarte and Full NGS. Baumgarte has small, but manageable instabilities
and is very fast. I don't think we can escape Baumgarte, especially in highly
demanding cases where high constraint fidelity is not needed.

Full NGS is robust and easy on the eyes. I recommend this as an option for
higher fidelity simulation and certainly for suspension bridges and long chains.
Full NGS might be a good choice for ragdolls, especially motorized ragdolls where
joint separation can be problematic. The number of NGS iterations can be reduced
for better performance without harming robustness much.

Each joint in a can be handled differently in the position solver. So I recommend
a system where the user can select the algorithm on a per joint basis. I would
probably default to the slower Full NGS and let the user select the faster
Baumgarte method in performance critical scenarios.
*/

/*
Cache Performance

The Box2D solvers are dominated by cache misses. Data structures are designed
to increase the number of cache hits. Much of misses are due to random access
to body data. The constraint structures are iterated over linearly, which leads
to few cache misses.

The bodies are not accessed during iteration. Instead read only data, such as
the mass values are stored with the constraints. The mutable data are the constraint
impulses and the bodies velocities/positions. The impulses are held inside the
constraint structures. The body velocities/positions are held in compact, temporary
arrays to increase the number of cache hits. Linear and angular velocity are
stored in a single array since multiple arrays lead to multiple misses.
*/

/*
2D Rotation

R = [cos(theta) -sin(theta)]
    [sin(theta) cos(theta) ]

thetaDot = omega

Let q1 = cos(theta), q2 = sin(theta).
R = [q1 -q2]
    [q2  q1]

q1Dot = -thetaDot * q2
q2Dot = thetaDot * q1

q1_new = q1_old - dt * w * q2
q2_new = q2_old + dt * w * q1
then normalize.

This might be faster than computing sin+cos.
However, we can compute sin+cos of the same angle fast.
*/

export class b2Island {
  public m_allocator: any = null;
  public m_listener: b2ContactListener = null;

  public m_bodies: b2Body[] = [/*1024*/]; // TODO: b2Settings
  public m_contacts: b2Contact[] = [/*1024*/]; // TODO: b2Settings
  public m_joints: b2Joint[] = [/*1024*/]; // TODO: b2Settings

  public m_positions: b2Position[] = b2Position.MakeArray(1024); // TODO: b2Settings
  public m_velocities: b2Velocity[] = b2Velocity.MakeArray(1024); // TODO: b2Settings

  public m_bodyCount: number = 0;
  public m_jointCount: number = 0;
  public m_contactCount: number = 0;

  public m_bodyCapacity: number = 0;
  public m_contactCapacity: number = 0;
  public m_jointCapacity: number = 0;

  public Initialize(bodyCapacity: number, contactCapacity: number, jointCapacity: number, allocator: any, listener: b2ContactListener): void {
    this.m_bodyCapacity = bodyCapacity;
    this.m_contactCapacity = contactCapacity;
    this.m_jointCapacity = jointCapacity;
    this.m_bodyCount = 0;
    this.m_contactCount = 0;
    this.m_jointCount = 0;

    this.m_allocator = allocator;
    this.m_listener = listener;

    // TODO:
    while (this.m_bodies.length < bodyCapacity) {
      this.m_bodies[this.m_bodies.length] = null;
    }
    // TODO:
    while (this.m_contacts.length < contactCapacity) {
      this.m_contacts[this.m_contacts.length] = null;
    }
    // TODO:
    while (this.m_joints.length < jointCapacity) {
      this.m_joints[this.m_joints.length] = null;
    }

    // TODO:
    if (this.m_positions.length < bodyCapacity) {
      const new_length = b2Max(this.m_positions.length * 2, bodyCapacity);
      while (this.m_positions.length < new_length) {
        this.m_positions[this.m_positions.length] = new b2Position();
      }
    }
    // TODO:
    if (this.m_velocities.length < bodyCapacity) {
      const new_length = b2Max(this.m_velocities.length * 2, bodyCapacity);
      while (this.m_velocities.length < new_length) {
        this.m_velocities[this.m_velocities.length] = new b2Velocity();
      }
    }
  }

  public Clear(): void {
    this.m_bodyCount = 0;
    this.m_contactCount = 0;
    this.m_jointCount = 0;
  }

  public AddBody(body: b2Body): void {
    ///b2Assert(this.m_bodyCount < this.m_bodyCapacity);
    body.m_islandIndex = this.m_bodyCount;
    this.m_bodies[this.m_bodyCount++] = body;
  }

  public AddContact(contact: b2Contact): void {
    ///b2Assert(this.m_contactCount < this.m_contactCapacity);
    this.m_contacts[this.m_contactCount++] = contact;
  }

  public AddJoint(joint: b2Joint): void {
    ///b2Assert(this.m_jointCount < this.m_jointCapacity);
    this.m_joints[this.m_jointCount++] = joint;
  }

  private static s_timer = new b2Timer();
  private static s_solverData = new b2SolverData();
  private static s_contactSolverDef = new b2ContactSolverDef();
  private static s_contactSolver = new b2ContactSolver();
  private static s_translation = new b2Vec2();
  public Solve(profile: b2Profile, step: b2TimeStep, gravity: b2Vec2, allowSleep: boolean): void {
    const timer: b2Timer = b2Island.s_timer.Reset();

    const h: number = step.dt;

    // Integrate velocities and apply damping. Initialize the body state.
    for (let i: number = 0; i < this.m_bodyCount; ++i) {
      const b: b2Body = this.m_bodies[i];

      /*const c: b2Vec2 =*/ this.m_positions[i].c.Copy(b.m_sweep.c);
      const a: number = b.m_sweep.a;
      const v: b2Vec2 = this.m_velocities[i].v.Copy(b.m_linearVelocity);
      let w: number = b.m_angularVelocity;

      // Store positions for continuous collision.
      b.m_sweep.c0.Copy(b.m_sweep.c);
      b.m_sweep.a0 = b.m_sweep.a;

      if (b.m_type === b2BodyType.b2_dynamicBody) {
        // Integrate velocities.
        v.x += h * (b.m_gravityScale * gravity.x + b.m_invMass * b.m_force.x);
        v.y += h * (b.m_gravityScale * gravity.y + b.m_invMass * b.m_force.y);
        w += h * b.m_invI * b.m_torque;

        // Apply damping.
        // ODE: dv/dt + c * v = 0
        // Solution: v(t) = v0 * exp(-c * t)
        // Time step: v(t + dt) = v0 * exp(-c * (t + dt)) = v0 * exp(-c * t) * exp(-c * dt) = v * exp(-c * dt)
        // v2 = exp(-c * dt) * v1
        // Pade approximation:
        // v2 = v1 * 1 / (1 + c * dt)
        v.SelfMul(1.0 / (1.0 + h * b.m_linearDamping));
        w *= 1.0 / (1.0 + h * b.m_angularDamping);
      }

      // this.m_positions[i].c = c;
      this.m_positions[i].a = a;
      // this.m_velocities[i].v = v;
      this.m_velocities[i].w = w;
    }

    timer.Reset();

    // Solver data
    const solverData: b2SolverData = b2Island.s_solverData;
    solverData.step.Copy(step);
    solverData.positions = this.m_positions;
    solverData.velocities = this.m_velocities;

    // Initialize velocity constraints.
    const contactSolverDef: b2ContactSolverDef = b2Island.s_contactSolverDef;
    contactSolverDef.step.Copy(step);
    contactSolverDef.contacts = this.m_contacts;
    contactSolverDef.count = this.m_contactCount;
    contactSolverDef.positions = this.m_positions;
    contactSolverDef.velocities = this.m_velocities;
    contactSolverDef.allocator = this.m_allocator;

    const contactSolver: b2ContactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);
    contactSolver.InitializeVelocityConstraints();

    if (step.warmStarting) {
      contactSolver.WarmStart();
    }

    for (let i: number = 0; i < this.m_jointCount; ++i) {
      this.m_joints[i].InitVelocityConstraints(solverData);
    }

    profile.solveInit = timer.GetMilliseconds();

    // Solve velocity constraints.
    timer.Reset();
    for (let i: number = 0; i < step.velocityIterations; ++i) {
      for (let j: number = 0; j < this.m_jointCount; ++j) {
        this.m_joints[j].SolveVelocityConstraints(solverData);
      }

      contactSolver.SolveVelocityConstraints();
    }

    // Store impulses for warm starting
    contactSolver.StoreImpulses();
    profile.solveVelocity = timer.GetMilliseconds();

    // Integrate positions.
    for (let i: number = 0; i < this.m_bodyCount; ++i) {
      const c: b2Vec2 = this.m_positions[i].c;
      let a: number = this.m_positions[i].a;
      const v: b2Vec2 = this.m_velocities[i].v;
      let w: number = this.m_velocities[i].w;

      // Check for large velocities
      const translation: b2Vec2 = b2Vec2.MulSV(h, v, b2Island.s_translation);
      if (b2Vec2.DotVV(translation, translation) > b2_maxTranslationSquared) {
        const ratio: number = b2_maxTranslation / translation.Length();
        v.SelfMul(ratio);
      }

      const rotation: number = h * w;
      if (rotation * rotation > b2_maxRotationSquared) {
        const ratio: number = b2_maxRotation / b2Abs(rotation);
        w *= ratio;
      }

      // Integrate
      c.x += h * v.x;
      c.y += h * v.y;
      a += h * w;

      // this.m_positions[i].c = c;
      this.m_positions[i].a = a;
      // this.m_velocities[i].v = v;
      this.m_velocities[i].w = w;
    }

    // Solve position constraints
    timer.Reset();
    let positionSolved: boolean = false;
    for (let i: number = 0; i < step.positionIterations; ++i) {
      const contactsOkay: boolean = contactSolver.SolvePositionConstraints();

      let jointsOkay: boolean = true;
      for (let j: number = 0; j < this.m_jointCount; ++j) {
        const jointOkay: boolean = this.m_joints[j].SolvePositionConstraints(solverData);
        jointsOkay = jointsOkay && jointOkay;
      }

      if (contactsOkay && jointsOkay) {
        // Exit early if the position errors are small.
        positionSolved = true;
        break;
      }
    }

    // Copy state buffers back to the bodies
    for (let i: number = 0; i < this.m_bodyCount; ++i) {
      const body: b2Body = this.m_bodies[i];
      body.m_sweep.c.Copy(this.m_positions[i].c);
      body.m_sweep.a = this.m_positions[i].a;
      body.m_linearVelocity.Copy(this.m_velocities[i].v);
      body.m_angularVelocity = this.m_velocities[i].w;
      body.SynchronizeTransform();
    }

    profile.solvePosition = timer.GetMilliseconds();

    this.Report(contactSolver.m_velocityConstraints);

    if (allowSleep) {
      let minSleepTime: number = b2_maxFloat;

      const linTolSqr: number = b2_linearSleepTolerance * b2_linearSleepTolerance;
      const angTolSqr: number = b2_angularSleepTolerance * b2_angularSleepTolerance;

      for (let i: number = 0; i < this.m_bodyCount; ++i) {
        const b: b2Body = this.m_bodies[i];
        if (b.GetType() === b2BodyType.b2_staticBody) {
          continue;
        }

        if (!b.m_autoSleepFlag ||
          b.m_angularVelocity * b.m_angularVelocity > angTolSqr ||
          b2Vec2.DotVV(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
          b.m_sleepTime = 0;
          minSleepTime = 0;
        } else {
          b.m_sleepTime += h;
          minSleepTime = b2Min(minSleepTime, b.m_sleepTime);
        }
      }

      if (minSleepTime >= b2_timeToSleep && positionSolved) {
        for (let i: number = 0; i < this.m_bodyCount; ++i) {
          const b: b2Body = this.m_bodies[i];
          b.SetAwake(false);
        }
      }
    }
  }

  public SolveTOI(subStep: b2TimeStep, toiIndexA: number, toiIndexB: number): void {
    ///b2Assert(toiIndexA < this.m_bodyCount);
    ///b2Assert(toiIndexB < this.m_bodyCount);

    // Initialize the body state.
    for (let i: number = 0; i < this.m_bodyCount; ++i) {
      const b: b2Body = this.m_bodies[i];
      this.m_positions[i].c.Copy(b.m_sweep.c);
      this.m_positions[i].a = b.m_sweep.a;
      this.m_velocities[i].v.Copy(b.m_linearVelocity);
      this.m_velocities[i].w = b.m_angularVelocity;
    }

    const contactSolverDef: b2ContactSolverDef = b2Island.s_contactSolverDef;
    contactSolverDef.contacts = this.m_contacts;
    contactSolverDef.count = this.m_contactCount;
    contactSolverDef.allocator = this.m_allocator;
    contactSolverDef.step.Copy(subStep);
    contactSolverDef.positions = this.m_positions;
    contactSolverDef.velocities = this.m_velocities;
    const contactSolver: b2ContactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);

    // Solve position constraints.
    for (let i: number = 0; i < subStep.positionIterations; ++i) {
      const contactsOkay: boolean = contactSolver.SolveTOIPositionConstraints(toiIndexA, toiIndexB);
      if (contactsOkay) {
        break;
      }
    }

  /*
  #if 0
    // Is the new position really safe?
    for (int32 i = 0; i < this.m_contactCount; ++i) {
      b2Contact* c = this.m_contacts[i];
      b2Fixture* fA = c.GetFixtureA();
      b2Fixture* fB = c.GetFixtureB();

      b2Body* bA = fA.GetBody();
      b2Body* bB = fB.GetBody();

      int32 indexA = c.GetChildIndexA();
      int32 indexB = c.GetChildIndexB();

      b2DistanceInput input;
      input.proxyA.Set(fA.GetShape(), indexA);
      input.proxyB.Set(fB.GetShape(), indexB);
      input.transformA = bA.GetTransform();
      input.transformB = bB.GetTransform();
      input.useRadii = false;

      b2DistanceOutput output;
      b2SimplexCache cache;
      cache.count = 0;
      b2Distance(&output, &cache, &input);

      if (output.distance === 0 || cache.count === 3) {
        cache.count += 0;
      }
    }
  #endif
  */

    // Leap of faith to new safe state.
    this.m_bodies[toiIndexA].m_sweep.c0.Copy(this.m_positions[toiIndexA].c);
    this.m_bodies[toiIndexA].m_sweep.a0 = this.m_positions[toiIndexA].a;
    this.m_bodies[toiIndexB].m_sweep.c0.Copy(this.m_positions[toiIndexB].c);
    this.m_bodies[toiIndexB].m_sweep.a0 = this.m_positions[toiIndexB].a;

    // No warm starting is needed for TOI events because warm
    // starting impulses were applied in the discrete solver.
    contactSolver.InitializeVelocityConstraints();

    // Solve velocity constraints.
    for (let i: number = 0; i < subStep.velocityIterations; ++i) {
      contactSolver.SolveVelocityConstraints();
    }

    // Don't store the TOI contact forces for warm starting
    // because they can be quite large.

    const h: number = subStep.dt;

    // Integrate positions
    for (let i: number = 0; i < this.m_bodyCount; ++i) {
      const c: b2Vec2 = this.m_positions[i].c;
      let a: number = this.m_positions[i].a;
      const v: b2Vec2 = this.m_velocities[i].v;
      let w: number = this.m_velocities[i].w;

      // Check for large velocities
      const translation: b2Vec2 = b2Vec2.MulSV(h, v, b2Island.s_translation);
      if (b2Vec2.DotVV(translation, translation) > b2_maxTranslationSquared) {
        const ratio: number = b2_maxTranslation / translation.Length();
        v.SelfMul(ratio);
      }

      const rotation: number = h * w;
      if (rotation * rotation > b2_maxRotationSquared) {
        const ratio: number = b2_maxRotation / b2Abs(rotation);
        w *= ratio;
      }

      // Integrate
      c.SelfMulAdd(h, v);
      a += h * w;

      // this.m_positions[i].c = c;
      this.m_positions[i].a = a;
      // this.m_velocities[i].v = v;
      this.m_velocities[i].w = w;

      // Sync bodies
      const body: b2Body = this.m_bodies[i];
      body.m_sweep.c.Copy(c);
      body.m_sweep.a = a;
      body.m_linearVelocity.Copy(v);
      body.m_angularVelocity = w;
      body.SynchronizeTransform();
    }

    this.Report(contactSolver.m_velocityConstraints);
  }

  private static s_impulse = new b2ContactImpulse();
  public Report(constraints: b2ContactVelocityConstraint[]): void {
    if (this.m_listener === null) {
      return;
    }

    for (let i: number = 0; i < this.m_contactCount; ++i) {
      const c: b2Contact = this.m_contacts[i];

      if (!c) { continue; }

      const vc: b2ContactVelocityConstraint = constraints[i];

      const impulse: b2ContactImpulse = b2Island.s_impulse;
      impulse.count = vc.pointCount;
      for (let j: number = 0; j < vc.pointCount; ++j) {
        impulse.normalImpulses[j] = vc.points[j].normalImpulse;
        impulse.tangentImpulses[j] = vc.points[j].tangentImpulse;
      }

      this.m_listener.PostSolve(c, impulse);
    }
  }
}
///#if B2_ENABLE_PARTICLE
///#endif
///import { b2Controller } from "../../../Contributions/Enhancements/Controllers/b2Controller";

/// The world class manages all physics entities, dynamic simulation,
/// and asynchronous queries. The world also contains efficient memory
/// management facilities.
export class b2World {
  // b2BlockAllocator m_blockAllocator;
  // b2StackAllocator m_stackAllocator;

  public m_newFixture: boolean = false;
  public m_locked: boolean = false;
  public m_clearForces: boolean = true;

  public m_contactManager: b2ContactManager = new b2ContactManager();

  public m_bodyList: b2Body = null;
  public m_jointList: b2Joint = null;

  ///#if B2_ENABLE_PARTICLE
  public m_particleSystemList: b2ParticleSystem = null;
  ///#endif

  public m_bodyCount: number = 0;
  public m_jointCount: number = 0;

  public m_gravity: b2Vec2 = new b2Vec2();
  public m_allowSleep: boolean = true;

  public m_destructionListener: b2DestructionListener = null;
  public m_debugDraw: b2Draw = null;

  // This is used to compute the time step ratio to
  // support a variable time step.
  public m_inv_dt0: number = 0;

  // These are for debugging the solver.
  public m_warmStarting: boolean = true;
  public m_continuousPhysics: boolean = true;
  public m_subStepping: boolean = false;

  public m_stepComplete: boolean = true;

  public m_profile: b2Profile = new b2Profile();

  public m_island: b2Island = new b2Island();

  public s_stack: b2Body[] = [];

// public m_controllerList: b2Controller = null;
// public m_controllerCount: number = 0;

  /// Construct a world object.
  /// @param gravity the world gravity vector.
  constructor(gravity: b2Vec2) {
    this.m_gravity.Copy(gravity);
  }

  /// Register a destruction listener. The listener is owned by you and must
  /// remain in scope.
  public SetDestructionListener(listener: b2DestructionListener): void {
    this.m_destructionListener = listener;
  }

  /// Register a contact filter to provide specific control over collision.
  /// Otherwise the default filter is used (b2_defaultFilter). The listener is
  /// owned by you and must remain in scope.
  public SetContactFilter(filter: b2ContactFilter): void {
    this.m_contactManager.m_contactFilter = filter;
  }

  /// Register a contact event listener. The listener is owned by you and must
  /// remain in scope.
  public SetContactListener(listener: b2ContactListener): void {
    this.m_contactManager.m_contactListener = listener;
  }

  /// Register a routine for debug drawing. The debug draw functions are called
  /// inside with b2World::DrawDebugData method. The debug draw object is owned
  /// by you and must remain in scope.
  public SetDebugDraw(debugDraw: b2Draw): void {
    this.m_debugDraw = debugDraw;
  }

  /// Create a rigid body given a definition. No reference to the definition
  /// is retained.
  /// @warning This function is locked during callbacks.
  public CreateBody(def: b2BodyDef): b2Body {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return null;
    }

    const b: b2Body = new b2Body(def, this);

    // Add to world doubly linked list.
    b.m_prev = null;
    b.m_next = this.m_bodyList;
    if (this.m_bodyList) {
      this.m_bodyList.m_prev = b;
    }
    this.m_bodyList = b;
    ++this.m_bodyCount;

    return b;
  }

  /// Destroy a rigid body given a definition. No reference to the definition
  /// is retained. This function is locked during callbacks.
  /// @warning This automatically deletes all associated shapes and joints.
  /// @warning This function is locked during callbacks.
  public DestroyBody(b: b2Body): void {
    ///b2Assert(this.m_bodyCount > 0);
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return;
    }

    // Delete the attached joints.
    let je: b2JointEdge = b.m_jointList;
    while (je) {
      const je0: b2JointEdge = je;
      je = je.next;

      if (this.m_destructionListener) {
        this.m_destructionListener.SayGoodbyeJoint(je0.joint);
      }

      this.DestroyJoint(je0.joint);

      b.m_jointList = je;
    }
    b.m_jointList = null;

    /// @see b2Controller list
//    const coe: b2ControllerEdge = b.m_controllerList;
//    while (coe) {
//      const coe0: b2ControllerEdge = coe;
//      coe = coe.nextController;
//      coe0.controller.RemoveBody(b);
//    }

    // Delete the attached contacts.
    let ce: b2ContactEdge = b.m_contactList;
    while (ce) {
      const ce0: b2ContactEdge = ce;
      ce = ce.next;
      this.m_contactManager.Destroy(ce0.contact);
    }
    b.m_contactList = null;

    // Delete the attached fixtures. This destroys broad-phase proxies.
    let f: b2Fixture = b.m_fixtureList;
    while (f) {
      const f0: b2Fixture = f;
      f = f.m_next;

      if (this.m_destructionListener) {
        this.m_destructionListener.SayGoodbyeFixture(f0);
      }

      f0.DestroyProxies(this.m_contactManager.m_broadPhase);
      f0.Destroy();

      b.m_fixtureList = f;
      b.m_fixtureCount -= 1;
    }
    b.m_fixtureList = null;
    b.m_fixtureCount = 0;

    // Remove world body list.
    if (b.m_prev) {
      b.m_prev.m_next = b.m_next;
    }

    if (b.m_next) {
      b.m_next.m_prev = b.m_prev;
    }

    if (b === this.m_bodyList) {
      this.m_bodyList = b.m_next;
    }

    --this.m_bodyCount;
  }

  /// Create a joint to constrain bodies together. No reference to the definition
  /// is retained. This may cause the connected bodies to cease colliding.
  /// @warning This function is locked during callbacks.
  public CreateJoint(def: b2JointDef): b2Joint {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return null;
    }

    const j: b2Joint = b2JointFactory.Create(def, null);

    // Connect to the world list.
    j.m_prev = null;
    j.m_next = this.m_jointList;
    if (this.m_jointList) {
      this.m_jointList.m_prev = j;
    }
    this.m_jointList = j;
    ++this.m_jointCount;

    // Connect to the bodies' doubly linked lists.
    j.m_edgeA.joint = j;
    j.m_edgeA.other = j.m_bodyB;
    j.m_edgeA.prev = null;
    j.m_edgeA.next = j.m_bodyA.m_jointList;
    if (j.m_bodyA.m_jointList) j.m_bodyA.m_jointList.prev = j.m_edgeA;
    j.m_bodyA.m_jointList = j.m_edgeA;

    j.m_edgeB.joint = j;
    j.m_edgeB.other = j.m_bodyA;
    j.m_edgeB.prev = null;
    j.m_edgeB.next = j.m_bodyB.m_jointList;
    if (j.m_bodyB.m_jointList) j.m_bodyB.m_jointList.prev = j.m_edgeB;
    j.m_bodyB.m_jointList = j.m_edgeB;

    const bodyA: b2Body = def.bodyA;
    const bodyB: b2Body = def.bodyB;

    // If the joint prevents collisions, then flag any contacts for filtering.
    if (!def.collideConnected) {
      let edge: b2ContactEdge = bodyB.GetContactList();
      while (edge) {
        if (edge.other === bodyA) {
          // Flag the contact for filtering at the next time step (where either
          // body is awake).
          edge.contact.FlagForFiltering();
        }

        edge = edge.next;
      }
    }

    // Note: creating a joint doesn't wake the bodies.

    return j;
  }

  /// Destroy a joint. This may cause the connected bodies to begin colliding.
  /// @warning This function is locked during callbacks.
  public DestroyJoint(j: b2Joint): void {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return;
    }

    const collideConnected: boolean = j.m_collideConnected;

    // Remove from the doubly linked list.
    if (j.m_prev) {
      j.m_prev.m_next = j.m_next;
    }

    if (j.m_next) {
      j.m_next.m_prev = j.m_prev;
    }

    if (j === this.m_jointList) {
      this.m_jointList = j.m_next;
    }

    // Disconnect from island graph.
    const bodyA: b2Body = j.m_bodyA;
    const bodyB: b2Body = j.m_bodyB;

    // Wake up connected bodies.
    bodyA.SetAwake(true);
    bodyB.SetAwake(true);

    // Remove from body 1.
    if (j.m_edgeA.prev) {
      j.m_edgeA.prev.next = j.m_edgeA.next;
    }

    if (j.m_edgeA.next) {
      j.m_edgeA.next.prev = j.m_edgeA.prev;
    }

    if (j.m_edgeA === bodyA.m_jointList) {
      bodyA.m_jointList = j.m_edgeA.next;
    }

    j.m_edgeA.prev = null;
    j.m_edgeA.next = null;

    // Remove from body 2
    if (j.m_edgeB.prev) {
      j.m_edgeB.prev.next = j.m_edgeB.next;
    }

    if (j.m_edgeB.next) {
      j.m_edgeB.next.prev = j.m_edgeB.prev;
    }

    if (j.m_edgeB === bodyB.m_jointList) {
      bodyB.m_jointList = j.m_edgeB.next;
    }

    j.m_edgeB.prev = null;
    j.m_edgeB.next = null;

    b2JointFactory.Destroy(j, null);

    ///b2Assert(this.m_jointCount > 0);
    --this.m_jointCount;

    // If the joint prevents collisions, then flag any contacts for filtering.
    if (!collideConnected) {
      let edge: b2ContactEdge = bodyB.GetContactList();
      while (edge) {
        if (edge.other === bodyA) {
          // Flag the contact for filtering at the next time step (where either
          // body is awake).
          edge.contact.FlagForFiltering();
        }

        edge = edge.next;
      }
    }
  }

  ///#if B2_ENABLE_PARTICLE

  CreateParticleSystem(def: b2ParticleSystemDef): b2ParticleSystem {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return null;
    }

    const p = new b2ParticleSystem(def, this);

    // Add to world doubly linked list.
    p.m_prev = null;
    p.m_next = this.m_particleSystemList;
    if (this.m_particleSystemList) {
      this.m_particleSystemList.m_prev = p;
    }
    this.m_particleSystemList = p;

    return p;
  }

  DestroyParticleSystem(p: b2ParticleSystem): void {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return;
    }

    // Remove world particleSystem list.
    if (p.m_prev) {
      p.m_prev.m_next = p.m_next;
    }

    if (p.m_next) {
      p.m_next.m_prev = p.m_prev;
    }

    if (p === this.m_particleSystemList) {
      this.m_particleSystemList = p.m_next;
    }
  }

  CalculateReasonableParticleIterations(timeStep: number): number {
    if (this.m_particleSystemList === null) {
      return 1;
    }

    function GetSmallestRadius(world: b2World): number {
      let smallestRadius = b2_maxFloat;
      for (let system = world.GetParticleSystemList(); system !== null; system = system.m_next) {
        smallestRadius = b2Min(smallestRadius, system.GetRadius());
      }
      return smallestRadius;
    }

    // Use the smallest radius, since that represents the worst-case.
    return b2CalculateParticleIterations(this.m_gravity.Length(), GetSmallestRadius(this), timeStep);
  }

  ///#endif

  /// Take a time step. This performs collision detection, integration,
  /// and constraint solution.
  /// @param timeStep the amount of time to simulate, this should not vary.
  /// @param velocityIterations for the velocity constraint solver.
  /// @param positionIterations for the position constraint solver.
  private static Step_s_step = new b2TimeStep();
  private static Step_s_stepTimer = new b2Timer();
  private static Step_s_timer = new b2Timer();
  ///#if B2_ENABLE_PARTICLE
  public Step(dt: number, velocityIterations: number, positionIterations: number, particleIterations: number = this.CalculateReasonableParticleIterations(dt)): void {
  ///#else
  ///public Step(dt: number, velocityIterations: number, positionIterations: number): void {
  ///#endif
    const stepTimer: b2Timer = b2World.Step_s_stepTimer.Reset();

    // If new fixtures were added, we need to find the new contacts.
    if (this.m_newFixture) {
      this.m_contactManager.FindNewContacts();
      this.m_newFixture = false;
    }

    this.m_locked = true;

    const step: b2TimeStep = b2World.Step_s_step;
    step.dt = dt;
    step.velocityIterations = velocityIterations;
    step.positionIterations = positionIterations;
    ///#if B2_ENABLE_PARTICLE
    step.particleIterations = particleIterations;
    ///#endif
    if (dt > 0) {
      step.inv_dt = 1 / dt;
    } else {
      step.inv_dt = 0;
    }

    step.dtRatio = this.m_inv_dt0 * dt;

    step.warmStarting = this.m_warmStarting;

    // Update contacts. This is where some contacts are destroyed.
    const timer: b2Timer = b2World.Step_s_timer.Reset();
    this.m_contactManager.Collide();
    this.m_profile.collide = timer.GetMilliseconds();

    // Integrate velocities, solve velocity constraints, and integrate positions.
    if (this.m_stepComplete && step.dt > 0) {
      const timer: b2Timer = b2World.Step_s_timer.Reset();
      ///#if B2_ENABLE_PARTICLE
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        p.Solve(step); // Particle Simulation
      }
      ///#endif
      this.Solve(step);
      this.m_profile.solve = timer.GetMilliseconds();
    }

    // Handle TOI events.
    if (this.m_continuousPhysics && step.dt > 0) {
      const timer: b2Timer = b2World.Step_s_timer.Reset();
      this.SolveTOI(step);
      this.m_profile.solveTOI = timer.GetMilliseconds();
    }

    if (step.dt > 0) {
      this.m_inv_dt0 = step.inv_dt;
    }

    if (this.m_clearForces) {
      this.ClearForces();
    }

    this.m_locked = false;

    this.m_profile.step = stepTimer.GetMilliseconds();
  }

  /// Manually clear the force buffer on all bodies. By default, forces are cleared automatically
  /// after each call to Step. The default behavior is modified by calling SetAutoClearForces.
  /// The purpose of this function is to support sub-stepping. Sub-stepping is often used to maintain
  /// a fixed sized time step under a variable frame-rate.
  /// When you perform sub-stepping you will disable auto clearing of forces and instead call
  /// ClearForces after all sub-steps are complete in one pass of your game loop.
  /// @see SetAutoClearForces
  public ClearForces(): void {
    for (let body = this.m_bodyList; body; body = body.m_next) {
      body.m_force.SetZero();
      body.m_torque = 0;
    }
  }

  ///#if B2_ENABLE_PARTICLE

  DrawParticleSystem(system: b2ParticleSystem): void {
    const particleCount = system.GetParticleCount();
    if (particleCount) {
      const radius = system.GetRadius();
      const positionBuffer = system.GetPositionBuffer();
      if (system.m_colorBuffer.data) {
        const colorBuffer = system.GetColorBuffer();
        this.m_debugDraw.DrawParticles(positionBuffer, radius, colorBuffer, particleCount);
      } else {
        this.m_debugDraw.DrawParticles(positionBuffer, radius, null, particleCount);
      }
    }
  }

  ///#endif

  /// Call this to draw shapes and other debug draw data.
  private static DrawDebugData_s_color = new b2Color(0, 0, 0);
  private static DrawDebugData_s_vs = b2Vec2.MakeArray(4);
  private static DrawDebugData_s_xf = new b2Transform();
  public DrawDebugData(): void {
    if (this.m_debugDraw === null) {
      return;
    }

    const flags: number = this.m_debugDraw.GetFlags();
    const color: b2Color = b2World.DrawDebugData_s_color.SetRGB(0, 0, 0);

    if (flags & b2DrawFlags.e_shapeBit) {
      for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
        const xf: b2Transform = b.m_xf;

        this.m_debugDraw.PushTransform(xf);

        for (let f = b.GetFixtureList(); f; f = f.m_next) {
          if (!b.IsActive()) {
            color.SetRGB(0.5, 0.5, 0.3);
            this.DrawShape(f, color);
          } else if (b.GetType() === b2BodyType.b2_staticBody) {
            color.SetRGB(0.5, 0.9, 0.5);
            this.DrawShape(f, color);
          } else if (b.GetType() === b2BodyType.b2_kinematicBody) {
            color.SetRGB(0.5, 0.5, 0.9);
            this.DrawShape(f, color);
          } else if (!b.IsAwake()) {
            color.SetRGB(0.6, 0.6, 0.6);
            this.DrawShape(f, color);
          } else {
            color.SetRGB(0.9, 0.7, 0.7);
            this.DrawShape(f, color);
          }
        }

        this.m_debugDraw.PopTransform(xf);
      }
    }

    ///#if B2_ENABLE_PARTICLE
    if (flags & b2DrawFlags.e_particleBit) {
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        this.DrawParticleSystem(p);
      }
    }
    ///#endif

    if (flags & b2DrawFlags.e_jointBit) {
      for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
        this.DrawJoint(j);
      }
    }

    /*
    if (flags & b2DrawFlags.e_pairBit) {
      color.SetRGB(0.3, 0.9, 0.9);
      for (let contact = this.m_contactManager.m_contactList; contact; contact = contact.m_next) {
        const fixtureA = contact.GetFixtureA();
        const fixtureB = contact.GetFixtureB();

        const cA = fixtureA.GetAABB().GetCenter();
        const cB = fixtureB.GetAABB().GetCenter();

        this.m_debugDraw.DrawSegment(cA, cB, color);
      }
    }
    */

    if (flags & b2DrawFlags.e_aabbBit) {
      color.SetRGB(0.9, 0.3, 0.9);
      const bp: b2BroadPhase = this.m_contactManager.m_broadPhase;
      const vs: b2Vec2[] = b2World.DrawDebugData_s_vs;

      for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
        if (!b.IsActive()) {
          continue;
        }

        for (let f: b2Fixture = b.GetFixtureList(); f; f = f.m_next) {
          for (let i: number = 0; i < f.m_proxyCount; ++i) {
            const proxy: b2FixtureProxy = f.m_proxies[i];

            const aabb: b2AABB = bp.GetFatAABB(proxy.proxy);
            vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
            vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
            vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
            vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);

            this.m_debugDraw.DrawPolygon(vs, 4, color);
          }
        }
      }
    }

    if (flags & b2DrawFlags.e_centerOfMassBit) {
      for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
        const xf: b2Transform = b2World.DrawDebugData_s_xf;
        xf.q.Copy(b.m_xf.q);
        xf.p.Copy(b.GetWorldCenter());
        this.m_debugDraw.DrawTransform(xf);
      }
    }

    /// @see b2Controller list
//    if (flags & b2DrawFlags.e_controllerBit) {
//      for (let c = this.m_controllerList; c; c = c.m_next) {
//        c.Draw(this.m_debugDraw);
//      }
//    }
  }

  /// Query the world for all fixtures that potentially overlap the
  /// provided AABB.
  /// @param callback a user implemented callback class.
  /// @param aabb the query box.
  public QueryAABB(callback: b2QueryCallback | b2QueryCallbackFunction, aabb: b2AABB): void {
    const broadPhase: b2BroadPhase = this.m_contactManager.m_broadPhase;
    function WorldQueryWrapper(proxy: b2TreeNode): boolean {
      const fixture_proxy: b2FixtureProxy = broadPhase.GetUserData(proxy);
      ///b2Assert(fixture_proxy instanceof b2FixtureProxy);
      const fixture: b2Fixture = fixture_proxy.fixture;
      ///const index: number = fixture_proxy.childIndex;
      if (callback instanceof b2QueryCallback) {
        return callback.ReportFixture(fixture);
      } else /* if (typeof(callback) === 'function') */ {
        return callback(fixture);
      }
    }
    broadPhase.Query(WorldQueryWrapper, aabb);
    ///#if B2_ENABLE_PARTICLE
    if (callback instanceof b2QueryCallback) {
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        if (callback.ShouldQueryParticleSystem(p)) {
          p.QueryAABB(callback, aabb);
        }
      }
    }
    ///#endif
  }

  private static QueryShape_s_aabb = new b2AABB();
  public QueryShape(callback: b2QueryCallback | b2QueryCallbackFunction, shape: b2Shape, transform: b2Transform): void {
    const broadPhase: b2BroadPhase = this.m_contactManager.m_broadPhase;
    function WorldQueryWrapper(proxy: b2TreeNode): boolean {
      const fixture_proxy: b2FixtureProxy = broadPhase.GetUserData(proxy);
      ///b2Assert(fixture_proxy instanceof b2FixtureProxy);
      const fixture: b2Fixture = fixture_proxy.fixture;
      ///const index: number = fixture_proxy.childIndex;
      if (b2TestOverlapShape(shape, 0, fixture.GetShape(), 0, transform, fixture.GetBody().GetTransform())) {
        if (callback instanceof b2QueryCallback) {
          return callback.ReportFixture(fixture);
        } else /* if (typeof(callback) === 'function') */ {
          return callback(fixture);
        }
      }
      return true;
    }
    const aabb: b2AABB = b2World.QueryShape_s_aabb;
    shape.ComputeAABB(aabb, transform, 0); // TODO
    broadPhase.Query(WorldQueryWrapper, aabb);
    ///#if B2_ENABLE_PARTICLE
    if (callback instanceof b2QueryCallback) {
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        if (callback.ShouldQueryParticleSystem(p)) {
          p.QueryAABB(callback, aabb);
        }
      }
    }
    ///#endif
  }

  private static QueryPoint_s_aabb = new b2AABB();
  public QueryPoint(callback: b2QueryCallback | b2QueryCallbackFunction, point: b2Vec2): void {
    const broadPhase: b2BroadPhase = this.m_contactManager.m_broadPhase;
    function WorldQueryWrapper(proxy: b2TreeNode): boolean {
      const fixture_proxy: b2FixtureProxy = broadPhase.GetUserData(proxy);
      ///b2Assert(fixture_proxy instanceof b2FixtureProxy);
      const fixture: b2Fixture = fixture_proxy.fixture;
      ///const index: number = fixture_proxy.childIndex;
      if (fixture.TestPoint(point)) {
        if (callback instanceof b2QueryCallback) {
          return callback.ReportFixture(fixture);
        } else /* if (typeof(callback) === 'function') */ {
          return callback(fixture);
        }
      }
      return true;
    }
    const aabb: b2AABB = b2World.QueryPoint_s_aabb;
    aabb.lowerBound.Set(point.x - b2_linearSlop, point.y - b2_linearSlop);
    aabb.upperBound.Set(point.x + b2_linearSlop, point.y + b2_linearSlop);
    broadPhase.Query(WorldQueryWrapper, aabb);
    ///#if B2_ENABLE_PARTICLE
    if (callback instanceof b2QueryCallback) {
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        if (callback.ShouldQueryParticleSystem(p)) {
          p.QueryAABB(callback, aabb);
        }
      }
    }
    ///#endif
  }

  /// Ray-cast the world for all fixtures in the path of the ray. Your callback
  /// controls whether you get the closest point, any point, or n-points.
  /// The ray-cast ignores shapes that contain the starting point.
  /// @param callback a user implemented callback class.
  /// @param point1 the ray starting point
  /// @param point2 the ray ending point
  private static RayCast_s_input = new b2RayCastInput();
  private static RayCast_s_output = new b2RayCastOutput();
  private static RayCast_s_point = new b2Vec2();
  public RayCast(callback: b2RayCastCallback | b2RayCastCallbackFunction, point1: b2Vec2, point2: b2Vec2): void {
    const broadPhase: b2BroadPhase = this.m_contactManager.m_broadPhase;
    function WorldRayCastWrapper(input: b2RayCastInput, proxy: b2TreeNode): number {
      const fixture_proxy: b2FixtureProxy = broadPhase.GetUserData(proxy);
      ///b2Assert(fixture_proxy instanceof b2FixtureProxy);
      const fixture: b2Fixture = fixture_proxy.fixture;
      const index: number = fixture_proxy.childIndex;
      const output: b2RayCastOutput = b2World.RayCast_s_output;
      const hit: boolean = fixture.RayCast(output, input, index);
      if (hit) {
        const fraction: number = output.fraction;
        const point: b2Vec2 = b2World.RayCast_s_point;
        point.Set((1 - fraction) * point1.x + fraction * point2.x, (1 - fraction) * point1.y + fraction * point2.y);
        if (callback instanceof b2RayCastCallback) {
          return callback.ReportFixture(fixture, point, output.normal, fraction);
        } else /* if (typeof(callback) === 'function') */ {
          return callback(fixture, point, output.normal, fraction);
        }
      }
      return input.maxFraction;
    }
    const input: b2RayCastInput = b2World.RayCast_s_input;
    input.maxFraction = 1;
    input.p1.Copy(point1);
    input.p2.Copy(point2);
    broadPhase.RayCast(WorldRayCastWrapper, input);
    ///#if B2_ENABLE_PARTICLE
    if (callback instanceof b2RayCastCallback) {
      for (let p = this.m_particleSystemList; p; p = p.m_next) {
        if (callback.ShouldQueryParticleSystem(p)) {
          p.RayCast(callback, point1, point2);
        }
      }
    }
    ///#endif
  }

  public RayCastOne(point1: b2Vec2, point2: b2Vec2): b2Fixture {
    let result: b2Fixture = null;
    let min_fraction: number = 1;
    function WorldRayCastOneWrapper(fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number {
      if (fraction < min_fraction) {
        min_fraction = fraction;
        result = fixture;
      }
      return min_fraction;
    }
    this.RayCast(WorldRayCastOneWrapper, point1, point2);
    return result;
  }

  public RayCastAll(point1: b2Vec2, point2: b2Vec2, out: b2Fixture[] = []): b2Fixture[] {
    function WorldRayCastAllWrapper(fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number {
      out.push(fixture);
      return 1;
    }
    this.RayCast(WorldRayCastAllWrapper, point1, point2);
    return out;
  }

  /// Get the world body list. With the returned body, use b2Body::GetNext to get
  /// the next body in the world list. A NULL body indicates the end of the list.
  /// @return the head of the world body list.
  public GetBodyList(): b2Body {
    return this.m_bodyList;
  }

  /// Get the world joint list. With the returned joint, use b2Joint::GetNext to get
  /// the next joint in the world list. A NULL joint indicates the end of the list.
  /// @return the head of the world joint list.
  public GetJointList(): b2Joint {
    return this.m_jointList;
  }

  ///#if B2_ENABLE_PARTICLE
  GetParticleSystemList() {
    return this.m_particleSystemList;
  }
  ///#endif

  /// Get the world contact list. With the returned contact, use b2Contact::GetNext to get
  /// the next contact in the world list. A NULL contact indicates the end of the list.
  /// @return the head of the world contact list.
  /// @warning contacts are created and destroyed in the middle of a time step.
  /// Use b2ContactListener to avoid missing contacts.
  public GetContactList(): b2Contact {
    return this.m_contactManager.m_contactList;
  }

  /// Enable/disable sleep.
  public SetAllowSleeping(flag: boolean): void {
    if (flag === this.m_allowSleep) {
      return;
    }

    this.m_allowSleep = flag;
    if (!this.m_allowSleep) {
      for (let b = this.m_bodyList; b; b = b.m_next) {
        b.SetAwake(true);
      }
    }
  }

  public GetAllowSleeping(): boolean {
    return this.m_allowSleep;
  }

  /// Enable/disable warm starting. For testing.
  public SetWarmStarting(flag: boolean): void {
    this.m_warmStarting = flag;
  }

  public GetWarmStarting(): boolean {
    return this.m_warmStarting;
  }

  /// Enable/disable continuous physics. For testing.
  public SetContinuousPhysics(flag: boolean): void {
    this.m_continuousPhysics = flag;
  }

  public GetContinuousPhysics(): boolean {
    return this.m_continuousPhysics;
  }

  /// Enable/disable single stepped continuous physics. For testing.
  public SetSubStepping(flag: boolean): void {
    this.m_subStepping = flag;
  }

  public GetSubStepping(): boolean {
    return this.m_subStepping;
  }

  /// Get the number of broad-phase proxies.
  public GetProxyCount(): number {
    return this.m_contactManager.m_broadPhase.GetProxyCount();
  }

  /// Get the number of bodies.
  public GetBodyCount(): number {
    return this.m_bodyCount;
  }

  /// Get the number of joints.
  public GetJointCount(): number {
    return this.m_jointCount;
  }

  /// Get the number of contacts (each may have 0 or more contact points).
  public GetContactCount(): number {
    return this.m_contactManager.m_contactCount;
  }

  /// Get the height of the dynamic tree.
  public GetTreeHeight(): number {
    return this.m_contactManager.m_broadPhase.GetTreeHeight();
  }

  /// Get the balance of the dynamic tree.
  public GetTreeBalance(): number {
    return this.m_contactManager.m_broadPhase.GetTreeBalance();
  }

  /// Get the quality metric of the dynamic tree. The smaller the better.
  /// The minimum is 1.
  public GetTreeQuality(): number {
    return this.m_contactManager.m_broadPhase.GetTreeQuality();
  }

  /// Change the global gravity vector.
  public SetGravity(gravity: b2Vec2, wake: boolean = true) {
    if (!b2Vec2.IsEqualToV(this.m_gravity, gravity)) {
      this.m_gravity.Copy(gravity);

      if (wake) {
        for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
          b.SetAwake(true);
        }
      }
    }
  }

  /// Get the global gravity vector.
  public GetGravity(): b2Vec2 {
    return this.m_gravity;
  }

  /// Is the world locked (in the middle of a time step).
  public IsLocked(): boolean {
    return this.m_locked;
  }

  /// Set flag to control automatic clearing of forces after each time step.
  public SetAutoClearForces(flag: boolean): void {
    this.m_clearForces = flag;
  }

  /// Get the flag that controls automatic clearing of forces after each time step.
  public GetAutoClearForces(): boolean {
    return this.m_clearForces;
  }

  /// Shift the world origin. Useful for large worlds.
  /// The body shift formula is: position -= newOrigin
  /// @param newOrigin the new origin with respect to the old origin
  public ShiftOrigin(newOrigin: b2Vec2): void {
    ///b2Assert(!this.IsLocked());
    if (this.IsLocked()) {
      return;
    }

    for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
      b.m_xf.p.SelfSub(newOrigin);
      b.m_sweep.c0.SelfSub(newOrigin);
      b.m_sweep.c.SelfSub(newOrigin);
    }

    for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
      j.ShiftOrigin(newOrigin);
    }

    this.m_contactManager.m_broadPhase.ShiftOrigin(newOrigin);
  }

  /// Get the contact manager for testing.
  public GetContactManager(): b2ContactManager {
    return this.m_contactManager;
  }

  /// Get the current profile.
  public GetProfile(): b2Profile {
    return this.m_profile;
  }

  /// Dump the world into the log file.
  /// @warning this should be called outside of a time step.
  public Dump(log: (format: string, ...args: any[]) => void): void {
    if (this.m_locked) {
      return;
    }

    log("const g: b2Vec2 = new b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y);
    log("this.m_world.SetGravity(g);\n");

    log("const bodies: b2Body[] = [];\n");
    log("const joints: b2Joint[] = [];\n");
    let i: number = 0;
    for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
      b.m_islandIndex = i;
      b.Dump(log);
      ++i;
    }

    i = 0;
    for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
      j.m_index = i;
      ++i;
    }

    // First pass on joints, skip gear joints.
    for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
      if (j.m_type === b2JointType.e_gearJoint) {
        continue;
      }

      log("{\n");
      j.Dump(log);
      log("}\n");
    }

    // Second pass on joints, only gear joints.
    for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
      if (j.m_type !== b2JointType.e_gearJoint) {
        continue;
      }

      log("{\n");
      j.Dump(log);
      log("}\n");
    }
  }

  private static DrawJoint_s_p1: b2Vec2 = new b2Vec2();
  private static DrawJoint_s_p2: b2Vec2 = new b2Vec2();
  private static DrawJoint_s_color: b2Color = new b2Color(0.5, 0.8, 0.8);
  public DrawJoint(joint: b2Joint): void {
    const bodyA: b2Body = joint.GetBodyA();
    const bodyB: b2Body = joint.GetBodyB();
    const xf1: b2Transform = bodyA.m_xf;
    const xf2: b2Transform = bodyB.m_xf;
    const x1: b2Vec2 = xf1.p;
    const x2: b2Vec2 = xf2.p;
    const p1: b2Vec2 = joint.GetAnchorA(b2World.DrawJoint_s_p1);
    const p2: b2Vec2 = joint.GetAnchorB(b2World.DrawJoint_s_p2);

    const color: b2Color = b2World.DrawJoint_s_color.SetRGB(0.5, 0.8, 0.8);

    switch (joint.m_type) {
    case b2JointType.e_distanceJoint:
      this.m_debugDraw.DrawSegment(p1, p2, color);
      break;

    case b2JointType.e_pulleyJoint: {
        const pulley: b2PulleyJoint = <b2PulleyJoint> joint;
        const s1: b2Vec2 = pulley.GetGroundAnchorA();
        const s2: b2Vec2 = pulley.GetGroundAnchorB();
        this.m_debugDraw.DrawSegment(s1, p1, color);
        this.m_debugDraw.DrawSegment(s2, p2, color);
        this.m_debugDraw.DrawSegment(s1, s2, color);
      }
      break;

    case b2JointType.e_mouseJoint:
      // don't draw this
      this.m_debugDraw.DrawSegment(p1, p2, color);
      break;

    default:
      this.m_debugDraw.DrawSegment(x1, p1, color);
      this.m_debugDraw.DrawSegment(p1, p2, color);
      this.m_debugDraw.DrawSegment(x2, p2, color);
    }
  }

  public DrawShape(fixture: b2Fixture, color: b2Color): void {
    const shape: b2Shape = fixture.GetShape();

    switch (shape.m_type) {
    case b2ShapeType.e_circleShape: {
        const circle: b2CircleShape = <b2CircleShape> shape;
        const center: b2Vec2 = circle.m_p;
        const radius: number = circle.m_radius;
        const axis: b2Vec2 = b2Vec2.UNITX;
        this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
      }
      break;

    case b2ShapeType.e_edgeShape: {
        const edge: b2EdgeShape = <b2EdgeShape> shape;
        const v1: b2Vec2 = edge.m_vertex1;
        const v2: b2Vec2 = edge.m_vertex2;
        this.m_debugDraw.DrawSegment(v1, v2, color);
      }
      break;

    case b2ShapeType.e_chainShape: {
        const chain: b2ChainShape = <b2ChainShape> shape;
        const count: number = chain.m_count;
        const vertices: b2Vec2[] = chain.m_vertices;
        let v1: b2Vec2 = vertices[0];
        this.m_debugDraw.DrawCircle(v1, 0.05, color);
        for (let i: number = 1; i < count; ++i) {
          const v2: b2Vec2 = vertices[i];
          this.m_debugDraw.DrawSegment(v1, v2, color);
          this.m_debugDraw.DrawCircle(v2, 0.05, color);
          v1 = v2;
        }
      }
      break;

    case b2ShapeType.e_polygonShape: {
        const poly: b2PolygonShape = <b2PolygonShape> shape;
        const vertexCount: number = poly.m_count;
        const vertices: b2Vec2[] = poly.m_vertices;
        this.m_debugDraw.DrawSolidPolygon(vertices, vertexCount, color);
      }
      break;
    }
  }

  public Solve(step: b2TimeStep): void {
    ///#if B2_ENABLE_PARTICLE
    // update previous transforms
    for (let b = this.m_bodyList; b; b = b.m_next) {
      b.m_xf0.Copy(b.m_xf);
    }
    ///#endif

    /// @see b2Controller list
//    for (let controller = this.m_controllerList; controller; controller = controller.m_next) {
//      controller.Step(step);
//    }

    this.m_profile.solveInit = 0;
    this.m_profile.solveVelocity = 0;
    this.m_profile.solvePosition = 0;

    // Size the island for the worst case.
    const island: b2Island = this.m_island;
    island.Initialize(this.m_bodyCount,
      this.m_contactManager.m_contactCount,
      this.m_jointCount,
      null, // this.m_stackAllocator,
      this.m_contactManager.m_contactListener);

    // Clear all the island flags.
    for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
      b.m_islandFlag = false;
    }
    for (let c: b2Contact = this.m_contactManager.m_contactList; c; c = c.m_next) {
      c.m_islandFlag = false;
    }
    for (let j: b2Joint = this.m_jointList; j; j = j.m_next) {
      j.m_islandFlag = false;
    }

    // Build and simulate all awake islands.
    ///const stackSize: number = this.m_bodyCount;
    const stack: b2Body[] = this.s_stack;
    for (let seed: b2Body = this.m_bodyList; seed; seed = seed.m_next) {
      if (seed.m_islandFlag) {
        continue;
      }

      if (!seed.IsAwake() || !seed.IsActive()) {
        continue;
      }

      // The seed can be dynamic or kinematic.
      if (seed.GetType() === b2BodyType.b2_staticBody) {
        continue;
      }

      // Reset island and stack.
      island.Clear();
      let stackCount: number = 0;
      stack[stackCount++] = seed;
      seed.m_islandFlag = true;

      // Perform a depth first search (DFS) on the constraint graph.
      while (stackCount > 0) {
        // Grab the next body off the stack and add it to the island.
        const b: b2Body = stack[--stackCount];
        ///b2Assert(b.IsActive());
        island.AddBody(b);

        // Make sure the body is awake.
        b.SetAwake(true);

        // To keep islands as small as possible, we don't
        // propagate islands across static bodies.
        if (b.GetType() === b2BodyType.b2_staticBody) {
          continue;
        }

        // Search all contacts connected to this body.
        for (let ce: b2ContactEdge = b.m_contactList; ce; ce = ce.next) {
          const contact: b2Contact = ce.contact;

          // Has this contact already been added to an island?
          if (contact.m_islandFlag) {
            continue;
          }

          // Is this contact solid and touching?
          if (!contact.IsEnabled() || !contact.IsTouching()) {
            continue;
          }

          // Skip sensors.
          const sensorA: boolean = contact.m_fixtureA.m_isSensor;
          const sensorB: boolean = contact.m_fixtureB.m_isSensor;
          if (sensorA || sensorB) {
            continue;
          }

          island.AddContact(contact);
          contact.m_islandFlag = true;

          const other: b2Body = ce.other;

          // Was the other body already added to this island?
          if (other.m_islandFlag) {
            continue;
          }

          ///b2Assert(stackCount < stackSize);
          stack[stackCount++] = other;
          other.m_islandFlag = true;
        }

        // Search all joints connect to this body.
        for (let je: b2JointEdge = b.m_jointList; je; je = je.next) {
          if (je.joint.m_islandFlag) {
            continue;
          }

          const other: b2Body = je.other;

          // Don't simulate joints connected to inactive bodies.
          if (!other.IsActive()) {
            continue;
          }

          island.AddJoint(je.joint);
          je.joint.m_islandFlag = true;

          if (other.m_islandFlag) {
            continue;
          }

          ///b2Assert(stackCount < stackSize);
          stack[stackCount++] = other;
          other.m_islandFlag = true;
        }
      }

      const profile: b2Profile = new b2Profile();
      island.Solve(profile, step, this.m_gravity, this.m_allowSleep);
      this.m_profile.solveInit += profile.solveInit;
      this.m_profile.solveVelocity += profile.solveVelocity;
      this.m_profile.solvePosition += profile.solvePosition;

      // Post solve cleanup.
      for (let i: number = 0; i < island.m_bodyCount; ++i) {
        // Allow static bodies to participate in other islands.
        const b: b2Body = island.m_bodies[i];
        if (b.GetType() === b2BodyType.b2_staticBody) {
          b.m_islandFlag = false;
        }
      }
    }

    for (let i: number = 0; i < stack.length; ++i) {
      if (!stack[i]) break;
      stack[i] = null;
    }

    const timer: b2Timer = new b2Timer();

    // Synchronize fixtures, check for out of range bodies.
    for (let b = this.m_bodyList; b; b = b.m_next) {
      // If a body was not in an island then it did not move.
      if (!b.m_islandFlag) {
        continue;
      }

      if (b.GetType() === b2BodyType.b2_staticBody) {
        continue;
      }

      // Update fixtures (for broad-phase).
      b.SynchronizeFixtures();
    }

    // Look for new contacts.
    this.m_contactManager.FindNewContacts();
    this.m_profile.broadphase = timer.GetMilliseconds();
  }

  private static SolveTOI_s_subStep = new b2TimeStep();
  private static SolveTOI_s_backup = new b2Sweep();
  private static SolveTOI_s_backup1 = new b2Sweep();
  private static SolveTOI_s_backup2 = new b2Sweep();
  private static SolveTOI_s_toi_input = new b2TOIInput();
  private static SolveTOI_s_toi_output = new b2TOIOutput();
  public SolveTOI(step: b2TimeStep): void {
    // b2Island island(2 * b2_maxTOIContacts, b2_maxTOIContacts, 0, &m_stackAllocator, m_contactManager.m_contactListener);
    const island: b2Island = this.m_island;
    island.Initialize(2 * b2_maxTOIContacts, b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener);

    if (this.m_stepComplete) {
      for (let b: b2Body = this.m_bodyList; b; b = b.m_next) {
        b.m_islandFlag = false;
        b.m_sweep.alpha0 = 0;
      }

      for (let c: b2Contact = this.m_contactManager.m_contactList; c; c = c.m_next) {
        // Invalidate TOI
        c.m_toiFlag = false;
        c.m_islandFlag = false;
        c.m_toiCount = 0;
        c.m_toi = 1;
      }
    }

    // Find TOI events and solve them.
    for (; ; ) {
      // Find the first TOI.
      let minContact: b2Contact = null;
      let minAlpha: number = 1;

      for (let c: b2Contact = this.m_contactManager.m_contactList; c; c = c.m_next) {
        // Is this contact disabled?
        if (!c.IsEnabled()) {
          continue;
        }

        // Prevent excessive sub-stepping.
        if (c.m_toiCount > b2_maxSubSteps) {
          continue;
        }

        let alpha: number = 1;
        if (c.m_toiFlag) {
          // This contact has a valid cached TOI.
          alpha = c.m_toi;
        } else {
          const fA: b2Fixture = c.GetFixtureA();
          const fB: b2Fixture = c.GetFixtureB();

          // Is there a sensor?
          if (fA.IsSensor() || fB.IsSensor()) {
            continue;
          }

          const bA: b2Body = fA.GetBody();
          const bB: b2Body = fB.GetBody();

          const typeA: b2BodyType = bA.m_type;
          const typeB: b2BodyType = bB.m_type;
          ///b2Assert(typeA !== b2BodyType.b2_staticBody || typeB !== b2BodyType.b2_staticBody);

          const activeA: boolean = bA.IsAwake() && typeA !== b2BodyType.b2_staticBody;
          const activeB: boolean = bB.IsAwake() && typeB !== b2BodyType.b2_staticBody;

          // Is at least one body active (awake and dynamic or kinematic)?
          if (!activeA && !activeB) {
            continue;
          }

          const collideA: boolean = bA.IsBullet() || typeA !== b2BodyType.b2_dynamicBody;
          const collideB: boolean = bB.IsBullet() || typeB !== b2BodyType.b2_dynamicBody;

          // Are these two non-bullet dynamic bodies?
          if (!collideA && !collideB) {
            continue;
          }

          // Compute the TOI for this contact.
          // Put the sweeps onto the same time interval.
          let alpha0: number = bA.m_sweep.alpha0;

          if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
            alpha0 = bB.m_sweep.alpha0;
            bA.m_sweep.Advance(alpha0);
          } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
            alpha0 = bA.m_sweep.alpha0;
            bB.m_sweep.Advance(alpha0);
          }

          ///b2Assert(alpha0 < 1);

          const indexA: number = c.GetChildIndexA();
          const indexB: number = c.GetChildIndexB();

          // Compute the time of impact in interval [0, minTOI]
          const input: b2TOIInput = b2World.SolveTOI_s_toi_input;
          input.proxyA.SetShape(fA.GetShape(), indexA);
          input.proxyB.SetShape(fB.GetShape(), indexB);
          input.sweepA.Copy(bA.m_sweep);
          input.sweepB.Copy(bB.m_sweep);
          input.tMax = 1;

          const output: b2TOIOutput = b2World.SolveTOI_s_toi_output;
          b2TimeOfImpact(output, input);

          // Beta is the fraction of the remaining portion of the .
          const beta: number = output.t;
          if (output.state === b2TOIOutputState.e_touching) {
            alpha = b2Min(alpha0 + (1 - alpha0) * beta, 1);
          } else {
            alpha = 1;
          }

          c.m_toi = alpha;
          c.m_toiFlag = true;
        }

        if (alpha < minAlpha) {
          // This is the minimum TOI found so far.
          minContact = c;
          minAlpha = alpha;
        }
      }

      if (minContact === null || 1 - 10 * b2_epsilon < minAlpha) {
        // No more TOI events. Done!
        this.m_stepComplete = true;
        break;
      }

      // Advance the bodies to the TOI.
      const fA: b2Fixture = minContact.GetFixtureA();
      const fB: b2Fixture = minContact.GetFixtureB();
      const bA: b2Body = fA.GetBody();
      const bB: b2Body = fB.GetBody();

      const backup1: b2Sweep = b2World.SolveTOI_s_backup1.Copy(bA.m_sweep);
      const backup2: b2Sweep = b2World.SolveTOI_s_backup2.Copy(bB.m_sweep);

      bA.Advance(minAlpha);
      bB.Advance(minAlpha);

      // The TOI contact likely has some new contact points.
      minContact.Update(this.m_contactManager.m_contactListener);
      minContact.m_toiFlag = false;
      ++minContact.m_toiCount;

      // Is the contact solid?
      if (!minContact.IsEnabled() || !minContact.IsTouching()) {
        // Restore the sweeps.
        minContact.SetEnabled(false);
        bA.m_sweep.Copy(backup1);
        bB.m_sweep.Copy(backup2);
        bA.SynchronizeTransform();
        bB.SynchronizeTransform();
        continue;
      }

      bA.SetAwake(true);
      bB.SetAwake(true);

      // Build the island
      island.Clear();
      island.AddBody(bA);
      island.AddBody(bB);
      island.AddContact(minContact);

      bA.m_islandFlag = true;
      bB.m_islandFlag = true;
      minContact.m_islandFlag = true;

      // Get contacts on bodyA and bodyB.
      // const bodies: b2Body[] = [bA, bB];
      for (let i: number = 0; i < 2; ++i) {
        const body: b2Body = (i === 0) ? (bA) : (bB); // bodies[i];
        if (body.m_type === b2BodyType.b2_dynamicBody) {
          for (let ce: b2ContactEdge = body.m_contactList; ce; ce = ce.next) {
            if (island.m_bodyCount === island.m_bodyCapacity) {
              break;
            }

            if (island.m_contactCount === island.m_contactCapacity) {
              break;
            }

            const contact: b2Contact = ce.contact;

            // Has this contact already been added to the island?
            if (contact.m_islandFlag) {
              continue;
            }

            // Only add static, kinematic, or bullet bodies.
            const other: b2Body = ce.other;
            if (other.m_type === b2BodyType.b2_dynamicBody &&
              !body.IsBullet() && !other.IsBullet()) {
              continue;
            }

            // Skip sensors.
            const sensorA: boolean = contact.m_fixtureA.m_isSensor;
            const sensorB: boolean = contact.m_fixtureB.m_isSensor;
            if (sensorA || sensorB) {
              continue;
            }

            // Tentatively advance the body to the TOI.
            const backup: b2Sweep = b2World.SolveTOI_s_backup.Copy(other.m_sweep);
            if (!other.m_islandFlag) {
              other.Advance(minAlpha);
            }

            // Update the contact points
            contact.Update(this.m_contactManager.m_contactListener);

            // Was the contact disabled by the user?
            if (!contact.IsEnabled()) {
              other.m_sweep.Copy(backup);
              other.SynchronizeTransform();
              continue;
            }

            // Are there contact points?
            if (!contact.IsTouching()) {
              other.m_sweep.Copy(backup);
              other.SynchronizeTransform();
              continue;
            }

            // Add the contact to the island
            contact.m_islandFlag = true;
            island.AddContact(contact);

            // Has the other body already been added to the island?
            if (other.m_islandFlag) {
              continue;
            }

            // Add the other body to the island.
            other.m_islandFlag = true;

            if (other.m_type !== b2BodyType.b2_staticBody) {
              other.SetAwake(true);
            }

            island.AddBody(other);
          }
        }
      }

      const subStep: b2TimeStep = b2World.SolveTOI_s_subStep;
      subStep.dt = (1 - minAlpha) * step.dt;
      subStep.inv_dt = 1 / subStep.dt;
      subStep.dtRatio = 1;
      subStep.positionIterations = 20;
      subStep.velocityIterations = step.velocityIterations;
      ///#if B2_ENABLE_PARTICLE
      subStep.particleIterations = step.particleIterations;
      ///#endif
      subStep.warmStarting = false;
      island.SolveTOI(subStep, bA.m_islandIndex, bB.m_islandIndex);

      // Reset island flags and synchronize broad-phase proxies.
      for (let i: number = 0; i < island.m_bodyCount; ++i) {
        const body: b2Body = island.m_bodies[i];
        body.m_islandFlag = false;

        if (body.m_type !== b2BodyType.b2_dynamicBody) {
          continue;
        }

        body.SynchronizeFixtures();

        // Invalidate all contact TOIs on this displaced body.
        for (let ce: b2ContactEdge = body.m_contactList; ce; ce = ce.next) {
          ce.contact.m_toiFlag = false;
          ce.contact.m_islandFlag = false;
        }
      }

      // Commit fixture proxy movements to the broad-phase so that new contacts are created.
      // Also, some contacts can be destroyed.
      this.m_contactManager.FindNewContacts();

      if (this.m_subStepping) {
        this.m_stepComplete = false;
        break;
      }
    }
  }

//  public AddController(controller: b2Controller): b2Controller {
//    ///b2Assert(controller.m_world === null, "Controller can only be a member of one world");
//    controller.m_world = this;
//    controller.m_next = this.m_controllerList;
//    controller.m_prev = null;
//    if (this.m_controllerList)
//      this.m_controllerList.m_prev = controller;
//    this.m_controllerList = controller;
//    ++this.m_controllerCount;
//    return controller;
//  }

//  public RemoveController(controller: b2Controller): b2Controller {
//    ///b2Assert(controller.m_world === this, "Controller is not a member of this world");
//    if (controller.m_prev)
//      controller.m_prev.m_next = controller.m_next;
//    if (controller.m_next)
//      controller.m_next.m_prev = controller.m_prev;
//    if (this.m_controllerList === controller)
//      this.m_controllerList = controller.m_next;
//    --this.m_controllerCount;
//    controller.m_prev = null;
//    controller.m_next = null;
//    controller.m_world = null;
//    return controller;
//  }
}

/// The body type.
/// static: zero mass, zero velocity, may be manually moved
/// kinematic: zero mass, non-zero velocity set by user, moved by solver
/// dynamic: positive mass, non-zero velocity determined by forces, moved by solver
export const enum b2BodyType {
  b2_unknown = -1,
  b2_staticBody = 0,
  b2_kinematicBody = 1,
  b2_dynamicBody = 2

  // TODO_ERIN
  // b2_bulletBody = 3
}

/// A body definition holds all the data needed to construct a rigid body.
/// You can safely re-use body definitions. Shapes are added to a body after construction.
export class b2BodyDef {
  /// The body type: static, kinematic, or dynamic.
  /// Note: if a dynamic body would have zero mass, the mass is set to one.
  public type: b2BodyType = b2BodyType.b2_staticBody;

  /// The world position of the body. Avoid creating bodies at the origin
  /// since this can lead to many overlapping shapes.
  public position: b2Vec2 = new b2Vec2(0, 0);

  /// The world angle of the body in radians.
  public angle: number = 0;

  /// The linear velocity of the body's origin in world co-ordinates.
  public linearVelocity: b2Vec2 = new b2Vec2(0, 0);

  /// The angular velocity of the body.
  public angularVelocity: number = 0;

  /// Linear damping is use to reduce the linear velocity. The damping parameter
  /// can be larger than 1.0f but the damping effect becomes sensitive to the
  /// time step when the damping parameter is large.
  public linearDamping: number = 0;

  /// Angular damping is use to reduce the angular velocity. The damping parameter
  /// can be larger than 1.0f but the damping effect becomes sensitive to the
  /// time step when the damping parameter is large.
  public angularDamping: number = 0;

  /// Set this flag to false if this body should never fall asleep. Note that
  /// this increases CPU usage.
  public allowSleep: boolean = true;

  /// Is this body initially awake or sleeping?
  public awake: boolean = true;

  /// Should this body be prevented from rotating? Useful for characters.
  public fixedRotation: boolean = false;

  /// Is this a fast moving body that should be prevented from tunneling through
  /// other moving bodies? Note that all bodies are prevented from tunneling through
  /// kinematic and static bodies. This setting is only considered on dynamic bodies.
  /// @warning You should use this flag sparingly since it increases processing time.
  public bullet: boolean = false;

  /// Does this body start out active?
  public active: boolean = true;

  /// Use this to store application specific body data.
  public userData: any = null;

  /// Scale the gravity applied to this body.
  public gravityScale: number = 1;
}

/// A rigid body. These are created via b2World::CreateBody.
export class b2Body {
  public m_type: b2BodyType = b2BodyType.b2_staticBody;

  public m_islandFlag: boolean = false;
  public m_awakeFlag: boolean = false;
  public m_autoSleepFlag: boolean = false;
  public m_bulletFlag: boolean = false;
  public m_fixedRotationFlag: boolean = false;
  public m_activeFlag: boolean = false;
  public m_toiFlag: boolean = false;

  public m_islandIndex: number = 0;

  public m_xf: b2Transform = new b2Transform();  // the body origin transform
  ///#if B2_ENABLE_PARTICLE
  public m_xf0: b2Transform = new b2Transform();
  ///#endif
  public m_sweep: b2Sweep = new b2Sweep();    // the swept motion for CCD

  public m_linearVelocity: b2Vec2 = new b2Vec2();
  public m_angularVelocity: number = 0;

  public m_force: b2Vec2 = new b2Vec2;
  public m_torque: number = 0;

  public m_world: b2World = null;
  public m_prev: b2Body = null;
  public m_next: b2Body = null;

  public m_fixtureList: b2Fixture = null;
  public m_fixtureCount: number = 0;

  public m_jointList: b2JointEdge = null;
  public m_contactList: b2ContactEdge = null;

  public m_mass: number = 1;
  public m_invMass: number = 1;

  // Rotational inertia about the center of mass.
  public m_I: number = 0;
  public m_invI: number = 0;

  public m_linearDamping: number = 0;
  public m_angularDamping: number = 0;
  public m_gravityScale: number = 1;

  public m_sleepTime: number = 0;

  public m_userData: any = null;

  // public m_controllerList: b2ControllerEdge = null;
  // public m_controllerCount: number = 0;

  constructor(bd: b2BodyDef, world: b2World) {
    ///b2Assert(bd.position.IsValid());
    ///b2Assert(bd.linearVelocity.IsValid());
    ///b2Assert(b2IsValid(bd.angle));
    ///b2Assert(b2IsValid(bd.angularVelocity));
    ///b2Assert(b2IsValid(bd.gravityScale) && bd.gravityScale >= 0);
    ///b2Assert(b2IsValid(bd.angularDamping) && bd.angularDamping >= 0);
    ///b2Assert(b2IsValid(bd.linearDamping) && bd.linearDamping >= 0);

    if (bd.bullet) {
      this.m_bulletFlag = true;
    }
    if (bd.fixedRotation) {
      this.m_fixedRotationFlag = true;
    }
    if (bd.allowSleep) {
      this.m_autoSleepFlag = true;
    }
    if (bd.awake) {
      this.m_awakeFlag = true;
    }
    if (bd.active) {
      this.m_activeFlag = true;
    }

    this.m_world = world;

    this.m_xf.p.Copy(bd.position);
    this.m_xf.q.SetAngle(bd.angle);
    ///#if B2_ENABLE_PARTICLE
    this.m_xf0.Copy(this.m_xf);
    ///#endif

    this.m_sweep.localCenter.SetZero();
    this.m_sweep.c0.Copy(this.m_xf.p);
    this.m_sweep.c.Copy(this.m_xf.p);
    this.m_sweep.a0 = bd.angle;
    this.m_sweep.a = bd.angle;
    this.m_sweep.alpha0 = 0;

    this.m_linearVelocity.Copy(bd.linearVelocity);
    this.m_angularVelocity = bd.angularVelocity;

    this.m_linearDamping = bd.linearDamping;
    this.m_angularDamping = bd.angularDamping;
    this.m_gravityScale = bd.gravityScale;

    this.m_force.SetZero();
    this.m_torque = 0;

    this.m_sleepTime = 0;

    this.m_type = bd.type;

    if (bd.type === b2BodyType.b2_dynamicBody) {
      this.m_mass = 1;
      this.m_invMass = 1;
    } else {
      this.m_mass = 0;
      this.m_invMass = 0;
    }

    this.m_I = 0;
    this.m_invI = 0;

    this.m_userData = bd.userData;

    this.m_fixtureList = null;
    this.m_fixtureCount = 0;

    // this.m_controllerList = null;
    // this.m_controllerCount = 0;
  }

  public CreateFixture(a: b2FixtureDef | b2Shape, b?: number): b2Fixture {
    if (a instanceof b2FixtureDef) {
      return this.CreateFixtureDef(a);
    } else if ((a instanceof b2Shape) && (typeof(b) === "number")) {
      return this.CreateFixtureShapeDensity(a, b);
    } else {
      throw new Error();
    }
  }

  /// Creates a fixture and attach it to this body. Use this function if you need
  /// to set some fixture parameters, like friction. Otherwise you can create the
  /// fixture directly from a shape.
  /// If the density is non-zero, this function automatically updates the mass of the body.
  /// Contacts are not created until the next time step.
  /// @param def the fixture definition.
  /// @warning This function is locked during callbacks.
  public CreateFixtureDef(def: b2FixtureDef): b2Fixture {
    ///b2Assert(!this.m_world.IsLocked());
    if (this.m_world.IsLocked()) {
      return null;
    }

    const fixture: b2Fixture = new b2Fixture();
    fixture.Create(this, def);

    if (this.m_activeFlag) {
      const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
      fixture.CreateProxies(broadPhase, this.m_xf);
    }

    fixture.m_next = this.m_fixtureList;
    this.m_fixtureList = fixture;
    ++this.m_fixtureCount;

    fixture.m_body = this;

    // Adjust mass properties if needed.
    if (fixture.m_density > 0) {
      this.ResetMassData();
    }

    // Let the world know we have a new fixture. This will cause new contacts
    // to be created at the beginning of the next time step.
    this.m_world.m_newFixture = true;

    return fixture;
  }

  /// Creates a fixture from a shape and attach it to this body.
  /// This is a convenience function. Use b2FixtureDef if you need to set parameters
  /// like friction, restitution, user data, or filtering.
  /// If the density is non-zero, this function automatically updates the mass of the body.
  /// @param shape the shape to be cloned.
  /// @param density the shape density (set to zero for static bodies).
  /// @warning This function is locked during callbacks.
  private static CreateFixtureShapeDensity_s_def: b2FixtureDef = new b2FixtureDef();
  public CreateFixtureShapeDensity(shape: b2Shape, density: number = 0): b2Fixture {
    const def: b2FixtureDef = b2Body.CreateFixtureShapeDensity_s_def;
    def.shape = shape;
    def.density = density;
    return this.CreateFixtureDef(def);
  }

  /// Destroy a fixture. This removes the fixture from the broad-phase and
  /// destroys all contacts associated with this fixture. This will
  /// automatically adjust the mass of the body if the body is dynamic and the
  /// fixture has positive density.
  /// All fixtures attached to a body are implicitly destroyed when the body is destroyed.
  /// @param fixture the fixture to be removed.
  /// @warning This function is locked during callbacks.
  public DestroyFixture(fixture: b2Fixture): void {
    ///b2Assert(!this.m_world.IsLocked());
    if (this.m_world.IsLocked()) {
      return;
    }

    ///b2Assert(fixture.m_body === this);

    // Remove the fixture from this body's singly linked list.
    ///b2Assert(this.m_fixtureCount > 0);
    let node: b2Fixture = this.m_fixtureList;
    let ppF: b2Fixture = null;
    let found: boolean = false;
    while (node !== null) {
      if (node === fixture) {
        if (ppF)
          ppF.m_next = fixture.m_next;
        else
          this.m_fixtureList = fixture.m_next;
        found = true;
        break;
      }

      ppF = node;
      node = node.m_next;
    }

    // You tried to remove a shape that is not attached to this body.
    ///b2Assert(found);

    // Destroy any contacts associated with the fixture.
    let edge: b2ContactEdge = this.m_contactList;
    while (edge) {
      const c = edge.contact;
      edge = edge.next;

      const fixtureA: b2Fixture = c.GetFixtureA();
      const fixtureB: b2Fixture = c.GetFixtureB();

      if (fixture === fixtureA || fixture === fixtureB) {
        // This destroys the contact and removes it from
        // this body's contact list.
        this.m_world.m_contactManager.Destroy(c);
      }
    }

    if (this.m_activeFlag) {
      const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
      fixture.DestroyProxies(broadPhase);
    }

    fixture.Destroy();
    fixture.m_body = null;
    fixture.m_next = null;

    --this.m_fixtureCount;

    // Reset the mass data.
    this.ResetMassData();
  }

  /// Set the position of the body's origin and rotation.
  /// This breaks any contacts and wakes the other bodies.
  /// Manipulating a body's transform may cause non-physical behavior.
  /// @param position the world position of the body's local origin.
  /// @param angle the world rotation in radians.
  public SetTransformVec(position: b2Vec2, angle: number): void {
    this.SetTransformXY(position.x, position.y, angle);
  }

  public SetTransformXY(x: number, y: number, angle: number): void {
    ///b2Assert(!this.m_world.IsLocked());
    if (this.m_world.IsLocked()) {
      return;
    }

    this.m_xf.q.SetAngle(angle);
    this.m_xf.p.Set(x, y);
    ///#if B2_ENABLE_PARTICLE
    this.m_xf0.Copy(this.m_xf);
    ///#endif

    b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
    this.m_sweep.a = angle;

    this.m_sweep.c0.Copy(this.m_sweep.c);
    this.m_sweep.a0 = angle;

    const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
    for (let f = this.m_fixtureList; f; f = f.m_next) {
      f.Synchronize(broadPhase, this.m_xf, this.m_xf);
    }

    this.m_world.m_contactManager.FindNewContacts();
  }

  public SetTransform(xf: b2Transform): void {
    this.SetTransformVec(xf.p, xf.GetAngle());
  }

  /// Get the body transform for the body's origin.
  /// @return the world transform of the body's origin.
  public GetTransform(): b2Transform {
    return this.m_xf;
  }

  /// Get the world body origin position.
  /// @return the world position of the body's origin.
  public GetPosition(): b2Vec2 {
    return this.m_xf.p;
  }

  public SetPosition(position: b2Vec2): void {
    this.SetTransformVec(position, this.GetAngle());
  }

  public SetPositionXY(x: number, y: number): void {
    this.SetTransformXY(x, y, this.GetAngle());
  }

  /// Get the angle in radians.
  /// @return the current world rotation angle in radians.
  public GetAngle(): number {
    return this.m_sweep.a;
  }

  public SetAngle(angle: number): void {
    this.SetTransformVec(this.GetPosition(), angle);
  }

  /// Get the world position of the center of mass.
  public GetWorldCenter(): b2Vec2 {
    return this.m_sweep.c;
  }

  /// Get the local position of the center of mass.
  public GetLocalCenter(): b2Vec2 {
    return this.m_sweep.localCenter;
  }

  /// Set the linear velocity of the center of mass.
  /// @param v the new linear velocity of the center of mass.
  public SetLinearVelocity(v: b2Vec2): void {
    if (this.m_type === b2BodyType.b2_staticBody) {
      return;
    }

    if (b2Vec2.DotVV(v, v) > 0) {
      this.SetAwake(true);
    }

    this.m_linearVelocity.Copy(v);
  }

  /// Get the linear velocity of the center of mass.
  /// @return the linear velocity of the center of mass.
  public GetLinearVelocity(): b2Vec2 {
    return this.m_linearVelocity;
  }

  /// Set the angular velocity.
  /// @param omega the new angular velocity in radians/second.
  public SetAngularVelocity(w: number): void {
    if (this.m_type === b2BodyType.b2_staticBody) {
      return;
    }

    if (w * w > 0) {
      this.SetAwake(true);
    }

    this.m_angularVelocity = w;
  }

  /// Get the angular velocity.
  /// @return the angular velocity in radians/second.
  public GetAngularVelocity(): number {
    return this.m_angularVelocity;
  }

  public GetDefinition(bd: b2BodyDef): b2BodyDef {
    bd.type = this.GetType();
    bd.allowSleep = this.m_autoSleepFlag;
    bd.angle = this.GetAngle();
    bd.angularDamping = this.m_angularDamping;
    bd.gravityScale = this.m_gravityScale;
    bd.angularVelocity = this.m_angularVelocity;
    bd.fixedRotation = this.m_fixedRotationFlag;
    bd.bullet = this.m_bulletFlag;
    bd.awake = this.m_awakeFlag;
    bd.linearDamping = this.m_linearDamping;
    bd.linearVelocity.Copy(this.GetLinearVelocity());
    bd.position.Copy(this.GetPosition());
    bd.userData = this.GetUserData();
    return bd;
  }

  /// Apply a force at a world point. If the force is not
  /// applied at the center of mass, it will generate a torque and
  /// affect the angular velocity. This wakes up the body.
  /// @param force the world force vector, usually in Newtons (N).
  /// @param point the world position of the point of application.
  /// @param wake also wake up the body
  public ApplyForce(force: b2Vec2, point: b2Vec2, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_force.x += force.x;
      this.m_force.y += force.y;
      this.m_torque += ((point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x);
    }
  }

  /// Apply a force to the center of mass. This wakes up the body.
  /// @param force the world force vector, usually in Newtons (N).
  /// @param wake also wake up the body
  public ApplyForceToCenter(force: b2Vec2, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_force.x += force.x;
      this.m_force.y += force.y;
    }
  }

  /// Apply a torque. This affects the angular velocity
  /// without affecting the linear velocity of the center of mass.
  /// This wakes up the body.
  /// @param torque about the z-axis (out of the screen), usually in N-m.
  /// @param wake also wake up the body
  public ApplyTorque(torque: number, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_torque += torque;
    }
  }

  /// Apply an impulse at a point. This immediately modifies the velocity.
  /// It also modifies the angular velocity if the point of application
  /// is not at the center of mass. This wakes up the body.
  /// @param impulse the world impulse vector, usually in N-seconds or kg-m/s.
  /// @param point the world position of the point of application.
  /// @param wake also wake up the body
  public ApplyLinearImpulse(impulse: b2Vec2, point: b2Vec2, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_linearVelocity.x += this.m_invMass * impulse.x;
      this.m_linearVelocity.y += this.m_invMass * impulse.y;
      this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
    }
  }

  /// Apply an impulse at the center of gravity. This immediately modifies the velocity.
  /// @param impulse the world impulse vector, usually in N-seconds or kg-m/s.
  /// @param wake also wake up the body
  public ApplyLinearImpulseToCenter(impulse: b2Vec2, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_linearVelocity.x += this.m_invMass * impulse.x;
      this.m_linearVelocity.y += this.m_invMass * impulse.y;
    }
  }

  /// Apply an angular impulse.
  /// @param impulse the angular impulse in units of kg*m*m/s
  /// @param wake also wake up the body
  public ApplyAngularImpulse(impulse: number, wake: boolean = true): void {
    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    if (wake && !this.m_awakeFlag) {
      this.SetAwake(true);
    }

    // Don't accumulate a force if the body is sleeping.
    if (this.m_awakeFlag) {
      this.m_angularVelocity += this.m_invI * impulse;
    }
  }

  /// Get the total mass of the body.
  /// @return the mass, usually in kilograms (kg).
  public GetMass(): number {
    return this.m_mass;
  }

  /// Get the rotational inertia of the body about the local origin.
  /// @return the rotational inertia, usually in kg-m^2.
  public GetInertia(): number {
    return this.m_I + this.m_mass * b2Vec2.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
  }

  /// Get the mass data of the body.
  /// @return a struct containing the mass, inertia and center of the body.
  public GetMassData(data: b2MassData): b2MassData {
    data.mass = this.m_mass;
    data.I = this.m_I + this.m_mass * b2Vec2.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
    data.center.Copy(this.m_sweep.localCenter);
    return data;
  }

  /// Set the mass properties to override the mass properties of the fixtures.
  /// Note that this changes the center of mass position.
  /// Note that creating or destroying fixtures can also alter the mass.
  /// This function has no effect if the body isn't dynamic.
  /// @param massData the mass properties.
  private static SetMassData_s_oldCenter: b2Vec2 = new b2Vec2();
  public SetMassData(massData: b2MassData): void {
    ///b2Assert(!this.m_world.IsLocked());
    if (this.m_world.IsLocked()) {
      return;
    }

    if (this.m_type !== b2BodyType.b2_dynamicBody) {
      return;
    }

    this.m_invMass = 0;
    this.m_I = 0;
    this.m_invI = 0;

    this.m_mass = massData.mass;
    if (this.m_mass <= 0) {
      this.m_mass = 1;
    }

    this.m_invMass = 1 / this.m_mass;

    if (massData.I > 0 && !this.m_fixedRotationFlag) {
      this.m_I = massData.I - this.m_mass * b2Vec2.DotVV(massData.center, massData.center);
      ///b2Assert(this.m_I > 0);
      this.m_invI = 1 / this.m_I;
    }

    // Move center of mass.
    const oldCenter: b2Vec2 = b2Body.SetMassData_s_oldCenter.Copy(this.m_sweep.c);
    this.m_sweep.localCenter.Copy(massData.center);
    b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
    this.m_sweep.c0.Copy(this.m_sweep.c);

    // Update center of mass velocity.
    b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Vec2.SubVV(this.m_sweep.c, oldCenter, b2Vec2.s_t0), this.m_linearVelocity);
  }

  /// This resets the mass properties to the sum of the mass properties of the fixtures.
  /// This normally does not need to be called unless you called SetMassData to override
  /// the mass and you later want to reset the mass.
  private static ResetMassData_s_localCenter: b2Vec2 = new b2Vec2();
  private static ResetMassData_s_oldCenter: b2Vec2 = new b2Vec2();
  private static ResetMassData_s_massData: b2MassData = new b2MassData();
  public ResetMassData(): void {
    // Compute mass data from shapes. Each shape has its own density.
    this.m_mass = 0;
    this.m_invMass = 0;
    this.m_I = 0;
    this.m_invI = 0;
    this.m_sweep.localCenter.SetZero();

    // Static and kinematic bodies have zero mass.
    if (this.m_type === b2BodyType.b2_staticBody || this.m_type === b2BodyType.b2_kinematicBody) {
      this.m_sweep.c0.Copy(this.m_xf.p);
      this.m_sweep.c.Copy(this.m_xf.p);
      this.m_sweep.a0 = this.m_sweep.a;
      return;
    }

    ///b2Assert(this.m_type === b2BodyType.b2_dynamicBody);

    // Accumulate mass over all fixtures.
    const localCenter: b2Vec2 = b2Body.ResetMassData_s_localCenter.SetZero();
    for (let f = this.m_fixtureList; f; f = f.m_next) {
      if (f.m_density === 0) {
        continue;
      }

      const massData: b2MassData = f.GetMassData(b2Body.ResetMassData_s_massData);
      this.m_mass += massData.mass;
      localCenter.x += massData.center.x * massData.mass;
      localCenter.y += massData.center.y * massData.mass;
      this.m_I += massData.I;
    }

    // Compute center of mass.
    if (this.m_mass > 0) {
      this.m_invMass = 1 / this.m_mass;
      localCenter.x *= this.m_invMass;
      localCenter.y *= this.m_invMass;
    } else {
      // Force all dynamic bodies to have a positive mass.
      this.m_mass = 1;
      this.m_invMass = 1;
    }

    if (this.m_I > 0 && !this.m_fixedRotationFlag) {
      // Center the inertia about the center of mass.
      this.m_I -= this.m_mass * b2Vec2.DotVV(localCenter, localCenter);
      ///b2Assert(this.m_I > 0);
      this.m_invI = 1 / this.m_I;
    } else {
      this.m_I = 0;
      this.m_invI = 0;
    }

    // Move center of mass.
    const oldCenter: b2Vec2 = b2Body.ResetMassData_s_oldCenter.Copy(this.m_sweep.c);
    this.m_sweep.localCenter.Copy(localCenter);
    b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
    this.m_sweep.c0.Copy(this.m_sweep.c);

    // Update center of mass velocity.
    b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Vec2.SubVV(this.m_sweep.c, oldCenter, b2Vec2.s_t0), this.m_linearVelocity);
  }

  /// Get the world coordinates of a point given the local coordinates.
  /// @param localPoint a point on the body measured relative the the body's origin.
  /// @return the same point expressed in world coordinates.
  public GetWorldPoint(localPoint: b2Vec2, out: b2Vec2): b2Vec2 {
    return b2Transform.MulXV(this.m_xf, localPoint, out);
  }

  /// Get the world coordinates of a vector given the local coordinates.
  /// @param localVector a vector fixed in the body.
  /// @return the same vector expressed in world coordinates.
  public GetWorldVector(localVector: b2Vec2, out: b2Vec2): b2Vec2 {
    return b2Rot.MulRV(this.m_xf.q, localVector, out);
  }

  /// Gets a local point relative to the body's origin given a world point.
  /// @param a point in world coordinates.
  /// @return the corresponding local point relative to the body's origin.
  public GetLocalPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2 {
    return b2Transform.MulTXV(this.m_xf, worldPoint, out);
  }

  /// Gets a local vector given a world vector.
  /// @param a vector in world coordinates.
  /// @return the corresponding local vector.
  public GetLocalVector(worldVector: b2Vec2, out: b2Vec2): b2Vec2 {
    return b2Rot.MulTRV(this.m_xf.q, worldVector, out);
  }

  /// Get the world linear velocity of a world point attached to this body.
  /// @param a point in world coordinates.
  /// @return the world velocity of a point.
  public GetLinearVelocityFromWorldPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2 {
    return b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Vec2.SubVV(worldPoint, this.m_sweep.c, b2Vec2.s_t0), out);
  }

  /// Get the world velocity of a local point.
  /// @param a point in local coordinates.
  /// @return the world velocity of a point.
  public GetLinearVelocityFromLocalPoint(localPoint: b2Vec2, out: b2Vec2): b2Vec2 {
    return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(localPoint, out), out);
  }

  /// Get the linear damping of the body.
  public GetLinearDamping(): number {
    return this.m_linearDamping;
  }

  /// Set the linear damping of the body.
  public SetLinearDamping(linearDamping: number): void {
    this.m_linearDamping = linearDamping;
  }

  /// Get the angular damping of the body.
  public GetAngularDamping(): number {
    return this.m_angularDamping;
  }

  /// Set the angular damping of the body.
  public SetAngularDamping(angularDamping: number): void {
    this.m_angularDamping = angularDamping;
  }

  /// Get the gravity scale of the body.
  public GetGravityScale(): number {
    return this.m_gravityScale;
  }

  /// Set the gravity scale of the body.
  public SetGravityScale(scale: number): void {
    this.m_gravityScale = scale;
  }

  /// Set the type of this body. This may alter the mass and velocity.
  public SetType(type: b2BodyType): void {
    ///b2Assert(!this.m_world.IsLocked());
    if (this.m_world.IsLocked()) {
      return;
    }

    if (this.m_type === type) {
      return;
    }

    this.m_type = type;

    this.ResetMassData();

    if (this.m_type === b2BodyType.b2_staticBody) {
      this.m_linearVelocity.SetZero();
      this.m_angularVelocity = 0;
      this.m_sweep.a0 = this.m_sweep.a;
      this.m_sweep.c0.Copy(this.m_sweep.c);
      this.SynchronizeFixtures();
    }

    this.SetAwake(true);

    this.m_force.SetZero();
    this.m_torque = 0;

    // Delete the attached contacts.
    let ce: b2ContactEdge = this.m_contactList;
    while (ce) {
      const ce0: b2ContactEdge = ce;
      ce = ce.next;
      this.m_world.m_contactManager.Destroy(ce0.contact);
    }
    this.m_contactList = null;

    // Touch the proxies so that new contacts will be created (when appropriate)
    const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
    for (let f: b2Fixture = this.m_fixtureList; f; f = f.m_next) {
      const proxyCount: number = f.m_proxyCount;
      for (let i: number = 0; i < proxyCount; ++i) {
        broadPhase.TouchProxy(f.m_proxies[i].proxy);
      }
    }
  }

  /// Get the type of this body.
  public GetType(): b2BodyType {
    return this.m_type;
  }

  /// Should this body be treated like a bullet for continuous collision detection?
  public SetBullet(flag: boolean): void {
    this.m_bulletFlag = flag;
  }

  /// Is this body treated like a bullet for continuous collision detection?
  public IsBullet(): boolean {
    return this.m_bulletFlag;
  }

  /// You can disable sleeping on this body. If you disable sleeping, the
  /// body will be woken.
  public SetSleepingAllowed(flag: boolean): void {
    this.m_autoSleepFlag = flag;
    if (!flag) {
      this.SetAwake(true);
    }
  }

  /// Is this body allowed to sleep
  public IsSleepingAllowed(): boolean {
    return this.m_autoSleepFlag;
  }

  /// Set the sleep state of the body. A sleeping body has very
  /// low CPU cost.
  /// @param flag set to true to wake the body, false to put it to sleep.
  public SetAwake(flag: boolean): void {
    if (flag) {
      if (!this.m_awakeFlag) {
        this.m_awakeFlag = true;
        this.m_sleepTime = 0;
      }
    } else {
      this.m_awakeFlag = false;
      this.m_sleepTime = 0;
      this.m_linearVelocity.SetZero();
      this.m_angularVelocity = 0;
      this.m_force.SetZero();
      this.m_torque = 0;
    }
  }

  /// Get the sleeping state of this body.
  /// @return true if the body is sleeping.
  public IsAwake(): boolean {
    return this.m_awakeFlag;
  }

  /// Set the active state of the body. An inactive body is not
  /// simulated and cannot be collided with or woken up.
  /// If you pass a flag of true, all fixtures will be added to the
  /// broad-phase.
  /// If you pass a flag of false, all fixtures will be removed from
  /// the broad-phase and all contacts will be destroyed.
  /// Fixtures and joints are otherwise unaffected. You may continue
  /// to create/destroy fixtures and joints on inactive bodies.
  /// Fixtures on an inactive body are implicitly inactive and will
  /// not participate in collisions, ray-casts, or queries.
  /// Joints connected to an inactive body are implicitly inactive.
  /// An inactive body is still owned by a b2World object and remains
  /// in the body list.
  public SetActive(flag: boolean): void {
    ///b2Assert(!this.m_world.IsLocked());

    if (flag === this.IsActive()) {
      return;
    }

    this.m_activeFlag = flag;

    if (flag) {
      // Create all proxies.
      const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
      for (let f: b2Fixture = this.m_fixtureList; f; f = f.m_next) {
        f.CreateProxies(broadPhase, this.m_xf);
      }
      // Contacts are created the next time step.
    } else {
      // Destroy all proxies.
      const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
      for (let f: b2Fixture = this.m_fixtureList; f; f = f.m_next) {
        f.DestroyProxies(broadPhase);
      }
      // Destroy the attached contacts.
      let ce: b2ContactEdge = this.m_contactList;
      while (ce) {
        const ce0: b2ContactEdge = ce;
        ce = ce.next;
        this.m_world.m_contactManager.Destroy(ce0.contact);
      }
      this.m_contactList = null;
    }
  }

  /// Get the active state of the body.
  public IsActive(): boolean {
    return this.m_activeFlag;
  }

  /// Set this body to have fixed rotation. This causes the mass
  /// to be reset.
  public SetFixedRotation(flag: boolean): void {
    if (this.m_fixedRotationFlag === flag) {
      return;
    }

    this.m_fixedRotationFlag = flag;

    this.m_angularVelocity = 0;

    this.ResetMassData();
  }

  /// Does this body have fixed rotation?
  public IsFixedRotation(): boolean {
    return this.m_fixedRotationFlag;
  }

  /// Get the list of all fixtures attached to this body.
  public GetFixtureList(): b2Fixture {
    return this.m_fixtureList;
  }

  /// Get the list of all joints attached to this body.
  public GetJointList(): b2JointEdge {
    return this.m_jointList;
  }

  /// Get the list of all contacts attached to this body.
  /// @warning this list changes during the time step and you may
  /// miss some collisions if you don't use b2ContactListener.
  public GetContactList(): b2ContactEdge {
    return this.m_contactList;
  }

  /// Get the next body in the world's body list.
  public GetNext(): b2Body {
    return this.m_next;
  }

  /// Get the user data pointer that was provided in the body definition.
  public GetUserData(): any {
    return this.m_userData;
  }

  /// Set the user data. Use this to store your application specific data.
  public SetUserData(data: any): void {
    this.m_userData = data;
  }

  /// Get the parent world of this body.
  public GetWorld(): b2World {
    return this.m_world;
  }

  /// Dump this body to a log file
  public Dump(log: (format: string, ...args: any[]) => void): void {
    const bodyIndex: number = this.m_islandIndex;

    log("{\n");
    log("  const bd: b2BodyDef = new b2BodyDef();\n");
    let type_str: string = "";
    switch (this.m_type) {
    case b2BodyType.b2_staticBody:
      type_str = "b2BodyType.b2_staticBody";
      break;
    case b2BodyType.b2_kinematicBody:
      type_str = "b2BodyType.b2_kinematicBody";
      break;
    case b2BodyType.b2_dynamicBody:
      type_str = "b2BodyType.b2_dynamicBody";
      break;
    default:
      ///b2Assert(false);
      break;
    }
    log("  bd.type = %s;\n", type_str);
    log("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y);
    log("  bd.angle = %.15f;\n", this.m_sweep.a);
    log("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y);
    log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity);
    log("  bd.linearDamping = %.15f;\n", this.m_linearDamping);
    log("  bd.angularDamping = %.15f;\n", this.m_angularDamping);
    log("  bd.allowSleep = %s;\n", (this.m_autoSleepFlag) ? ("true") : ("false"));
    log("  bd.awake = %s;\n", (this.m_awakeFlag) ? ("true") : ("false"));
    log("  bd.fixedRotation = %s;\n", (this.m_fixedRotationFlag) ? ("true") : ("false"));
    log("  bd.bullet = %s;\n", (this.m_bulletFlag) ? ("true") : ("false"));
    log("  bd.active = %s;\n", (this.m_activeFlag) ? ("true") : ("false"));
    log("  bd.gravityScale = %.15f;\n", this.m_gravityScale);
    log("\n");
    log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex);
    log("\n");
    for (let f: b2Fixture = this.m_fixtureList; f; f = f.m_next) {
      log("  {\n");
      f.Dump(log, bodyIndex);
      log("  }\n");
    }
    log("}\n");
  }

  private static SynchronizeFixtures_s_xf1: b2Transform = new b2Transform();
  public SynchronizeFixtures(): void {
    const xf1: b2Transform = b2Body.SynchronizeFixtures_s_xf1;
    xf1.q.SetAngle(this.m_sweep.a0);
    b2Rot.MulRV(xf1.q, this.m_sweep.localCenter, xf1.p);
    b2Vec2.SubVV(this.m_sweep.c0, xf1.p, xf1.p);

    const broadPhase: b2BroadPhase = this.m_world.m_contactManager.m_broadPhase;
    for (let f: b2Fixture = this.m_fixtureList; f; f = f.m_next) {
      f.Synchronize(broadPhase, xf1, this.m_xf);
    }
  }

  public SynchronizeTransform(): void {
    this.m_xf.q.SetAngle(this.m_sweep.a);
    b2Rot.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
    b2Vec2.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
  }

  // This is used to prevent connected bodies from colliding.
  // It may lie, depending on the collideConnected flag.
  public ShouldCollide(other: b2Body): boolean {
    // At least one body should be dynamic or kinematic.
    if (this.m_type === b2BodyType.b2_staticBody && other.m_type === b2BodyType.b2_staticBody) {
      return false;
    }
    return this.ShouldCollideConnected(other);
  }

  public ShouldCollideConnected(other: b2Body): boolean {
    // Does a joint prevent collision?
    for (let jn: b2JointEdge = this.m_jointList; jn; jn = jn.next) {
      if (jn.other === other) {
        if (!jn.joint.m_collideConnected) {
          return false;
        }
      }
    }

    return true;
  }

  public Advance(alpha: number): void {
    // Advance to the new safe time. This doesn't sync the broad-phase.
    this.m_sweep.Advance(alpha);
    this.m_sweep.c.Copy(this.m_sweep.c0);
    this.m_sweep.a = this.m_sweep.a0;
    this.m_xf.q.SetAngle(this.m_sweep.a);
    b2Rot.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
    b2Vec2.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
  }

  // public GetControllerList(): b2ControllerEdge
  // {
  //   return this.m_controllerList;
  // }

  // public GetControllerCount(): number
  // {
  //   return this.m_controllerCount;
  // }
}

/// Friction mixing law. The idea is to allow either fixture to drive the restitution to zero.
/// For example, anything slides on ice.
export function b2MixFriction(friction1: number, friction2: number): number {
  return b2Sqrt(friction1 * friction2);
}

/// Restitution mixing law. The idea is allow for anything to bounce off an inelastic surface.
/// For example, a superball bounces on anything.
export function b2MixRestitution(restitution1: number, restitution2: number): number {
  return restitution1 > restitution2 ? restitution1 : restitution2;
}

export class b2ContactEdge {
  public other: b2Body|null = null; ///< provides quick access to the other body attached.
  public contact: b2Contact|null = null; ///< the contact
  public prev: b2ContactEdge|null = null; ///< the previous contact edge in the body's contact list
  public next: b2ContactEdge|null = null; ///< the next contact edge in the body's contact list
}

export class b2Contact {
  public m_islandFlag: boolean = false; /// Used when crawling contact graph when forming islands.
  public m_touchingFlag: boolean = false; /// Set when the shapes are touching.
  public m_enabledFlag: boolean = false; /// This contact can be disabled (by user)
  public m_filterFlag: boolean = false; /// This contact needs filtering because a fixture filter was changed.
  public m_bulletHitFlag: boolean = false; /// This bullet contact had a TOI event
  public m_toiFlag: boolean = false; /// This contact has a valid TOI in m_toi

  public m_prev: b2Contact|null = null;
  public m_next: b2Contact|null = null;

  public m_nodeA: b2ContactEdge = new b2ContactEdge();
  public m_nodeB: b2ContactEdge = new b2ContactEdge();

  public m_fixtureA: b2Fixture|null = null;
  public m_fixtureB: b2Fixture|null = null;

  public m_indexA: number = 0;
  public m_indexB: number = 0;

  public m_manifold: b2Manifold = new b2Manifold();

  public m_toiCount: number = 0;
  public m_toi: number = 0;

  public m_friction: number = 0;
  public m_restitution: number = 0;

  public m_tangentSpeed: number = 0;

  public m_oldManifold: b2Manifold = new b2Manifold();

  public GetManifold() {
    return this.m_manifold;
  }

  public GetWorldManifold(worldManifold: b2WorldManifold): void {
    const bodyA: b2Body = this.m_fixtureA.GetBody();
    const bodyB: b2Body = this.m_fixtureB.GetBody();
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    worldManifold.Initialize(this.m_manifold, bodyA.GetTransform(), shapeA.m_radius, bodyB.GetTransform(), shapeB.m_radius);
  }

  public IsTouching(): boolean {
    return this.m_touchingFlag;
  }

  public SetEnabled(flag: boolean): void {
    this.m_enabledFlag = flag;
  }

  public IsEnabled(): boolean {
    return this.m_enabledFlag;
  }

  public GetNext(): b2Contact|null {
    return this.m_next;
  }

  public GetFixtureA(): b2Fixture|null {
    return this.m_fixtureA;
  }

  public GetChildIndexA(): number {
    return this.m_indexA;
  }

  public GetFixtureB(): b2Fixture|null {
    return this.m_fixtureB;
  }

  public GetChildIndexB(): number {
    return this.m_indexB;
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
  }

  public FlagForFiltering(): void {
    this.m_filterFlag = true;
  }

  public SetFriction(friction: number): void {
    this.m_friction = friction;
  }

  public GetFriction(): number {
    return this.m_friction;
  }

  public ResetFriction(): void {
    this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
  }

  public SetRestitution(restitution: number): void {
    this.m_restitution = restitution;
  }

  public GetRestitution(): number {
    return this.m_restitution;
  }

  public ResetRestitution(): void {
    this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
  }

  public SetTangentSpeed(speed: number): void {
    this.m_tangentSpeed = speed;
  }

  public GetTangentSpeed(): number {
    return this.m_tangentSpeed;
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    this.m_islandFlag = false;
    this.m_touchingFlag = false;
    this.m_enabledFlag = true;
    this.m_filterFlag = false;
    this.m_bulletHitFlag = false;
    this.m_toiFlag = false;

    this.m_fixtureA = fixtureA;
    this.m_fixtureB = fixtureB;

    this.m_indexA = indexA;
    this.m_indexB = indexB;

    this.m_manifold.pointCount = 0;

    this.m_prev = null;
    this.m_next = null;

    this.m_nodeA.contact = null;
    this.m_nodeA.prev = null;
    this.m_nodeA.next = null;
    this.m_nodeA.other = null;

    this.m_nodeB.contact = null;
    this.m_nodeB.prev = null;
    this.m_nodeB.next = null;
    this.m_nodeB.other = null;

    this.m_toiCount = 0;

    this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
    this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
  }

  public Update(listener: b2ContactListener): void {
    const tManifold: b2Manifold = this.m_oldManifold;
    this.m_oldManifold = this.m_manifold;
    this.m_manifold = tManifold;

    // Re-enable this contact.
    this.m_enabledFlag = true;

    let touching: boolean = false;
    const wasTouching: boolean = this.m_touchingFlag;

    const sensorA: boolean = this.m_fixtureA.IsSensor();
    const sensorB: boolean = this.m_fixtureB.IsSensor();
    const sensor: boolean = sensorA || sensorB;

    const bodyA: b2Body = this.m_fixtureA.GetBody();
    const bodyB: b2Body = this.m_fixtureB.GetBody();
    const xfA: b2Transform = bodyA.GetTransform();
    const xfB: b2Transform = bodyB.GetTransform();

    ///const aabbOverlap = b2TestOverlapAABB(this.m_fixtureA.GetAABB(0), this.m_fixtureB.GetAABB(0));

    // Is this contact a sensor?
    if (sensor) {
      ///if (aabbOverlap)
      ///{
        const shapeA: b2Shape = this.m_fixtureA.GetShape();
        const shapeB: b2Shape = this.m_fixtureB.GetShape();
        touching = b2TestOverlapShape(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
      ///}

      // Sensors don't generate manifolds.
      this.m_manifold.pointCount = 0;
    } else {
      ///if (aabbOverlap)
      ///{
        this.Evaluate(this.m_manifold, xfA, xfB);
        touching = this.m_manifold.pointCount > 0;

        // Match old contact ids to new contact ids and copy the
        // stored impulses to warm start the solver.
        for (let i: number = 0; i < this.m_manifold.pointCount; ++i) {
          const mp2: b2ManifoldPoint = this.m_manifold.points[i];
          mp2.normalImpulse = 0;
          mp2.tangentImpulse = 0;
          const id2: b2ContactID = mp2.id;

          for (let j: number = 0; j < this.m_oldManifold.pointCount; ++j) {
            const mp1: b2ManifoldPoint = this.m_oldManifold.points[j];

            if (mp1.id.key === id2.key) {
              mp2.normalImpulse = mp1.normalImpulse;
              mp2.tangentImpulse = mp1.tangentImpulse;
              break;
            }
          }
        }
      ///}
      ///else
      ///{
      ///  this.m_manifold.pointCount = 0;
      ///}

      if (touching !== wasTouching) {
        bodyA.SetAwake(true);
        bodyB.SetAwake(true);
      }
    }

    this.m_touchingFlag = touching;

    if (!wasTouching && touching && listener) {
      listener.BeginContact(this);
    }

    if (wasTouching && !touching && listener) {
      listener.EndContact(this);
    }

    if (!sensor && touching && listener) {
      listener.PreSolve(this, this.m_oldManifold);
    }
  }

  private static ComputeTOI_s_input = new b2TOIInput();
  private static ComputeTOI_s_output = new b2TOIOutput();
  public ComputeTOI(sweepA: b2Sweep, sweepB: b2Sweep): number {
    const input: b2TOIInput = b2Contact.ComputeTOI_s_input;
    input.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA);
    input.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB);
    input.sweepA.Copy(sweepA);
    input.sweepB.Copy(sweepB);
    input.tMax = b2_linearSlop;

    const output: b2TOIOutput = b2Contact.ComputeTOI_s_output;

    b2TimeOfImpact(output, input);

    return output.t;
  }
}


/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/



const b2CollideCircles_s_pA: b2Vec2 = new b2Vec2();
const b2CollideCircles_s_pB: b2Vec2 = new b2Vec2();
export function b2CollideCircles(manifold: b2Manifold, circleA: b2CircleShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void {
  manifold.pointCount = 0;

  const pA: b2Vec2 = b2Transform.MulXV(xfA, circleA.m_p, b2CollideCircles_s_pA);
  const pB: b2Vec2 = b2Transform.MulXV(xfB, circleB.m_p, b2CollideCircles_s_pB);

  const distSqr: number = b2Vec2.DistanceSquaredVV(pA, pB);
  const radius: number = circleA.m_radius + circleB.m_radius;
  if (distSqr > radius * radius) {
    return;
  }

  manifold.type = b2ManifoldType.e_circles;
  manifold.localPoint.Copy(circleA.m_p);
  manifold.localNormal.SetZero();
  manifold.pointCount = 1;

  manifold.points[0].localPoint.Copy(circleB.m_p);
  manifold.points[0].id.key = 0;
}

const b2CollidePolygonAndCircle_s_c: b2Vec2 = new b2Vec2();
const b2CollidePolygonAndCircle_s_cLocal: b2Vec2 = new b2Vec2();
const b2CollidePolygonAndCircle_s_faceCenter: b2Vec2 = new b2Vec2();
export function b2CollidePolygonAndCircle(manifold: b2Manifold, polygonA: b2PolygonShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void {
  manifold.pointCount = 0;

  // Compute circle position in the frame of the polygon.
  const c: b2Vec2 = b2Transform.MulXV(xfB, circleB.m_p, b2CollidePolygonAndCircle_s_c);
  const cLocal: b2Vec2 = b2Transform.MulTXV(xfA, c, b2CollidePolygonAndCircle_s_cLocal);

  // Find the min separating edge.
  let normalIndex: number = 0;
  let separation: number = (-b2_maxFloat);
  const radius: number = polygonA.m_radius + circleB.m_radius;
  const vertexCount: number = polygonA.m_count;
  const vertices: b2Vec2[] = polygonA.m_vertices;
  const normals: b2Vec2[] = polygonA.m_normals;

  for (let i: number = 0; i < vertexCount; ++i) {
    const s: number = b2Vec2.DotVV(normals[i], b2Vec2.SubVV(cLocal, vertices[i], b2Vec2.s_t0));

    if (s > radius) {
      // Early out.
      return;
    }

    if (s > separation) {
      separation = s;
      normalIndex = i;
    }
  }

  // Vertices that subtend the incident face.
  const vertIndex1: number = normalIndex;
  const vertIndex2: number = (vertIndex1 + 1) % vertexCount;
  const v1: b2Vec2 = vertices[vertIndex1];
  const v2: b2Vec2 = vertices[vertIndex2];

  // If the center is inside the polygon ...
  if (separation < b2_epsilon) {
    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_faceA;
    manifold.localNormal.Copy(normals[normalIndex]);
    b2Vec2.MidVV(v1, v2, manifold.localPoint);
    manifold.points[0].localPoint.Copy(circleB.m_p);
    manifold.points[0].id.key = 0;
    return;
  }

  // Compute barycentric coordinates
  const u1: number = b2Vec2.DotVV(b2Vec2.SubVV(cLocal, v1, b2Vec2.s_t0), b2Vec2.SubVV(v2, v1, b2Vec2.s_t1));
  const u2: number = b2Vec2.DotVV(b2Vec2.SubVV(cLocal, v2, b2Vec2.s_t0), b2Vec2.SubVV(v1, v2, b2Vec2.s_t1));
  if (u1 <= 0) {
    if (b2Vec2.DistanceSquaredVV(cLocal, v1) > radius * radius) {
      return;
    }

    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_faceA;
    b2Vec2.SubVV(cLocal, v1, manifold.localNormal).SelfNormalize();
    manifold.localPoint.Copy(v1);
    manifold.points[0].localPoint.Copy(circleB.m_p);
    manifold.points[0].id.key = 0;
  } else if (u2 <= 0) {
    if (b2Vec2.DistanceSquaredVV(cLocal, v2) > radius * radius) {
      return;
    }

    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_faceA;
    b2Vec2.SubVV(cLocal, v2, manifold.localNormal).SelfNormalize();
    manifold.localPoint.Copy(v2);
    manifold.points[0].localPoint.Copy(circleB.m_p);
    manifold.points[0].id.key = 0;
  } else {
    const faceCenter: b2Vec2 = b2Vec2.MidVV(v1, v2, b2CollidePolygonAndCircle_s_faceCenter);
    separation = b2Vec2.DotVV(b2Vec2.SubVV(cLocal, faceCenter, b2Vec2.s_t1), normals[vertIndex1]);
    if (separation > radius) {
      return;
    }

    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_faceA;
    manifold.localNormal.Copy(normals[vertIndex1]).SelfNormalize();
    manifold.localPoint.Copy(faceCenter);
    manifold.points[0].localPoint.Copy(circleB.m_p);
    manifold.points[0].id.key = 0;
  }
}

export class b2CircleContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2CircleContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2CircleShape);
    ///b2Assert(shapeB instanceof b2CircleShape);
    b2CollideCircles(
      manifold,
      <b2CircleShape> shapeA, xfA,
      <b2CircleShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/



const b2EdgeSeparation_s_normal1World: b2Vec2 = new b2Vec2();
const b2EdgeSeparation_s_normal1: b2Vec2 = new b2Vec2();
const b2EdgeSeparation_s_v1: b2Vec2 = new b2Vec2();
const b2EdgeSeparation_s_v2: b2Vec2 = new b2Vec2();
function b2EdgeSeparation(poly1: b2PolygonShape, xf1: b2Transform, edge1: number, poly2: b2PolygonShape, xf2: b2Transform): number {
  ///const count1: number = poly1.m_count;
  const vertices1: b2Vec2[] = poly1.m_vertices;
  const normals1: b2Vec2[] = poly1.m_normals;

  const count2: number = poly2.m_count;
  const vertices2: b2Vec2[] = poly2.m_vertices;

  ///b2Assert(0 <= edge1 && edge1 < count1);

  // Convert normal from poly1's frame into poly2's frame.
  const normal1World: b2Vec2 = b2Rot.MulRV(xf1.q, normals1[edge1], b2EdgeSeparation_s_normal1World);
  const normal1: b2Vec2 = b2Rot.MulTRV(xf2.q, normal1World, b2EdgeSeparation_s_normal1);

  // Find support vertex on poly2 for -normal.
  let index: number = 0;
  let minDot: number = b2_maxFloat;

  for (let i: number = 0; i < count2; ++i) {
    const dot: number = b2Vec2.DotVV(vertices2[i], normal1);
    if (dot < minDot) {
      minDot = dot;
      index = i;
    }
  }

  const v1: b2Vec2 = b2Transform.MulXV(xf1, vertices1[edge1], b2EdgeSeparation_s_v1);
  const v2: b2Vec2 = b2Transform.MulXV(xf2, vertices2[index], b2EdgeSeparation_s_v2);
  const separation: number = b2Vec2.DotVV(b2Vec2.SubVV(v2, v1, b2Vec2.s_t0), normal1World);
  return separation;
}

const b2FindMaxSeparation_s_d: b2Vec2 = new b2Vec2();
const b2FindMaxSeparation_s_dLocal1: b2Vec2 = new b2Vec2();
function b2FindMaxSeparation(edgeIndex: number[], poly1: b2PolygonShape, xf1: b2Transform, poly2: b2PolygonShape, xf2: b2Transform): number {
  const count1: number = poly1.m_count;
  const normals1: b2Vec2[] = poly1.m_normals;

  // Vector pointing from the centroid of poly1 to the centroid of poly2.
  const d: b2Vec2 = b2Vec2.SubVV(b2Transform.MulXV(xf2, poly2.m_centroid, b2Vec2.s_t0), b2Transform.MulXV(xf1, poly1.m_centroid, b2Vec2.s_t1), b2FindMaxSeparation_s_d);
  const dLocal1: b2Vec2 = b2Rot.MulTRV(xf1.q, d, b2FindMaxSeparation_s_dLocal1);

  // Find edge normal on poly1 that has the largest projection onto d.
  let edge: number = 0;
  let maxDot: number = (-b2_maxFloat);
  for (let i: number = 0; i < count1; ++i) {
    const dot: number = b2Vec2.DotVV(normals1[i], dLocal1);
    if (dot > maxDot) {
      maxDot = dot;
      edge = i;
    }
  }

  // Get the separation for the edge normal.
  let s: number = b2EdgeSeparation(poly1, xf1, edge, poly2, xf2);

  // Check the separation for the previous edge normal.
  const prevEdge = (edge + count1 - 1) % count1;
  const sPrev = b2EdgeSeparation(poly1, xf1, prevEdge, poly2, xf2);

  // Check the separation for the next edge normal.
  const nextEdge = (edge + 1) % count1;
  const sNext = b2EdgeSeparation(poly1, xf1, nextEdge, poly2, xf2);

  // Find the best edge and the search direction.
  let bestEdge: number = 0;
  let bestSeparation: number = 0;
  let increment: number = 0;
  if (sPrev > s && sPrev > sNext) {
    increment = -1;
    bestEdge = prevEdge;
    bestSeparation = sPrev;
  } else if (sNext > s) {
    increment = 1;
    bestEdge = nextEdge;
    bestSeparation = sNext;
  } else {
    edgeIndex[0] = edge;
    return s;
  }

  // Perform a local search for the best edge normal.
  while (true) {
    if (increment === -1)
      edge = (bestEdge + count1 - 1) % count1;
    else
      edge = (bestEdge + 1) % count1;

    s = b2EdgeSeparation(poly1, xf1, edge, poly2, xf2);

    if (s > bestSeparation) {
      bestEdge = edge;
      bestSeparation = s;
    } else {
      break;
    }
  }

  edgeIndex[0] = bestEdge;
  return bestSeparation;
}

const b2FindIncidentEdge_s_normal1: b2Vec2 = new b2Vec2();
function b2FindIncidentEdge(c: b2ClipVertex[], poly1: b2PolygonShape, xf1: b2Transform, edge1: number, poly2: b2PolygonShape, xf2: b2Transform): void {
  ///const count1: number = poly1.m_count;
  const normals1: b2Vec2[] = poly1.m_normals;

  const count2: number = poly2.m_count;
  const vertices2: b2Vec2[] = poly2.m_vertices;
  const normals2: b2Vec2[] = poly2.m_normals;

  ///b2Assert(0 <= edge1 && edge1 < count1);

  // Get the normal of the reference edge in poly2's frame.
  const normal1: b2Vec2 = b2Rot.MulTRV(xf2.q, b2Rot.MulRV(xf1.q, normals1[edge1], b2Vec2.s_t0), b2FindIncidentEdge_s_normal1);

  // Find the incident edge on poly2.
  let index: number = 0;
  let minDot: number = b2_maxFloat;
  for (let i: number = 0; i < count2; ++i) {
    const dot: number = b2Vec2.DotVV(normal1, normals2[i]);
    if (dot < minDot) {
      minDot = dot;
      index = i;
    }
  }

  // Build the clip vertices for the incident edge.
  const i1: number = index;
  const i2: number = (i1 + 1) % count2;

  const c0: b2ClipVertex = c[0];
  b2Transform.MulXV(xf2, vertices2[i1], c0.v);
  const cf0: b2ContactFeature = c0.id.cf;
  cf0.indexA = edge1;
  cf0.indexB = i1;
  cf0.typeA = b2ContactFeatureType.e_face;
  cf0.typeB = b2ContactFeatureType.e_vertex;

  const c1: b2ClipVertex = c[1];
  b2Transform.MulXV(xf2, vertices2[i2], c1.v);
  const cf1: b2ContactFeature = c1.id.cf;
  cf1.indexA = edge1;
  cf1.indexB = i2;
  cf1.typeA = b2ContactFeatureType.e_face;
  cf1.typeB = b2ContactFeatureType.e_vertex;
}

const b2CollidePolygons_s_incidentEdge = b2ClipVertex.MakeArray(2);
const b2CollidePolygons_s_clipPoints1 = b2ClipVertex.MakeArray(2);
const b2CollidePolygons_s_clipPoints2 = b2ClipVertex.MakeArray(2);
const b2CollidePolygons_s_edgeA = [ 0 ];
const b2CollidePolygons_s_edgeB = [ 0 ];
const b2CollidePolygons_s_localTangent: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_localNormal: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_planePoint: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_normal: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_tangent: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_ntangent: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_v11: b2Vec2 = new b2Vec2();
const b2CollidePolygons_s_v12: b2Vec2 = new b2Vec2();
export function b2CollidePolygons(manifold: b2Manifold, polyA: b2PolygonShape, xfA: b2Transform, polyB: b2PolygonShape, xfB: b2Transform): void {
  manifold.pointCount = 0;
  const totalRadius: number = polyA.m_radius + polyB.m_radius;

  const edgeA: number[] = b2CollidePolygons_s_edgeA; edgeA[0] = 0;
  const separationA: number = b2FindMaxSeparation(edgeA, polyA, xfA, polyB, xfB);
  if (separationA > totalRadius)
    return;

  const edgeB: number[] = b2CollidePolygons_s_edgeB; edgeB[0] = 0;
  const separationB: number = b2FindMaxSeparation(edgeB, polyB, xfB, polyA, xfA);
  if (separationB > totalRadius)
    return;

  let poly1: b2PolygonShape; // reference polygon
  let poly2: b2PolygonShape; // incident polygon
  let xf1: b2Transform, xf2: b2Transform;
  let edge1: number = 0; // reference edge
  let flip: number = 0;
  const k_relativeTol: number = 0.98;
  const k_absoluteTol: number = 0.001;

  if (separationB > k_relativeTol * separationA + k_absoluteTol) {
    poly1 = polyB;
    poly2 = polyA;
    xf1 = xfB;
    xf2 = xfA;
    edge1 = edgeB[0];
    manifold.type = b2ManifoldType.e_faceB;
    flip = 1;
  } else {
    poly1 = polyA;
    poly2 = polyB;
    xf1 = xfA;
    xf2 = xfB;
    edge1 = edgeA[0];
    manifold.type = b2ManifoldType.e_faceA;
    flip = 0;
  }

  const incidentEdge: b2ClipVertex[] = b2CollidePolygons_s_incidentEdge;
  b2FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);

  const count1: number = poly1.m_count;
  const vertices1: b2Vec2[] = poly1.m_vertices;

  const iv1: number = edge1;
  const iv2: number = (edge1 + 1) % count1;

  const local_v11: b2Vec2 = vertices1[iv1];
  const local_v12: b2Vec2 = vertices1[iv2];

  const localTangent: b2Vec2 = b2Vec2.SubVV(local_v12, local_v11, b2CollidePolygons_s_localTangent);
  localTangent.Normalize();

  const localNormal: b2Vec2 = b2Vec2.CrossVOne(localTangent, b2CollidePolygons_s_localNormal);
  const planePoint: b2Vec2 = b2Vec2.MidVV(local_v11, local_v12, b2CollidePolygons_s_planePoint);

  const tangent: b2Vec2 = b2Rot.MulRV(xf1.q, localTangent, b2CollidePolygons_s_tangent);
  const normal: b2Vec2 = b2Vec2.CrossVOne(tangent, b2CollidePolygons_s_normal);

  const v11: b2Vec2 = b2Transform.MulXV(xf1, local_v11, b2CollidePolygons_s_v11);
  const v12: b2Vec2 = b2Transform.MulXV(xf1, local_v12, b2CollidePolygons_s_v12);

  // Face offset.
  const frontOffset: number = b2Vec2.DotVV(normal, v11);

  // Side offsets, extended by polytope skin thickness.
  const sideOffset1: number = -b2Vec2.DotVV(tangent, v11) + totalRadius;
  const sideOffset2: number = b2Vec2.DotVV(tangent, v12) + totalRadius;

  // Clip incident edge against extruded edge1 side edges.
  const clipPoints1: b2ClipVertex[] = b2CollidePolygons_s_clipPoints1;
  const clipPoints2: b2ClipVertex[] = b2CollidePolygons_s_clipPoints2;
  let np: number;

  // Clip to box side 1
  const ntangent: b2Vec2 = b2Vec2.NegV(tangent, b2CollidePolygons_s_ntangent);
  np = b2ClipSegmentToLine(clipPoints1, incidentEdge, ntangent, sideOffset1, iv1);

  if (np < 2)
    return;

  // Clip to negative box side 1
  np = b2ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);

  if (np < 2) {
    return;
  }

  // Now clipPoints2 contains the clipped points.
  manifold.localNormal.Copy(localNormal);
  manifold.localPoint.Copy(planePoint);

  let pointCount: number = 0;
  for (let i: number = 0; i < b2_maxManifoldPoints; ++i) {
    const cv: b2ClipVertex = clipPoints2[i];
    const separation: number = b2Vec2.DotVV(normal, cv.v) - frontOffset;

    if (separation <= totalRadius) {
      const cp: b2ManifoldPoint = manifold.points[pointCount];
      b2Transform.MulTXV(xf2, cv.v, cp.localPoint);
      cp.id.Copy(cv.id);
      if (flip) {
        // Swap features
        const cf: b2ContactFeature = cp.id.cf;
        cp.id.cf.indexA = cf.indexB;
        cp.id.cf.indexB = cf.indexA;
        cp.id.cf.typeA = cf.typeB;
        cp.id.cf.typeB = cf.typeA;
      }
      ++pointCount;
    }
  }

  manifold.pointCount = pointCount;
}

export class b2PolygonContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2PolygonContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2PolygonShape);
    ///b2Assert(shapeB instanceof b2PolygonShape);
    b2CollidePolygons(
      manifold,
      <b2PolygonShape> shapeA, xfA,
      <b2PolygonShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export class b2PolygonAndCircleContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2PolygonAndCircleContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
    ///b2Assert(fixtureA.GetType() === b2ShapeType.e_polygonShape);
    ///b2Assert(fixtureB.GetType() === b2ShapeType.e_circleShape);
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2PolygonShape);
    ///b2Assert(shapeB instanceof b2CircleShape);
    b2CollidePolygonAndCircle(
      manifold,
      <b2PolygonShape> shapeA, xfA,
      <b2CircleShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/



const b2CollideEdgeAndCircle_s_Q: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_e: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_d: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_e1: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_e2: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_P: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_n: b2Vec2 = new b2Vec2();
const b2CollideEdgeAndCircle_s_id: b2ContactID = new b2ContactID();
export function b2CollideEdgeAndCircle(manifold: b2Manifold, edgeA: b2EdgeShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void {
  manifold.pointCount = 0;

  // Compute circle in frame of edge
  const Q: b2Vec2 = b2Transform.MulTXV(xfA, b2Transform.MulXV(xfB, circleB.m_p, b2Vec2.s_t0), b2CollideEdgeAndCircle_s_Q);

  const A: b2Vec2 = edgeA.m_vertex1;
  const B: b2Vec2 = edgeA.m_vertex2;
  const e: b2Vec2 = b2Vec2.SubVV(B, A, b2CollideEdgeAndCircle_s_e);

  // Barycentric coordinates
  const u: number = b2Vec2.DotVV(e, b2Vec2.SubVV(B, Q, b2Vec2.s_t0));
  const v: number = b2Vec2.DotVV(e, b2Vec2.SubVV(Q, A, b2Vec2.s_t0));

  const radius: number = edgeA.m_radius + circleB.m_radius;

  // const cf: b2ContactFeature = new b2ContactFeature();
  const id: b2ContactID = b2CollideEdgeAndCircle_s_id;
  id.cf.indexB = 0;
  id.cf.typeB = b2ContactFeatureType.e_vertex;

  // Region A
  if (v <= 0) {
    const P: b2Vec2 = A;
    const d: b2Vec2 = b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
    const dd: number = b2Vec2.DotVV(d, d);
    if (dd > radius * radius) {
      return;
    }

    // Is there an edge connected to A?
    if (edgeA.m_hasVertex0) {
      const A1: b2Vec2 = edgeA.m_vertex0;
      const B1: b2Vec2 = A;
      const e1: b2Vec2 = b2Vec2.SubVV(B1, A1, b2CollideEdgeAndCircle_s_e1);
      const u1: number = b2Vec2.DotVV(e1, b2Vec2.SubVV(B1, Q, b2Vec2.s_t0));

      // Is the circle in Region AB of the previous edge?
      if (u1 > 0) {
        return;
      }
    }

    id.cf.indexA = 0;
    id.cf.typeA = b2ContactFeatureType.e_vertex;
    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_circles;
    manifold.localNormal.SetZero();
    manifold.localPoint.Copy(P);
    manifold.points[0].id.Copy(id);
    // manifold.points[0].id.key = 0;
    // manifold.points[0].id.cf = cf;
    manifold.points[0].localPoint.Copy(circleB.m_p);
    return;
  }

  // Region B
  if (u <= 0) {
    const P: b2Vec2 = B;
    const d: b2Vec2 = b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
    const dd: number = b2Vec2.DotVV(d, d);
    if (dd > radius * radius) {
      return;
    }

    // Is there an edge connected to B?
    if (edgeA.m_hasVertex3) {
      const B2: b2Vec2 = edgeA.m_vertex3;
      const A2: b2Vec2 = B;
      const e2: b2Vec2 = b2Vec2.SubVV(B2, A2, b2CollideEdgeAndCircle_s_e2);
      const v2: number = b2Vec2.DotVV(e2, b2Vec2.SubVV(Q, A2, b2Vec2.s_t0));

      // Is the circle in Region AB of the next edge?
      if (v2 > 0) {
        return;
      }
    }

    id.cf.indexA = 1;
    id.cf.typeA = b2ContactFeatureType.e_vertex;
    manifold.pointCount = 1;
    manifold.type = b2ManifoldType.e_circles;
    manifold.localNormal.SetZero();
    manifold.localPoint.Copy(P);
    manifold.points[0].id.Copy(id);
    // manifold.points[0].id.key = 0;
    // manifold.points[0].id.cf = cf;
    manifold.points[0].localPoint.Copy(circleB.m_p);
    return;
  }

  // Region AB
  const den: number = b2Vec2.DotVV(e, e);
  ///b2Assert(den > 0);
  const P: b2Vec2 = b2CollideEdgeAndCircle_s_P;
  P.x = (1 / den) * (u * A.x + v * B.x);
  P.y = (1 / den) * (u * A.y + v * B.y);
  const d: b2Vec2 = b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
  const dd: number = b2Vec2.DotVV(d, d);
  if (dd > radius * radius) {
    return;
  }

  const n: b2Vec2 = b2CollideEdgeAndCircle_s_n.Set(-e.y, e.x);
  if (b2Vec2.DotVV(n, b2Vec2.SubVV(Q, A, b2Vec2.s_t0)) < 0) {
    n.Set(-n.x, -n.y);
  }
  n.Normalize();

  id.cf.indexA = 0;
  id.cf.typeA = b2ContactFeatureType.e_face;
  manifold.pointCount = 1;
  manifold.type = b2ManifoldType.e_faceA;
  manifold.localNormal.Copy(n);
  manifold.localPoint.Copy(A);
  manifold.points[0].id.Copy(id);
  // manifold.points[0].id.key = 0;
  // manifold.points[0].id.cf = cf;
  manifold.points[0].localPoint.Copy(circleB.m_p);
}

const enum b2EPAxisType {
  e_unknown = 0,
  e_edgeA = 1,
  e_edgeB = 2
}

class b2EPAxis {
  public type: b2EPAxisType = b2EPAxisType.e_unknown;
  public index: number = 0;
  public separation: number = 0;
}

class b2TempPolygon {
  public vertices: b2Vec2[] = b2Vec2.MakeArray(b2_maxPolygonVertices);
  public normals: b2Vec2[] = b2Vec2.MakeArray(b2_maxPolygonVertices);
  public count: number = 0;
}

class b2ReferenceFace {
  public i1: number = 0;
  public i2: number = 0;
  public v1: b2Vec2 = new b2Vec2();
  public v2: b2Vec2 = new b2Vec2();
  public normal: b2Vec2 = new b2Vec2();
  public sideNormal1: b2Vec2 = new b2Vec2();
  public sideOffset1: number = 0;
  public sideNormal2: b2Vec2 = new b2Vec2();
  public sideOffset2: number = 0;
}

const enum b2EPColliderVertexType {
  e_isolated = 0,
  e_concave = 1,
  e_convex = 2
}

class b2EPCollider {
  public m_polygonB: b2TempPolygon = new b2TempPolygon();
  public m_xf: b2Transform = new b2Transform();
  public m_centroidB: b2Vec2 = new b2Vec2();
  public m_v0: b2Vec2 = new b2Vec2();
  public m_v1: b2Vec2 = new b2Vec2();
  public m_v2: b2Vec2 = new b2Vec2();
  public m_v3: b2Vec2 = new b2Vec2();
  public m_normal0: b2Vec2 = new b2Vec2();
  public m_normal1: b2Vec2 = new b2Vec2();
  public m_normal2: b2Vec2 = new b2Vec2();
  public m_normal: b2Vec2 = new b2Vec2();
  public m_type1 = b2EPColliderVertexType.e_isolated;
  public m_type2 = b2EPColliderVertexType.e_isolated;
  public m_lowerLimit: b2Vec2 = new b2Vec2();
  public m_upperLimit: b2Vec2 = new b2Vec2();
  public m_radius: number = 0;
  public m_front: boolean = false;

  private static s_edge1 = new b2Vec2();
  private static s_edge0 = new b2Vec2();
  private static s_edge2 = new b2Vec2();
  private static s_ie = b2ClipVertex.MakeArray(2);
  private static s_rf = new b2ReferenceFace();
  private static s_clipPoints1 = b2ClipVertex.MakeArray(2);
  private static s_clipPoints2 = b2ClipVertex.MakeArray(2);
  private static s_edgeAxis = new b2EPAxis();
  private static s_polygonAxis = new b2EPAxis();
  public Collide(manifold: b2Manifold, edgeA: b2EdgeShape, xfA: b2Transform, polygonB: b2PolygonShape, xfB: b2Transform): void {
    b2Transform.MulTXX(xfA, xfB, this.m_xf);

    b2Transform.MulXV(this.m_xf, polygonB.m_centroid, this.m_centroidB);

    this.m_v0.Copy(edgeA.m_vertex0);
    this.m_v1.Copy(edgeA.m_vertex1);
    this.m_v2.Copy(edgeA.m_vertex2);
    this.m_v3.Copy(edgeA.m_vertex3);

    const hasVertex0: boolean = edgeA.m_hasVertex0;
    const hasVertex3: boolean = edgeA.m_hasVertex3;

    const edge1: b2Vec2 = b2Vec2.SubVV(this.m_v2, this.m_v1, b2EPCollider.s_edge1);
    edge1.Normalize();
    this.m_normal1.Set(edge1.y, -edge1.x);
    const offset1: number = b2Vec2.DotVV(this.m_normal1, b2Vec2.SubVV(this.m_centroidB, this.m_v1, b2Vec2.s_t0));
    let offset0: number = 0;
    let offset2: number = 0;
    let convex1: boolean = false;
    let convex2: boolean = false;

    // Is there a preceding edge?
    if (hasVertex0) {
      const edge0: b2Vec2 = b2Vec2.SubVV(this.m_v1, this.m_v0, b2EPCollider.s_edge0);
      edge0.Normalize();
      this.m_normal0.Set(edge0.y, -edge0.x);
      convex1 = b2Vec2.CrossVV(edge0, edge1) >= 0;
      offset0 = b2Vec2.DotVV(this.m_normal0, b2Vec2.SubVV(this.m_centroidB, this.m_v0, b2Vec2.s_t0));
    }

    // Is there a following edge?
    if (hasVertex3) {
      const edge2: b2Vec2 = b2Vec2.SubVV(this.m_v3, this.m_v2, b2EPCollider.s_edge2);
      edge2.Normalize();
      this.m_normal2.Set(edge2.y, -edge2.x);
      convex2 = b2Vec2.CrossVV(edge1, edge2) > 0;
      offset2 = b2Vec2.DotVV(this.m_normal2, b2Vec2.SubVV(this.m_centroidB, this.m_v2, b2Vec2.s_t0));
    }

    // Determine front or back collision. Determine collision normal limits.
    if (hasVertex0 && hasVertex3) {
      if (convex1 && convex2) {
        this.m_front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal0);
          this.m_upperLimit.Copy(this.m_normal2);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
        }
      } else if (convex1) {
        this.m_front = offset0 >= 0 || (offset1 >= 0 && offset2 >= 0);
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal0);
          this.m_upperLimit.Copy(this.m_normal1);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
        }
      } else if (convex2) {
        this.m_front = offset2 >= 0 || (offset0 >= 0 && offset1 >= 0);
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal1);
          this.m_upperLimit.Copy(this.m_normal2);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
        }
      } else {
        this.m_front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal1);
          this.m_upperLimit.Copy(this.m_normal1);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
        }
      }
    } else if (hasVertex0) {
      if (convex1) {
        this.m_front = offset0 >= 0 || offset1 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal0);
          this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal1);
          this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
        }
      } else {
        this.m_front = offset0 >= 0 && offset1 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal1);
          this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal1);
          this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
        }
      }
    } else if (hasVertex3) {
      if (convex2) {
        this.m_front = offset1 >= 0 || offset2 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal2);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal1);
        }
      } else {
        this.m_front = offset1 >= 0 && offset2 >= 0;
        if (this.m_front) {
          this.m_normal.Copy(this.m_normal1);
          this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal1);
        } else {
          this.m_normal.Copy(this.m_normal1).SelfNeg();
          this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
          this.m_upperLimit.Copy(this.m_normal1);
        }
      }
    } else {
      this.m_front = offset1 >= 0;
      if (this.m_front) {
        this.m_normal.Copy(this.m_normal1);
        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
      } else {
        this.m_normal.Copy(this.m_normal1).SelfNeg();
        this.m_lowerLimit.Copy(this.m_normal1);
        this.m_upperLimit.Copy(this.m_normal1);
      }
    }

    // Get polygonB in frameA
    this.m_polygonB.count = polygonB.m_count;
    for (let i: number = 0; i < polygonB.m_count; ++i) {
      b2Transform.MulXV(this.m_xf, polygonB.m_vertices[i], this.m_polygonB.vertices[i]);
      b2Rot.MulRV(this.m_xf.q, polygonB.m_normals[i], this.m_polygonB.normals[i]);
    }

    this.m_radius = 2 * b2_polygonRadius;

    manifold.pointCount = 0;

    const edgeAxis: b2EPAxis = this.ComputeEdgeSeparation(b2EPCollider.s_edgeAxis);

    // If no valid normal can be found than this edge should not collide.
    if (edgeAxis.type === b2EPAxisType.e_unknown) {
      return;
    }

    if (edgeAxis.separation > this.m_radius) {
      return;
    }

    const polygonAxis: b2EPAxis = this.ComputePolygonSeparation(b2EPCollider.s_polygonAxis);
    if (polygonAxis.type !== b2EPAxisType.e_unknown && polygonAxis.separation > this.m_radius) {
      return;
    }

    // Use hysteresis for jitter reduction.
    const k_relativeTol: number = 0.98;
    const k_absoluteTol: number = 0.001;

    let primaryAxis: b2EPAxis;
    if (polygonAxis.type === b2EPAxisType.e_unknown) {
      primaryAxis = edgeAxis;
    } else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {
      primaryAxis = polygonAxis;
    } else {
      primaryAxis = edgeAxis;
    }

    const ie: b2ClipVertex[] = b2EPCollider.s_ie;
    const rf: b2ReferenceFace = b2EPCollider.s_rf;
    if (primaryAxis.type === b2EPAxisType.e_edgeA) {
      manifold.type = b2ManifoldType.e_faceA;

      // Search for the polygon normal that is most anti-parallel to the edge normal.
      let bestIndex: number = 0;
      let bestValue: number = b2Vec2.DotVV(this.m_normal, this.m_polygonB.normals[0]);
      for (let i: number = 1; i < this.m_polygonB.count; ++i) {
        const value: number = b2Vec2.DotVV(this.m_normal, this.m_polygonB.normals[i]);
        if (value < bestValue) {
          bestValue = value;
          bestIndex = i;
        }
      }

      const i1: number = bestIndex;
      const i2: number = (i1 + 1) % this.m_polygonB.count;

      const ie0: b2ClipVertex = ie[0];
      ie0.v.Copy(this.m_polygonB.vertices[i1]);
      ie0.id.cf.indexA = 0;
      ie0.id.cf.indexB = i1;
      ie0.id.cf.typeA = b2ContactFeatureType.e_face;
      ie0.id.cf.typeB = b2ContactFeatureType.e_vertex;

      const ie1: b2ClipVertex = ie[1];
      ie1.v.Copy(this.m_polygonB.vertices[i2]);
      ie1.id.cf.indexA = 0;
      ie1.id.cf.indexB = i2;
      ie1.id.cf.typeA = b2ContactFeatureType.e_face;
      ie1.id.cf.typeB = b2ContactFeatureType.e_vertex;

      if (this.m_front) {
        rf.i1 = 0;
        rf.i2 = 1;
        rf.v1.Copy(this.m_v1);
        rf.v2.Copy(this.m_v2);
        rf.normal.Copy(this.m_normal1);
      } else {
        rf.i1 = 1;
        rf.i2 = 0;
        rf.v1.Copy(this.m_v2);
        rf.v2.Copy(this.m_v1);
        rf.normal.Copy(this.m_normal1).SelfNeg();
      }
    } else {
      manifold.type = b2ManifoldType.e_faceB;

      const ie0: b2ClipVertex = ie[0];
      ie0.v.Copy(this.m_v1);
      ie0.id.cf.indexA = 0;
      ie0.id.cf.indexB = primaryAxis.index;
      ie0.id.cf.typeA = b2ContactFeatureType.e_vertex;
      ie0.id.cf.typeB = b2ContactFeatureType.e_face;

      const ie1: b2ClipVertex = ie[1];
      ie1.v.Copy(this.m_v2);
      ie1.id.cf.indexA = 0;
      ie1.id.cf.indexB = primaryAxis.index;
      ie1.id.cf.typeA = b2ContactFeatureType.e_vertex;
      ie1.id.cf.typeB = b2ContactFeatureType.e_face;

      rf.i1 = primaryAxis.index;
      rf.i2 = (rf.i1 + 1) % this.m_polygonB.count;
      rf.v1.Copy(this.m_polygonB.vertices[rf.i1]);
      rf.v2.Copy(this.m_polygonB.vertices[rf.i2]);
      rf.normal.Copy(this.m_polygonB.normals[rf.i1]);
    }

    rf.sideNormal1.Set(rf.normal.y, -rf.normal.x);
    rf.sideNormal2.Copy(rf.sideNormal1).SelfNeg();
    rf.sideOffset1 = b2Vec2.DotVV(rf.sideNormal1, rf.v1);
    rf.sideOffset2 = b2Vec2.DotVV(rf.sideNormal2, rf.v2);

    // Clip incident edge against extruded edge1 side edges.
    const clipPoints1: b2ClipVertex[] = b2EPCollider.s_clipPoints1;
    const clipPoints2: b2ClipVertex[] = b2EPCollider.s_clipPoints2;
    let np: number = 0;

    // Clip to box side 1
    np = b2ClipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);

    if (np < b2_maxManifoldPoints) {
      return;
    }

    // Clip to negative box side 1
    np = b2ClipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);

    if (np < b2_maxManifoldPoints) {
      return;
    }

    // Now clipPoints2 contains the clipped points.
    if (primaryAxis.type === b2EPAxisType.e_edgeA) {
      manifold.localNormal.Copy(rf.normal);
      manifold.localPoint.Copy(rf.v1);
    } else {
      manifold.localNormal.Copy(polygonB.m_normals[rf.i1]);
      manifold.localPoint.Copy(polygonB.m_vertices[rf.i1]);
    }

    let pointCount: number = 0;
    for (let i: number = 0; i < b2_maxManifoldPoints; ++i) {
      let separation: number;

      separation = b2Vec2.DotVV(rf.normal, b2Vec2.SubVV(clipPoints2[i].v, rf.v1, b2Vec2.s_t0));

      if (separation <= this.m_radius) {
        const cp: b2ManifoldPoint = manifold.points[pointCount];

        if (primaryAxis.type === b2EPAxisType.e_edgeA) {
          b2Transform.MulTXV(this.m_xf, clipPoints2[i].v, cp.localPoint);
          cp.id = clipPoints2[i].id;
        } else {
          cp.localPoint.Copy(clipPoints2[i].v);
          cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;
          cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;
          cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;
          cp.id.cf.indexB = clipPoints2[i].id.cf.indexA;
        }

        ++pointCount;
      }
    }

    manifold.pointCount = pointCount;
  }

  public ComputeEdgeSeparation(out: b2EPAxis): b2EPAxis {
    const axis: b2EPAxis = out;
    axis.type = b2EPAxisType.e_edgeA;
    axis.index = this.m_front ? 0 : 1;
    axis.separation = b2_maxFloat;

    for (let i: number = 0; i < this.m_polygonB.count; ++i) {
      const s: number = b2Vec2.DotVV(this.m_normal, b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v1, b2Vec2.s_t0));
      if (s < axis.separation) {
        axis.separation = s;
      }
    }

    return axis;
  }

  private static s_n = new b2Vec2();
  private static s_perp = new b2Vec2();
  public ComputePolygonSeparation(out: b2EPAxis): b2EPAxis {
    const axis: b2EPAxis = out;
    axis.type = b2EPAxisType.e_unknown;
    axis.index = -1;
    axis.separation = -b2_maxFloat;

    const perp: b2Vec2 = b2EPCollider.s_perp.Set(-this.m_normal.y, this.m_normal.x);

    for (let i: number = 0; i < this.m_polygonB.count; ++i) {
      const n: b2Vec2 = b2Vec2.NegV(this.m_polygonB.normals[i], b2EPCollider.s_n);

      const s1: number = b2Vec2.DotVV(n, b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v1, b2Vec2.s_t0));
      const s2: number = b2Vec2.DotVV(n, b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v2, b2Vec2.s_t0));
      const s: number = b2Min(s1, s2);

      if (s > this.m_radius) {
        // No collision
        axis.type = b2EPAxisType.e_edgeB;
        axis.index = i;
        axis.separation = s;
        return axis;
      }

      // Adjacency
      if (b2Vec2.DotVV(n, perp) >= 0) {
        if (b2Vec2.DotVV(b2Vec2.SubVV(n, this.m_upperLimit, b2Vec2.s_t0), this.m_normal) < -b2_angularSlop) {
          continue;
        }
      } else {
        if (b2Vec2.DotVV(b2Vec2.SubVV(n, this.m_lowerLimit, b2Vec2.s_t0), this.m_normal) < -b2_angularSlop) {
          continue;
        }
      }

      if (s > axis.separation) {
        axis.type = b2EPAxisType.e_edgeB;
        axis.index = i;
        axis.separation = s;
      }
    }

    return axis;
  }
}

const b2CollideEdgeAndPolygon_s_collider: b2EPCollider = new b2EPCollider();
export function b2CollideEdgeAndPolygon(manifold: b2Manifold, edgeA: b2EdgeShape, xfA: b2Transform, polygonB: b2PolygonShape, xfB: b2Transform): void {
  const collider: b2EPCollider = b2CollideEdgeAndPolygon_s_collider;
  collider.Collide(manifold, edgeA, xfA, polygonB, xfB);
}

export class b2EdgeAndCircleContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2EdgeAndCircleContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
    ///b2Assert(fixtureA.GetType() === b2ShapeType.e_edgeShape);
    ///b2Assert(fixtureB.GetType() === b2ShapeType.e_circleShape);
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2EdgeShape);
    ///b2Assert(shapeB instanceof b2CircleShape);
    b2CollideEdgeAndCircle(
      manifold,
      <b2EdgeShape> shapeA, xfA,
      <b2CircleShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export class b2EdgeAndPolygonContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2EdgeAndPolygonContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
    ///b2Assert(fixtureA.GetType() === b2ShapeType.e_edgeShape);
    ///b2Assert(fixtureB.GetType() === b2ShapeType.e_polygonShape);
  }

  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2EdgeShape);
    ///b2Assert(shapeB instanceof b2PolygonShape);
    b2CollideEdgeAndPolygon(
      manifold,
      <b2EdgeShape> shapeA, xfA,
      <b2PolygonShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export class b2ChainAndCircleContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2ChainAndCircleContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
    ///b2Assert(fixtureA.GetType() === b2ShapeType.e_chainShape);
    ///b2Assert(fixtureB.GetType() === b2ShapeType.e_circleShape);
  }

  private static Evaluate_s_edge = new b2EdgeShape();
  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2ChainShape);
    ///b2Assert(shapeB instanceof b2CircleShape);
    const chain: b2ChainShape = <b2ChainShape> shapeA;
    const edge: b2EdgeShape = b2ChainAndCircleContact.Evaluate_s_edge;
    chain.GetChildEdge(edge, this.m_indexA);
    b2CollideEdgeAndCircle(
      manifold,
      edge, xfA,
      <b2CircleShape> shapeB, xfB);
  }
}

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


export class b2ChainAndPolygonContact extends b2Contact {
  constructor() {
    super();
  }

  public static Create(allocator: any): b2Contact {
    return new b2ChainAndPolygonContact();
  }

  public static Destroy(contact: b2Contact, allocator: any): void {
  }

  public Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void {
    super.Reset(fixtureA, indexA, fixtureB, indexB);
    ///b2Assert(fixtureA.GetType() === b2ShapeType.e_chainShape);
    ///b2Assert(fixtureB.GetType() === b2ShapeType.e_polygonShape);
  }

  private static Evaluate_s_edge = new b2EdgeShape();
  public Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void {
    const shapeA: b2Shape = this.m_fixtureA.GetShape();
    const shapeB: b2Shape = this.m_fixtureB.GetShape();
    ///b2Assert(shapeA instanceof b2ChainShape);
    ///b2Assert(shapeB instanceof b2PolygonShape);
    const chain: b2ChainShape = <b2ChainShape> shapeA;
    const edge: b2EdgeShape = b2ChainAndPolygonContact.Evaluate_s_edge;
    chain.GetChildEdge(edge, this.m_indexA);
    b2CollideEdgeAndPolygon(
      manifold,
      edge, xfA,
      <b2PolygonShape> shapeB, xfB);
  }
}

export class b2ContactRegister {
  public pool: b2Contact[] = null;
  public createFcn: { (allocator: any): b2Contact; } = null;
  public destroyFcn: { (contact: b2Contact, allocator: any): void; } = null;
  public primary: boolean = false;
}

export class b2ContactFactory {
  public m_allocator: any = null;
  public m_registers: b2ContactRegister[][];

  constructor(allocator: any) {
    this.m_allocator = allocator;
    this.InitializeRegisters();
  }

  private AddType(createFcn: (allocator: any) => b2Contact, destroyFcn: (contact: b2Contact, allocator: any) => void, type1: b2ShapeType, type2: b2ShapeType): void {
    const that: b2ContactFactory = this;

    const pool: b2Contact[] = b2MakeArray(256, function (i) { return createFcn(that.m_allocator); } ); // TODO: b2Settings

    function poolCreateFcn(allocator: any): b2Contact {
      if (pool.length > 0) {
        return pool.pop();
      }

      return createFcn(allocator);
    }

    function poolDestroyFcn(contact: b2Contact, allocator: any): void {
      pool.push(contact);
    }

    this.m_registers[type1][type2].pool = pool;
    this.m_registers[type1][type2].createFcn = poolCreateFcn;
    this.m_registers[type1][type2].destroyFcn = poolDestroyFcn;
    this.m_registers[type1][type2].primary = true;

    if (type1 !== type2) {
      this.m_registers[type2][type1].pool = pool;
      this.m_registers[type2][type1].createFcn = poolCreateFcn;
      this.m_registers[type2][type1].destroyFcn = poolDestroyFcn;
      this.m_registers[type2][type1].primary = false;
    }

    /*
    this.m_registers[type1][type2].createFcn = createFcn;
    this.m_registers[type1][type2].destroyFcn = destroyFcn;
    this.m_registers[type1][type2].primary = true;

    if (type1 !== type2) {
      this.m_registers[type2][type1].createFcn = createFcn;
      this.m_registers[type2][type1].destroyFcn = destroyFcn;
      this.m_registers[type2][type1].primary = false;
    }
    */
  }

  private InitializeRegisters(): void {
    this.m_registers = [/*b2ShapeType.e_shapeTypeCount*/];

    for (let i: number = 0; i < b2ShapeType.e_shapeTypeCount; i++) {
      this.m_registers[i] = [/*b2ShapeType.e_shapeTypeCount*/];

      for (let j: number = 0; j < b2ShapeType.e_shapeTypeCount; j++) {
        this.m_registers[i][j] = new b2ContactRegister();
      }
    }

    this.AddType(          b2CircleContact.Create,           b2CircleContact.Destroy, b2ShapeType.e_circleShape,  b2ShapeType.e_circleShape);
    this.AddType(b2PolygonAndCircleContact.Create, b2PolygonAndCircleContact.Destroy, b2ShapeType.e_polygonShape, b2ShapeType.e_circleShape);
    this.AddType(         b2PolygonContact.Create,          b2PolygonContact.Destroy, b2ShapeType.e_polygonShape, b2ShapeType.e_polygonShape);
    this.AddType(   b2EdgeAndCircleContact.Create,    b2EdgeAndCircleContact.Destroy, b2ShapeType.e_edgeShape,    b2ShapeType.e_circleShape);
    this.AddType(  b2EdgeAndPolygonContact.Create,   b2EdgeAndPolygonContact.Destroy, b2ShapeType.e_edgeShape,    b2ShapeType.e_polygonShape);
    this.AddType(  b2ChainAndCircleContact.Create,   b2ChainAndCircleContact.Destroy, b2ShapeType.e_chainShape,   b2ShapeType.e_circleShape);
    this.AddType( b2ChainAndPolygonContact.Create,  b2ChainAndPolygonContact.Destroy, b2ShapeType.e_chainShape,   b2ShapeType.e_polygonShape);
  }

  public Create(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): b2Contact {
    const type1: b2ShapeType = fixtureA.GetType();
    const type2: b2ShapeType = fixtureB.GetType();

    ///b2Assert(0 <= type1 && type1 < b2ShapeType.e_shapeTypeCount);
    ///b2Assert(0 <= type2 && type2 < b2ShapeType.e_shapeTypeCount);

    const reg: b2ContactRegister = this.m_registers[type1][type2];

    const c: b2Contact = reg.createFcn(this.m_allocator);
    if (reg.primary) {
      c.Reset(fixtureA, indexA, fixtureB, indexB);
    } else {
      c.Reset(fixtureB, indexB, fixtureA, indexA);
    }
    return c;
  }

  public Destroy(contact: b2Contact): void {
    const fixtureA: b2Fixture = contact.m_fixtureA;
    const fixtureB: b2Fixture = contact.m_fixtureB;

    if (contact.m_manifold.pointCount > 0 &&
      !fixtureA.IsSensor() &&
      !fixtureB.IsSensor()) {
      fixtureA.GetBody().SetAwake(true);
      fixtureB.GetBody().SetAwake(true);
    }

    const typeA: b2ShapeType = fixtureA.GetType();
    const typeB: b2ShapeType = fixtureB.GetType();

    ///b2Assert(0 <= typeA && typeB < b2ShapeType.e_shapeTypeCount);
    ///b2Assert(0 <= typeA && typeB < b2ShapeType.e_shapeTypeCount);

    const reg: b2ContactRegister = this.m_registers[typeA][typeB];

    reg.destroyFcn(contact, this.m_allocator);
  }
}

// Delegate of b2World.
export class b2ContactManager {
  public m_broadPhase: b2BroadPhase = new b2BroadPhase();
  public m_contactList: b2Contact = null;
  public m_contactCount: number = 0;
  public m_contactFilter: b2ContactFilter = b2ContactFilter.b2_defaultFilter;
  public m_contactListener: b2ContactListener = b2ContactListener.b2_defaultListener;
  public m_allocator: any = null;

  public m_contactFactory: b2ContactFactory = null;

  constructor() {
    this.m_contactFactory = new b2ContactFactory(this.m_allocator);
  }

  // Broad-phase callback.
  public AddPair(proxyUserDataA: any, proxyUserDataB: any): void {
    ///b2Assert(proxyUserDataA instanceof b2FixtureProxy);
    ///b2Assert(proxyUserDataB instanceof b2FixtureProxy);
    const proxyA: b2FixtureProxy = <b2FixtureProxy>proxyUserDataA; // (proxyUserDataA instanceof b2FixtureProxy ? proxyUserDataA : null);
    const proxyB: b2FixtureProxy = <b2FixtureProxy>proxyUserDataB; // (proxyUserDataB instanceof b2FixtureProxy ? proxyUserDataB : null);

    let fixtureA: b2Fixture = proxyA.fixture;
    let fixtureB: b2Fixture = proxyB.fixture;

    let indexA: number = proxyA.childIndex;
    let indexB: number = proxyB.childIndex;

    let bodyA: b2Body = fixtureA.GetBody();
    let bodyB: b2Body = fixtureB.GetBody();

    // Are the fixtures on the same body?
    if (bodyA === bodyB) {
      return;
    }

    // TODO_ERIN use a hash table to remove a potential bottleneck when both
    // bodies have a lot of contacts.
    // Does a contact already exist?
    let edge: b2ContactEdge = bodyB.GetContactList();
    while (edge) {
      if (edge.other === bodyA) {
        const fA: b2Fixture = edge.contact.GetFixtureA();
        const fB: b2Fixture = edge.contact.GetFixtureB();
        const iA: number = edge.contact.GetChildIndexA();
        const iB: number = edge.contact.GetChildIndexB();

        if (fA === fixtureA && fB === fixtureB && iA === indexA && iB === indexB) {
          // A contact already exists.
          return;
        }

        if (fA === fixtureB && fB === fixtureA && iA === indexB && iB === indexA) {
          // A contact already exists.
          return;
        }
      }

      edge = edge.next;
    }

    // Check user filtering.
    if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
      return;
    }

    // Call the factory.
    const c: b2Contact = this.m_contactFactory.Create(fixtureA, indexA, fixtureB, indexB);
    if (c === null) {
      return;
    }

    // Contact creation may swap fixtures.
    fixtureA = c.GetFixtureA();
    fixtureB = c.GetFixtureB();
    indexA = c.GetChildIndexA();
    indexB = c.GetChildIndexB();
    bodyA = fixtureA.m_body;
    bodyB = fixtureB.m_body;

    // Insert into the world.
    c.m_prev = null;
    c.m_next = this.m_contactList;
    if (this.m_contactList !== null) {
      this.m_contactList.m_prev = c;
    }
    this.m_contactList = c;

    // Connect to island graph.

    // Connect to body A
    c.m_nodeA.contact = c;
    c.m_nodeA.other = bodyB;

    c.m_nodeA.prev = null;
    c.m_nodeA.next = bodyA.m_contactList;
    if (bodyA.m_contactList !== null) {
      bodyA.m_contactList.prev = c.m_nodeA;
    }
    bodyA.m_contactList = c.m_nodeA;

    // Connect to body B
    c.m_nodeB.contact = c;
    c.m_nodeB.other = bodyA;

    c.m_nodeB.prev = null;
    c.m_nodeB.next = bodyB.m_contactList;
    if (bodyB.m_contactList !== null) {
      bodyB.m_contactList.prev = c.m_nodeB;
    }
    bodyB.m_contactList = c.m_nodeB;

    // Wake up the bodies
    if (!fixtureA.IsSensor() && !fixtureB.IsSensor()) {
      bodyA.SetAwake(true);
      bodyB.SetAwake(true);
    }

    ++this.m_contactCount;
  }

  public FindNewContacts(): void {
    this.m_broadPhase.UpdatePairs(this);
  }

  public Destroy(c: b2Contact): void {
    const fixtureA: b2Fixture = c.GetFixtureA();
    const fixtureB: b2Fixture = c.GetFixtureB();
    const bodyA: b2Body = fixtureA.GetBody();
    const bodyB: b2Body = fixtureB.GetBody();

    if (this.m_contactListener && c.IsTouching()) {
      this.m_contactListener.EndContact(c);
    }

    // Remove from the world.
    if (c.m_prev) {
      c.m_prev.m_next = c.m_next;
    }

    if (c.m_next) {
      c.m_next.m_prev = c.m_prev;
    }

    if (c === this.m_contactList) {
      this.m_contactList = c.m_next;
    }

    // Remove from body 1
    if (c.m_nodeA.prev) {
      c.m_nodeA.prev.next = c.m_nodeA.next;
    }

    if (c.m_nodeA.next) {
      c.m_nodeA.next.prev = c.m_nodeA.prev;
    }

    if (c.m_nodeA === bodyA.m_contactList) {
      bodyA.m_contactList = c.m_nodeA.next;
    }

    // Remove from body 2
    if (c.m_nodeB.prev) {
      c.m_nodeB.prev.next = c.m_nodeB.next;
    }

    if (c.m_nodeB.next) {
      c.m_nodeB.next.prev = c.m_nodeB.prev;
    }

    if (c.m_nodeB === bodyB.m_contactList) {
      bodyB.m_contactList = c.m_nodeB.next;
    }

    // Call the factory.
    this.m_contactFactory.Destroy(c);
    --this.m_contactCount;
  }

  // This is the top level collision call for the time step. Here
  // all the narrow phase collision is processed for the world
  // contact list.
  public Collide(): void {
    // Update awake contacts.
    let c: b2Contact = this.m_contactList;
    while (c) {
      const fixtureA: b2Fixture = c.GetFixtureA();
      const fixtureB: b2Fixture = c.GetFixtureB();
      const indexA: number = c.GetChildIndexA();
      const indexB: number = c.GetChildIndexB();
      const bodyA: b2Body = fixtureA.GetBody();
      const bodyB: b2Body = fixtureB.GetBody();

      // Is this contact flagged for filtering?
      if (c.m_filterFlag) {
        // Check user filtering.
        if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
          const cNuke: b2Contact = c;
          c = cNuke.m_next;
          this.Destroy(cNuke);
          continue;
        }

        // Clear the filtering flag.
        c.m_filterFlag = false;
      }

      const activeA: boolean = bodyA.IsAwake() && bodyA.m_type !== b2BodyType.b2_staticBody;
      const activeB: boolean = bodyB.IsAwake() && bodyB.m_type !== b2BodyType.b2_staticBody;

      // At least one body must be awake and it must be dynamic or kinematic.
      if (!activeA && !activeB) {
        c = c.m_next;
        continue;
      }

      const proxyA: b2TreeNode = fixtureA.m_proxies[indexA].proxy;
      const proxyB: b2TreeNode = fixtureB.m_proxies[indexB].proxy;
      const overlap: boolean = this.m_broadPhase.TestOverlap(proxyA, proxyB);

      // Here we destroy contacts that cease to overlap in the broad-phase.
      if (!overlap) {
        const cNuke: b2Contact = c;
        c = cNuke.m_next;
        this.Destroy(cNuke);
        continue;
      }

      // The contact persists.
      c.Update(this.m_contactListener);
      c = c.m_next;
    }
  }
}

export class b2Pair {
  public proxyA: b2TreeNode|null = null;
  public proxyB: b2TreeNode|null = null;
}

/// The broad-phase is used for computing pairs and performing volume queries and ray casts.
/// This broad-phase does not persist pairs. Instead, this reports potentially new pairs.
/// It is up to the client to consume the new pairs and to track subsequent overlap.
export class b2BroadPhase {
  public m_tree: b2DynamicTree = new b2DynamicTree();
  public m_proxyCount: number = 0;
  // public m_moveCapacity: number = 16;
  public m_moveCount: number = 0;
  public m_moveBuffer: b2TreeNode[] = [];
  // public m_pairCapacity: number = 16;
  public m_pairCount: number = 0;
  public m_pairBuffer: b2Pair[] = [];
  // public m_queryProxyId: number = 0;

  /// Create a proxy with an initial AABB. Pairs are not reported until
  /// UpdatePairs is called.
  public CreateProxy(aabb: b2AABB, userData: any): b2TreeNode {
    const proxy: b2TreeNode = this.m_tree.CreateProxy(aabb, userData);
    ++this.m_proxyCount;
    this.BufferMove(proxy);
    return proxy;
  }

  /// Destroy a proxy. It is up to the client to remove any pairs.
  public DestroyProxy(proxy: b2TreeNode): void {
    this.UnBufferMove(proxy);
    --this.m_proxyCount;
    this.m_tree.DestroyProxy(proxy);
  }

  /// Call MoveProxy as many times as you like, then when you are done
  /// call UpdatePairs to finalized the proxy pairs (for your time step).
  public MoveProxy(proxy: b2TreeNode, aabb: b2AABB, displacement: b2Vec2): void {
    const buffer: boolean = this.m_tree.MoveProxy(proxy, aabb, displacement);
    if (buffer) {
      this.BufferMove(proxy);
    }
  }

  /// Call to trigger a re-processing of it's pairs on the next call to UpdatePairs.
  public TouchProxy(proxy: b2TreeNode): void {
    this.BufferMove(proxy);
  }

  /// Get the fat AABB for a proxy.
  public GetFatAABB(proxy: b2TreeNode): b2AABB {
    return this.m_tree.GetFatAABB(proxy);
  }

  /// Get user data from a proxy. Returns NULL if the id is invalid.
  public GetUserData(proxy: b2TreeNode): any {
    return this.m_tree.GetUserData(proxy);
  }

  /// Test overlap of fat AABBs.
  public TestOverlap(proxyA: b2TreeNode, proxyB: b2TreeNode): boolean {
    const aabbA: b2AABB = this.m_tree.GetFatAABB(proxyA);
    const aabbB: b2AABB = this.m_tree.GetFatAABB(proxyB);
    return b2TestOverlapAABB(aabbA, aabbB);
  }

  /// Get the number of proxies.
  public GetProxyCount(): number {
    return this.m_proxyCount;
  }

  /// Update the pairs. This results in pair callbacks. This can only add pairs.
  public UpdatePairs(contactManager: b2ContactManager): void {
    // Reset pair buffer
    this.m_pairCount = 0;

    // Perform tree queries for all moving proxies.
    for (let i: number = 0; i < this.m_moveCount; ++i) {
      const queryProxy: b2TreeNode = this.m_moveBuffer[i];
      if (queryProxy === null) {
        continue;
      }

      const that: b2BroadPhase = this;

      // This is called from box2d.b2DynamicTree::Query when we are gathering pairs.
      // boolean b2BroadPhase::QueryCallback(int32 proxyId);
      

      // We have to query the tree with the fat AABB so that
      // we don't fail to create a pair that may touch later.
      const fatAABB: b2AABB = this.m_tree.GetFatAABB(queryProxy);

      // Query tree, create pairs and add them pair buffer.
      this.m_tree.Query((proxy: b2TreeNode)=> {
        // A proxy cannot form a pair with itself.
        if (proxy.m_id === queryProxy.m_id) {
          return true;
        }

        // Grow the pair buffer as needed.
        if (that.m_pairCount === that.m_pairBuffer.length) {
          that.m_pairBuffer[that.m_pairCount] = new b2Pair();
        }

        const pair: b2Pair = that.m_pairBuffer[that.m_pairCount];
        // pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
        // pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;
        if (proxy.m_id < queryProxy.m_id) {
          pair.proxyA = proxy;
          pair.proxyB = queryProxy;
        } else {
          pair.proxyA = queryProxy;
          pair.proxyB = proxy;
        }
        ++that.m_pairCount;

        return true;
      }, fatAABB);
    }

    // Reset move buffer
    this.m_moveCount = 0;

    // Sort the pair buffer to expose duplicates.
    this.m_pairBuffer.length = this.m_pairCount;
    this.m_pairBuffer.sort(b2PairLessThan);

    // Send the pairs back to the client.
    let i: number = 0;
    while (i < this.m_pairCount) {
      const primaryPair: b2Pair = this.m_pairBuffer[i];
      const userDataA: any = this.m_tree.GetUserData(primaryPair.proxyA);
      const userDataB: any = this.m_tree.GetUserData(primaryPair.proxyB);

      contactManager.AddPair(userDataA, userDataB);
      ++i;

      // Skip any duplicate pairs.
      while (i < this.m_pairCount) {
        const pair: b2Pair = this.m_pairBuffer[i];
        if (pair.proxyA.m_id !== primaryPair.proxyA.m_id || pair.proxyB.m_id !== primaryPair.proxyB.m_id) {
          break;
        }
        ++i;
      }
    }

    // Try to keep the tree balanced.
    // this.m_tree.Rebalance(4);
  }

  /// Query an AABB for overlapping proxies. The callback class
  /// is called for each proxy that overlaps the supplied AABB.
  public Query(callback: (node: b2TreeNode) => boolean, aabb: b2AABB): void {
    this.m_tree.Query(callback, aabb);
  }

  /// Ray-cast against the proxies in the tree. This relies on the callback
  /// to perform a exact ray-cast in the case were the proxy contains a shape.
  /// The callback also performs the any collision filtering. This has performance
  /// roughly equal to k * log(n), where k is the number of collisions and n is the
  /// number of proxies in the tree.
  /// @param input the ray-cast input data. The ray extends from p1 to p1 + maxFraction * (p2 - p1).
  /// @param callback a callback class that is called for each proxy that is hit by the ray.
  public RayCast(callback: (input: b2RayCastInput, node: b2TreeNode) => number, input: b2RayCastInput): void {
    this.m_tree.RayCast(callback, input);
  }

  /// Get the height of the embedded tree.
  public GetTreeHeight(): number {
    return this.m_tree.GetHeight();
  }

  /// Get the balance of the embedded tree.
  public GetTreeBalance(): number {
    return this.m_tree.GetMaxBalance();
  }

  /// Get the quality metric of the embedded tree.
  public GetTreeQuality(): number {
    return this.m_tree.GetAreaRatio();
  }

  /// Shift the world origin. Useful for large worlds.
  /// The shift formula is: position -= newOrigin
  /// @param newOrigin the new origin with respect to the old origin
  public ShiftOrigin(newOrigin: b2Vec2): void {
    this.m_tree.ShiftOrigin(newOrigin);
  }

  public BufferMove(proxy: b2TreeNode): void {
    this.m_moveBuffer[this.m_moveCount] = proxy;
    ++this.m_moveCount;
  }

  public UnBufferMove(proxy: b2TreeNode): void {
    const i: number = this.m_moveBuffer.indexOf(proxy);
    this.m_moveBuffer[i] = null;
  }
}

/// This is used to sort pairs.
export function b2PairLessThan(pair1: b2Pair, pair2: b2Pair): number {
  if (pair1.proxyA.m_id === pair2.proxyA.m_id) {
    return pair1.proxyB.m_id - pair2.proxyB.m_id;
  }

  return pair1.proxyA.m_id - pair2.proxyA.m_id;
}





/*
* Copyright (c) 2011 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


///
export class b2RopeDef {
  ///
  public vertices: b2Vec2[] = [];

  ///
  public count: number = 0;

  ///
  public masses: number[] = [];

  ///
  public gravity: b2Vec2 = new b2Vec2(0, 0);

  ///
  public damping: number = 0.1;

  /// Stretching stiffness
  public k2: number = 0.9;

  /// Bending stiffness. Values above 0.5 can make the simulation blow up.
  public k3: number = 0.1;
}

///
export class b2Rope {
  public m_count: number = 0;
  public m_ps: b2Vec2[] = null;
  public m_p0s: b2Vec2[] = null;
  public m_vs: b2Vec2[] = null;

  public m_ims: number[] = null;

  public m_Ls: number[] = null;
  public m_as: number[] = null;

  public m_gravity: b2Vec2 = new b2Vec2();
  public m_damping: number = 0;

  public m_k2: number = 1;
  public m_k3: number = 0.1;

  public GetVertexCount(): number {
    return this.m_count;
  }

  public GetVertices(): b2Vec2[] {
    return this.m_ps;
  }

  ///
  public Initialize(def: b2RopeDef): void {
    ///b2Assert(def.count >= 3);
    this.m_count = def.count;
    // this.m_ps = (b2Vec2*)b2Alloc(this.m_count * sizeof(b2Vec2));
    this.m_ps = b2Vec2.MakeArray(this.m_count);
    // this.m_p0s = (b2Vec2*)b2Alloc(this.m_count * sizeof(b2Vec2));
    this.m_p0s = b2Vec2.MakeArray(this.m_count);
    // this.m_vs = (b2Vec2*)b2Alloc(this.m_count * sizeof(b2Vec2));
    this.m_vs = b2Vec2.MakeArray(this.m_count);
    // this.m_ims = (float32*)b2Alloc(this.m_count * sizeof(float32));
    this.m_ims = b2MakeNumberArray(this.m_count);

    for (let i: number = 0; i < this.m_count; ++i) {
      this.m_ps[i].Copy(def.vertices[i]);
      this.m_p0s[i].Copy(def.vertices[i]);
      this.m_vs[i].SetZero();

      const m: number = def.masses[i];
      if (m > 0) {
        this.m_ims[i] = 1 / m;
      } else {
        this.m_ims[i] = 0;
      }
    }

    const count2: number = this.m_count - 1;
    const count3: number = this.m_count - 2;
    // this.m_Ls = (float32*)be2Alloc(count2 * sizeof(float32));
    this.m_Ls = b2MakeNumberArray(count2);
    // this.m_as = (float32*)b2Alloc(count3 * sizeof(float32));
    this.m_as = b2MakeNumberArray(count3);

    for (let i: number = 0; i < count2; ++i) {
      const p1: b2Vec2 = this.m_ps[i];
      const p2: b2Vec2 = this.m_ps[i + 1];
      this.m_Ls[i] = b2Vec2.DistanceVV(p1, p2);
    }

    for (let i: number = 0; i < count3; ++i) {
      const p1: b2Vec2 = this.m_ps[i];
      const p2: b2Vec2 = this.m_ps[i + 1];
      const p3: b2Vec2 = this.m_ps[i + 2];

      const d1: b2Vec2 = b2Vec2.SubVV(p2, p1, b2Vec2.s_t0);
      const d2: b2Vec2 = b2Vec2.SubVV(p3, p2, b2Vec2.s_t1);

      const a: number = b2Vec2.CrossVV(d1, d2);
      const b: number = b2Vec2.DotVV(d1, d2);

      this.m_as[i] = b2Atan2(a, b);
    }

    this.m_gravity.Copy(def.gravity);
    this.m_damping = def.damping;
    this.m_k2 = def.k2;
    this.m_k3 = def.k3;
  }

  ///
  public Step(h: number, iterations: number): void {
    if (h === 0) {
      return;
    }

    const d: number = Math.exp(- h * this.m_damping);

    for (let i: number = 0; i < this.m_count; ++i) {
      this.m_p0s[i].Copy(this.m_ps[i]);
      if (this.m_ims[i] > 0) {
        this.m_vs[i].SelfMulAdd(h, this.m_gravity);
      }
      this.m_vs[i].SelfMul(d);
      this.m_ps[i].SelfMulAdd(h, this.m_vs[i]);
    }

    for (let i: number = 0; i < iterations; ++i) {
      this.SolveC2();
      this.SolveC3();
      this.SolveC2();
    }

    const inv_h: number = 1 / h;
    for (let i: number = 0; i < this.m_count; ++i) {
      b2Vec2.MulSV(inv_h, b2Vec2.SubVV(this.m_ps[i], this.m_p0s[i], b2Vec2.s_t0), this.m_vs[i]);
    }
  }

  ///
  private static s_d = new b2Vec2();
  public SolveC2(): void {
    const count2: number = this.m_count - 1;

    for (let i: number = 0; i < count2; ++i) {
      const p1: b2Vec2 = this.m_ps[i];
      const p2: b2Vec2 = this.m_ps[i + 1];

      const d: b2Vec2 = b2Vec2.SubVV(p2, p1, b2Rope.s_d);
      const L: number = d.Normalize();

      const im1: number = this.m_ims[i];
      const im2: number = this.m_ims[i + 1];

      if (im1 + im2 === 0) {
        continue;
      }

      const s1: number = im1 / (im1 + im2);
      const s2: number = im2 / (im1 + im2);

      p1.SelfMulSub(this.m_k2 * s1 * (this.m_Ls[i] - L), d);
      p2.SelfMulAdd(this.m_k2 * s2 * (this.m_Ls[i] - L), d);

      // this.m_ps[i] = p1;
      // this.m_ps[i + 1] = p2;
    }
  }

  public SetAngle(angle: number): void {
    const count3: number = this.m_count - 2;
    for (let i: number = 0; i < count3; ++i) {
      this.m_as[i] = angle;
    }
  }

  private static s_d1 = new b2Vec2();
  private static s_d2 = new b2Vec2();
  private static s_Jd1 = new b2Vec2();
  private static s_Jd2 = new b2Vec2();
  private static s_J1 = new b2Vec2();
  private static s_J2 = new b2Vec2();
  public SolveC3(): void {
    const count3: number = this.m_count - 2;

    for (let i: number = 0; i < count3; ++i) {
      const p1: b2Vec2 = this.m_ps[i];
      const p2: b2Vec2 = this.m_ps[i + 1];
      const p3: b2Vec2 = this.m_ps[i + 2];

      const m1: number = this.m_ims[i];
      const m2: number = this.m_ims[i + 1];
      const m3: number = this.m_ims[i + 2];

      const d1: b2Vec2 = b2Vec2.SubVV(p2, p1, b2Rope.s_d1);
      const d2: b2Vec2 = b2Vec2.SubVV(p3, p2, b2Rope.s_d2);

      const L1sqr: number = d1.LengthSquared();
      const L2sqr: number = d2.LengthSquared();

      if (L1sqr * L2sqr === 0) {
        continue;
      }

      const a: number = b2Vec2.CrossVV(d1, d2);
      const b: number = b2Vec2.DotVV(d1, d2);

      let angle: number = b2Atan2(a, b);

      const Jd1: b2Vec2 = b2Vec2.MulSV((-1 / L1sqr), d1.SelfSkew(), b2Rope.s_Jd1);
      const Jd2: b2Vec2 = b2Vec2.MulSV(( 1 / L2sqr), d2.SelfSkew(), b2Rope.s_Jd2);

      const J1: b2Vec2 = b2Vec2.NegV(Jd1, b2Rope.s_J1);
      const J2: b2Vec2 = b2Vec2.SubVV(Jd1, Jd2, b2Rope.s_J2);
      const J3: b2Vec2 = Jd2;

      let mass: number = m1 * b2Vec2.DotVV(J1, J1) + m2 * b2Vec2.DotVV(J2, J2) + m3 * b2Vec2.DotVV(J3, J3);
      if (mass === 0) {
        continue;
      }

      mass = 1 / mass;

      let C: number = angle - this.m_as[i];

      while (C > b2_pi) {
        angle -= 2 * b2_pi;
        C = angle - this.m_as[i];
      }

      while (C < -b2_pi) {
        angle += 2 * b2_pi;
        C = angle - this.m_as[i];
      }

      const impulse: number = - this.m_k3 * mass * C;

      p1.SelfMulAdd((m1 * impulse), J1);
      p2.SelfMulAdd((m2 * impulse), J2);
      p3.SelfMulAdd((m3 * impulse), J3);

      // this.m_ps[i] = p1;
      // this.m_ps[i + 1] = p2;
      // this.m_ps[i + 2] = p3;
    }
  }

  public Draw(draw: b2Draw): void {
    const c: b2Color = new b2Color(0.4, 0.5, 0.7);

    for (let i: number = 0; i < this.m_count - 1; ++i) {
      draw.DrawSegment(this.m_ps[i], this.m_ps[i + 1], c);
    }
  }
}

